import { NextRequest, NextResponse } from 'next/server';
import { CALENDLY_EVENT_SLUG, CALENDLY_TIMEZONE } from '@/content/calendly';

const CALENDLY_API = 'https://api.calendly.com';

type CalendlyCollection<T> = { collection: T[] };

type EventType = {
  uri: string;
  scheduling_url: string;
  active: boolean;
};

type AvailableTime = {
  status: string;
  start_time: string;
};

function pad(n: number) {
  return String(n).padStart(2, '0');
}

function monthBounds(year: number, month: number) {
  const startLocal = new Date(year, month, 1, 0, 0, 0);
  const endLocal = new Date(year, month + 1, 0, 23, 59, 59);
  const now = new Date();
  // API exige start_time no futuro.
  const start = startLocal < now ? new Date(now.getTime() + 60_000) : startLocal;
  return { start, end: endLocal };
}

function dayKeyInTz(iso: string, timeZone: string): string {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(new Date(iso));
}

async function calendlyFetch<T>(path: string, token: string): Promise<T> {
  const res = await fetch(`${CALENDLY_API}${path}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    next: { revalidate: 300 },
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Calendly ${res.status}: ${body.slice(0, 200)}`);
  }

  return res.json() as Promise<T>;
}

async function resolveEventTypeUri(token: string): Promise<string> {
  const fromEnv = process.env.CALENDLY_EVENT_TYPE_URI;
  if (fromEnv) return fromEnv;

  const me = await calendlyFetch<{ resource: { uri: string } }>('/users/me', token);
  const types = await calendlyFetch<CalendlyCollection<EventType>>(
    `/event_types?user=${encodeURIComponent(me.resource.uri)}&active=true&count=100`,
    token
  );

  const match = types.collection.find((item) =>
    item.scheduling_url.replace(/\/$/, '').endsWith(`/${CALENDLY_EVENT_SLUG}`)
  );

  if (!match) {
    throw new Error(`Event type "${CALENDLY_EVENT_SLUG}" not found`);
  }

  return match.uri;
}

/**
 * GET /api/calendly/availability?year=2026&month=8
 * month: 0–11 (JS Date)
 *
 * Requer CALENDLY_TOKEN. Opcional: CALENDLY_EVENT_TYPE_URI.
 */
export async function GET(req: NextRequest) {
  const token = process.env.CALENDLY_TOKEN;
  const year = Number(req.nextUrl.searchParams.get('year'));
  const month = Number(req.nextUrl.searchParams.get('month'));

  if (!Number.isInteger(year) || !Number.isInteger(month) || month < 0 || month > 11) {
    return NextResponse.json({ error: 'Invalid year/month' }, { status: 400 });
  }

  if (!token) {
    return NextResponse.json({
      source: 'fallback',
      days: null as null,
      slots: {} as Record<string, number>,
    });
  }

  try {
    const { start, end } = monthBounds(year, month);

    if (end < new Date()) {
      return NextResponse.json({
        source: 'calendly',
        days: [] as number[],
        slots: {} as Record<string, number>,
      });
    }

    const eventType = await resolveEventTypeUri(token);
    const params = new URLSearchParams({
      event_type: eventType,
      start_time: start.toISOString(),
      end_time: end.toISOString(),
    });

    const available = await calendlyFetch<CalendlyCollection<AvailableTime>>(
      `/event_type_available_times?${params}`,
      token
    );

    const slots: Record<string, number> = {};
    for (const item of available.collection) {
      if (item.status !== 'available') continue;
      const key = dayKeyInTz(item.start_time, CALENDLY_TIMEZONE);
      slots[key] = (slots[key] ?? 0) + 1;
    }

    const prefix = `${year}-${pad(month + 1)}-`;
    const days = Object.keys(slots)
      .filter((key) => key.startsWith(prefix))
      .map((key) => Number(key.slice(-2)))
      .sort((a, b) => a - b);

    return NextResponse.json({ source: 'calendly', days, slots });
  } catch (error) {
    console.error('[calendly/availability]', error);
    return NextResponse.json({
      source: 'fallback',
      days: null as null,
      slots: {} as Record<string, number>,
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}

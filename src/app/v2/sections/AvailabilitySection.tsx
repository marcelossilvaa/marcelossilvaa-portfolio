'use client';

import { useEffect, useState } from 'react';
import { CALENDLY_HREF, getCalendlyDayHref } from '@/content/calendly';
import { getV2SectionIndex } from '@/content/v2Content';
import type { Locale } from '@/i18n/LocaleProvider';
import type { V2TranslationSchema } from '@/i18n/v2Translations';
import { Reveal } from '../components/Reveal';
import { SectionHeader } from '../components/SectionHeader';

type AvailabilitySectionProps = {
  locale: Locale;
  text: V2TranslationSchema;
};

type MonthCursor = { year: number; month: number };

type AvailabilityPayload = {
  source: 'calendly' | 'fallback';
  days: number[] | null;
  slots: Record<string, number>;
};

function daysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}

function isoDay(year: number, month: number, day: number): string {
  return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
}

export function AvailabilitySection({ locale, text }: AvailabilitySectionProps) {
  // A data só é resolvida no cliente para não divergir do HTML renderizado no servidor.
  const [today, setToday] = useState<Date | null>(null);
  const [cursor, setCursor] = useState<MonthCursor | null>(null);
  const [liveDays, setLiveDays] = useState<Set<number> | null>(null);
  const [slotCounts, setSlotCounts] = useState<Record<number, number>>({});
  const [liveSource, setLiveSource] = useState<'calendly' | 'fallback' | 'loading'>('loading');

  useEffect(() => {
    const now = new Date();
    setToday(now);
    setCursor({ year: now.getFullYear(), month: now.getMonth() });
  }, []);

  useEffect(() => {
    if (!cursor) return;

    let cancelled = false;
    setLiveSource('loading');

    const load = async () => {
      try {
        const res = await fetch(
          `/api/calendly/availability?year=${cursor.year}&month=${cursor.month}`
        );
        const data = (await res.json()) as AvailabilityPayload;
        if (cancelled) return;

        if (data.source === 'calendly' && Array.isArray(data.days)) {
          const counts: Record<number, number> = {};
          for (const day of data.days) {
            const key = isoDay(cursor.year, cursor.month, day);
            counts[day] = data.slots[key] ?? 1;
          }
          setLiveDays(new Set(data.days));
          setSlotCounts(counts);
          setLiveSource('calendly');
          return;
        }
      } catch {
        // fallback abaixo
      }

      if (!cancelled) {
        setLiveDays(null);
        setSlotCounts({});
        setLiveSource('fallback');
      }
    };

    void load();
    return () => {
      cancelled = true;
    };
  }, [cursor]);

  const shift = (direction: 1 | -1) => {
    setCursor((prev) => {
      if (!prev) return prev;
      const next = new Date(prev.year, prev.month + direction, 1);
      return { year: next.getFullYear(), month: next.getMonth() };
    });
  };

  const total = cursor ? daysInMonth(cursor.year, cursor.month) : 30;
  const leading = cursor ? new Date(cursor.year, cursor.month, 1).getDay() : 0;
  const cells: (number | null)[] = [
    ...Array.from({ length: leading }, () => null),
    ...Array.from({ length: total }, (_, index) => index + 1),
  ];

  const isToday = (day: number) =>
    Boolean(
      today &&
        cursor &&
        today.getDate() === day &&
        today.getMonth() === cursor.month &&
        today.getFullYear() === cursor.year
    );

  const isHeuristicOpen = (day: number) => {
    if (!cursor) return false;
    const weekday = new Date(cursor.year, cursor.month, day).getDay();
    // Domingo fechado; sábado disponível (bate com o Calendly).
    return weekday !== 0;
  };

  const isOpenSlot = (day: number) => {
    if (liveSource === 'calendly' && liveDays) {
      return liveDays.has(day);
    }
    return isHeuristicOpen(day);
  };

  return (
    <section id="availability" className="v2-section">
      <div className="v2-wrap">
        <SectionHeader
          index={getV2SectionIndex(locale, 'availability')}
          eyebrow={text.availability.eyebrow}
          title={text.availability.title}
          lead={text.availability.lead}
        />

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-16">
          <Reveal>
            <div className="flex h-full flex-col justify-between gap-8">
              <div className="v2-tag v2-tag--signal self-start">
                <span className="v2-pulse" />
                {text.availability.status}
              </div>

              <div className="flex flex-col gap-4">
                <p className="v2-heading text-[clamp(1.2rem,2.6vw,1.8rem)]">{text.availability.pitch}</p>
                <a
                  href={CALENDLY_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="v2-cta self-start"
                >
                  {text.availability.cta}
                  <span aria-hidden="true">↗</span>
                </a>
              </div>

              <dl className="grid grid-cols-2 gap-px border border-[var(--v2-line)] bg-[var(--v2-line)]">
                {[
                  { k: locale === 'en' ? 'Timezone' : 'Fuso', v: 'UTC−3' },
                  { k: locale === 'en' ? 'Mode' : 'Modelo', v: locale === 'en' ? 'Remote' : 'Remoto' },
                  { k: locale === 'en' ? 'Languages' : 'Idiomas', v: 'PT / EN' },
                  { k: locale === 'en' ? 'Response' : 'Resposta', v: '< 24h' },
                ].map((item) => (
                  <div key={item.k} className="bg-[var(--v2-bg-elev)] p-4">
                    <dt className="v2-eyebrow mb-1.5">{item.k}</dt>
                    <dd className="v2-mono text-[var(--v2-fg)]">{item.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="hidden md:block">
            <div className="v2-panel p-5 md:p-7">
              <div className="mb-5 flex items-center justify-between gap-4">
                <p className="v2-mono text-[var(--v2-fg)]">
                  {cursor ? `${text.availability.monthNames[cursor.month]} ${cursor.year}` : '-'}
                </p>
                <div className="flex gap-2">
                  <button
                    type="button"
                    className="v2-viewer__nav"
                    onClick={() => shift(-1)}
                    aria-label={text.work.prev}
                  >
                    ←
                  </button>
                  <button
                    type="button"
                    className="v2-viewer__nav"
                    onClick={() => shift(1)}
                    aria-label={text.work.next}
                  >
                    →
                  </button>
                </div>
              </div>

              <div className="mb-2 grid grid-cols-7 gap-px">
                {text.availability.weekdays.map((weekday) => (
                  <span key={weekday} className="v2-eyebrow text-center">
                    {weekday.slice(0, 1)}
                  </span>
                ))}
              </div>

              <div className="v2-calendar" data-live={liveSource === 'calendly' || undefined}>
                {cells.map((day, index) => {
                  const open = day !== null && isOpenSlot(day);
                  const slots = day !== null ? slotCounts[day] ?? 0 : 0;
                  const href =
                    open && cursor
                      ? liveSource === 'calendly'
                        ? getCalendlyDayHref(isoDay(cursor.year, cursor.month, day!))
                        : CALENDLY_HREF
                      : undefined;
                  const cellProps = {
                    className: 'v2-calendar__cell',
                    'data-empty': day === null,
                    'data-open': open,
                    'data-today': day !== null && isToday(day),
                    'data-live': open && liveSource === 'calendly' ? true : undefined,
                    title:
                      open && slots > 0
                        ? `${slots} ${text.availability.openSlots}`
                        : day !== null && isToday(day)
                          ? text.availability.today
                          : undefined,
                  } as const;
                  const label = day !== null ? String(day).padStart(2, '0') : null;

                  if (open && href) {
                    return (
                      <a
                        key={`${day}-${index}`}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${text.availability.cta} — ${label}`}
                        {...cellProps}
                      >
                        {label}
                        {liveSource === 'calendly' && slots > 0 ? (
                          <span className="v2-calendar__tag" aria-hidden="true">
                            {slots}
                          </span>
                        ) : null}
                      </a>
                    );
                  }

                  return (
                    <div key={`${day ?? 'empty'}-${index}`} {...cellProps}>
                      {label}
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
                <span className="v2-mono flex items-center gap-2 text-[var(--v2-dim)]">
                  <span className="inline-block h-2.5 w-2.5 bg-[var(--v2-signal)]" />
                  {text.availability.today}
                </span>
                <span className="v2-mono flex items-center gap-2 text-[var(--v2-dim)]">
                  <span className="inline-block h-2.5 w-2.5 border border-[var(--v2-line-strong)]" />
                  {liveSource === 'calendly'
                    ? text.availability.openSlots
                    : text.availability.status}
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

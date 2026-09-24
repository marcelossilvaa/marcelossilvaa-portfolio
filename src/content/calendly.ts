/** Link público do Calendly — conversa de 30 min. */
export const CALENDLY_HREF = 'https://calendly.com/marcelo666888999/30min';

/** Slug do event type no URL público (…/30min). */
export const CALENDLY_EVENT_SLUG = '30min';

/** Fuso usado para agrupar slots em dias do calendário. */
export const CALENDLY_TIMEZONE = 'America/Sao_Paulo';

export function getCalendlyDayHref(isoDate: string): string {
  return `${CALENDLY_HREF}?date=${isoDate}`;
}

import type { Locale } from '@/i18n/LocaleProvider';

const WHATSAPP_E164 = '5577991219434';

const PREFILL: Record<Locale, string> = {
  pt: 'Olá Marcelo! Vi seu portfólio e gostaria de conversar sobre um projeto.',
  en: "Hi Marcelo! I saw your portfolio and I'd like to chat about a project.",
};

/** Link wa.me com mensagem inicial — reduz atrito e aumenta taxa de resposta. */
export function getWhatsAppHref(locale: Locale): string {
  return `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(PREFILL[locale])}`;
}

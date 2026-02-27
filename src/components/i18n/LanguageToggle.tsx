'use client';

import { useLocale } from '@/i18n/LocaleProvider';
import { translations } from '@/i18n/translations';

export default function LanguageToggle() {
  const { locale, toggleLocale } = useLocale();
  const text = translations[locale];

  return (
    <button
      type="button"
      onClick={toggleLocale}
      className="h-9 min-w-[3rem] px-3 rounded-full border border-border-soft bg-surface hover:bg-surface-soft transition-colors text-xs font-semibold text-text-primary"
      aria-label={text.language.label}
      title={text.language.label}
    >
      {text.language.short}
    </button>
  );
}

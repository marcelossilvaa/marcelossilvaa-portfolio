'use client';

import { Translate } from '@phosphor-icons/react';
import { useLocale } from '@/i18n/LocaleProvider';
import { translations } from '@/i18n/translations';

export default function LanguageToggle() {
  const { locale, toggleLocale } = useLocale();
  const text = translations[locale];

  return (
    <button
      type="button"
      onClick={toggleLocale}
      className="h-9 min-w-[3rem] px-3 rounded-full border border-border-soft bg-surface hover:bg-surface-soft transition-colors text-xs font-semibold text-text-primary inline-flex items-center justify-center gap-1.5"
      aria-label={text.language.label}
      title={text.language.label}
    >
      <Translate size={14} weight="bold" />
      <span>{text.language.short}</span>
    </button>
  );
}

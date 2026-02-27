'use client';

import { Moon, Sun } from '@phosphor-icons/react';
import { useThemeMode } from '@/components/theme/ThemeProvider';
import { useEffect, useState } from 'react';
import { useLocale } from '@/i18n/LocaleProvider';
import { translations } from '@/i18n/translations';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useThemeMode();
  const { locale } = useLocale();
  const text = translations[locale];
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        type="button"
        className="h-9 w-9 rounded-full border border-border-soft bg-surface"
        aria-label={text.theme.loading}
      />
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="group h-9 w-9 rounded-full border border-border-soft bg-surface hover:bg-surface-soft transition-colors flex items-center justify-center"
      aria-label={theme === 'dark' ? text.theme.light : text.theme.dark}
      title={theme === 'dark' ? text.theme.light : text.theme.dark}
    >
      {theme === 'dark' ? (
        <Sun size={18} className="text-amber-300" weight="fill" />
      ) : (
        <Moon size={18} className="text-slate-600 group-hover:text-slate-800" weight="fill" />
      )}
    </button>
  );
}

'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { usePathname } from 'next/navigation';

export type Locale = 'pt' | 'en';

type LocaleContextValue = {
  locale: Locale;
  setLocale: (nextLocale: Locale) => void;
  toggleLocale: () => void;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

const STORAGE_KEY = 'portfolio-locale';
const ENGLISH_PATH_SUFFIX = '/us';

function isEnglishPath(pathname: string | null): boolean {
  if (!pathname) return false;
  const normalized = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
  return normalized === ENGLISH_PATH_SUFFIX || normalized.endsWith(`${ENGLISH_PATH_SUFFIX}`);
}

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [locale, setLocaleState] = useState<Locale>('pt');
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (isEnglishPath(pathname)) {
      setLocaleState('en');
      setReady(true);
      return;
    }

    const stored = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
    setLocaleState(stored ?? 'pt');
    setReady(true);
  }, [pathname]);

  useEffect(() => {
    if (!ready) return;

    if (isEnglishPath(pathname) && locale !== 'en') {
      setLocaleState('en');
      return;
    }

    window.localStorage.setItem(STORAGE_KEY, locale);
    document.documentElement.lang = locale === 'pt' ? 'pt-BR' : 'en';
  }, [locale, pathname, ready]);

  const value = useMemo(
    () => ({
      locale,
      setLocale: (nextLocale: Locale) => setLocaleState(nextLocale),
      toggleLocale: () => setLocaleState((prev) => (prev === 'pt' ? 'en' : 'pt')),
    }),
    [locale]
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error('useLocale must be used within LocaleProvider');
  }
  return context;
}

'use client';

import Link from 'next/link';
import { AnimatePresence, motion, useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';
import type { V2SectionMeta } from '@/content/v2Content';
import type { V2TranslationSchema } from '@/i18n/v2Translations';
import type { Locale } from '@/i18n/LocaleProvider';
import { useActiveSection, useScrollLock, useScrollToSection } from '../lib/useV2Motion';

const EASE = [0.16, 1, 0.3, 1] as const;

type HudFrameProps = {
  sections: V2SectionMeta[];
  text: V2TranslationSchema;
  locale: Locale;
};

/** Isolado em componente próprio para que o tick de 1s não re-renderize o HUD. */
function LocalClock({ label }: { label: string }) {
  const [time, setTime] = useState('--:--:--');

  useEffect(() => {
    const format = () =>
      new Intl.DateTimeFormat('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'America/Bahia',
      }).format(new Date());

    setTime(format());
    const interval = window.setInterval(() => setTime(format()), 1000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <span className="v2-mono hidden items-center gap-2 text-[var(--v2-dim)] lg:flex">
      <span className="v2-pulse" />
      {label} {time}
    </span>
  );
}

/**
 * Moldura persistente: barra superior com identidade e relógio, trilho lateral
 * com o índice das seções, barra de progresso e o overlay de índice.
 */
export function HudFrame({ sections, text, locale }: HudFrameProps) {
  const ids = sections.map((section) => section.id);
  const active = useActiveSection(ids);
  const scrollTo = useScrollToSection();
  const { scrollYProgress } = useScroll();
  const [indexOpen, setIndexOpen] = useState(false);

  useScrollLock(indexOpen);

  useEffect(() => {
    if (!indexOpen) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIndexOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [indexOpen]);

  const activeMeta = sections.find((section) => section.id === active) ?? sections[0];
  const alternateHref = locale === 'pt' ? '/v2/us' : '/v2';

  return (
    <>
      <div className="v2-hud">
        <div className="v2-hud__topbar">
          <div className="flex min-w-0 items-center gap-3">
            <Link
              href="/v2"
              className="v2-mono flex-shrink-0 text-[var(--v2-fg)] transition-colors hover:text-[var(--v2-signal)]"
            >
              MS
            </Link>
            <span className="hidden h-3 w-px bg-[var(--v2-line-strong)] sm:block" />
            <span className="v2-mono hidden truncate text-[var(--v2-dim)] sm:block">{text.hud.role}</span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <LocalClock label={text.hud.localTime} />
            <Link href={alternateHref} className="v2-ghost-btn" aria-label={text.hud.switchLocale}>
              {locale === 'pt' ? 'EN' : 'PT'}
            </Link>
            <Link href="/" className="v2-ghost-btn hidden md:inline-flex">
              {text.hud.backToClassic}
            </Link>
            <button
              type="button"
              className="v2-ghost-btn"
              onClick={() => setIndexOpen((prev) => !prev)}
              aria-expanded={indexOpen}
              aria-label={indexOpen ? text.hud.closeIndex : text.hud.openIndex}
            >
              <span className="tabular-nums">{activeMeta?.index ?? '00'}</span>
              <span className="hidden sm:inline">/ {text.hud.index}</span>
            </button>
          </div>

          <motion.div className="v2-hud__progress" style={{ width: '100%', scaleX: scrollYProgress }} />
        </div>

        <nav className="v2-hud__rail" aria-label={text.hud.index}>
          {sections.map((section) => (
            <button
              key={section.id}
              type="button"
              className="v2-rail__item"
              data-active={section.id === active}
              onClick={() => scrollTo(section.id)}
            >
              <span className="v2-rail__dash" />
              <span className="tabular-nums">{section.index}</span>
              <span className="v2-rail__label">{section.label}</span>
            </button>
          ))}
        </nav>

        <div className="v2-hud__scroll" aria-hidden="true">
          <span className="v2-hud__scroll-line" />
          <span className="[writing-mode:vertical-rl]">{text.hud.scroll}</span>
        </div>
      </div>

      <AnimatePresence>
        {indexOpen && (
          <motion.div
            className="v2-index-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
          >
            <div className="mx-auto w-full max-w-4xl">
              <p className="v2-eyebrow mb-6">{text.hud.index}</p>
              {sections.map((section, index) => (
                <motion.button
                  key={section.id}
                  type="button"
                  className="v2-index-overlay__item"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.03, ease: EASE }}
                  onClick={() => {
                    setIndexOpen(false);
                    window.setTimeout(() => scrollTo(section.id), 120);
                  }}
                >
                  <span className="v2-mono w-8 flex-shrink-0 text-[var(--v2-dim)]">{section.index}</span>
                  <span className="v2-display text-[clamp(1.4rem,5vw,2.25rem)]">{section.label}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

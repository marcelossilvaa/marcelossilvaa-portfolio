'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import type { Locale } from '@/i18n/LocaleProvider';
import type { V2TranslationSchema } from '@/i18n/v2Translations';
import { getV2Keywords, getV2Stats, getV2TagCloud } from '@/content/v2Content';
import { getWhatsAppHref } from '@/content/whatsapp';
import ProfilePhoto from '../../../../public/assets/marcelo-new.jpeg';
import { Counter } from '../components/Counter';
import { KineticWordmark } from '../components/KineticWordmark';
import { Marquee } from '../components/Marquee';
import { Reveal, Stagger, staggerChild } from '../components/Reveal';
import { ScrambleText } from '../components/ScrambleText';

const EASE = [0.16, 1, 0.3, 1] as const;

type HeroSectionProps = {
  locale: Locale;
  text: V2TranslationSchema;
  bootDone: boolean;
};

export function HeroSection({ locale, text, bootDone }: HeroSectionProps) {
  const keywords = getV2Keywords(locale);
  const tags = getV2TagCloud(locale);
  const stats = getV2Stats(locale);
  const baseDelay = bootDone ? 0.1 : 0.9;

  return (
    <section id="index" className="v2-hero">
      <div className="v2-wrap">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: baseDelay, ease: EASE }}
          >
            <span className="v2-mono text-[var(--v2-signal)]">{text.hero.edition}</span>
            <span className="hidden h-px w-10 bg-[var(--v2-line-strong)] sm:block" />
            <ScrambleText
              text={locale === 'en' ? 'Vitória da Conquista, Brazil' : 'Vitória da Conquista, Brasil'}
              className="v2-mono text-[var(--v2-muted)]"
            />
          </motion.div>

          <motion.div
            className="v2-tag v2-tag--signal"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: baseDelay + 0.08, ease: EASE }}
          >
            <span className="v2-pulse" />
            {text.hero.availability}
          </motion.div>
        </div>
      </div>

      <motion.div
        className="border-y border-[var(--v2-line)] py-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: baseDelay + 0.12, ease: EASE }}
      >
        <Marquee
          durationSeconds={38}
          items={keywords.map((keyword) => (
            <span key={keyword} className="v2-mono text-[var(--v2-muted)]">
              {keyword}
            </span>
          ))}
        />
      </motion.div>

      <div className="v2-wrap">
        <div className="pt-8 md:pt-12">
          <KineticWordmark text="MARCELO" delay={baseDelay + 0.18} />
          <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-4">
            <KineticWordmark text="S SILVA" delay={baseDelay + 0.34} />

            <motion.div
              className="relative hidden h-[clamp(4rem,7vw,7.5rem)] w-[clamp(4rem,7vw,7.5rem)] flex-shrink-0 overflow-hidden border border-[var(--v2-line-strong)] sm:block"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: baseDelay + 0.6, ease: EASE }}
            >
              <Image
                src={ProfilePhoto}
                alt="Marcelo Santana Silva"
                fill
                sizes="120px"
                className="v2-img-hud object-cover"
                priority
              />
              <span className="v2-frame-stack__scan" />
            </motion.div>
          </div>
        </div>

        <div className="mt-10 grid gap-10 md:mt-14 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: baseDelay + 0.5, ease: EASE }}
          >
            <p className="v2-heading text-[clamp(1.35rem,3.4vw,2.35rem)]">
              {text.hero.statement}{' '}
              <span className="v2-signal-text">{text.hero.statementHighlight}</span>.
            </p>
            <p className="mt-6 max-w-xl text-[0.975rem] leading-relaxed text-[var(--v2-muted)]">
              {text.hero.support}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={getWhatsAppHref(locale)}
                target="_blank"
                rel="noopener noreferrer"
                className="v2-cta"
              >
                {text.hero.ctaPrimary}
                <span aria-hidden="true">→</span>
              </a>
              <a href="#work" className="v2-cta v2-cta--ghost">
                {text.hero.ctaSecondary}
                <span aria-hidden="true">↓</span>
              </a>
            </div>
          </motion.div>

          <Stagger className="flex flex-wrap content-start gap-1.5" amount={0.05}>
            {tags.map((tag) => (
              <motion.span key={tag} variants={staggerChild} className="v2-tag">
                {tag}
              </motion.span>
            ))}
          </Stagger>
        </div>

        <Reveal delay={0.1} className="mt-14 md:mt-20">
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 border-t border-[var(--v2-line)] pt-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="v2-bracket pl-3">
                <p className="v2-hero__stat-value">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="v2-mono mt-2 text-[var(--v2-dim)]">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

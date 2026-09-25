'use client';

import { motion } from 'framer-motion';
import { getV2Pipeline, getV2SectionIndex, getV2SystemPillars } from '@/content/v2Content';
import type { Locale } from '@/i18n/LocaleProvider';
import type { V2TranslationSchema } from '@/i18n/v2Translations';
import { MobileFold } from '../components/MobileFold';
import { MobileRail } from '../components/MobileRail';
import { Reveal, Stagger, staggerChild } from '../components/Reveal';
import { SectionHeader } from '../components/SectionHeader';

type SystemSectionProps = {
  locale: Locale;
  text: V2TranslationSchema;
};

export function SystemSection({ locale, text }: SystemSectionProps) {
  const pillars = getV2SystemPillars(locale);
  const pipeline = getV2Pipeline(locale);

  return (
    <section id="system" className="v2-section">
      <div className="v2-wrap">
        <SectionHeader
          index={getV2SectionIndex(locale, 'system')}
          eyebrow={text.system.eyebrow}
          title={text.system.title}
          lead={text.system.lead}
        />

        <div className="md:hidden">
          <MobileRail hint={text.mobile.swipe}>
            {pillars.map((pillar) => (
              <article key={pillar.index} className="v2-mcard">
                <div className="flex items-baseline justify-between gap-4">
                  <span className="v2-display text-[2.6rem] leading-none text-[var(--v2-signal)]">
                    {pillar.index}
                  </span>
                  <span className="v2-mono text-[var(--v2-dim)]">{pillar.kicker}</span>
                </div>
                <h3 className="v2-heading text-[1.35rem]">{pillar.title}</h3>
                <p className="line-clamp-3 text-[0.9rem] leading-relaxed text-[var(--v2-muted)]">
                  {pillar.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {pillar.tags.slice(0, 4).map((tag) => (
                    <span key={tag} className="v2-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-auto border-t border-[var(--v2-line)] pt-3">
                  <p className="v2-eyebrow mb-1.5">{pillar.outcomeLabel}</p>
                  <p className="text-[0.9rem] text-[var(--v2-fg)]">{pillar.outcome}</p>
                </div>
              </article>
            ))}
          </MobileRail>
        </div>

        <div className="hidden gap-px border border-[var(--v2-line)] bg-[var(--v2-line)] md:grid lg:grid-cols-3">
          {pillars.map((pillar, index) => (
            <Reveal key={pillar.index} delay={index * 0.1}>
              <article className="flex h-full flex-col gap-6 bg-[var(--v2-bg-elev)] p-6 md:p-10">
                <div className="flex items-baseline justify-between gap-4">
                  <span className="v2-mono tabular-nums text-[var(--v2-signal)]">{pillar.index}</span>
                  <span className="v2-mono text-[var(--v2-dim)]">{pillar.kicker}</span>
                </div>

                <h3 className="v2-heading text-[clamp(1.35rem,2.8vw,2rem)]">{pillar.title}</h3>

                <p className="text-[0.95rem] leading-relaxed text-[var(--v2-muted)]">{pillar.description}</p>

                <div className="flex flex-wrap gap-1.5">
                  {pillar.tags.map((tag) => (
                    <span key={tag} className="v2-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto border-t border-[var(--v2-line)] pt-5">
                  <p className="v2-eyebrow mb-2">{pillar.outcomeLabel}</p>
                  <p className="text-[0.95rem] text-[var(--v2-fg)]">{pillar.outcome}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 md:mt-12">
          <MobileFold summary={text.mobile.pipeline}>
            <Reveal>
              <p className="v2-eyebrow mb-5">{text.system.pipelineLabel}</p>
            </Reveal>

            <Stagger className="flex flex-wrap items-center gap-x-2 gap-y-3">
              {pipeline.map((step, index) => (
                <motion.span key={step} variants={staggerChild} className="flex items-center gap-2">
                  <span className="v2-tag">
                    <span className="tabular-nums text-[var(--v2-signal)]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    {step}
                  </span>
                  {index < pipeline.length - 1 && (
                    <span className="v2-mono text-[var(--v2-dim)]" aria-hidden="true">
                      →
                    </span>
                  )}
                </motion.span>
              ))}
            </Stagger>
          </MobileFold>
        </div>
      </div>
    </section>
  );
}

'use client';

import { getProjectsData } from '@/content/projects';
import { getV2SectionIndex } from '@/content/v2Content';
import type { Locale } from '@/i18n/LocaleProvider';
import type { V2TranslationSchema } from '@/i18n/v2Translations';
import { ArchiveFrames } from '../components/ArchiveFrames';
import { Reveal } from '../components/Reveal';
import { SectionHeader } from '../components/SectionHeader';

type SignalSectionProps = {
  locale: Locale;
  text: V2TranslationSchema;
};

export function SignalSection({ locale, text }: SignalSectionProps) {
  const projects = getProjectsData(locale);
  const frames = projects
    .filter((project) => project.featured)
    .slice(0, 6)
    .map((project) => ({
      image: project.image,
      caption: project.title,
      meta: project.subTitle,
    }));

  return (
    <section id="signal" className="v2-section">
      <div className="v2-wrap">
        <SectionHeader
          index={getV2SectionIndex(locale, 'signal')}
          eyebrow={text.signal.eyebrow}
          title={text.signal.title}
          lead={text.signal.lead}
        />

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:items-center lg:gap-16">
          <Reveal>
            <blockquote className="v2-heading border-l border-[var(--v2-signal)] pl-5 text-[clamp(1.2rem,3.6vw,2.6rem)] md:pl-6">
              “{text.signal.quote}”
            </blockquote>

            <div className="mt-8 grid gap-px border border-[var(--v2-line)] bg-[var(--v2-line)] sm:grid-cols-3 md:mt-10">
              {[
                { k: 'Next.js / Node.js', v: locale === 'en' ? 'SaaS full stack' : 'SaaS full stack' },
                { k: 'Shopify / Liquid', v: locale === 'en' ? 'commerce' : 'commerce' },
                { k: 'Adobe Target / GA4', v: locale === 'en' ? 'CRO & experiments' : 'CRO & experimentos' },
              ].map((item) => (
                <div key={item.k} className="bg-[var(--v2-bg-elev)] p-4 md:p-5">
                  <p className="v2-mono text-[var(--v2-signal)]">{item.v}</p>
                  <p className="mt-2 text-sm text-[var(--v2-fg)]">{item.k}</p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Arquivo visual só no desktop — no mobile o índice de projetos cobre isso. */}
          <Reveal delay={0.12} className="hidden lg:block">
            <ArchiveFrames
              frames={frames}
              archiveLabel={text.signal.archiveLabel}
              sequenceLabel={text.signal.sequenceLabel}
              framesLabel={text.signal.frames}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

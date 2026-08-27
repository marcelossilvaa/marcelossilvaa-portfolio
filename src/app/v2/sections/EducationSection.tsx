'use client';

import Image from 'next/image';
import { getEducationData } from '@/content/education';
import { getV2SectionIndex } from '@/content/v2Content';
import type { Locale } from '@/i18n/LocaleProvider';
import type { V2TranslationSchema } from '@/i18n/v2Translations';
import { Reveal } from '../components/Reveal';
import { SectionHeader } from '../components/SectionHeader';

type EducationSectionProps = {
  locale: Locale;
  text: V2TranslationSchema;
};

export function EducationSection({ locale, text }: EducationSectionProps) {
  const education = getEducationData(locale);

  return (
    <section id="education" className="v2-section">
      <div className="v2-wrap">
        <SectionHeader
          index={getV2SectionIndex(locale, 'education')}
          eyebrow={text.education.eyebrow}
          title={text.education.title}
          lead={text.education.lead}
        />

        <div className="grid gap-px border border-[var(--v2-line)] bg-[var(--v2-line)] md:grid-cols-3">
          {education.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.08}>
              <article className="v2-bracket flex h-full flex-col gap-5 bg-[var(--v2-bg-elev)] p-5 md:gap-6 md:p-7">
                <div className="v2-edu-logo">
                  <Image
                    src={item.image}
                    alt={item.institution}
                    width={200}
                    height={72}
                    className="object-contain"
                  />
                </div>

                <div className="flex items-center justify-between gap-4">
                  <span className="v2-mono text-[var(--v2-signal)]">
                    {text.education.nodeLabel} / {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="v2-mono text-[var(--v2-dim)]">{item.date}</span>
                </div>

                <div>
                  <h3 className="v2-heading text-[1.15rem] leading-snug md:text-[1.3rem]">{item.title}</h3>
                  <p className="v2-mono mt-2 text-[var(--v2-muted)]">{item.institution}</p>
                </div>

                <p className="mt-auto text-[0.9rem] leading-relaxed text-[var(--v2-muted)]">
                  {(item.summary ?? []).join(' ')}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

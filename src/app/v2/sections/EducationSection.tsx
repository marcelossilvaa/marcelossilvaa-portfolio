'use client';

import Image from 'next/image';
import { getEducationData } from '@/content/education';
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
          index="05"
          eyebrow={text.education.eyebrow}
          title={text.education.title}
          lead={text.education.lead}
        />

        <div className="grid gap-px border border-[var(--v2-line)] bg-[var(--v2-line)] md:grid-cols-3">
          {education.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.08}>
              <article className="v2-bracket flex h-full flex-col gap-6 bg-[var(--v2-bg-elev)] p-6 md:p-8">
                <div className="flex items-center justify-between gap-4">
                  <span className="v2-mono text-[var(--v2-signal)]">
                    {text.education.nodeLabel} / {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="relative flex h-10 w-10 items-center justify-center border border-[var(--v2-line)] bg-[var(--v2-bg-panel)]">
                    <Image
                      src={item.image}
                      alt={item.institution}
                      width={28}
                      height={28}
                      className="h-auto w-6 object-contain"
                    />
                  </span>
                </div>

                <div>
                  <p className="v2-mono mb-3 text-[var(--v2-dim)]">{item.date}</p>
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

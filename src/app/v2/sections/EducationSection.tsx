'use client';

import Image from 'next/image';
import { getEducationCredentials, getEducationData } from '@/content/education';
import { getV2SectionIndex } from '@/content/v2Content';
import type { Locale } from '@/i18n/LocaleProvider';
import type { V2TranslationSchema } from '@/i18n/v2Translations';
import { MobileFold } from '../components/MobileFold';
import { MobileRail } from '../components/MobileRail';
import { Reveal } from '../components/Reveal';
import { SectionHeader } from '../components/SectionHeader';

type EducationSectionProps = {
  locale: Locale;
  text: V2TranslationSchema;
};

export function EducationSection({ locale, text }: EducationSectionProps) {
  const education = getEducationData(locale);
  const credentials = getEducationCredentials(locale);

  return (
    <section id="education" className="v2-section">
      <div className="v2-wrap">
        <SectionHeader
          index={getV2SectionIndex(locale, 'education')}
          eyebrow={text.education.eyebrow}
          title={text.education.title}
          lead={text.education.lead}
        />

        <div className="md:hidden">
          <MobileRail hint={text.mobile.swipe}>
            {education.map((item, index) => (
              <article key={item.id} className="v2-mcard">
                <div className="v2-edu-logo">
                  <Image src={item.image} alt={item.institution} width={200} height={72} className="object-contain" />
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="v2-mono text-[var(--v2-signal)]">
                    {text.education.nodeLabel} / {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="v2-mono text-[var(--v2-dim)]">{item.date}</span>
                </div>
                <div>
                  <h3 className="v2-heading text-[1.1rem] leading-snug">{item.title}</h3>
                  <p className="v2-mono mt-2 text-[var(--v2-muted)]">{item.institution}</p>
                </div>
              </article>
            ))}
          </MobileRail>
        </div>

        <div className="hidden gap-px border border-[var(--v2-line)] bg-[var(--v2-line)] md:grid md:grid-cols-3">
          {education.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.08}>
              <article className="v2-bracket flex h-full flex-col gap-4 bg-[var(--v2-bg-elev)] p-4 md:gap-6 md:p-7">
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
                  <h3 className="v2-heading text-[1.1rem] leading-snug md:text-[1.3rem]">{item.title}</h3>
                  <p className="v2-mono mt-2 text-[var(--v2-muted)]">{item.institution}</p>
                </div>

                {/* Resumo longo só no desktop — no mobile título + instituição bastam. */}
                <p className="mt-auto hidden text-[0.9rem] leading-relaxed text-[var(--v2-muted)] md:block">
                  {(item.summary ?? []).join(' ')}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.16} className="mt-4 md:mt-6">
          <MobileFold summary={text.mobile.credentials}>
            <div className="border-t border-[var(--v2-line)] pt-5">
              <p className="v2-mono mb-3 text-[var(--v2-dim)]">{text.education.credentialsLabel}</p>
              <div className="flex flex-wrap gap-1.5">
                {credentials.map((credential) => (
                  <span key={credential} className="v2-tag v2-tag--quiet">
                    {credential}
                  </span>
                ))}
              </div>
            </div>
          </MobileFold>
        </Reveal>
      </div>
    </section>
  );
}

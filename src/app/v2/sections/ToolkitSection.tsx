'use client';

import { getV2Toolkit } from '@/content/v2Content';
import type { Locale } from '@/i18n/LocaleProvider';
import type { V2TranslationSchema } from '@/i18n/v2Translations';
import { Reveal } from '../components/Reveal';
import { SectionHeader } from '../components/SectionHeader';

type ToolkitSectionProps = {
  locale: Locale;
  text: V2TranslationSchema;
};

export function ToolkitSection({ locale, text }: ToolkitSectionProps) {
  const groups = getV2Toolkit(locale);

  return (
    <section id="toolkit" className="v2-section">
      <div className="v2-wrap">
        <SectionHeader
          index="08"
          eyebrow={text.toolkit.eyebrow}
          title={text.toolkit.title}
          lead={text.toolkit.lead}
        />

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {groups.map((group, index) => (
            <Reveal key={group.letter} delay={Math.min(index * 0.06, 0.3)}>
              <article className="v2-toolkit__card h-full">
                <div className="flex items-start justify-between gap-4">
                  <span className="v2-toolkit__letter">{group.letter}</span>
                  <span className="v2-mono text-right text-[var(--v2-dim)]">{group.kicker}</span>
                </div>

                <div>
                  <h3 className="v2-heading text-[1.25rem] md:text-[1.4rem]">{group.title}</h3>
                  <p className="v2-mono mt-2 text-[var(--v2-muted)]">{group.summary}</p>
                </div>

                <div className="mt-auto flex flex-wrap gap-1.5 border-t border-[var(--v2-line)] pt-5">
                  {group.capabilities.map((capability) => (
                    <span key={capability} className="v2-tag">
                      {capability}
                    </span>
                  ))}
                </div>

                <p className="v2-mono text-[var(--v2-dim)]">
                  {String(group.capabilities.length).padStart(2, '0')} {text.toolkit.capabilities}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import { getV2Coordinates } from '@/content/v2Content';
import type { Locale } from '@/i18n/LocaleProvider';
import type { V2TranslationSchema } from '@/i18n/v2Translations';
import { Reveal } from '../components/Reveal';
import { ScrambleText } from '../components/ScrambleText';

type CoordinatesSectionProps = {
  locale: Locale;
  text: V2TranslationSchema;
};

export function CoordinatesSection({ locale, text }: CoordinatesSectionProps) {
  const coordinates = getV2Coordinates(locale);

  return (
    <section id="coordinates" className="v2-section">
      <div className="v2-wrap">
        <Reveal>
          <div className="mb-10 flex items-center gap-3">
            <span className="v2-mono tabular-nums text-[var(--v2-signal)]">02</span>
            <span className="h-px w-8 bg-[var(--v2-line-strong)]" />
            <ScrambleText text={text.coordinates.eyebrow} className="v2-mono text-[var(--v2-muted)]" />
          </div>
        </Reveal>

        <div className="grid gap-px border border-[var(--v2-line)] bg-[var(--v2-line)] md:grid-cols-2">
          {coordinates.map((coordinate, index) => (
            <Reveal key={coordinate.eyebrow} delay={index * 0.1}>
              <div className="v2-bracket flex h-full flex-col justify-between gap-8 bg-[var(--v2-bg-elev)] p-6 md:p-10">
                <p className="v2-eyebrow">{coordinate.eyebrow}</p>

                <div>
                  <h3 className="v2-heading text-[clamp(1.6rem,4vw,2.75rem)]">{coordinate.place}</h3>
                  <p className="v2-mono mt-4 text-[var(--v2-signal)]">{coordinate.detail}</p>
                </div>

                <p className="v2-mono text-[var(--v2-dim)]">{coordinate.note}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.12}>
          <p className="v2-heading mt-10 max-w-3xl text-[clamp(1.1rem,2.4vw,1.6rem)] text-[var(--v2-muted)]">
            {text.coordinates.title}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

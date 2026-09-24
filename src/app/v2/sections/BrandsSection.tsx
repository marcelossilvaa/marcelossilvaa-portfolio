'use client';

import Image from 'next/image';
import type { CSSProperties } from 'react';
import { clientLogos } from '@/content/clients';
import { getV2SectionIndex } from '@/content/v2Content';
import type { Locale } from '@/i18n/LocaleProvider';
import type { V2TranslationSchema } from '@/i18n/v2Translations';
import { Marquee } from '../components/Marquee';
import { Reveal } from '../components/Reveal';
import { SectionHeader } from '../components/SectionHeader';

type BrandsSectionProps = {
  locale: Locale;
  text: V2TranslationSchema;
};

export function BrandsSection({ locale, text }: BrandsSectionProps) {
  return (
    <section id="brands" className="v2-section">
      <div className="v2-wrap">
        <SectionHeader
          index={getV2SectionIndex(locale, 'brands')}
          eyebrow={text.brands.eyebrow}
          title={text.brands.title}
          lead={text.brands.lead}
        />
      </div>

      <Reveal>
        <div className="border-y border-[var(--v2-line)] py-4">
          <Marquee
            durationSeconds={44}
            reverse
            items={clientLogos.map((client) => (
              <span key={client.id} className="v2-display text-[clamp(1.5rem,4vw,3rem)] text-[var(--v2-dim)]">
                {client.name}
              </span>
            ))}
            separator={<span className="v2-signal-text text-lg">◆</span>}
          />
        </div>
      </Reveal>

      <div className="v2-wrap mt-10">
        <div className="v2-logo-grid">
          {clientLogos.map((client, index) => (
            <Reveal key={client.id} className="min-w-0 h-full" delay={index * 0.04}>
              <div
                className="v2-logo-tile h-full min-h-[120px] sm:min-h-[140px]"
                title={client.name}
                style={
                  {
                    '--logo-max-h': `${client.maxHeight ?? 56}px`,
                    '--logo-max-w': `${client.maxWidth ?? 160}px`,
                    '--logo-scale': String(client.scale ?? 1),
                  } as CSSProperties
                }
              >
                {client.logo && (
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={200}
                    height={80}
                    className="v2-logo-tile__img object-contain"
                  />
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

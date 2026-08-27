'use client';

import Image from 'next/image';
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
        <div className="grid grid-cols-2 gap-px border border-[var(--v2-line)] bg-[var(--v2-line)] sm:grid-cols-4">
          {clientLogos.map((client, index) => (
            <Reveal key={client.id} delay={index * 0.04}>
              <div className="v2-logo-tile h-full min-h-[128px]" title={client.name}>
                {client.logo && (
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={180}
                    height={72}
                    className="object-contain"
                    style={{
                      maxHeight: client.maxHeight ?? 52,
                      maxWidth: client.maxWidth ?? 150,
                      width: 'auto',
                      height: 'auto',
                      transform: client.scale ? `scale(${client.scale})` : undefined,
                    }}
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

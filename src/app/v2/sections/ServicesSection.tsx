'use client';

import { getV2Services } from '@/content/v2Content';
import type { Locale } from '@/i18n/LocaleProvider';
import type { V2TranslationSchema } from '@/i18n/v2Translations';
import { Reveal } from '../components/Reveal';
import { SectionHeader } from '../components/SectionHeader';

type ServicesSectionProps = {
  locale: Locale;
  text: V2TranslationSchema;
};

export function ServicesSection({ locale, text }: ServicesSectionProps) {
  const services = getV2Services(locale);

  return (
    <section id="services" className="v2-section">
      <div className="v2-wrap">
        <SectionHeader
          index="09"
          eyebrow={text.services.eyebrow}
          title={text.services.title}
          lead={text.services.lead}
        />

        <div className="border-b border-[var(--v2-line)]">
          {services.map((service, index) => (
            <Reveal key={service.index} delay={index * 0.08}>
              <article className="v2-service group">
                <span className="v2-mono tabular-nums text-[var(--v2-signal)]">{service.index}</span>

                <h3 className="v2-heading text-[clamp(1.3rem,3vw,2.15rem)]">{service.title}</h3>

                <div className="flex flex-col gap-4">
                  <p className="text-[1.02rem] text-[var(--v2-fg)]">{service.promise}</p>
                  <p className="text-[0.95rem] leading-relaxed text-[var(--v2-muted)]">{service.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

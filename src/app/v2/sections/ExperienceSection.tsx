'use client';

import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { getProfessionalData } from '@/content/experience';
import { getV2SectionIndex } from '@/content/v2Content';
import type { Locale } from '@/i18n/LocaleProvider';
import type { V2TranslationSchema } from '@/i18n/v2Translations';
import { Reveal } from '../components/Reveal';
import { SectionHeader } from '../components/SectionHeader';

const EASE = [0.16, 1, 0.3, 1] as const;

type ExperienceSectionProps = {
  locale: Locale;
  text: V2TranslationSchema;
};

export function ExperienceSection({ locale, text }: ExperienceSectionProps) {
  const experiences = getProfessionalData(locale).slice().reverse();
  const [openId, setOpenId] = useState<number | null>(experiences[0]?.id ?? null);

  return (
    <section id="experience" className="v2-section">
      <div className="v2-wrap">
        <SectionHeader
          index={getV2SectionIndex(locale, 'experience')}
          eyebrow={text.experience.eyebrow}
          title={text.experience.title}
          lead={text.experience.lead}
        />

        <div className="v2-timeline">
          {experiences.map((item, index) => {
            const isOpen = openId === item.id;
            const isCurrent = index === 0;

            return (
              <Reveal key={item.id} delay={index * 0.06}>
                <div className="v2-timeline__row">
                  <button
                    type="button"
                    className="v2-timeline__trigger"
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    aria-expanded={isOpen}
                  >
                    <span className="v2-timeline__date v2-mono flex items-center gap-2 text-[var(--v2-dim)]">
                      {item.date}
                      {isCurrent && (
                        <span className="v2-tag v2-tag--signal !px-1.5 !py-0.5">{text.experience.now}</span>
                      )}
                    </span>

                    <span className="v2-timeline__title flex min-w-0 items-center gap-4">
                      <span className="relative hidden h-11 w-11 flex-shrink-0 items-center justify-center border border-[var(--v2-line)] bg-[var(--v2-bg-panel)] sm:flex">
                        <Image
                          src={item.image}
                          alt={item.institution}
                          width={30}
                          height={30}
                          className="h-auto w-[26px] object-contain"
                        />
                      </span>
                      <span className="min-w-0">
                        <span className="v2-heading block text-[clamp(1.15rem,2.6vw,1.85rem)]">
                          {item.institution}
                        </span>
                        <span className="mt-1 block truncate text-sm text-[var(--v2-muted)]">{item.title}</span>
                      </span>
                    </span>

                    <span className="v2-plus v2-timeline__plus" data-open={isOpen} aria-hidden="true" />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.55, ease: EASE }}
                        className="overflow-hidden"
                      >
                        <div className="grid gap-6 pb-8 md:grid-cols-[10rem_minmax(0,1fr)] md:gap-6">
                          <span className="v2-eyebrow hidden md:block">{text.experience.details}</span>

                          <div className="flex flex-col gap-4">
                            <ul className="flex flex-col gap-3 border-l border-[var(--v2-signal)] pl-5">
                              {(item.summary ?? []).map((line) => (
                                <li key={line} className="text-[0.95rem] leading-relaxed text-[var(--v2-muted)]">
                                  {line}
                                </li>
                              ))}
                            </ul>

                            {item.companyLink && (
                              <a
                                href={item.companyLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="v2-ghost-btn self-start"
                              >
                                {text.experience.visit} {item.institution}
                                <span aria-hidden="true">↗</span>
                              </a>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

'use client';

import Image from 'next/image';
import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion';
import { useCallback, useState } from 'react';
import { getProjectsData } from '@/content/projects';
import { getV2ProjectKinds } from '@/content/v2Content';
import type { Locale } from '@/i18n/LocaleProvider';
import type { V2TranslationSchema } from '@/i18n/v2Translations';
import { FrameViewer } from '../components/FrameViewer';
import { Reveal } from '../components/Reveal';
import { SectionHeader } from '../components/SectionHeader';

const EASE = [0.16, 1, 0.3, 1] as const;

type WorkSectionProps = {
  locale: Locale;
  text: V2TranslationSchema;
};

export function WorkSection({ locale, text }: WorkSectionProps) {
  const projects = getProjectsData(locale);
  const kinds = getV2ProjectKinds(locale);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  // MotionValues em vez de estado: a prévia segue o cursor sem re-renderizar
  // as nove linhas do índice a cada mousemove.
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const previewX = useSpring(rawX, { stiffness: 320, damping: 32, mass: 0.4 });
  const previewY = useSpring(rawY, { stiffness: 320, damping: 32, mass: 0.4 });

  const trackPointer = useCallback(
    (event: React.MouseEvent, immediate = false) => {
      const x = event.clientX + 28;
      const y = event.clientY - 90;

      if (immediate) {
        // Evita que a prévia entre voando desde a última posição conhecida.
        previewX.jump(x);
        previewY.jump(y);
      }

      rawX.set(x);
      rawY.set(y);
    },
    [rawX, rawY, previewX, previewY]
  );

  return (
    <section id="work" className="v2-section">
      <div className="v2-wrap">
        <SectionHeader index="07" eyebrow={text.work.eyebrow} title={text.work.title} lead={text.work.lead} />

        <div
          className="hidden grid-cols-[3.5rem_minmax(0,1.15fr)_minmax(0,1fr)_9.5rem_2.5rem] gap-3 pb-3 md:grid"
          aria-hidden="true"
        >
          <span className="v2-eyebrow">#</span>
          <span className="v2-eyebrow">{text.work.tableProject}</span>
          <span className="v2-eyebrow">{text.work.tableStack}</span>
          <span className="v2-eyebrow">{text.work.tableYear}</span>
          <span className="v2-eyebrow text-right">{text.work.open}</span>
        </div>

        <div onMouseLeave={() => setHovered(null)}>
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={Math.min(index * 0.04, 0.24)}>
              <button
                type="button"
                className="v2-work__row"
                onClick={() => setActiveIndex(index)}
                onMouseEnter={(event) => {
                  trackPointer(event, hovered === null);
                  setHovered(index);
                }}
                onMouseMove={(event) => trackPointer(event)}
                aria-label={`${text.work.open} ${project.title}`}
              >
                <span className="v2-mono tabular-nums">{String(index + 1).padStart(2, '0')}</span>

                <span className="flex min-w-0 flex-col gap-1">
                  <span className="v2-heading flex items-center gap-2 text-[clamp(1.05rem,2.4vw,1.6rem)]">
                    <span className="truncate">{project.title}</span>
                    {project.featured && (
                      <span className="v2-mono flex-shrink-0 text-[var(--v2-signal)]">◆</span>
                    )}
                  </span>
                  <span className="truncate text-[0.85rem] text-[var(--v2-muted)] md:hidden">
                    {project.subTitle}
                  </span>
                </span>

                <span className="hidden min-w-0 flex-wrap gap-1.5 md:flex">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span key={`${tech.name}-${techIndex}`} className="v2-tag">
                      {tech.name}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="v2-tag">+{project.technologies.length - 3}</span>
                  )}
                </span>

                <span className="v2-mono hidden truncate md:block">{kinds[project.id] ?? '—'}</span>

                <span className="v2-mono text-right" aria-hidden="true">
                  ↗
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Prévia flutuante seguindo o cursor — só em telas com hover real. */}
      <AnimatePresence>
        {hovered !== null && (
          <motion.div
            className="v2-work__preview hidden lg:block"
            style={{ left: 0, top: 0, x: previewX, y: previewY }}
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.25, ease: EASE }}
          >
            <div className="relative aspect-[16/10] w-full">
              <Image
                src={projects[hovered].image}
                alt=""
                fill
                sizes="260px"
                className="object-cover object-top"
              />
              <span className="v2-frame-stack__scan" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <FrameViewer
        projects={projects}
        activeIndex={activeIndex}
        text={text}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />
    </section>
  );
}

'use client';

import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useEffect } from 'react';
import type { ProjectItem } from '@/types/portfolio';
import type { V2TranslationSchema } from '@/i18n/v2Translations';
import { useScrollLock } from '../lib/useV2Motion';

const EASE = [0.16, 1, 0.3, 1] as const;

type FrameViewerProps = {
  projects: ProjectItem[];
  activeIndex: number | null;
  text: V2TranslationSchema;
  onClose: () => void;
  onNavigate: (nextIndex: number) => void;
};

/**
 * Lightbox em formato de "visor de quadros": navegação por teclado, contador
 * NN / NN e a leitura completa de desafio, estratégia e impacto.
 */
export function FrameViewer({ projects, activeIndex, text, onClose, onNavigate }: FrameViewerProps) {
  const isOpen = activeIndex !== null;
  useScrollLock(isOpen);

  const go = useCallback(
    (direction: 1 | -1) => {
      if (activeIndex === null) return;
      const next = (activeIndex + direction + projects.length) % projects.length;
      onNavigate(next);
    },
    [activeIndex, projects.length, onNavigate]
  );

  useEffect(() => {
    if (!isOpen) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowRight') go(1);
      if (event.key === 'ArrowLeft') go(-1);
    };

    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose, go]);

  const project = activeIndex !== null ? projects[activeIndex] : null;

  return (
    <AnimatePresence>
      {project && activeIndex !== null && (
        <motion.div
          className="v2-viewer"
          role="dialog"
          aria-modal="true"
          aria-label={project.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: EASE }}
        >
          <div className="v2-viewer__bar">
            <div className="flex min-w-0 items-center gap-3">
              <span className="v2-mono tabular-nums text-[var(--v2-signal)]">
                {text.work.frame} {String(activeIndex + 1).padStart(2, '0')} /{' '}
                {String(projects.length).padStart(2, '0')}
              </span>
              <span className="hidden h-3 w-px bg-[var(--v2-line-strong)] sm:block" />
              <span className="v2-mono hidden truncate text-[var(--v2-dim)] sm:block">{project.subTitle}</span>
            </div>

            <div className="flex flex-shrink-0 items-center gap-2">
              <button
                type="button"
                className="v2-viewer__nav"
                onClick={() => go(-1)}
                aria-label={text.work.prev}
              >
                ←
              </button>
              <button type="button" className="v2-viewer__nav" onClick={() => go(1)} aria-label={text.work.next}>
                →
              </button>
              <button type="button" className="v2-ghost-btn ml-1" onClick={onClose}>
                {text.work.close} ✕
              </button>
            </div>
          </div>

          <div className="v2-viewer__body">
            <AnimatePresence mode="wait">
              <motion.div
                key={project.id}
                className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-12"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.45, ease: EASE }}
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden border border-[var(--v2-line)] bg-[var(--v2-bg-elev)]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(min-width: 1024px) 60vw, 92vw"
                    className="object-cover object-top"
                  />
                  <span className="v2-frame-stack__scan" />
                </div>

                <div className="flex flex-col gap-7">
                  <div>
                    {project.featured && <span className="v2-tag v2-tag--signal mb-4">{text.work.featured}</span>}
                    <h3 className="v2-display text-[clamp(2rem,6vw,4rem)]">{project.title}</h3>
                    <p className="mt-3 text-[var(--v2-muted)]">{project.subTitle}</p>
                  </div>

                  <div className="flex flex-col gap-5">
                    {[
                      { label: text.work.challenge, value: project.challenge },
                      { label: text.work.strategy, value: project.strategy },
                      { label: text.work.impact, value: project.impact },
                    ].map((block) => (
                      <div key={block.label} className="border-t border-[var(--v2-line)] pt-4">
                        <p className="v2-eyebrow mb-2">{block.label}</p>
                        <p className="text-[0.95rem] leading-relaxed text-[var(--v2-muted)]">{block.value}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, index) => (
                      <span key={`${tech.name}-${index}`} className="v2-tag">
                        {tech.name}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {project.demoLink && (
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="v2-cta">
                        {text.work.liveSite}
                        <span aria-hidden="true">↗</span>
                      </a>
                    )}
                    {project.appStoreLink && (
                      <a
                        href={project.appStoreLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="v2-cta v2-cta--ghost"
                      >
                        {text.work.appStore}
                        <span aria-hidden="true">↗</span>
                      </a>
                    )}
                    {project.playStoreLink && (
                      <a
                        href={project.playStoreLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="v2-cta v2-cta--ghost"
                      >
                        {text.work.playStore}
                        <span aria-hidden="true">↗</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

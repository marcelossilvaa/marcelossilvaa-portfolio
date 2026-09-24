'use client';

import Image, { type StaticImageData } from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { usePrefersReducedMotion } from '../lib/useV2Motion';

const ROTATION_MS = 3400;
const EASE = [0.16, 1, 0.3, 1] as const;

export type ArchiveFrame = {
  image: StaticImageData;
  caption: string;
  meta: string;
};

type ArchiveFramesProps = {
  frames: ArchiveFrame[];
  sequenceLabel: string;
  framesLabel: string;
  archiveLabel: string;
};

/**
 * Visor com rotação automática de quadros: contador NN/NN, ticks de progresso
 * e overlay de scanlines para dar textura de monitor.
 */
export function ArchiveFrames({ frames, sequenceLabel, framesLabel, archiveLabel }: ArchiveFramesProps) {
  const reduced = usePrefersReducedMotion();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (reduced || frames.length <= 1) return;

    const interval = window.setInterval(() => {
      setCurrent((prev) => (prev + 1) % frames.length);
    }, ROTATION_MS);

    return () => window.clearInterval(interval);
  }, [reduced, frames.length]);

  const frame = frames[current];

  return (
    <figure className="flex flex-col gap-3">
      <div className="flex items-center justify-between gap-3">
        <span className="v2-mono text-[var(--v2-dim)]">{archiveLabel}</span>
        <span className="v2-mono tabular-nums text-[var(--v2-signal)]">
          {String(current + 1).padStart(2, '0')} / {String(frames.length).padStart(2, '0')}
        </span>
      </div>

      <div className="v2-frame-stack">
        <AnimatePresence mode="sync">
          <motion.div
            key={current}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.06, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 1.02, filter: 'blur(6px)' }}
            transition={{ duration: 1, ease: EASE }}
          >
            <Image
              src={frame.image}
              alt={frame.caption}
              fill
              sizes="(min-width: 1024px) 42vw, 92vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        <span className="v2-frame-stack__scan" />
        <span className="v2-frame-stack__sweep" />

        <div className="absolute inset-x-0 bottom-0 z-[5] flex items-end justify-between gap-3 bg-gradient-to-t from-[#08090b] via-[#08090bcc] to-transparent p-4">
          <div className="min-w-0">
            <p className="v2-mono truncate text-[var(--v2-fg)]">{frame.caption}</p>
            <p className="v2-mono mt-1 truncate text-[var(--v2-dim)]">{frame.meta}</p>
          </div>
          <span className="v2-mono flex-shrink-0 text-[var(--v2-dim)]">{sequenceLabel}</span>
        </div>
      </div>

      <figcaption className="flex items-center justify-between gap-3">
        <div className="v2-progress-ticks" style={{ ['--v2-tick-duration' as string]: `${ROTATION_MS}ms` }}>
          {frames.map((item, index) => (
            <span
              key={item.caption}
              data-state={index < current ? 'done' : index === current ? 'active' : 'idle'}
            >
              <i />
            </span>
          ))}
        </div>
        <span className="v2-mono text-[var(--v2-dim)]">
          {frames.length} {framesLabel}
        </span>
      </figcaption>
    </figure>
  );
}

'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';
import type { V2TranslationSchema } from '@/i18n/v2Translations';
import { usePrefersReducedMotion, useScrollLock } from '../lib/useV2Motion';

const STORAGE_KEY = 'v2-boot-seen';
const TOTAL_MS = 3200;
const EASE = [0.16, 1, 0.3, 1] as const;

type BootSequenceProps = {
  text: V2TranslationSchema;
  onFinish: () => void;
};

/**
 * Cortina de abertura no espírito de um terminal ligando: monograma, log de
 * inicialização e barra de progresso. Roda uma vez por sessão e pode ser
 * pulada com clique ou qualquer tecla.
 */
export function BootSequence({ text, onFinish }: BootSequenceProps) {
  const reduced = usePrefersReducedMotion();
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [decided, setDecided] = useState(false);

  useEffect(() => {
    const seen = window.sessionStorage.getItem(STORAGE_KEY) === '1';
    if (seen || reduced) {
      setDecided(true);
      onFinish();
      return;
    }

    setVisible(true);
    setDecided(true);
  }, [reduced, onFinish]);

  const dismiss = useCallback(() => {
    setVisible(false);
    window.sessionStorage.setItem(STORAGE_KEY, '1');
    onFinish();
  }, [onFinish]);

  useScrollLock(visible);

  useEffect(() => {
    if (!visible) return;

    const start = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const ratio = Math.min(1, (now - start) / TOTAL_MS);
      setProgress(ratio);
      if (ratio < 1) {
        raf = window.requestAnimationFrame(tick);
      } else {
        dismiss();
      }
    };

    raf = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(raf);
  }, [visible, dismiss]);

  useEffect(() => {
    if (!visible) return;

    const onKey = () => dismiss();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [visible, dismiss]);

  if (!decided) return null;

  const percent = Math.round(progress * 100);
  const activeLine = Math.min(text.boot.lines.length - 1, Math.floor(progress * text.boot.lines.length));

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="v2-boot"
          role="button"
          tabIndex={0}
          aria-label={text.boot.skip}
          onClick={dismiss}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: 'blur(12px)' }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <div className="flex items-start justify-between gap-4">
            <span className="v2-mono text-[var(--v2-muted)]">{text.boot.edition}</span>
            <span className="v2-mono text-[var(--v2-dim)]">{text.boot.skip}</span>
          </div>

          <div className="flex flex-1 items-center">
            <motion.span
              className="v2-boot__monogram"
              initial={{ opacity: 0, letterSpacing: '0.4em' }}
              animate={{ opacity: 1, letterSpacing: '-0.04em' }}
              transition={{ duration: 1.6, ease: EASE }}
            >
              MS
            </motion.span>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-end justify-between gap-4">
              <div className="v2-boot__log flex flex-col gap-1">
                {text.boot.lines.map((line, index) => (
                  <motion.span
                    key={line}
                    animate={{
                      opacity: index <= activeLine ? 1 : 0.18,
                      color: index === activeLine ? 'var(--v2-signal)' : 'var(--v2-dim)',
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    <span className="mr-2">{index <= activeLine ? '›' : ' '}</span>
                    {line}
                  </motion.span>
                ))}
              </div>
              <span className="v2-boot__log text-[var(--v2-fg)]">
                {percent >= 100 ? text.boot.ready : `${String(percent).padStart(3, '0')}%`}
              </span>
            </div>

            <div className="v2-boot__bar">
              <span style={{ width: `${percent}%` }} />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

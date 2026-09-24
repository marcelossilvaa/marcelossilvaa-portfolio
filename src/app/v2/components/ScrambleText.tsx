'use client';

import { useEffect, useRef, useState } from 'react';
import { usePrefersReducedMotion } from '../lib/useV2Motion';

const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/\\<>*#$%@';

type ScrambleTextProps = {
  text: string;
  className?: string;
  /** Tempo entre a entrada em viewport e o início do embaralhamento. */
  delayMs?: number;
  as?: 'span' | 'div' | 'p';
};

/**
 * Resolve o texto letra por letra a partir de glifos aleatórios quando entra
 * em viewport — assinatura visual dos rótulos de HUD.
 */
export function ScrambleText({ text, className, delayMs = 0, as = 'span' }: ScrambleTextProps) {
  const reduced = usePrefersReducedMotion();
  const ref = useRef<HTMLElement | null>(null);
  const [output, setOutput] = useState(text);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || started) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started || reduced) {
      setOutput(text);
      return;
    }

    let frame = 0;
    let raf = 0;
    let timeout: number;
    const totalFrames = Math.max(12, text.length * 2);

    const tick = () => {
      frame += 1;
      const revealed = Math.floor((frame / totalFrames) * text.length);

      setOutput(
        text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < revealed) return char;
            return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          })
          .join('')
      );

      if (frame < totalFrames) {
        raf = window.requestAnimationFrame(tick);
      } else {
        setOutput(text);
      }
    };

    timeout = window.setTimeout(() => {
      raf = window.requestAnimationFrame(tick);
    }, delayMs);

    return () => {
      window.clearTimeout(timeout);
      window.cancelAnimationFrame(raf);
    };
  }, [started, text, delayMs, reduced]);

  const Tag = as;

  return (
    <Tag ref={ref as never} className={className}>
      {output}
    </Tag>
  );
}

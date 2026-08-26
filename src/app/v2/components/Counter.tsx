'use client';

import { animate, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { usePrefersReducedMotion } from '../lib/useV2Motion';

type CounterProps = {
  value: number;
  suffix?: string;
  className?: string;
  durationSeconds?: number;
};

/** Contador que sobe de 0 até o valor quando entra em viewport. */
export function Counter({ value, suffix = '', className, durationSeconds = 1.4 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduced = usePrefersReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;

    if (reduced) {
      setDisplay(value);
      return;
    }

    const controls = animate(0, value, {
      duration: durationSeconds,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });

    return () => controls.stop();
  }, [inView, value, durationSeconds, reduced]);

  return (
    <span ref={ref} className={className}>
      {String(display).padStart(2, '0')}
      {suffix}
    </span>
  );
}

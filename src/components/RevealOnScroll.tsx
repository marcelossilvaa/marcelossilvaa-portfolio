'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';

type RevealVariant = 'up' | 'down' | 'left' | 'right' | 'zoom';

type RevealOnScrollProps = {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  durationMs?: number;
  threshold?: number;
  variant?: RevealVariant;
  once?: boolean;
};

export function RevealOnScroll({
  children,
  className,
  delayMs = 0,
  durationMs = 700,
  threshold = 0.2,
  variant = 'up',
  once = true,
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(entry.target);
          return;
        }

        if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -10% 0px',
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [once, threshold]);

  return (
    <div
      ref={ref}
      className={`reveal-on-scroll reveal-${variant} ${isVisible ? 'is-visible' : ''} ${className ?? ''}`}
      style={{
        transitionDuration: `${durationMs}ms`,
        transitionDelay: `${delayMs}ms`,
      }}
    >
      {children}
    </div>
  );
}

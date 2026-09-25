'use client';

import { Children, useEffect, useRef, useState, type ReactNode } from 'react';

type MobileRailProps = {
  children: ReactNode;
  /** Rótulo curto exibido ao lado do contador (ex.: "deslize"). */
  hint: string;
  className?: string;
};

/**
 * Trilho horizontal com scroll-snap para o mobile: cada filho vira um slide
 * de ~84% da largura, deixando o próximo à mostra como convite ao swipe.
 */
export function MobileRail({ children, hint, className = '' }: MobileRailProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const slides = Children.toArray(children);
  const total = slides.length;

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const first = track.firstElementChild as HTMLElement | null;
        if (!first) return;
        const step = first.offsetWidth + parseFloat(getComputedStyle(track).columnGap || '0');
        setActive(Math.min(total - 1, Math.max(0, Math.round(track.scrollLeft / step))));
      });
    };

    track.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      track.removeEventListener('scroll', onScroll);
    };
  }, [total]);

  return (
    <div className={`v2-rail-m ${className}`.trim()}>
      <div ref={trackRef} className="v2-rail-m__track">
        {slides.map((slide, index) => (
          <div key={index} className="v2-rail-m__slide">
            {slide}
          </div>
        ))}
      </div>

      <div className="v2-rail-m__meta" aria-hidden="true">
        <span className="v2-mono tabular-nums text-[var(--v2-signal)]">
          {String(active + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </span>
        <span className="v2-rail-m__bar">
          <i style={{ transform: `scaleX(${(active + 1) / total})` }} />
        </span>
        <span className="v2-mono text-[var(--v2-dim)]">{hint} →</span>
      </div>
    </div>
  );
}

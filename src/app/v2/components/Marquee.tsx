'use client';

import type { ReactNode } from 'react';

type MarqueeProps = {
  items: ReactNode[];
  durationSeconds?: number;
  reverse?: boolean;
  className?: string;
  separator?: ReactNode;
};

/**
 * Esteira infinita: o trilho é duplicado e deslocado -100%, o que mantém o
 * loop contínuo sem medir largura em JavaScript.
 */
export function Marquee({
  items,
  durationSeconds = 32,
  reverse = false,
  className,
  separator,
}: MarqueeProps) {
  const track = (
    <div className="v2-marquee__track" aria-hidden={false}>
      {items.map((item, index) => (
        <span key={index} className="flex flex-shrink-0 items-center gap-9">
          {item}
          {separator ?? <span className="text-[var(--v2-dim)]">/</span>}
        </span>
      ))}
    </div>
  );

  return (
    <div
      className={`v2-marquee ${reverse ? 'v2-marquee--reverse' : ''} ${className ?? ''}`}
      style={{ ['--v2-marquee-duration' as string]: `${durationSeconds}s` }}
    >
      {track}
      <div className="v2-marquee__track" aria-hidden="true">
        {items.map((item, index) => (
          <span key={`clone-${index}`} className="flex flex-shrink-0 items-center gap-9">
            {item}
            {separator ?? <span className="text-[var(--v2-dim)]">/</span>}
          </span>
        ))}
      </div>
    </div>
  );
}

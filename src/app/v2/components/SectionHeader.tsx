'use client';

import { DrawLine, Reveal } from './Reveal';
import { ScrambleText } from './ScrambleText';

type SectionHeaderProps = {
  index: string;
  eyebrow: string;
  title: string;
  lead?: string;
  align?: 'left' | 'split';
};

/** Cabeçalho comum das seções: 0N / RÓTULO, título grande e lead opcional. */
export function SectionHeader({ index, eyebrow, title, lead, align = 'split' }: SectionHeaderProps) {
  return (
    <header className="mb-8 md:mb-16">
      <Reveal>
        <div className="mb-4 flex items-center gap-3 md:mb-5">
          <span className="v2-mono text-[var(--v2-signal)] tabular-nums">{index}</span>
          <span className="h-px w-8 bg-[var(--v2-line-strong)]" />
          <ScrambleText text={eyebrow} className="v2-mono text-[var(--v2-muted)]" />
        </div>
      </Reveal>

      <DrawLine className="mb-6 md:mb-8" />

      <div
        className={
          align === 'split'
            ? 'grid gap-4 md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] md:gap-16'
            : 'max-w-4xl'
        }
      >
        <Reveal delay={0.06}>
          <h2 className="v2-heading text-[clamp(1.75rem,5.4vw,3.75rem)]">{title}</h2>
        </Reveal>

        {lead && (
          <Reveal delay={0.14} className="v2-section-header__lead">
            <p className="max-w-xl text-[0.975rem] leading-relaxed text-[var(--v2-muted)] md:pt-2 md:text-[1.05rem]">
              {lead}
            </p>
          </Reveal>
        )}
      </div>
    </header>
  );
}

'use client';

import type { ReactNode } from 'react';

type MobileFoldProps = {
  /** Rótulo do summary no mobile (ex.: "Ver capacidades"). */
  summary: string;
  /** Conteúdo sempre visível no desktop; colapsável (e fechado) no mobile. */
  children: ReactNode;
  className?: string;
};

/**
 * Accordion só no mobile, sempre começa fechado. No desktop (≥768px) o
 * summary some e o corpo fica expandido — sem duplicar markup.
 */
export function MobileFold({ summary, children, className = '' }: MobileFoldProps) {
  return (
    <details className={`v2-fold ${className}`.trim()}>
      <summary className="v2-fold__summary">
        <span>{summary}</span>
        <span className="v2-fold__chevron" aria-hidden="true" />
      </summary>
      <div className="v2-fold__body">{children}</div>
    </details>
  );
}

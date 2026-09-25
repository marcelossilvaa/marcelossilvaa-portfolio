'use client';

import { useEffect, useRef, type ReactNode } from 'react';

type MobileFoldProps = {
  /** Rótulo do summary no mobile (ex.: "Ver capacidades"). */
  summary: string;
  /** Conteúdo sempre visível no desktop; colapsável no mobile. */
  children: ReactNode;
  /** Se true, começa aberto no mobile. */
  defaultOpen?: boolean;
  className?: string;
};

/**
 * Accordion só no mobile. No desktop (≥768px) o summary some e o corpo
 * fica sempre expandido — sem duplicar markup.
 */
export function MobileFold({ summary, children, defaultOpen = false, className = '' }: MobileFoldProps) {
  const ref = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    if (ref.current && defaultOpen) {
      ref.current.open = true;
    }
  }, [defaultOpen]);

  return (
    <details ref={ref} className={`v2-fold ${className}`.trim()}>
      <summary className="v2-fold__summary">
        <span>{summary}</span>
        <span className="v2-fold__chevron" aria-hidden="true" />
      </summary>
      <div className="v2-fold__body">{children}</div>
    </details>
  );
}

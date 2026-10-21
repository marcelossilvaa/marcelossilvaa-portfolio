'use client';

import { motion } from 'framer-motion';

type KineticWordmarkProps = {
  text: string;
  className?: string;
  delay?: number;
  /** Tag do wrapper. Use 'h1' só uma vez por página. */
  as?: 'h1' | 'div';
  /** Texto lido por buscadores e leitores de tela (padrão: o próprio text). */
  srText?: string;
};

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Wordmark gigante com entrada letra por letra. Cada caractere recebe hover
 * próprio (skew + cor de sinal) para dar sensação de matéria física.
 * As letras animadas são aria-hidden; o texto acessível fica num span sr-only
 * para que buscadores leiam o nome inteiro, não letra por letra.
 */
export function KineticWordmark({ text, className, delay = 0, as = 'h1', srText }: KineticWordmarkProps) {
  const chars = text.split('');
  const Tag = as;

  return (
    <Tag className={`v2-wordmark ${className ?? ''}`} aria-hidden={as === 'div' ? true : undefined}>
      {as === 'h1' && <span className="sr-only">{srText ?? text}</span>}
      {chars.map((char, index) => {
        if (char === ' ') {
          return <span key={`space-${index}`} className="v2-wordmark__space" aria-hidden="true" />;
        }

        return (
          <span key={`${char}-${index}`} className="v2-wordmark__mask" aria-hidden="true">
            <motion.span
              className="v2-wordmark__char"
              initial={{ y: '110%', opacity: 0 }}
              animate={{ y: '0%', opacity: 1 }}
              transition={{
                duration: 1.05,
                delay: delay + index * 0.035,
                ease: EASE,
              }}
            >
              {char}
            </motion.span>
          </span>
        );
      })}
    </Tag>
  );
}

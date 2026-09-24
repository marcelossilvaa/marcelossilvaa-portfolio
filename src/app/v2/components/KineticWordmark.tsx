'use client';

import { motion } from 'framer-motion';

type KineticWordmarkProps = {
  text: string;
  className?: string;
  delay?: number;
};

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Wordmark gigante com entrada letra por letra. Cada caractere recebe hover
 * próprio (skew + cor de sinal) para dar sensação de matéria física.
 */
export function KineticWordmark({ text, className, delay = 0 }: KineticWordmarkProps) {
  const chars = text.split('');

  return (
    <h1 className={`v2-wordmark ${className ?? ''}`} aria-label={text}>
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
    </h1>
  );
}

'use client';

import { motion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

const EASE = [0.16, 1, 0.3, 1] as const;

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
};

/** Entrada padrão das seções: sobe, desfoca e resolve. */
export function Reveal({ children, className, delay = 0, y = 28, once = true }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once, amount: 0.25 }}
      transition={{ duration: 0.85, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

export const staggerParent: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 18, filter: 'blur(5px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: EASE } },
};

type StaggerProps = {
  children: ReactNode;
  className?: string;
  amount?: number;
};

export function Stagger({ children, className, amount = 0.2 }: StaggerProps) {
  return (
    <motion.div
      className={className}
      variants={staggerParent}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
    >
      {children}
    </motion.div>
  );
}

/** Linha horizontal que se desenha da esquerda para a direita ao entrar em viewport. */
export function DrawLine({ className }: { className?: string }) {
  return (
    <motion.div
      className={`v2-rule ${className ?? ''}`}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 1.1, ease: EASE }}
      style={{ transformOrigin: 'left' }}
    />
  );
}

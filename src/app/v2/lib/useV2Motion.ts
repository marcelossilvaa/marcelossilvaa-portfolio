'use client';

import { useCallback, useEffect, useState } from 'react';

/** Respeita prefers-reduced-motion para desligar loops e animações longas. */
export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(query.matches);

    const onChange = (event: MediaQueryListEvent) => setReduced(event.matches);
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);

  return reduced;
}

export function useMounted(): boolean {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}

/**
 * Observa as seções e devolve o id da que está ocupando a faixa de leitura,
 * alimentando o trilho lateral do HUD.
 */
export function useActiveSection(ids: string[]): string {
  const [active, setActive] = useState(ids[0] ?? '');
  // A lista chega como array novo a cada render; a chave estável evita
  // recriar o observer em toda re-renderização do HUD.
  const key = ids.join(',');

  useEffect(() => {
    const elements = key
      .split(',')
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-42% 0px -52% 0px', threshold: [0, 0.15, 0.4, 0.75, 1] }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [key]);

  return active;
}

/** Rolagem suave respeitando a barra fixa do HUD. */
export function useScrollToSection() {
  return useCallback((id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    const offset = element.getBoundingClientRect().top + window.scrollY - 56;
    window.scrollTo({ top: offset, behavior: 'smooth' });
  }, []);
}

// Boot, índice e lightbox podem se sobrepor; a contagem evita que o primeiro a
// fechar destrave o scroll enquanto outro overlay ainda está aberto.
let scrollLockCount = 0;

/** Trava o scroll do documento enquanto overlays estão abertos. */
export function useScrollLock(locked: boolean) {
  useEffect(() => {
    if (!locked) return;

    scrollLockCount += 1;
    document.documentElement.classList.add('v2-locked');

    return () => {
      scrollLockCount = Math.max(0, scrollLockCount - 1);
      if (scrollLockCount === 0) {
        document.documentElement.classList.remove('v2-locked');
      }
    };
  }, [locked]);
}

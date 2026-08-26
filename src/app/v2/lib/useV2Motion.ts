'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

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

  useEffect(() => {
    const elements = ids
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
  }, [ids]);

  return active;
}

/** Progresso vertical da página entre 0 e 1, atualizado em rAF. */
export function useScrollProgress(): number {
  const [progress, setProgress] = useState(0);
  const frame = useRef<number | null>(null);

  useEffect(() => {
    const update = () => {
      frame.current = null;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0);
    };

    const onScroll = () => {
      if (frame.current !== null) return;
      frame.current = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      if (frame.current !== null) window.cancelAnimationFrame(frame.current);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return progress;
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

/** Trava o scroll do documento enquanto overlays estão abertos. */
export function useScrollLock(locked: boolean) {
  useEffect(() => {
    if (!locked) return;

    document.documentElement.classList.add('v2-locked');
    return () => document.documentElement.classList.remove('v2-locked');
  }, [locked]);
}

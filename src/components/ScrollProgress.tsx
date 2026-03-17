"use client";
import React, { useEffect, useRef, useState } from 'react';

function ScrollProgress() {
  const [scrollWidth, setScrollWidth] = useState(0);
  const [displayProgress, setDisplayProgress] = useState(false);
  const targetWidthRef = useRef(0);
  const animatedWidthRef = useRef(0);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    function animateProgress() {
      const delta = targetWidthRef.current - animatedWidthRef.current;
      animatedWidthRef.current += delta * 0.18;

      if (Math.abs(delta) < 0.05) {
        animatedWidthRef.current = targetWidthRef.current;
      }

      setScrollWidth(animatedWidthRef.current);
      frameRef.current = window.requestAnimationFrame(animateProgress);
    }

    function handleScroll() {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled =
        maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
      targetWidthRef.current = Math.max(0, Math.min(100, scrolled));

      setDisplayProgress(window.scrollY > 100);
    }

    handleScroll();
    frameRef.current = window.requestAnimationFrame(animateProgress);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <div style={{ display: displayProgress ? 'block' : 'none' }} id="scroll-progress-container">
      <div
        id="scroll-progress"
        className="bg-gradient-to-r from-accent-secondary to-accent-primary"
        style={{ width: `${scrollWidth}%` }}
      />
    </div>
  );
}

export default ScrollProgress;

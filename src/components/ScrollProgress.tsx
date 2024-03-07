"use client"

import React, { useEffect, useState } from 'react';



function ScrollProgress() {
  const [scrollWidth, setScrollWidth] = useState(0);
  const [displayProgress, setDisplayProgress] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      setScrollWidth(scrolled);

      if (window.scrollY > 100) {
        setDisplayProgress(true);
      } else {
        setDisplayProgress(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={{ display: displayProgress ? 'block' : 'none' }} id="scroll-progress-container">
      <div id="scroll-progress"  className='bg-black-100' style={{ width: `${scrollWidth}%` }}>
      </div>
    </div>
  );
}

export default ScrollProgress;

'use client';

import Lenis from 'lenis';
import { useEffect } from 'react';

export default function SmoothScrollProvider({ children }: { children: Readonly<React.ReactNode> }) {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const frameId = requestAnimationFrame(raf);

    return () => cancelAnimationFrame(frameId);
  }, []);

  return children;
}

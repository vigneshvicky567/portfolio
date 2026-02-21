
"use client";

import { useEffect, useState, useRef, RefObject } from "react";

export function useScrollProgress(ref: RefObject<HTMLElement | null>) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far through the element we have scrolled
      // 0 when top of element enters viewport from bottom
      // 1 when bottom of element leaves viewport from top
      const scrollStart = rect.top - windowHeight;
      const scrollEnd = rect.bottom;
      const totalDist = windowHeight + rect.height;
      
      const currentProgress = Math.min(Math.max((windowHeight - rect.top) / totalDist, 0), 1);
      setProgress(currentProgress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [ref]);

  return progress;
}

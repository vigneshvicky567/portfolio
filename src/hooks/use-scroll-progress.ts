
"use client";

import { useEffect, useState, useRef, RefObject } from "react";

/**
 * Custom hook to track scroll progress of an element within the viewport.
 * Returns a value between 0 and 1.
 */
export function useScrollProgress(ref: RefObject<HTMLElement | null>) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate progress relative to the viewport
      // 0: Top of element is at bottom of viewport
      // 1: Bottom of element is at top of viewport
      const totalRange = windowHeight + rect.height;
      const currentScroll = windowHeight - rect.top;
      
      const rawProgress = currentScroll / totalRange;
      const clampedProgress = Math.min(Math.max(rawProgress, 0), 1);
      
      setProgress(clampedProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [ref]);

  return progress;
}

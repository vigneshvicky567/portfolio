"use client";

import React, { useState, useEffect } from "react";
import { Monitor, Code, Terminal, Database } from "lucide-react";

interface SectionLoadingProps {
  onComplete: () => void;
}

export function SectionLoading({ onComplete }: SectionLoadingProps) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsVisible(false), 500);
          setTimeout(onComplete, 1200); 
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-[100] bg-[#FFDA63] flex flex-col items-center justify-center transition-all duration-700 ease-in-out px-4 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none -translate-y-full"
      }`}
    >
      <div className="relative w-full max-w-sm md:max-w-md flex flex-col items-center">
        
        {/* Floating Icons - Re-positioned for better balance */}
        <div className="absolute -top-12 md:-top-20 left-0 md:-left-16 animate-bounce-custom">
           <Code className="w-8 h-8 md:w-10 md:h-10 text-black/60" />
        </div>
        <div className="absolute top-0 right-0 md:-right-16 animate-bounce-custom delay-300">
           <Terminal className="w-6 h-6 md:w-8 md:h-8 text-black/60" />
        </div>
        <div className="absolute -bottom-12 md:-bottom-16 left-4 md:-left-12 animate-bounce-custom delay-500">
           <Monitor className="w-8 h-8 md:w-12 md:h-12 text-black/60" />
        </div>
        <div className="absolute bottom-4 right-4 md:-right-8 animate-bounce-custom delay-700">
           <Database className="w-6 h-6 md:w-9 md:h-9 text-black/60" />
        </div>

        {/* Hand Pointer Icon */}
        <div className="mb-6 animate-pulse">
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" className="md:w-10 md:h-10" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
            <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
            <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
            <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
          </svg>
        </div>

        {/* Initials Blocks */}
        <div className="flex justify-center gap-3 mb-8">
          <div className="w-14 h-14 md:w-18 md:h-18 border-4 border-black bg-[#3ABEF9] flex items-center justify-center text-2xl md:text-3xl font-headline font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            P
          </div>
          <div className="w-14 h-14 md:w-18 md:h-18 border-4 border-black bg-[#FF5BAE] flex items-center justify-center text-2xl md:text-3xl font-headline font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            M
          </div>
        </div>

        {/* Progress Underline */}
        <div className="w-32 md:w-48 h-2 bg-black/10 rounded-full relative mb-6">
          <div 
            className="absolute inset-y-0 left-0 bg-black transition-all duration-100 ease-linear rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <p className="text-center font-code font-bold text-sm md:text-base uppercase tracking-tighter opacity-80">
          {Math.round(progress)}% INITIALIZING...
        </p>
      </div>
    </div>
  );
}

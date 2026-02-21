
"use client";

import React, { useState, useEffect } from "react";
import { Monitor, Save, Code, FileCode, Terminal } from "lucide-react";

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
          // Wait a tiny bit before triggering fade out
          setTimeout(() => setIsVisible(false), 500);
          // Callback after animation completes
          setTimeout(onComplete, 1200); 
          return 100;
        }
        return prev + 2; // Adjust speed here
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-[100] bg-[#FFDA63] flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none -translate-y-full"
      }`}
    >
      <div className="relative w-full max-w-lg px-8 flex flex-col items-center">
        
        {/* Floating Icons from Design */}
        <div className="absolute -top-32 -left-20 animate-bounce-custom">
           <Code className="w-12 h-12 text-black/80" />
        </div>
        <div className="absolute top-0 -right-24 animate-bounce-custom delay-300">
           <Terminal className="w-10 h-10 text-black/80" />
        </div>
        <div className="absolute -bottom-20 -left-16 animate-bounce-custom delay-500">
           <Monitor className="w-14 h-14 text-black/80" />
        </div>

        {/* Hand Pointer Icon */}
        <div className="mb-8 animate-pulse">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
            <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
            <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
            <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
          </svg>
        </div>

        {/* Initials Blocks (P and M) */}
        <div className="flex justify-center gap-2 mb-6">
          <div className="w-20 h-20 border-4 border-black bg-[#3ABEF9] flex items-center justify-center text-4xl font-headline font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            P
          </div>
          <div className="w-20 h-20 border-4 border-black bg-[#FF5BAE] flex items-center justify-center text-4xl font-headline font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            M
          </div>
        </div>

        {/* Progress Underline (from image) */}
        <div className="w-32 h-2 bg-black/20 rounded-full relative mb-12">
          <div 
            className="absolute inset-y-0 left-0 bg-black transition-all duration-100 ease-linear rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <p className="text-center font-code font-bold text-lg uppercase tracking-tighter">
          {Math.round(progress)}% INITIALIZING...
        </p>
      </div>
    </div>
  );
}

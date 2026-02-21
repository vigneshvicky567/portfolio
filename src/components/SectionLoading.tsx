
"use client";

import React, { useRef } from "react";
import { useScrollProgress } from "@/hooks/use-scroll-progress";
import { Monitor, Save, Code, FileCode } from "lucide-react";

export function SectionLoading() {
  const containerRef = useRef<HTMLDivElement>(null);
  const progress = useScrollProgress(containerRef);

  return (
    <section ref={containerRef} className="relative min-h-screen bg-primary flex flex-col items-center justify-center py-20 overflow-hidden">
      <div className="relative w-full max-w-lg px-8">
        
        {/* Floating Icons */}
        <div className="absolute -top-32 left-0 animate-bounce-custom delay-100">
           <Monitor className="w-12 h-12" />
        </div>
        <div className="absolute -top-40 right-10 animate-bounce-custom delay-300">
           <Save className="w-10 h-10" />
        </div>
        <div className="absolute top-20 -left-16 animate-bounce-custom delay-500">
           <Code className="w-14 h-14" />
        </div>
        <div className="absolute bottom-10 -right-20 animate-bounce-custom delay-200">
           <FileCode className="w-12 h-12" />
        </div>

        {/* Bouncing Initials */}
        <div className="flex justify-center gap-12 mb-12">
          <div 
            className="w-24 h-24 hand-drawn-border bg-white flex items-center justify-center text-5xl font-headline font-black transform transition-transform"
            style={{ transform: `translateY(${(1 - progress) * -300}px) rotate(${(1 - progress) * 20}deg)` }}
          >
            S
          </div>
          <div 
            className="w-24 h-24 hand-drawn-border bg-white flex items-center justify-center text-5xl font-headline font-black transform transition-transform"
            style={{ transform: `translateY(${(1 - progress) * -400}px) rotate(${(1 - progress) * -15}deg)` }}
          >
            F
          </div>
        </div>

        {/* Loading Bar */}
        <div className="w-full h-12 hand-drawn-border bg-white relative overflow-hidden">
          <div 
            className="absolute inset-y-0 left-0 bg-secondary transition-all duration-100 ease-linear"
            style={{ width: `${progress * 100}%` }}
          />
          <div className="absolute inset-0 flex items-center justify-center font-code font-bold z-10">
            {Math.round(progress * 100)}% LOADED
          </div>
        </div>
        
        <p className="text-center mt-6 font-headline font-bold text-xl uppercase tracking-widest">
          {progress > 0.9 ? "Ready to roll!" : "Scrolling deep..."}
        </p>
      </div>
    </section>
  );
}

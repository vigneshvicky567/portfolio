
"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useScrollProgress } from "@/hooks/use-scroll-progress";
import { HandDrawnCard } from "./HandDrawnCard";

const TECH_TAGS = [
  { name: "Node.js", top: "10%", left: "15%", delay: "0s", parallax: 50 },
  { name: "React", top: "25%", right: "10%", delay: "0.1s", parallax: -30 },
  { name: "Python", bottom: "30%", left: "5%", delay: "0.2s", parallax: 80 },
  { name: "HTML5", bottom: "15%", right: "20%", delay: "0.3s", parallax: -40 },
  { name: "PostgreSQL", top: "50%", left: "20%", delay: "0.4s", parallax: 20 },
  { name: "AWS", top: "40%", right: "25%", delay: "0.5s", parallax: -60 },
];

export function SectionHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const progress = useScrollProgress(containerRef);

  return (
    <section ref={containerRef} className="relative min-h-screen bg-background flex flex-col items-center justify-center overflow-hidden py-20">
      <div className="relative z-10 text-center">
        <div className="mb-8 relative inline-block">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-black overflow-hidden bg-secondary relative z-10">
            <Image 
              src="https://picsum.photos/seed/marjo-avatar/400/400" 
              alt="Avatar" 
              fill
              className="object-cover"
              data-ai-hint="sketch avatar"
            />
          </div>
          {/* Sketchy accent behind avatar */}
          <div className="absolute -inset-4 bg-primary rounded-full -z-0 transform rotate-3" />
        </div>
        
        <HandDrawnCard className="px-8 py-4 mb-4 transform -rotate-1">
          <h1 className="font-headline text-4xl md:text-6xl font-black">MARJO BALLABANI</h1>
        </HandDrawnCard>
        
        <p className="font-code text-lg md:text-xl font-bold bg-white inline-block px-4 border-2 border-black">
          FULL-STACK DEVELOPER & CREATIVE TECHNOLOGIST
        </p>
      </div>

      {/* Floating Technology Tags */}
      {TECH_TAGS.map((tag, idx) => {
        const isActive = progress > 0.1;
        return (
          <div 
            key={tag.name}
            className={`absolute z-20 transition-all duration-700 ${isActive ? 'animate-pop-in' : 'opacity-0 scale-0'}`}
            style={{
              top: tag.top,
              bottom: tag.bottom,
              left: tag.left,
              right: tag.right,
              animationDelay: tag.delay,
              transform: `translateY(${(progress - 0.5) * tag.parallax}px)`
            }}
          >
            <span className="bg-white border-2 border-black px-4 py-1 font-code text-sm font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              {tag.name}
            </span>
          </div>
        );
      })}

      {/* Background doodles */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <Image 
          src="https://picsum.photos/seed/sketch-bg/1200/800" 
          alt="Doodles" 
          fill
          className="object-cover"
          data-ai-hint="doodle patterns"
        />
      </div>
    </section>
  );
}

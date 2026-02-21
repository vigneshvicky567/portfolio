
"use client";

import React, { useRef } from "react";
import { HandDrawnCard } from "./HandDrawnCard";
import { useScrollProgress } from "@/hooks/use-scroll-progress";
import { cn } from "@/lib/utils";

const SKILLS = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  Languages: ["JavaScript", "Python", "Go", "Rust", "SQL"],
  Backend: ["Node.js", "Express", "PostgreSQL", "Firebase", "Redis"],
  Tools: ["Git", "Docker", "VS Code", "Figma", "Terminal"]
};

export function SectionSkills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const progress = useScrollProgress(containerRef);

  // Transition effect: Fade out/shrink content as scroll finishes
  const opacity = Math.max(0, 1 - progress * 2);
  const scale = Math.max(0.8, 1 - progress * 0.2);

  return (
    <section ref={containerRef} className="relative min-h-screen py-24 flex flex-col items-center justify-center overflow-hidden">
      <div 
        style={{ opacity, transform: `scale(${scale})` }}
        className="w-full max-w-5xl px-4 transition-all duration-300"
      >
        <div className="mb-12 text-center">
          <h2 className="font-headline text-5xl md:text-7xl font-bold mb-4">SKILLS</h2>
          <p className="font-code text-muted-foreground">/usr/bin/expertise</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(SKILLS).map(([category, items]) => (
            <HandDrawnCard key={category} className="p-6">
              <h3 className="font-headline text-2xl font-bold mb-4 border-b-2 border-black inline-block">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map(skill => (
                  <span key={skill} className="pill-skill">
                    {skill}
                  </span>
                ))}
              </div>
            </HandDrawnCard>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <HandDrawnCard bg="bg-secondary" className="p-4 transform -rotate-2 hover:rotate-0">
            <p className="font-headline text-xl font-bold">GET IN TOUCH? ↓</p>
          </HandDrawnCard>
        </div>
      </div>
      
      {/* Background layer that fills up as we scroll */}
      <div 
        className="absolute inset-0 bg-primary -z-10 transition-transform duration-500 origin-bottom"
        style={{ transform: `translateY(${(1 - progress) * 100}%)` }}
      />
    </section>
  );
}

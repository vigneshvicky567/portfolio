
"use client";

import React, { useRef } from "react";
import { HandDrawnCard } from "./HandDrawnCard";
import { useScrollProgress } from "@/hooks/use-scroll-progress";
import { Code2, Globe2, Wrench, Heart } from "lucide-react";

const SKILLS = [
  {
    category: "Programming",
    icon: <Code2 className="w-6 h-6" />,
    items: ["Python", "Java", "SQL"]
  },
  {
    category: "Web Tech",
    icon: <Globe2 className="w-6 h-6" />,
    items: ["HTML5", "CSS3", "JavaScript"]
  },
  {
    category: "Tools",
    icon: <Wrench className="w-6 h-6" />,
    items: ["Git", "GitHub", "VSCode"]
  },
  {
    category: "Soft Skills",
    icon: <Heart className="w-6 h-6" />,
    items: ["Communication", "Team Collaboration", "Leadership", "Time Management"]
  }
];

export function SectionSkills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const progress = useScrollProgress(containerRef);

  // Trigger animations much earlier and faster
  const opacity = Math.min(1, Math.max(0, (progress - 0.05) * 5));
  const scale = 0.98 + (Math.min(1, Math.max(0, (progress - 0.05) * 5)) * 0.02);

  return (
    <section id="skills" ref={containerRef} className="relative py-16 md:py-24 flex flex-col items-center justify-center overflow-hidden">
      <div 
        style={{ 
          opacity, 
          transform: `scale(${scale})` 
        }}
        className="w-full max-w-5xl px-4 transition-all duration-300 ease-out z-10"
      >
        <div className="mb-10 text-center">
          <h2 className="font-headline text-5xl md:text-8xl font-black mb-2 uppercase tracking-tighter">SKILLS</h2>
          <p className="font-code text-xs md:text-sm text-muted-foreground uppercase tracking-widest">/usr/bin/expertise</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {SKILLS.map((skillGroup, idx) => (
            <HandDrawnCard 
              key={skillGroup.category} 
              className={`p-6 md:p-8 transition-all duration-500 border-4 border-black ${
                progress > 0.1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 border-4 border-black bg-primary flex items-center justify-center shrink-0">
                  {skillGroup.icon}
                </div>
                <h3 className="font-headline text-2xl md:text-3xl font-black uppercase">{skillGroup.category}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map(skill => (
                  <span key={skill} className="pill-skill text-sm md:text-lg px-4 py-2 bg-background whitespace-nowrap border-2 border-black font-bold">
                    {skill}
                  </span>
                ))}
              </div>
            </HandDrawnCard>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <HandDrawnCard bg="bg-secondary" className="p-4 md:p-6 border-4 border-black transform -rotate-2 hover:rotate-0 transition-transform">
            <p className="font-headline text-xl md:text-2xl font-black uppercase text-center">Building the future with data ↓</p>
          </HandDrawnCard>
        </div>
      </div>
      
      {/* Background fill based on scroll progress */}
      <div 
        className="absolute inset-0 bg-primary -z-10 transition-transform duration-500 origin-bottom ease-out"
        style={{ transform: `scaleY(${progress})` }}
      />
    </section>
  );
}


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

  const opacity = Math.max(0, 1 - progress * 1.5);
  const scale = Math.max(0.9, 1 - progress * 0.1);

  return (
    <section id="skills" ref={containerRef} className="relative min-h-screen py-24 flex flex-col items-center justify-center overflow-hidden">
      <div 
        style={{ opacity, transform: `scale(${scale})` }}
        className="w-full max-w-5xl px-4 transition-all duration-300"
      >
        <div className="mb-12 text-center">
          <h2 className="font-headline text-6xl md:text-8xl font-black mb-4">SKILLS</h2>
          <p className="font-code text-muted-foreground">/usr/bin/expertise</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILLS.map((skillGroup) => (
            <HandDrawnCard key={skillGroup.category} className="p-8 group hover:bg-white hover:rotate-1 transition-all">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 border-4 border-black bg-primary flex items-center justify-center">
                  {skillGroup.icon}
                </div>
                <h3 className="font-headline text-3xl font-black uppercase">{skillGroup.category}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map(skill => (
                  <span key={skill} className="pill-skill text-lg px-4 py-2 bg-background">
                    {skill}
                  </span>
                ))}
              </div>
            </HandDrawnCard>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <HandDrawnCard bg="bg-secondary" className="p-6 transform -rotate-2 hover:rotate-0">
            <p className="font-headline text-2xl font-black uppercase">Building the future with data ↓</p>
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

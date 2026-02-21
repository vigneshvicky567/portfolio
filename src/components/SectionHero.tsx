
"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { HandDrawnCard } from "./HandDrawnCard";
import { Button } from "./ui/button";
import { Code, Terminal, Database, Globe, Cpu, Layers, Github, Linkedin, Sparkles } from "lucide-react";

const TECH_TAGS = [
  { name: "Python", icon: <Terminal className="w-4 h-4" /> },
  { name: "Java", icon: <Cpu className="w-4 h-4" /> },
  { name: "SQL", icon: <Database className="w-4 h-4" /> },
  { name: "HTML5", icon: <Globe className="w-4 h-4" /> },
  { name: "CSS3", icon: <Layers className="w-4 h-4" /> },
  { name: "JavaScript", icon: <Code className="w-4 h-4" /> },
  { name: "Git", icon: <Github className="w-4 h-4" /> },
  { name: "VSCode", icon: <Terminal className="w-4 h-4" /> },
];

export function SectionHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="hero" ref={containerRef} className="relative min-h-screen bg-white flex flex-col items-center justify-center overflow-hidden pt-32 pb-20 px-4">
      {/* Grid Background Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, black 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        
        {/* Left Column: Text Content */}
        <div className="space-y-6">
          <div className="text-blue-500 font-headline font-bold text-2xl animate-bounce flex items-center gap-2">
            Hi there! 🚀
          </div>
          
          <h1 className="text-5xl md:text-7xl font-headline font-black leading-tight">
            I'm Prasannalakshmi MD.
          </h1>
          
          <p className="text-lg md:text-xl font-body font-medium max-w-xl text-muted-foreground leading-relaxed">
            Highly motivated <span className="text-black font-bold">Computer Science undergraduate</span> specializing in AI and Data Science. Proficient in Java, Python, SQL, and full-stack development. Seeking to leverage technical expertise and strong leadership skills to create innovative software solutions.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Button className="sketch-button bg-blue-400 hover:bg-blue-500 h-14 px-8 text-lg">
              Get in Touch!
            </Button>
            <Button variant="outline" className="hand-drawn-border h-14 px-8 text-lg bg-white flex items-center gap-2">
              <Linkedin className="w-5 h-5 text-[#0077B5]" />
              Connect on LinkedIn
            </Button>
          </div>
        </div>

        {/* Right Column: Visual Content */}
        <div className="relative flex justify-center">
          <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]">
            {/* Avatar Frame */}
            <HandDrawnCard className="w-full h-full p-0 overflow-hidden relative z-10 bg-[#FFDA63]">
               <Image 
                src="https://picsum.photos/seed/prasanna-hero/600/600" 
                alt="Prasannalakshmi MD" 
                fill 
                className="object-cover"
                data-ai-hint="friendly avatar"
               />
               <div className="absolute top-2 right-2 flex gap-2">
                 <div className="w-8 h-8 bg-white border-2 border-black rotate-12 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-blue-500" />
                 </div>
               </div>
            </HandDrawnCard>

            {/* Floating Badges/Icons */}
            <div className="absolute -top-6 -left-6 z-20 animate-bounce-custom">
               <HandDrawnCard className="p-3 bg-white rotate-[-15deg]">
                 <Database className="w-8 h-8 text-blue-500" />
               </HandDrawnCard>
            </div>
            
            <div className="absolute top-1/2 -right-10 z-20 animate-bounce-custom" style={{ animationDelay: '0.5s' }}>
               <HandDrawnCard className="p-3 bg-yellow-400 rotate-[10deg]">
                 <Terminal className="w-8 h-8" />
               </HandDrawnCard>
            </div>

            <div className="absolute -bottom-4 -left-8 z-20">
               <HandDrawnCard className="p-2 bg-green-300 rotate-[5deg]">
                 <div className="w-6 h-6 border-2 border-black rounded-full flex items-center justify-center font-bold">AI</div>
               </HandDrawnCard>
            </div>

            <div className="absolute -bottom-4 right-0 z-20">
               <HandDrawnCard className="bg-[#4CAF50] text-white px-4 py-1 font-bold text-sm border-4 border-black">
                 AI & Data Science
               </HandDrawnCard>
            </div>

            {/* Background elements */}
            <div className="absolute -inset-4 bg-primary -z-0 transform rotate-3" />
          </div>
        </div>
      </div>

      {/* Bottom Tech Tags Row */}
      <div className="w-full max-w-7xl mt-20 flex flex-wrap justify-center gap-4">
        {TECH_TAGS.map((tag, i) => (
          <HandDrawnCard key={i} className="px-6 py-2 flex items-center gap-2 hover:bg-primary transition-colors cursor-default">
            {tag.icon}
            <span className="font-code font-bold text-sm">{tag.name}</span>
          </HandDrawnCard>
        ))}
      </div>
    </section>
  );
}

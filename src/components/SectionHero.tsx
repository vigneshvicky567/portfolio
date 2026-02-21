"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { HandDrawnCard } from "./HandDrawnCard";
import { Button } from "./ui/button";
import { Code, Terminal, Database, Coffee } from "lucide-react";

const TECH_TAGS = [
  { name: "Python" },
  { name: "Java" },
  { name: "SQL" },
  { name: "HTML5" },
  { name: "CSS3" },
  { name: "JavaScript" },
  { name: "Git" },
  { name: "GitHub" },
  { name: "VSCode" },
];

export function SectionHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="hero" ref={containerRef} className="relative min-h-screen bg-[#FFDA63] flex flex-col items-center justify-center pt-24 pb-16 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        
        <div className="space-y-6 text-center lg:text-left">
          <div className="relative inline-block">
            <div className="bg-white border-4 border-black px-4 py-2 rounded-2xl -rotate-3 font-headline font-black text-xl animate-bounce shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              Hi there! 🚀
            </div>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-headline font-black leading-tight text-black">
            I'm Prasannalakshmi MD.
          </h1>
          
          <p className="text-lg md:text-xl font-body font-medium max-w-xl mx-auto lg:mx-0 text-black/80 leading-relaxed">
            Highly motivated <span className="underline decoration-pink-500 decoration-4">Computer Science undergraduate</span> specializing in AI and Data Science. Proficient in Java, Python, SQL, and full-stack development.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
            <Button className="bg-[#FF4D4D] hover:bg-[#FF4D4D]/90 text-white rounded-full h-14 px-10 text-lg font-black border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              Get in Touch!
            </Button>
            
            <a 
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white text-black border-4 border-black px-6 py-3 font-black text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
            >
              <div className="w-6 h-6 bg-[#0077B5] flex items-center justify-center border-2 border-black" aria-hidden="true">
                <span className="text-white text-[12px] font-black">in</span>
              </div>
              Connect on LinkedIn
            </a>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-2 pt-4">
            <div className="flex items-center gap-2 font-headline font-bold text-base hover:underline cursor-pointer group">
              <div className="p-1.5 bg-white border-2 border-black rounded-full group-hover:bg-yellow-100">
                <Coffee className="w-4 h-4" />
              </div>
              Buy me a coffee
            </div>
          </div>
        </div>

        <div className="relative flex justify-center order-first lg:order-last">
          <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px]">
            <div className="w-full h-full p-0 overflow-hidden relative z-10 bg-white border-8 border-black rounded-full shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
               <Image 
                src="/profile.jpeg"
                alt="Prasannalakshmi MD smiling avatar" 
                fill 
                className="object-cover"
                priority // LCP Optimization
                sizes="(max-width: 768px) 280px, (max-width: 1200px) 450px, 450px"
                data-ai-hint="friendly avatar"
                unoptimized
               />
            </div>

            <div className="absolute -top-4 -left-4 z-20 animate-bounce-custom">
               <HandDrawnCard className="p-3 bg-white border-4 border-black rounded-xl -rotate-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                 <Code className="w-8 h-8 text-blue-500" />
               </HandDrawnCard>
            </div>
            
            <div className="absolute top-1/4 -right-6 z-20 animate-bounce-custom" style={{ animationDelay: '0.5s' }}>
               <HandDrawnCard className="p-3 bg-white border-4 border-black rounded-xl rotate-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                 <Terminal className="w-8 h-8 text-yellow-500" />
               </HandDrawnCard>
            </div>

            <div className="absolute bottom-1/4 -left-10 z-20 animate-bounce-custom" style={{ animationDelay: '1s' }}>
               <HandDrawnCard className="p-3 bg-white border-4 border-black rounded-xl -rotate-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                 <Database className="w-8 h-8 text-blue-500" />
               </HandDrawnCard>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-7xl mt-12 flex flex-col items-center gap-6">
        <div className="flex flex-wrap justify-center gap-3 px-2">
          {TECH_TAGS.map((tag, i) => (
            <div key={i} className="bg-white/70 border-2 border-black rounded-full px-5 py-2 font-headline font-bold text-sm md:text-base shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              {tag.name}
            </div>
          ))}
        </div>
        <Button className="bg-[#3ABEF9] hover:bg-[#3ABEF9]/90 text-black border-4 border-black font-black px-10 py-4 h-auto rounded-xl text-lg shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          Full-stack Ninja
        </Button>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-24 bg-transparent torn-edge-svg z-30" aria-hidden="true" />
    </section>
  );
}

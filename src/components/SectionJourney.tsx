
"use client";

import React, { useRef } from "react";
import { useScrollProgress } from "@/hooks/use-scroll-progress";
import { HandDrawnCard } from "./HandDrawnCard";
import { GraduationCap, BookOpen, School, Languages } from "lucide-react";

const EDUCATION = [
  { 
    year: "2022 - 2026", 
    institution: "Siddharth Institute", 
    degree: "BTech in CSE (AI & DS)", 
    score: "92.22%",
    description: "Specializing in AI and Data Science. Currently 1st rank in department.",
    icon: <GraduationCap className="w-5 h-5" />
  },
  { 
    year: "2020 - 2022", 
    institution: "Sri Sai Jyothi College", 
    degree: "HSC", 
    score: "97.8%",
    description: "Focused on MPC. Academic excellence with top scores.",
    icon: <School className="w-5 h-5" />
  },
  { 
    year: "2019 - 2020", 
    institution: "Jnana Jyothi Vidya Mandir", 
    degree: "SSLC", 
    score: "85.5%",
    description: "Foundational education with strong focus on science.",
    icon: <BookOpen className="w-5 h-5" />
  }
];

const LANGUAGES = [
  { name: "English", level: "Fluent" },
  { name: "Telugu", level: "Native" },
  { name: "Tamil", level: "Conversational" }
];

export function SectionJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  const progress = useScrollProgress(containerRef);

  return (
    <section id="journey" ref={containerRef} className="min-h-screen bg-white py-16 md:py-24 px-4 md:px-8 flex flex-col items-center">
      <div className="max-w-6xl w-full">
        <div className="mb-8 md:mb-12 text-center">
          <h2 className="text-4xl md:text-6xl font-headline font-black uppercase inline-block border-b-4 md:border-b-8 border-black pb-2">
            Education
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Main Education Timeline Area */}
          <div className="lg:col-span-2 space-y-4 md:space-y-8">
            {EDUCATION.map((edu, i) => {
              // Trigger activation when the item is roughly in the middle 60% of viewport
              const threshold = 0.2 + (i / EDUCATION.length) * 0.5;
              const isActive = progress > threshold;
              
              return (
                <HandDrawnCard 
                  key={i} 
                  className={`p-5 md:p-8 transition-all duration-700 ease-out ${
                    isActive ? 'rotate-0 translate-x-0 opacity-100 bg-white' : 'rotate-2 translate-x-4 opacity-0 bg-gray-50'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 md:gap-4 mb-3 md:mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 md:w-12 md:h-12 border-2 md:border-4 border-black bg-blue-300 flex items-center justify-center shrink-0">
                        {edu.icon}
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-headline font-black text-xl md:text-2xl uppercase truncate">{edu.institution}</h3>
                        <p className="font-code text-xs md:text-sm font-bold text-blue-600 truncate">{edu.degree}</p>
                      </div>
                    </div>
                    <div className="bg-primary border-2 border-black px-3 md:px-4 py-1 font-black text-[10px] md:text-sm rotate-1 sm:rotate-2 self-start sm:self-center">
                      {edu.year}
                    </div>
                  </div>
                  <p className="font-body text-xs md:text-base mb-3 md:mb-4">{edu.description}</p>
                  <div className="inline-block bg-green-300 border-2 border-black px-2 md:px-3 py-0.5 font-black text-[10px] md:text-sm">
                    RESULT: {edu.score}
                  </div>
                </HandDrawnCard>
              );
            })}
          </div>

          {/* Languages & Extra Info Area */}
          <div className="space-y-4 md:space-y-8">
            <HandDrawnCard 
              className={`p-6 md:p-8 bg-yellow-50 transition-all duration-1000 ${progress > 0.4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <div className="flex items-center gap-2 mb-4 md:mb-6">
                <Languages className="w-5 h-5 md:w-6 md:h-6" />
                <h3 className="font-headline font-black text-xl md:text-2xl uppercase">Languages</h3>
              </div>
              <div className="space-y-3 md:space-y-4">
                {LANGUAGES.map((lang) => (
                  <div key={lang.name} className="flex justify-between items-center border-b-2 border-black/10 pb-2">
                    <span className="font-headline font-bold text-base md:text-lg">{lang.name}</span>
                    <span className="font-code text-[10px] bg-white border border-black px-2 py-0.5">{lang.level}</span>
                  </div>
                ))}
              </div>
            </HandDrawnCard>

            <HandDrawnCard 
              className={`p-6 md:p-8 bg-blue-50 relative overflow-hidden transition-all duration-1000 delay-300 ${progress > 0.6 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
               <div className="relative z-10">
                 <h3 className="font-headline font-black text-xl md:text-2xl uppercase mb-3 md:mb-4">Current Focus</h3>
                 <p className="font-body text-xs md:text-sm">
                   Deep diving into Machine Learning and Full-Stack development. Currently working on multiple disease prediction models using AI.
                 </p>
               </div>
               <div className="absolute -bottom-4 -right-4 opacity-10">
                 <GraduationCap className="w-24 h-24 md:w-32 md:h-32" />
               </div>
            </HandDrawnCard>
          </div>
        </div>
      </div>
    </section>
  );
}

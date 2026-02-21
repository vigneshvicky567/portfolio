
"use client";

import React, { useRef } from "react";
import { useScrollProgress } from "@/hooks/use-scroll-progress";
import { HandDrawnCard } from "./HandDrawnCard";
import { GraduationCap, BookOpen, School, Languages } from "lucide-react";

const EDUCATION = [
  { 
    year: "2022 - 2026", 
    institution: "SIDDHARTH INSTITUTE", 
    degree: "BTech in CSE (AI & DS)", 
    score: "92.22%",
    description: "Specializing in AI and Data Science. Currently 1st rank in department.",
    icon: <GraduationCap className="w-5 h-5" />
  },
  { 
    year: "2020 - 2022", 
    institution: "SRI SAI JYOTHI COLLEGE", 
    degree: "HSC", 
    score: "97.8%",
    description: "Focused on MPC. Academic excellence with top scores.",
    icon: <School className="w-5 h-5" />
  },
  { 
    year: "2019 - 2020", 
    institution: "JNANA JYOTHI VIDYA MANDIR", 
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
    <section id="journey" ref={containerRef} className="py-12 md:py-20 px-4 md:px-8 bg-white flex flex-col items-center">
      <div className="max-w-6xl w-full">
        <div className="mb-10 text-center">
          <h2 className="text-4xl md:text-6xl font-headline font-black uppercase inline-block border-b-8 border-black pb-2">
            Education
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-10 items-start">
          {/* Main Education Timeline Area */}
          <div className="lg:col-span-2 space-y-6 md:space-y-8">
            {EDUCATION.map((edu, i) => {
              // Trigger sooner: start appearing when section is 5% in view
              const threshold = 0.05 + (i * 0.1);
              const isActive = progress > threshold;
              
              return (
                <HandDrawnCard 
                  key={i} 
                  className={`p-6 md:p-8 transition-all duration-700 ease-out border-4 border-black ${
                    isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 border-4 border-black bg-blue-300 flex items-center justify-center shrink-0">
                        {edu.icon}
                      </div>
                      <div>
                        <h3 className="font-headline font-black text-xl md:text-2xl uppercase">{edu.institution}</h3>
                        <p className="font-code text-xs md:text-sm font-bold text-blue-600">{edu.degree}</p>
                      </div>
                    </div>
                    <div className="bg-primary border-4 border-black px-4 py-1 font-black text-xs md:text-sm whitespace-nowrap shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      {edu.year}
                    </div>
                  </div>
                  <p className="font-body text-sm md:text-base mb-4 text-muted-foreground">{edu.description}</p>
                  <div className="inline-block bg-green-300 border-4 border-black px-3 py-1 font-black text-xs md:text-sm uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    RESULT: {edu.score}
                  </div>
                </HandDrawnCard>
              );
            })}
          </div>

          {/* Languages Sidebar */}
          <div className="sticky top-24">
            <HandDrawnCard 
              className={`p-6 md:p-8 bg-yellow-50 border-4 border-black transition-all duration-1000 ${progress > 0.1 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
            >
              <div className="flex items-center gap-2 mb-6 border-b-4 border-black pb-2">
                <Languages className="w-6 h-6" />
                <h3 className="font-headline font-black text-2xl uppercase tracking-tighter">Languages</h3>
              </div>
              <div className="space-y-6">
                {LANGUAGES.map((lang) => (
                  <div key={lang.name} className="flex justify-between items-center group">
                    <span className="font-headline font-bold text-xl uppercase">{lang.name}</span>
                    <span className="font-code text-[10px] bg-white border-2 border-black px-3 py-1 uppercase font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </HandDrawnCard>
          </div>
        </div>
      </div>
    </section>
  );
}


"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useScrollProgress } from "@/hooks/use-scroll-progress";
import { HandDrawnCard } from "./HandDrawnCard";
import { GraduationCap, BookOpen, School, Languages } from "lucide-react";

const EDUCATION = [
  { 
    year: "2022 - 2026", 
    institution: "Siddharth Institute of Engineering and Technology", 
    degree: "BTech in Computer Science", 
    score: "92.22%",
    description: "Specializing in AI and Data Science. Currently maintaining 1st rank in the department.",
    icon: <GraduationCap className="w-5 h-5" />
  },
  { 
    year: "2020 - 2022", 
    institution: "Sri Sai Jyothi Junior College", 
    degree: "HSC (Higher Secondary Certificate)", 
    score: "97.8%",
    description: "Focused on Mathematics, Physics, and Chemistry. Academic excellence with top scores.",
    icon: <School className="w-5 h-5" />
  },
  { 
    year: "2019 - 2020", 
    institution: "Jnana Jyothi Vidya Mandir", 
    degree: "SSLC (Secondary School Leaving Certificate)", 
    score: "85.5%",
    description: "Foundational education with a strong focus on science and computers.",
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
    <section id="journey" ref={containerRef} className="min-h-screen bg-white py-24 px-4 flex flex-col items-center">
      <div className="max-w-6xl w-full">
        <div className="mb-12 text-center">
          <h2 className="text-6xl font-headline font-black uppercase inline-block border-b-8 border-black pb-2">
            Education
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Education Timeline Area */}
          <div className="lg:col-span-2 space-y-8">
            {EDUCATION.map((edu, i) => {
              const isActive = progress > (i / EDUCATION.length);
              return (
                <HandDrawnCard key={i} className={`p-8 transition-all duration-500 ${isActive ? 'rotate-0 bg-white' : 'rotate-1 bg-gray-50 opacity-60'}`}>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 border-4 border-black bg-blue-300 flex items-center justify-center">
                        {edu.icon}
                      </div>
                      <div>
                        <h3 className="font-headline font-black text-2xl uppercase">{edu.institution}</h3>
                        <p className="font-code text-sm font-bold text-blue-600">{edu.degree}</p>
                      </div>
                    </div>
                    <div className="bg-primary border-2 border-black px-4 py-1 font-black text-sm rotate-2">
                      {edu.year}
                    </div>
                  </div>
                  <p className="font-body mb-4">{edu.description}</p>
                  <div className="inline-block bg-green-300 border-2 border-black px-3 py-0.5 font-black text-sm">
                    RESULT: {edu.score}
                  </div>
                </HandDrawnCard>
              );
            })}
          </div>

          {/* Languages & Extra Info Area */}
          <div className="space-y-8">
            <HandDrawnCard className="p-8 bg-yellow-50">
              <div className="flex items-center gap-2 mb-6">
                <Languages className="w-6 h-6" />
                <h3 className="font-headline font-black text-2xl uppercase">Languages</h3>
              </div>
              <div className="space-y-4">
                {LANGUAGES.map((lang) => (
                  <div key={lang.name} className="flex justify-between items-center border-b-2 border-black/10 pb-2">
                    <span className="font-headline font-bold text-lg">{lang.name}</span>
                    <span className="font-code text-xs bg-white border border-black px-2 py-0.5">{lang.level}</span>
                  </div>
                ))}
              </div>
            </HandDrawnCard>

            <HandDrawnCard className="p-8 bg-blue-50 relative overflow-hidden">
               <div className="relative z-10">
                 <h3 className="font-headline font-black text-2xl uppercase mb-4">Current Focus</h3>
                 <p className="font-body text-sm">
                   Deep diving into Machine Learning and Full-Stack development. Currently working on multiple disease prediction models using AI.
                 </p>
               </div>
               <div className="absolute -bottom-4 -right-4 opacity-10">
                 <GraduationCap className="w-32 h-32" />
               </div>
            </HandDrawnCard>
          </div>
        </div>
      </div>
    </section>
  );
}

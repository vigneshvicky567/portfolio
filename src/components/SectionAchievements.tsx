
"use client";

import React from "react";
import { HandDrawnCard } from "./HandDrawnCard";
import { Award, Trophy, Star, Medal } from "lucide-react";

const CERTIFICATIONS = [
  { name: "NPTEL Certified", detail: "The Joy of Computing Using Python" },
  { name: "EDX Certified", detail: "Introduction to Game Development" },
  { name: "IBM Skillsbuild", detail: "Artificial Intelligence Fundamentals" }
];

const ACHIEVEMENTS = [
  { 
    title: "Academic Topper", 
    detail: "1st rank with 92.22% (AIDS Department, 2026)", 
    icon: <Trophy className="w-8 h-8 text-yellow-500" /> 
  },
  { 
    title: "2nd Prize Poster Presentation", 
    detail: "Recognized for outstanding visual communication (SIETK, 2025)", 
    icon: <Award className="w-8 h-8 text-blue-500" /> 
  }
];

export function SectionAchievements() {
  return (
    <section className="py-24 px-4 bg-primary/20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Certifications Card */}
          <HandDrawnCard className="p-8 bg-white">
            <div className="flex items-center gap-3 mb-8">
              <Medal className="w-10 h-10" />
              <h2 className="text-4xl font-headline font-black uppercase">Certifications</h2>
            </div>
            <div className="space-y-6">
              {CERTIFICATIONS.map((cert, i) => (
                <div key={i} className="flex items-start gap-4 p-4 border-2 border-black border-dashed rounded-lg bg-gray-50">
                  <Star className="w-5 h-5 mt-1 fill-yellow-400" />
                  <div>
                    <h4 className="font-headline font-black text-xl uppercase">{cert.name}</h4>
                    <p className="font-body text-sm">{cert.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </HandDrawnCard>

          {/* Achievements Card */}
          <HandDrawnCard className="p-8 bg-white">
            <div className="flex items-center gap-3 mb-8">
              <Trophy className="w-10 h-10" />
              <h2 className="text-4xl font-headline font-black uppercase">Achievements</h2>
            </div>
            <div className="space-y-6">
              {ACHIEVEMENTS.map((ach, i) => (
                <div key={i} className="flex items-center gap-6 p-6 border-4 border-black bg-yellow-50">
                  <div className="shrink-0 p-3 border-2 border-black bg-white rounded-full">
                    {ach.icon}
                  </div>
                  <div>
                    <h4 className="font-headline font-black text-xl uppercase">{ach.title}</h4>
                    <p className="font-body">{ach.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </HandDrawnCard>

        </div>
      </div>
    </section>
  );
}

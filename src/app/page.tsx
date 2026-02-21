
"use client";

import React, { useState, useEffect } from "react";
import { SectionSkills } from "@/components/SectionSkills";
import { SectionLoading } from "@/components/SectionLoading";
import { SectionHero } from "@/components/SectionHero";
import { SectionAbout } from "@/components/SectionAbout";
import { SectionJourney } from "@/components/SectionJourney";
import { SectionProjects } from "@/components/SectionProjects";
import { SectionAchievements } from "@/components/SectionAchievements";
import { PirateCustomizer } from "@/components/PirateCustomizer";
import { HandDrawnCard } from "@/components/HandDrawnCard";
import { Header } from "@/components/Header";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary">
      {/* 1. Intro Loading Screen Overlay */}
      {loading && <SectionLoading onComplete={() => setLoading(false)} />}

      {/* Main Content (revealed after loading) */}
      <div className={`transition-opacity duration-1000 ${loading ? 'opacity-0 h-screen overflow-hidden' : 'opacity-100'}`}>
        {/* Floating Navigation Header */}
        <Header />

        {/* 2. Main Hero Section */}
        <SectionHero />

        {/* 3. About Section */}
        <SectionAbout />

        {/* 4. Projects Section */}
        <SectionProjects />
        
        {/* 5. Education Journey Section */}
        <SectionJourney />

        {/* 6. Skills Section */}
        <SectionSkills />
        
        {/* 7. Achievements & Certifications */}
        <SectionAchievements />
        
        {/* 8. Interactive Tool */}
        <PirateCustomizer />

        {/* Footer */}
        <footer className="py-20 border-t-4 border-black bg-white flex flex-col items-center justify-center">
          <HandDrawnCard className="p-12 text-center max-w-lg">
            <h2 className="text-3xl font-headline font-black mb-4 uppercase">THANKS FOR STOPPING BY!</h2>
            <p className="font-body mb-8">
              Let's build something innovative together.
            </p>
            <div className="font-code text-sm uppercase">
              © 2024 PRASANNALAKSHMI MD / PORTFOLIO
            </div>
          </HandDrawnCard>
        </footer>
      </div>
    </main>
  );
}

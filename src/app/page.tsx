
"use client";

import React, { useEffect } from "react";
import { SectionSkills } from "@/components/SectionSkills";
import { SectionLoading } from "@/components/SectionLoading";
import { SectionHero } from "@/components/SectionHero";
import { SectionAbout } from "@/components/SectionAbout";
import { SectionJourney } from "@/components/SectionJourney";
import { PirateCustomizer } from "@/components/PirateCustomizer";
import { HandDrawnCard } from "@/components/HandDrawnCard";
import { ArrowDown, Mail, Github, Linkedin } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary">
      {/* Intro / Welcome Section */}
      <section className="h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden">
        <div className="max-w-4xl text-center z-10">
          <HandDrawnCard className="p-8 mb-12 transform rotate-1 inline-block">
             <h1 className="text-5xl md:text-8xl font-headline font-black leading-tight">
              SCROLL<span className="text-secondary">FOLIO</span>
             </h1>
          </HandDrawnCard>
          
          <p className="text-xl md:text-2xl font-code font-bold max-w-2xl mx-auto mb-12">
            A digital playground where resumes come to life through movement.
          </p>

          <div className="flex justify-center gap-6 mb-20">
             <a href="#" className="sketch-button flex items-center gap-2"><Github /></a>
             <a href="#" className="sketch-button flex items-center gap-2"><Linkedin /></a>
             <a href="#" className="sketch-button flex items-center gap-2"><Mail /></a>
          </div>

          <div className="flex flex-col items-center gap-4 animate-bounce">
            <p className="font-headline font-bold uppercase tracking-widest text-sm">Start your journey</p>
            <ArrowDown />
          </div>
        </div>

        {/* Floating background elements */}
        <div className="absolute top-20 left-10 w-32 h-32 border-4 border-black rounded-lg -rotate-12 opacity-10" />
        <div className="absolute bottom-20 right-10 w-48 h-48 border-4 border-black rounded-full rotate-12 opacity-10" />
      </section>

      {/* Main Experience Sections */}
      <SectionSkills />
      <SectionLoading />
      <SectionHero />
      <SectionAbout />
      <SectionJourney />
      
      {/* Interactive Tool */}
      <PirateCustomizer />

      {/* Footer */}
      <footer className="py-20 border-t-4 border-black bg-white flex flex-col items-center justify-center">
        <HandDrawnCard className="p-12 text-center max-w-lg">
          <h2 className="text-3xl font-headline font-black mb-4">THANKS FOR SCROLLING!</h2>
          <p className="font-body mb-8">
            This site was built with a lot of ink, pixels, and scroll-events.
          </p>
          <div className="font-code text-sm">
            © 2024 MARJO BALLABANI / SCROLLFOLIO.TS
          </div>
        </HandDrawnCard>
      </footer>
    </main>
  );
}

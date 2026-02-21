
"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useScrollProgress } from "@/hooks/use-scroll-progress";
import { HandDrawnCard } from "./HandDrawnCard";
import { Compass, Ship, Anchor } from "lucide-react";

const TIMELINE = [
  { year: "2013", location: "Albania", role: "Junior Developer", x: "70%", y: "80%" },
  { year: "2016", location: "Italy", role: "Backend Engineer", x: "40%", y: "70%" },
  { year: "2019", location: "Germany", role: "Senior Developer", x: "45%", y: "45%" },
  { year: "2024", location: "Munich", role: "Tech Lead", x: "48%", y: "52%" },
];

export function SectionJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  const progress = useScrollProgress(containerRef);

  // Map tilt calculations
  const rotateX = progress * 30; // Tilt from 0 to 30deg
  const rotateY = (progress - 0.5) * -10;

  // Pirate path calculation
  const getAvatarPosition = () => {
    const stepCount = TIMELINE.length - 1;
    const currentStepFloat = progress * stepCount;
    const currentIndex = Math.min(Math.floor(currentStepFloat), stepCount);
    const nextIndex = Math.min(currentIndex + 1, stepCount);
    const stepProgress = currentStepFloat - currentIndex;

    const start = TIMELINE[currentIndex];
    const end = TIMELINE[nextIndex];

    const x = parseFloat(start.x) + (parseFloat(end.x) - parseFloat(start.x)) * stepProgress;
    const y = parseFloat(start.y) + (parseFloat(end.y) - parseFloat(start.y)) * stepProgress;

    return { x: `${x}%`, y: `${y}%` };
  };

  const avatarPos = getAvatarPosition();

  return (
    <section ref={containerRef} className="relative min-h-[200vh] bg-secondary/20 py-24 px-4 overflow-hidden">
      <div className="sticky top-0 h-screen flex flex-col md:flex-row items-center justify-between gap-8 max-w-7xl mx-auto">
        
        {/* Left Side: Timeline Text */}
        <div className="w-full md:w-1/3 z-10">
          <h2 className="text-5xl font-headline font-black mb-8 flex items-center gap-4">
            MY JOURNEY <Ship />
          </h2>
          <div className="space-y-12">
            {TIMELINE.map((item, i) => {
              const itemProgress = (i / (TIMELINE.length - 1));
              const isActive = progress >= itemProgress - 0.1 && progress <= itemProgress + 0.1;

              return (
                <HandDrawnCard 
                  key={i} 
                  className={`p-4 transition-all duration-300 transform ${isActive ? 'scale-110 bg-primary rotate-0' : 'scale-100 bg-white rotate-2 opacity-50'}`}
                >
                  <span className="font-code text-sm font-bold block">{item.year}</span>
                  <h3 className="font-headline text-xl font-bold">{item.location}</h3>
                  <p className="font-body text-sm">{item.role}</p>
                </HandDrawnCard>
              );
            })}
          </div>
        </div>

        {/* Right Side: 3D Map */}
        <div className="w-full md:w-2/3 h-[500px] md:h-[700px] relative perspective-1000">
          <div 
            className="w-full h-full hand-drawn-border bg-[#b3e5fc] relative transition-transform duration-100 ease-linear overflow-hidden"
            style={{ 
              transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(5deg)`,
              transformStyle: 'preserve-3d'
            }}
          >
            {/* Map Placeholder */}
            <Image 
              src="https://picsum.photos/seed/map-europe/800/600"
              alt="Europe Map"
              fill
              className="object-cover opacity-60 mix-blend-multiply"
              data-ai-hint="illustrated map"
            />

            {/* Path Pins */}
            {TIMELINE.map((item, i) => (
              <div 
                key={i}
                className="absolute z-20"
                style={{ top: item.y, left: item.x }}
              >
                <div className="w-4 h-4 bg-black rounded-full animate-pulse shadow-[0_0_10px_rgba(0,0,0,0.5)]" />
                <div className="absolute top-6 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white border-2 border-black px-2 py-0.5 text-xs font-bold font-code">
                  {item.location}
                </div>
              </div>
            ))}

            {/* Pirate Avatar Moving */}
            <div 
              className="absolute z-30 transition-all duration-100 ease-linear flex flex-col items-center"
              style={{ top: avatarPos.y, left: avatarPos.x, transform: 'translate(-50%, -100%)' }}
            >
              <div className="relative w-16 h-16 md:w-24 md:h-24">
                 <div className="absolute -top-4 -right-2 bg-black text-white px-2 py-1 text-[10px] rounded animate-bounce">AHOY!</div>
                 <Image 
                  src="https://picsum.photos/seed/pirate-avatar/200/200"
                  alt="Pirate Avatar"
                  fill
                  className="hand-drawn-border rounded-full bg-white object-cover"
                  data-ai-hint="pirate avatar"
                 />
              </div>
              <div className="w-8 h-2 bg-black/20 rounded-full mt-1 blur-sm" />
            </div>

            {/* Compass rose */}
            <div className="absolute bottom-8 right-8">
              <Compass className="w-16 h-16 opacity-30" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator for the sticky section */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 font-code text-sm animate-bounce">
         SCROLL THROUGH MY STORY ↓
      </div>
    </section>
  );
}

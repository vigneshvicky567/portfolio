
"use client";

import React from "react";
import { HandDrawnCard } from "./HandDrawnCard";
import { Button } from "./ui/button";
import { Linkedin } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-2 md:top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50">
      <HandDrawnCard className="bg-primary px-3 md:px-6 py-2 flex items-center justify-between border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 md:w-10 md:h-10 border-4 border-black bg-white flex items-center justify-center font-black text-lg md:text-xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            PM
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-4 lg:gap-8 font-headline font-bold text-xs lg:text-sm uppercase">
          <a href="#hero" className="hover:underline transition-all">Home</a>
          <a href="#about" className="hover:underline transition-all">About</a>
          <a href="#projects" className="hover:underline transition-all">Projects</a>
          <a href="#skills" className="hover:underline transition-all">Skills</a>
        </nav>

        <div className="flex items-center gap-2 md:gap-4">
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 bg-white border-4 border-black px-2 md:px-3 py-1 rounded-sm text-[10px] md:text-xs font-black hover:bg-gray-50 transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5"
          >
            <Linkedin className="w-3 h-3 fill-[#0077B5] text-[#0077B5]" />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
          <Button className="sketch-button bg-blue-400 hover:bg-blue-500 text-[10px] md:text-xs py-1 px-3 h-auto border-4 border-black font-black">
            Contact
          </Button>
        </div>
      </HandDrawnCard>
    </header>
  );
}

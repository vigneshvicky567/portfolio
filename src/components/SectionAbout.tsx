
"use client";

import React, { useRef, useState, useEffect } from "react";
import { useScrollProgress } from "@/hooks/use-scroll-progress";
import { suggestHighlightKeywords } from "@/ai/flows/about-section-keyword-highlighter";

const ABOUT_TEXT = "I am a Full Stack Developer based in Munich with over 11 years of experience in building scalable web applications. My journey started with a fascination for Microservices and cloud-native architecture. I believe that code is an art form, and every line should be clean, efficient, and meaningful. When I'm not coding, you'll find me sketching or exploring the latest in creative technology.";

export function SectionAbout() {
  const containerRef = useRef<HTMLDivElement>(null);
  const progress = useScrollProgress(containerRef);
  const [keywords, setKeywords] = useState<string[]>([]);

  useEffect(() => {
    async function getKeywords() {
      try {
        const result = await suggestHighlightKeywords({ aboutSectionText: ABOUT_TEXT });
        setKeywords(result.keywords);
      } catch (e) {
        setKeywords(["Munich", "11 years", "Microservices", "Full Stack Developer"]);
      }
    }
    getKeywords();
  }, []);

  const renderTextWithHighlights = () => {
    let parts = [ABOUT_TEXT];
    
    // Sort keywords by length descending to match longer phrases first
    const sortedKeywords = [...keywords].sort((a, b) => b.length - a.length);

    // Simple heuristic for triggering highlights: distribute them across 0.2 to 0.8 progress
    const getProgressForKeyword = (index: number) => 0.2 + (index / sortedKeywords.length) * 0.6;

    return (
      <p className="text-2xl md:text-4xl leading-relaxed font-headline font-bold text-center">
        {ABOUT_TEXT.split(' ').map((word, i) => {
          const cleanedWord = word.replace(/[.,]/g, '');
          const keywordIndex = sortedKeywords.findIndex(k => k.toLowerCase().includes(cleanedWord.toLowerCase()));
          const isKeyword = keywordIndex !== -1;
          const isActive = isKeyword && progress > getProgressForKeyword(keywordIndex);

          const colors = ['bg-pink-300', 'bg-green-300', 'bg-blue-300', 'bg-yellow-300'];
          const highlightColor = colors[keywordIndex % colors.length];

          return (
            <span 
              key={i} 
              className={`relative inline-block mx-1 transition-colors duration-500`}
            >
              <span className={`relative z-10`}>{word}</span>
              {isKeyword && (
                <span 
                  className={`absolute bottom-0 left-0 h-3/4 -z-0 transition-all duration-700 ease-out ${highlightColor}`}
                  style={{ width: isActive ? '100%' : '0%' }}
                />
              )}
            </span>
          );
        })}
      </p>
    );
  };

  return (
    <section ref={containerRef} className="min-h-screen bg-white py-24 flex flex-col items-center justify-center px-4">
      <div className="max-w-4xl w-full">
        <h2 className="text-6xl font-headline font-black mb-16 text-center border-b-8 border-black pb-4 inline-block mx-auto">
          ABOUT
        </h2>
        <div className="bg-background/20 p-8 md:p-12 hand-drawn-border">
          {renderTextWithHighlights()}
        </div>
        <p className="mt-12 text-center font-code text-muted-foreground animate-pulse">
          Keep scrolling to see the highlight effect...
        </p>
      </div>
    </section>
  );
}

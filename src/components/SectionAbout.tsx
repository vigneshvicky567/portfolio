
"use client";

import React, { useRef, useState, useEffect } from "react";
import { useScrollProgress } from "@/hooks/use-scroll-progress";
import { suggestHighlightKeywords } from "@/ai/flows/about-section-keyword-highlighter";

const ABOUT_TEXT = "I am a highly motivated Computer Science undergraduate specializing in AI and Data Science. My academic journey has equipped me with a strong foundation in programming and problem-solving. I am proficient in Java, Python, and SQL, and I have hands-on experience in full-stack development using HTML, CSS, and JavaScript to build responsive web applications. I am seeking to leverage my technical expertise and strong leadership skills in a dynamic organization focused on creating innovative software solutions.";

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
        setKeywords(["AI and Data Science", "Java", "Python", "SQL", "full-stack development"]);
      }
    }
    getKeywords();
  }, []);

  const renderTextWithHighlights = () => {
    const sortedKeywords = [...keywords].sort((a, b) => b.length - a.length);
    
    return (
      <div className="text-lg sm:text-xl md:text-3xl leading-relaxed font-headline font-bold text-center space-y-4">
        {ABOUT_TEXT.split(' ').map((word, i) => {
          const cleanedWord = word.replace(/[.,]/g, '');
          const keywordIndex = sortedKeywords.findIndex(k => k.toLowerCase().includes(cleanedWord.toLowerCase()));
          const isKeyword = keywordIndex !== -1;
          
          // Adjust activation: start highlighting when the section is 30% into view
          const activationThreshold = 0.3 + (i / ABOUT_TEXT.split(' ').length) * 0.4;
          const isActive = isKeyword && progress > activationThreshold;

          const colors = ['bg-pink-300', 'bg-green-300', 'bg-blue-300', 'bg-yellow-300'];
          const highlightColor = colors[keywordIndex % colors.length];

          return (
            <span 
              key={i} 
              className={`relative inline-block mx-0.5 md:mx-1`}
            >
              <span className={`relative z-10 transition-colors duration-300 ${isActive ? 'text-black' : 'text-black/70'}`}>
                {word}
              </span>
              {isKeyword && (
                <span 
                  className={`absolute bottom-0 left-0 h-1/2 md:h-3/4 -z-0 transition-all duration-700 ease-out ${highlightColor}`}
                  style={{ width: isActive ? '100%' : '0%' }}
                />
              )}
            </span>
          );
        })}
      </div>
    );
  };

  return (
    <section id="about" ref={containerRef} className="min-h-screen bg-white py-16 md:py-24 flex flex-col items-center justify-center px-4 md:px-8">
      <div className="max-w-4xl w-full">
        <h2 className="text-4xl md:text-6xl font-headline font-black mb-8 md:mb-16 text-center border-b-4 md:border-b-8 border-black pb-2 md:pb-4 inline-block mx-auto uppercase">
          ABOUT
        </h2>
        <div className="bg-background/20 p-6 sm:p-8 md:p-12 hand-drawn-border">
          {renderTextWithHighlights()}
        </div>
        <p className="mt-8 md:mt-12 text-center font-code text-xs md:text-sm text-muted-foreground animate-pulse uppercase tracking-wider">
          Keep scrolling to see my focus areas...
        </p>
      </div>
    </section>
  );
}

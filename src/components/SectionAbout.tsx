
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
    let parts = [ABOUT_TEXT];
    const sortedKeywords = [...keywords].sort((a, b) => b.length - a.length);
    const getProgressForKeyword = (index: number) => 0.2 + (index / sortedKeywords.length) * 0.6;

    return (
      <div className="text-xl md:text-3xl leading-relaxed font-headline font-bold text-center space-y-4">
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
      </div>
    );
  };

  return (
    <section id="about" ref={containerRef} className="min-h-screen bg-white py-24 flex flex-col items-center justify-center px-4">
      <div className="max-w-4xl w-full">
        <h2 className="text-6xl font-headline font-black mb-16 text-center border-b-8 border-black pb-4 inline-block mx-auto">
          ABOUT
        </h2>
        <div className="bg-background/20 p-8 md:p-12 hand-drawn-border">
          {renderTextWithHighlights()}
        </div>
        <p className="mt-12 text-center font-code text-muted-foreground animate-pulse">
          Keep scrolling to see my focus areas...
        </p>
      </div>
    </section>
  );
}

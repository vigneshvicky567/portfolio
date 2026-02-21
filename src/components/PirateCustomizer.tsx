
"use client";

import React, { useState } from "react";
import { suggestPirateAvatarAccessories } from "@/ai/flows/pirate-avatar-accessory-suggestion-flow";
import { HandDrawnCard } from "./HandDrawnCard";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Loader2, Sparkles, Skull } from "lucide-react";

export function PirateCustomizer() {
  const [loading, setLoading] = useState(false);
  const [skill, setSkill] = useState("");
  const [suggestion, setSuggestion] = useState<string | null>(null);

  const handleCustomize = async () => {
    if (!skill) return;
    setLoading(true);
    try {
      const result = await suggestPirateAvatarAccessories({
        projectDescriptions: ["A creative portfolio website with scroll animations"],
        skills: [skill]
      });
      setSuggestion(result.suggestions);
    } catch (e) {
      setSuggestion("A magical eyepatch that glows whenever you write clean code!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-primary py-24 px-4 flex flex-col items-center">
      <div className="max-w-2xl w-full">
        <HandDrawnCard className="p-8 bg-white">
          <div className="flex items-center gap-3 mb-6">
            <Skull className="w-10 h-10" />
            <h2 className="text-3xl font-headline font-black">PIRATE AVATAR REASONER</h2>
          </div>
          
          <p className="font-body mb-6 text-lg">
            Let AI customize your pirate avatar's look based on your unique skills. What's your main superpower?
          </p>
          
          <div className="flex gap-2 mb-6">
            <Input 
              value={skill}
              onChange={(e) => setSkill(e.target.value)}
              placeholder="e.g. JavaScript, Design, Coffee Drinking"
              className="hand-drawn-border h-12 text-lg"
            />
            <Button 
              onClick={handleCustomize}
              disabled={loading || !skill}
              className="sketch-button bg-secondary hover:bg-secondary/80 h-12"
            >
              {loading ? <Loader2 className="animate-spin" /> : <Sparkles className="mr-2" />}
              {loading ? "Reasoning..." : "Customize"}
            </Button>
          </div>

          {suggestion && (
            <div className="mt-6 p-6 bg-accent/20 border-2 border-dashed border-black rounded-lg animate-pop-in">
              <h4 className="font-code font-bold mb-2 uppercase text-xs tracking-widest opacity-50">AI Suggestion:</h4>
              <p className="font-headline text-xl italic">"{suggestion}"</p>
            </div>
          )}
        </HandDrawnCard>
      </div>
    </section>
  );
}

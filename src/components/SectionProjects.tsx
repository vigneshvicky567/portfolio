
"use client";

import React from "react";
import { HandDrawnCard } from "./HandDrawnCard";
import Image from "next/image";
import { ExternalLink, Github, Code, Cpu, Activity } from "lucide-react";

const PROJECTS = [
  {
    title: "Predictive Diagnostics",
    category: "ML & Web",
    description: "Built a multi-disease prediction web app (Diabetes, Heart Disease, Parkinson’s, Breast Cancer) using Random Forest, Logistic Regression, and SVC.",
    features: [
      "Applied medical datasets analysis",
      "Confidence scores & feature importance",
      "Responsive user-friendly interface"
    ],
    image: "https://picsum.photos/seed/diagnostics/600/400",
    tags: ["Python", "ML", "React"],
    icon: <Activity className="w-5 h-5" />
  },
  {
    title: "Knight Bite",
    category: "Frontend",
    description: "Developed a mobile-first responsive food ordering website with modern UI and smooth navigation across all devices.",
    features: [
      "Mobile-first responsive design",
      "Interactive food sections",
      "Cross-platform compatibility"
    ],
    image: "https://picsum.photos/seed/knightbite/600/400",
    tags: ["HTML5", "CSS3", "JavaScript"],
    icon: <Code className="w-5 h-5" />
  },
  {
    title: "RecoverEase",
    category: "AI & Full-Stack",
    description: "AI-powered drug recovery platform with peer counseling, craving-control modules, and streak-based rewards.",
    features: [
      "AI chatbot for 24/7 guidance",
      "Role-based authentication",
      "Progress dashboards & badges"
    ],
    image: "https://picsum.photos/seed/recover/600/400",
    tags: ["Genkit", "Node.js", "AI"],
    icon: <Cpu className="w-5 h-5" />
  },
];

export function SectionProjects() {
  return (
    <section id="projects" className="py-24 px-4 bg-white border-t-8 border-black">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-5xl md:text-6xl font-headline font-black mb-4 inline-block border-b-8 border-black">
            LATEST PROJECTS
          </h2>
          <p className="font-code font-bold text-lg">/var/www/portfolio/work</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {PROJECTS.map((project, i) => (
            <HandDrawnCard key={i} className="group hover:-translate-y-2 transition-transform flex flex-col">
              <div className="relative h-48 border-b-4 border-black overflow-hidden">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform"
                  data-ai-hint="tech project"
                />
                <div className="absolute top-2 right-2 bg-primary border-2 border-black px-2 py-1 font-bold text-[10px] uppercase">
                  {project.category}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-2 mb-2">
                  {project.icon}
                  <h3 className="text-2xl font-headline font-black uppercase">{project.title}</h3>
                </div>
                <p className="font-body text-sm mb-4 line-clamp-3">{project.description}</p>
                
                <ul className="mb-6 space-y-1">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="font-body text-xs flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-black rounded-full" /> {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold uppercase bg-secondary/30 border border-black px-2 py-0.5">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                     <button className="flex items-center gap-1 font-code font-bold text-xs hover:underline"><Github className="w-4 h-4" /> CODE</button>
                     <button className="flex items-center gap-1 font-code font-bold text-xs hover:underline"><ExternalLink className="w-4 h-4" /> LIVE</button>
                  </div>
                </div>
              </div>
            </HandDrawnCard>
          ))}
        </div>
      </div>
    </section>
  );
}


import { cn } from "@/lib/utils";
import React from "react";

interface HandDrawnCardProps {
  children: React.ReactNode;
  className?: string;
  bg?: string;
}

export function HandDrawnCard({ children, className, bg = "bg-white" }: HandDrawnCardProps) {
  return (
    <div className={cn(
      "hand-drawn-border rounded-sm transition-all",
      bg,
      className
    )}>
      {children}
    </div>
  );
}

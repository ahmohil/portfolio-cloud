"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { REVEAL_VIEWPORT, revealVariants } from "@/lib/motion";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "article" | "header";
  y?: number;
}

export function Reveal({ children, className, delay = 0, as = "div", y }: RevealProps) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={cn(className)}
      initial="hidden"
      whileInView="show"
      viewport={REVEAL_VIEWPORT}
      custom={{ delay, y }}
      variants={revealVariants}
    >
      {children}
    </MotionTag>
  );
}

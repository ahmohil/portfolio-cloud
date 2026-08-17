"use client";

import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "article" | "header";
  y?: number;
}

const variants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function Reveal({ children, className, delay = 0, as = "div", y }: RevealProps) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={cn(className)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      custom={delay}
      variants={
        y !== undefined
          ? {
              hidden: { opacity: 0, y },
              show: (d: number) => ({
                opacity: 1,
                y: 0,
                transition: { duration: 0.55, delay: d, ease: [0.22, 1, 0.36, 1] },
              }),
            }
          : variants
      }
    >
      {children}
    </MotionTag>
  );
}

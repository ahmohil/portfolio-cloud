"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import type { Experience } from "@/lib/types";
import { ExperienceCard } from "./ExperienceCard";

export function ExperienceTimeline({ items }: { items: Experience[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion() ?? false;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 85%", "end 60%"],
  });
  const railScale = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.4,
  });

  // Marks the entry nearest the viewport centre so the rest can recede slightly.
  // Mirrors the active-nav observer in components/layout/Nav.tsx.
  useEffect(() => {
    if (reduceMotion) return;

    const container = containerRef.current;
    if (!container) return;

    const entries = Array.from(
      container.querySelectorAll<HTMLElement>("[data-experience-index]"),
    );
    if (entries.length === 0) return;

    const observer = new IntersectionObserver(
      (observed) => {
        const visible = observed
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;

        const index = Number((visible.target as HTMLElement).dataset.experienceIndex);
        if (!Number.isNaN(index)) setActiveIndex(index);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    entries.forEach((entry) => observer.observe(entry));
    return () => observer.disconnect();
  }, [reduceMotion]);

  return (
    <div ref={containerRef} className="relative">
      <div
        aria-hidden
        className="absolute left-[5px] top-2 hidden h-[calc(100%-1rem)] w-px bg-border md:block"
      >
        <motion.div
          className="h-full w-full origin-top bg-accent/50"
          style={{ scaleY: reduceMotion ? 1 : railScale }}
        />
      </div>

      <ol className="space-y-14 md:space-y-16">
        {items.map((exp, i) => (
          <li key={exp.company} data-experience-index={i}>
            <ExperienceCard exp={exp} isActive={activeIndex === i} />
          </li>
        ))}
      </ol>
    </div>
  );
}

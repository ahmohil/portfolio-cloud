"use client";

import { motion } from "motion/react";
import type { Experience } from "@/lib/types";
import { cn } from "@/lib/cn";
import {
  REVEAL_VIEWPORT,
  timelineCardVariants,
  timelineChildVariants,
  timelineDotVariants,
} from "@/lib/motion";
import { ExperienceHighlight } from "./ExperienceHighlight";

export function ExperienceCard({
  exp,
  isActive = true,
}: {
  exp: Experience;
  isActive?: boolean;
}) {
  return (
    <motion.article
      variants={timelineCardVariants}
      initial="hidden"
      whileInView="show"
      viewport={REVEAL_VIEWPORT}
      className={cn(
        // `experience-entry` is the hook the reduced-motion block in globals.css
        // uses to pin opacity — doing it in CSS keeps it out of hydration.
        "experience-entry group relative pl-8 transition-opacity duration-500 md:pl-10",
        isActive ? "md:opacity-100" : "md:opacity-70",
      )}
    >
      <motion.span
        aria-hidden
        variants={timelineDotVariants}
        className={cn(
          "absolute left-0 top-2 size-2.5 rounded-full border-2 transition-colors duration-300",
          exp.current
            ? "border-accent bg-accent/30"
            : "border-border bg-background group-hover:border-foreground/40",
        )}
      >
        {exp.current && (
          <motion.span
            aria-hidden
            className="absolute inset-0 rounded-full bg-accent/60"
            animate={{ scale: [1, 1.9, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: "easeOut" }}
          />
        )}
      </motion.span>

      <motion.header
        variants={timelineChildVariants}
        className="mb-3 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1"
      >
        <div className="flex items-baseline gap-2">
          <h3 className="text-lg font-semibold tracking-tight text-foreground transition-colors duration-300 group-hover:text-accent md:text-xl">
            {exp.company}
          </h3>
          <span className="text-muted-foreground">·</span>
          <p className="text-sm text-muted-foreground md:text-base">{exp.title}</p>
        </div>
        <p className="font-mono text-xs tracking-tight text-muted-foreground transition-colors duration-300 group-hover:text-foreground/70">
          {exp.startDate} — {exp.endDate}
        </p>
      </motion.header>

      <motion.p
        variants={timelineChildVariants}
        className="mb-4 font-mono text-xs text-muted-foreground"
      >
        {exp.location}
      </motion.p>

      <ul className="space-y-2.5 text-sm leading-relaxed text-muted-foreground md:text-[15px]">
        {exp.bullets.map((bullet, i) => (
          <motion.li key={i} variants={timelineChildVariants} className="flex gap-3">
            <span aria-hidden className="mt-2 size-1 shrink-0 rounded-full bg-muted-foreground/50" />
            <span>{bullet}</span>
          </motion.li>
        ))}
      </ul>

      {exp.highlight && <ExperienceHighlight highlight={exp.highlight} />}
    </motion.article>
  );
}

"use client";

import { motion } from "motion/react";
import type { ExperienceHighlight as Highlight } from "@/lib/types";
import { REVEAL_VIEWPORT, timelineChildVariants } from "@/lib/motion";
import { Pill } from "./Pill";

export function ExperienceHighlight({ highlight }: { highlight: Highlight }) {
  return (
    <motion.div
      variants={timelineChildVariants}
      className="relative mt-6 overflow-hidden rounded-xl border border-border bg-card/40 p-5 ring-1 ring-accent/20 transition-colors duration-300 group-hover:bg-card/70 md:p-6"
    >
      <motion.span
        aria-hidden
        className="shimmer-sweep pointer-events-none absolute inset-y-0 left-0 w-1/2"
        initial={{ x: "-150%" }}
        whileInView={{ x: "300%" }}
        viewport={REVEAL_VIEWPORT}
        transition={{ duration: 1.2, delay: 0.25, ease: "easeInOut" }}
      />

      <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
        {highlight.label}
      </p>
      <h4 className="text-base font-semibold tracking-tight text-foreground md:text-lg">
        {highlight.title}
      </h4>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {highlight.blurb}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {highlight.tags.map((tag) => (
          <Pill key={tag}>{tag}</Pill>
        ))}
      </div>
    </motion.div>
  );
}

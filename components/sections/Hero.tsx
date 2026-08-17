"use client";

import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";
import { profile } from "@/lib/data";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] w-full items-center overflow-hidden"
    >
      <div
        aria-hidden
        className="grain-bg pointer-events-none absolute inset-0"
      />

      <div className="relative mx-auto w-full max-w-5xl px-6 pb-20 pt-32 md:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            <span className="relative grid size-1.5 place-items-center">
              <span className="absolute size-1.5 animate-ping rounded-full bg-accent" />
              <span className="size-1.5 rounded-full bg-accent" />
            </span>
            Available for senior frontend roles
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="text-balance text-5xl font-semibold tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-[88px] lg:leading-[1.02]"
        >
          {profile.name}.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-xl text-balance text-base text-muted-foreground md:text-lg"
        >
          <span className="text-foreground">{profile.title}</span> at Motive. {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a
            href="#contact"
            className="ring-focus inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 font-mono text-[13px] text-background transition-all hover:-translate-y-0.5 hover:bg-foreground/90"
          >
            Get in touch
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ring-focus inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-5 py-2.5 font-mono text-[13px] text-foreground transition-all hover:-translate-y-0.5 hover:border-foreground/30 hover:bg-card"
          >
            View resume
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{
          opacity: { delay: 1, duration: 0.6 },
          y: { delay: 1.2, duration: 1.8, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground/60 transition-colors hover:text-foreground"
      >
        <ArrowDown className="size-4" strokeWidth={1.5} />
      </motion.a>
    </section>
  );
}

import type { Variants } from "motion/react";

/** Expo-out — the site-wide easing token. */
export const EASE_EXPO: [number, number, number, number] = [0.22, 1, 0.36, 1];

export interface RevealCustom {
  delay?: number;
  y?: number;
}

/** Shared scroll-reveal used by About, Work, and Skills via <Reveal />. */
export const revealVariants: Variants = {
  hidden: (custom: RevealCustom = {}) => ({ opacity: 0, y: custom.y ?? 16 }),
  show: (custom: RevealCustom = {}) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: custom.delay ?? 0, ease: EASE_EXPO },
  }),
};

/** Experience entry: orchestrates its children rather than fading as one block. */
export const timelineCardVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04, delayChildren: 0.08 } },
};

export const timelineChildVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_EXPO } },
};

export const timelineDotVariants: Variants = {
  hidden: { scale: 0, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 400, damping: 22 },
  },
};

/** Every reveal in the section shares one trigger contract. */
export const REVEAL_VIEWPORT = { once: true, margin: "-60px" } as const;

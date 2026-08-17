"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="ring-focus relative grid size-9 place-items-center rounded-full border border-border bg-card/40 text-foreground transition-colors hover:border-foreground/30 hover:bg-card"
    >
      <AnimatePresence mode="wait" initial={false}>
        {mounted && (
          <motion.span
            key={isDark ? "moon" : "sun"}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="grid place-items-center"
          >
            {isDark ? (
              <Moon className="size-4" strokeWidth={1.75} />
            ) : (
              <Sun className="size-4" strokeWidth={1.75} />
            )}
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}

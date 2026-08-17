import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface SectionProps {
  id?: string;
  eyebrow?: string;
  heading?: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, eyebrow, heading, description, children, className }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("mx-auto w-full max-w-5xl px-6 py-24 md:py-32", className)}
    >
      {(eyebrow || heading) && (
        <div className="mb-12 md:mb-16">
          {eyebrow && (
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {eyebrow}
            </p>
          )}
          {heading && (
            <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              {heading}
            </h2>
          )}
          {description && (
            <p className="mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
              {description}
            </p>
          )}
        </div>
      )}
      {children}
    </section>
  );
}

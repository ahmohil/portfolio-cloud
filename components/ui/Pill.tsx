import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Pill({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-card/50 px-3 py-1 font-mono text-[11px] tracking-tight text-muted-foreground transition-colors duration-200 hover:border-foreground/30 hover:text-foreground",
        className,
      )}
    >
      {children}
    </span>
  );
}

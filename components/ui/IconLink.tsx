import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface IconLinkProps {
  href: string;
  children: ReactNode;
  external?: boolean;
  className?: string;
}

export function IconLink({ href, children, external = true, className }: IconLinkProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={cn(
        "group inline-flex items-center gap-1.5 text-sm text-foreground transition-colors hover:text-accent",
        className,
      )}
    >
      <span className="border-b border-border group-hover:border-accent">{children}</span>
      <ArrowUpRight
        className="size-3.5 transition-transform duration-200 group-hover:-translate-y-px group-hover:translate-x-px"
        strokeWidth={1.75}
      />
    </a>
  );
}

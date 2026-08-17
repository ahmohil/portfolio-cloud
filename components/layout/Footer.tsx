import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-start justify-between gap-3 px-6 py-8 font-mono text-xs text-muted-foreground md:flex-row md:items-center">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p>Built with Next.js · Designed with intention</p>
      </div>
    </footer>
  );
}

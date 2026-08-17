import { Github, Linkedin, Mail } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { profile } from "@/lib/data";

export function Contact() {
  return (
    <Section id="contact" className="py-32 md:py-40">
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            05 — Contact
          </p>
          <h2 className="text-balance text-4xl font-semibold tracking-tight text-foreground md:text-6xl">
            Let&rsquo;s build something.
          </h2>
          <p className="mt-6 text-balance text-base text-muted-foreground md:text-lg">
            Open to senior frontend and platform roles. The fastest way to reach me is
            email — I reply within a day.
          </p>

          <a
            href={`mailto:${profile.email}`}
            className="ring-focus mt-10 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 font-mono text-sm text-background transition-all hover:-translate-y-0.5 hover:bg-foreground/90"
          >
            <Mail className="size-4" strokeWidth={1.75} />
            {profile.email}
          </a>

          <div className="mt-8 flex items-center justify-center gap-6 font-mono text-xs text-muted-foreground">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
            >
              <Linkedin className="size-4" strokeWidth={1.5} />
              LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
            >
              <Github className="size-4" strokeWidth={1.5} />
              GitHub
            </a>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

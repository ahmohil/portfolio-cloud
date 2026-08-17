import { MapPin, Mail } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { IconLink } from "@/components/ui/IconLink";
import { profile } from "@/lib/data";

export function About() {
  return (
    <Section id="about" eyebrow="01 — About" heading="A quick introduction.">
      <div className="grid gap-12 md:grid-cols-[1.4fr_1fr] md:gap-16">
        <Reveal>
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              I&apos;m a product-minded software engineer with three years of experience
              shipping high-impact features on web platforms. I gravitate toward the
              parts of a codebase nobody wants to touch — the platform layer, the
              component library, the migration nobody scoped properly.
            </p>
            <p>
              Today I&apos;m at <span className="text-foreground">Motive</span>, leading
              the migration of the dashboard from a single-page app to a
              Micro-Frontend architecture using Module Federation. I also build the
              foundational primitives — localization formatters, reusable UI components,
              and the OmniSearch filter — that the rest of the org builds on top of.
            </p>
            <p>
              I take ownership of the code I write and constantly look for ways to
              remove friction for my team. I graduated with a B.S. in Computer Science
              from the University of the Punjab in 2024.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <aside className="rounded-xl border border-border bg-card/40 p-6">
            <p className="mb-5 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              <span className="relative grid size-1.5 place-items-center">
                <span className="absolute size-1.5 animate-ping rounded-full bg-accent" />
                <span className="size-1.5 rounded-full bg-accent" />
              </span>
              Currently
            </p>

            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin
                  className="mt-0.5 size-4 shrink-0 text-muted-foreground"
                  strokeWidth={1.5}
                />
                <div>
                  <p className="text-foreground">{profile.location}</p>
                  <p className="font-mono text-xs text-muted-foreground">
                    Open to global remote
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail
                  className="mt-0.5 size-4 shrink-0 text-muted-foreground"
                  strokeWidth={1.5}
                />
                <IconLink href={`mailto:${profile.email}`} external={false}>
                  {profile.email}
                </IconLink>
              </li>
            </ul>

            <div className="mt-6 border-t border-border pt-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                Education
              </p>
              <p className="mt-2 text-sm text-foreground">B.S. Computer Science</p>
              <p className="font-mono text-xs text-muted-foreground">
                University of the Punjab · 2024
              </p>
            </div>
          </aside>
        </Reveal>
      </div>
    </Section>
  );
}

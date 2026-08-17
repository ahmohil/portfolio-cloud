# Portfolio — Abdul Hanan Mohil

Personal site for Abdul Hanan Mohil, Software Engineer on the Frontend Platform team at Motive.

Built with Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS v4, Motion, and next-themes. Sleek monochrome zinc palette with a quiet emerald accent, scroll-driven section reveals, dark/light toggle.

## Stack

- **Framework** — Next.js 15, React 19, TypeScript
- **Styling** — Tailwind CSS v4 (CSS-first `@theme` config)
- **Animation** — `motion` (Framer Motion) `whileInView` scroll reveals
- **Theme** — `next-themes` with class-based dark mode
- **Type** — Geist Sans + Geist Mono

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the build
npm run lint    # eslint
```

## Structure

```
app/                  # routes (layout, page, globals.css, not-found)
components/
  layout/             # Nav, Footer, ThemeToggle
  sections/           # Hero, About, Experience, Work, Skills, Contact
  ui/                 # Section, Reveal, Pill, ProjectCard, ExperienceCard, IconLink
  providers/          # ThemeProvider
lib/
  data.ts             # typed resume content (single source of truth)
  types.ts
  cn.ts               # clsx + tailwind-merge
public/
  resume.pdf
```

All content lives in `lib/data.ts` — update the constants there to refresh the site.

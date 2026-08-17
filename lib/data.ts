import type { Experience, Profile, Project, SkillGroup } from "./types";

export const profile: Profile = {
  name: "Abdul Hanan Mohil",
  title: "Software Engineer, Frontend Platform",
  location: "Lahore, Pakistan",
  email: "ahmohil78@gmail.com",
  github: "https://github.com/ahmohil",
  linkedin: "https://linkedin.com/in/ahmohil",
  tagline: "I build platform tools that remove friction for engineering teams.",
  summary:
    "Product-minded software engineer with 3 years of experience building scalable applications and shipping high-impact features. I take ownership of the code I write and constantly look for ways to remove friction for my team. Currently driving the Micro-Frontend architecture migration and core platform tools at Motive.",
  available: true,
};

export const experience: Experience[] = [
  {
    company: "Motive",
    title: "Software Engineer, Frontend Platform",
    startDate: "Feb 2025",
    endDate: "Present",
    location: "San Francisco (Remote)",
    current: true,
    bullets: [
      "Leading the migration of the Motive dashboard from a single-page app to a Micro-Frontend (MFE) architecture using Module Federation to speed up development and deployments.",
      "Built the core localization formatters on the browser's native Intl API — currency, number, and date formatting across 26+ locales (BCP-47) — now the shared primitive for cost and date display across the dashboard.",
      "Architected and developed 20+ reusable components for the internal UI library that now serve as the foundational building blocks for the dashboard.",
      "Built and launched the OmniSearch filter, which now serves as the primary search tool across the entire platform.",
      "Automated repetitive refactoring by building custom scripts and Claude skills to handle tedious work like finding and replacing old formatters and auto-fixing unit tests.",
      "Built an internal DOM-scanning tool that highlights design system violations in different colors, helping QA and Design spot visual drift and keep the UI uniform.",
      "Created a one-click local setup script that lets Product, QA, and Design teams use Claude Code to safely make minor UI or text changes and open PRs without needing a developer.",
    ],
    highlight: {
      label: "Shipped · Jul 2026",
      title: "Currency Localization",
      blurb:
        "Built the currency formatting and display layer behind Motive's Currency Localization launch — multi-currency entry and reporting across Fuel Hub, Maintenance, and Documents, with company-level default currencies, a fleet-user display override in Account Settings, and aggregated cost totals rendered in the user's selected currency.",
      tags: ["CAD", "MXN", "GBP", "EUR", "Intl API"],
    },
  },
  {
    company: "Texagon",
    title: "Software Engineer",
    startDate: "Oct 2024",
    endDate: "Jan 2025",
    location: "Lahore, Pakistan",
    bullets: [
      "Architected a scalable, multi-tenant backend using Node.js, TypeScript, and Supabase, with a database schema that enforced strict data isolation across multiple client organizations.",
      "Engineered a multi-modal AI training pipeline that processed text, images, and video into rich vector embeddings to power context-aware chatbots using RAG workflows.",
      "Designed RESTful APIs with strict type safety and built session management tools that allowed clients to seamlessly integrate AI agents into their own third-party websites.",
    ],
  },
  {
    company: "Lunivate",
    title: "Software Engineer (Contract)",
    startDate: "Jul 2024",
    endDate: "Oct 2024",
    location: "Austin, TX (Remote)",
    bullets: [
      "Engineered a two-sided healthcare marketplace connecting therapists with staffing agencies, featuring a custom analytics dashboard for real-time performance tracking.",
      "Built an automated ingestion pipeline using n8n that intercepted email-based service requests, parsed the payloads, and triggered backend APIs to instantly provision jobs.",
      "Led the end-to-end development of the platform's cross-platform mobile application using Flutter.",
    ],
  },
  {
    company: "Metadots",
    title: "Associate Software Engineer",
    startDate: "Dec 2023",
    endDate: "Jul 2024",
    location: "Lahore, Pakistan",
    bullets: [
      "Developed a scalable Repair-as-a-Service marketplace featuring integrated payment gateways and a dynamic service request system that routed users directly to local technicians.",
      "Increased platform engagement by 30% by engineering and launching features that supported home pickup and on-site repair options.",
      "Built a production-grade AI onboarding assistant and medical chatbot using LangChain, Pinecone, and OpenAI, enabling users to query complex account data using natural language.",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "OmniSearch",
    description:
      "Platform-wide search and filter primitive at Motive. Now serves as the primary search interface across the entire dashboard.",
    tech: ["React", "TypeScript", "Module Federation"],
    highlight: true,
  },
  {
    name: "ChatBuddy",
    description:
      "A platform that lets users train AI chatbots on their own data — text, docs, and structured content via RAG.",
    tech: ["React", "TypeScript", "Node.js", "LangChain"],
  },
  {
    name: "WorkOnIt",
    description:
      "Multi-agent orchestration layer that lets specialized AI agents collaborate and execute complex multi-step workflows.",
    tech: ["Node.js", "OpenAI", "Multi-Agent Systems"],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    skills: ["TypeScript", "React", "JavaScript", "Angular", "RxJS", "HTML", "SCSS", "Tailwind CSS"],
  },
  {
    category: "Testing",
    skills: ["Playwright", "Jest", "Storybook", "Visual Regression"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "NestJS", "PostgreSQL"],
  },
  {
    category: "AI / Data",
    skills: ["LangChain", "Pinecone", "RAG", "Multi-Agent Systems"],
  },
  {
    category: "AI-Powered Dev",
    skills: ["Cursor", "Claude Code", "Atlassian MCP", "Figma MCP", "Chrome DevTools"],
  },
  {
    category: "Tooling",
    skills: ["Git", "Azure", "Railway"],
  },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
] as const;

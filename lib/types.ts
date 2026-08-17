export interface Experience {
  company: string;
  title: string;
  startDate: string;
  endDate: string;
  location: string;
  current?: boolean;
  bullets: string[];
}

export interface Project {
  name: string;
  description: string;
  tech: string[];
  href?: string;
  highlight?: boolean;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface Profile {
  name: string;
  title: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  summary: string;
  tagline: string;
  available: boolean;
}

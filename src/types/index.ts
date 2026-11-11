export type ThemeMode = "light" | "dark" | "system";

export type ExperienceLevel = "exploring" | "working" | "proficient" | "advanced";

export type ProjectCategory =
  | "full-stack"
  | "frontend"
  | "backend"
  | "infrastructure"
  | "blockchain"
  | "creative";

export type ProjectStatus = "concept" | "in-progress" | "completed" | "archived" | "placeholder";

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  id: string;
  label: string;
  href: string;
  /** Set to false until a real URL is supplied */
  enabled: boolean;
  /** TODO marker shown in content docs when missing */
  todo?: string;
}

export interface FocusArea {
  title: string;
  description: string;
}

export interface Profile {
  name: string;
  firstName: string;
  surname: string;
  title: string;
  shortBio: string;
  personalStatement: string;
  about: string[];
  focusAreas: FocusArea[];
  /** Grouped tech stack shown in the TL;DR section */
  stackGroups: { id: string; items: string[] }[];
  location?: string;
  availability?: string;
  githubUsername: string;
  /** TODO: replace with real email */
  email: string;
  emailConfigured: boolean;
  /** Path under /public for CV PDF */
  cvPath: string;
  cvAvailable: boolean;
  seo: {
    siteUrl: string;
    title: string;
    description: string;
    keywords: string[];
    ogImage: string;
    locale: string;
  };
}

export interface ExperienceItem {
  id: string;
  company: string;
  title: string;
  period: string;
  location?: string;
  summary: string;
  responsibilities: string[];
  technologies: string[];
  achievements?: string[];
  links?: { label: string; href: string }[];
  /** true when this entry is a placeholder awaiting real content */
  isPlaceholder?: boolean;
}

export interface SkillItem {
  name: string;
  level?: ExperienceLevel;
  note?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: SkillItem[];
}

export interface Project {
  id: string;
  name: string;
  shortDescription: string;
  detailedDescription: string;
  category: ProjectCategory;
  technologies: string[];
  image: string;
  images?: string[];
  githubUrl?: string;
  liveUrl?: string;
  status: ProjectStatus;
  highlights: string[];
  architecture?: string;
  isPlaceholder?: boolean;
}

export interface Repository {
  id: string;
  name: string;
  description: string;
  tags: string[];
  url: string;
  language?: string;
  thumbnail?: string;
  isPlaceholder?: boolean;
}

export interface CreativeWork {
  id: string;
  title: string;
  description: string;
  image: string;
  tools?: string[];
  externalUrl?: string;
  isPlaceholder?: boolean;
}

export interface CreativeSection {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  bullets: string[];
  works: CreativeWork[];
}

export interface ContactConfig {
  heading: string;
  body: string;
  /** mailto subject when email is configured */
  mailtoSubject: string;
  /** mailto body template when email is configured */
  mailtoBody: string;
}


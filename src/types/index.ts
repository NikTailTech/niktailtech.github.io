export type ThemeMode = "light" | "dark" | "system";

export interface NavItem {
  label: string;
  href: string;
}

export interface Person {
  name: string;
  givenName: string;
  familyName: string;
  jobTitle: string;
  /** GitHub handle only; never used as a display name */
  githubUsername: string;
  email: string;
  location: {
    region: string;
    country: string;
    countryCode: string;
  };
  languages: LanguageItem[];
}

export interface SocialLink {
  id: "github" | "linkedin";
  label: string;
  href: string;
}

export interface CvDocument {
  path: string;
  available: boolean;
}

export interface ExperienceItem {
  id: string;
  /** Exactly as written on the CV */
  company: string;
  title: string;
  /** ISO year-month, e.g. "2025-06" */
  start: string;
  /** ISO year-month, or null for the current role */
  end: string | null;
  location: string;
  context?: string;
  bullets: string[];
  technologies: string[];
  links?: { label: string; href: string }[];
}

export interface EducationItem {
  id: string;
  qualification: string;
  institution: string;
  location: string;
  startYear: number;
  endYear: number;
}

export interface LanguageItem {
  name: string;
  /** ISO 639-1 code */
  code: string;
  level: string;
}

export interface FocusArea {
  title: string;
  description: string;
}

export interface SkillTier {
  id: string;
  title: string;
  description: string;
  skills: string[];
}

export interface ProjectImage {
  /** Path without suffix; files are `${src}-{800,1280}.{avif,webp}` at 16:10 */
  src: string;
  width: number;
  height: number;
  alt: string;
}

export interface Project {
  id: string;
  name: string;
  outcome: string;
  role: string;
  year: string;
  stack: string[];
  problem: string;
  approach: string;
  result: string;
  decisions?: string[];
  architecture?: string;
  image: ProjectImage;
  liveUrl?: string;
  repoUrl?: string;
}

export interface Seo {
  siteUrl: string;
  title: string;
  description: string;
  keywords: string[];
  ogImage: { src: string; width: number; height: number; alt: string };
  locale: string;
}

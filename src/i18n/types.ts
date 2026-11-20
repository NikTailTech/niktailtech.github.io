export type Locale = "en" | "it";

/** UI labels only. Profile, experience and project content lives in src/data/cv.ts. */
export type Dictionary = {
  meta: {
    skipToContent: string;
  };
  nav: {
    glance: string;
    about: string;
    experience: string;
    skills: string;
    projects: string;
    contact: string;
    primary: string;
    footer: string;
    mobile: string;
    openMenu: string;
    closeMenu: string;
  };
  theme: {
    light: string;
    dark: string;
    system: string;
    switch: string;
  };
  hero: {
    viewProjects: string;
    contact: string;
  };
  glance: {
    eyebrow: string;
    lead: string;
  };
  about: {
    eyebrow: string;
    title: string;
    intro: string;
  };
  experience: {
    eyebrow: string;
    title: string;
    description: string;
    present: string;
    technologies: string;
  };
  education: {
    eyebrow: string;
    title: string;
    educationHeading: string;
    languagesHeading: string;
  };
  skills: {
    eyebrow: string;
    title: string;
    description: string;
  };
  projects: {
    eyebrow: string;
    title: string;
    description: string;
    visitSite: string;
    repository: string;
  };
  contact: {
    eyebrow: string;
    reachOut: string;
    emailMe: string;
  };
  footer: {
    navigate: string;
    followMe: string;
    rights: string;
    backToTop: string;
  };
};

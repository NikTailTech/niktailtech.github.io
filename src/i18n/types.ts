export type Locale = "en" | "it";

export type Dictionary = {
  meta: {
    skipToContent: string;
  };
  nav: {
    tldr: string;
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
  language: {
    label: string;
    en: string;
    it: string;
  };
  theme: {
    light: string;
    dark: string;
    system: string;
    switch: string;
  };
  hero: {
    eyebrow: string;
    exploreProjects: string;
    getInTouch: string;
    photoAlt: string;
  };
  tldr: {
    eyebrow: string;
    lead: string;
    stackSignal: string;
    stackGroups: Record<string, string>;
  };
  about: {
    eyebrow: string;
    title: string;
    intro: string;
    basedIn: string;
  };
  experience: {
    eyebrow: string;
    title: string;
    description: string;
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
    comingSoonEyebrow: string;
    comingSoonTitle: string;
    comingSoonBody: string;
    visitSite: string;
    repository: string;
    categoriesLabel: string;
    status: {
      concept: string;
      "in-progress": string;
      completed: string;
      archived: string;
      placeholder: string;
    };
  };
  contact: {
    eyebrow: string;
    heading: string;
    body: string;
    reachOut: string;
    emailNicholas: string;
    mailtoSubject: string;
    mailtoBody: string;
  };
  footer: {
    tagline: string;
    navigate: string;
    connect: string;
    followMe: string;
    rights: string;
    backToTop: string;
  };
  profile: {
    title: string;
    shortBio: string;
    personalStatement: string;
    availability: string;
    about: string[];
    focusAreas: { title: string; description: string }[];
  };
  experiences: Record<
    string,
    {
      title: string;
      location?: string;
      summary: string;
      responsibilities: string[];
    }
  >;
  skillCategories: Record<string, { title: string; description: string }>;
  skillLabels: Record<string, string>;
  projectsContent: Record<
    string,
    {
      name: string;
      shortDescription: string;
      detailedDescription: string;
      highlights: string[];
    }
  >;
  projectFilters: Record<string, string>;
};

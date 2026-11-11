import type { Dictionary } from "@/i18n/types";

export const en: Dictionary = {
  meta: {
    skipToContent: "Skip to content",
  },
  nav: {
    about: "About",
    experience: "Experience",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",
    primary: "Primary",
    footer: "Footer",
    mobile: "Mobile",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  language: {
    label: "Language",
    en: "English",
    it: "Italian",
  },
  theme: {
    light: "Theme: light. Switch theme",
    dark: "Theme: dark. Switch theme",
    system: "Theme: system. Switch theme",
    switch: "Switch theme",
  },
  hero: {
    eyebrow: "Portfolio",
    exploreProjects: "Explore Projects",
    getInTouch: "Get in Touch",
    focus: "Focus",
    stackSignal: "Stack signal",
    focusAreasLabel: "Focus areas",
  },
  about: {
    eyebrow: "About",
    title: "Building Beyond Code",

    basedIn: "Based in",
  },
  experience: {
    eyebrow: "Experience",
    title: "Professional timeline",
    description: "Roles, responsibilities, and stack from my professional path.",
  },
  skills: {
    eyebrow: "Capabilities",
    title: "Technical skills",
    description: "Organized by domain — breadth is intentional; depth depends on the role.",
  },
  projects: {
    eyebrow: "Work",
    title: "Featured projects",
    description:
      "Selected work across product engineering, infrastructure, Web3, and creative fabrication.",
    comingSoonEyebrow: "In progress",
    comingSoonTitle: "Coming soon",
    comingSoonBody:
      "I'm preparing detailed write-ups of selected projects. The layout and filters stay ready — content drops in next.",
    visitSite: "Visit site",
    repository: "Repository",
    categoriesLabel: "Project categories",
    status: {
      concept: "Concept",
      "in-progress": "In progress",
      completed: "Completed",
      archived: "Archived",
      placeholder: "Placeholder",
    },
  },
  contact: {
    eyebrow: "Contact",
    heading: "Let’s talk about what you’re building",
    body: "If you’re hiring for a full stack role, need help shipping a product, or just want to talk through a technical idea — write me. Happy to hear what you’re working on.",
    reachOut: "Reach out",
    emailNicholas: "Contact me",

    mailtoSubject: "Professional inquiry — portfolio",
    mailtoBody: `Hi Nicholas,

I came across your portfolio and would like to get in touch.

Role / opportunity:
Company / context:
Timeline:
A short note on what you're looking for:

Best regards,
`,
  },
  footer: {
    tagline: "Building software with systems awareness and creative range.",
    navigate: "Navigate",
    connect: "Connect",
    rights: "All rights reserved.",
    backToTop: "Back to top",
  },
  profile: {
    title: "Full Stack Developer",
    shortBio:
      "Driven by a passion for technology, engineering, and problem-solving; my interests extend beyond traditional software development, spanning frontend and backend engineering, cloud-native infrastructure, Web3, and digital creation. From building scalable applications and containerized environments with Docker and Kubernetes to exploring 3D modeling, printing, and visual design, I enjoy leveraging code and technology to transform ideas into reality.",
    personalStatement:
      "I design and ship software end-to-end: from interface and API to deployment and the systems that keep it running.",
    availability:
      "Open to professional opportunities and technical collaborations — full stack roles, product work, and projects where I can own features from design to production.",

    about: [
      "I work as a Full Stack Developer. I build complete applications: clear interfaces, services that stay maintainable over time, and deployments meant to hold up outside the local environment.",
      "I look at software as a system. I care about architecture, data models, and everything that happens in production — Linux, containers, networking, CI/CD, self-hosted infrastructure. Understanding how things actually run helps me make better design choices.",
      "Alongside code, I follow other areas too: crypto and blockchain, 3D modeling, digital fabrication, and media design. I also created an NFT collection, mainly to try out the end-to-end flow. These keep me sharp on precision and creativity, and they remind me that an idea matters when it becomes something concrete.",

      "I like learning on my own and taking on hard problems. What I care about most, though, stays the same: designing and building software — even when design, maker culture, or other technologies sit around it.",
    ],

    focusAreas: [
      {
        title: "Full Stack Development",
        description:
          "Frontend, backend, application architecture, APIs and scalable applications.",
      },
      {
        title: "Cloud-Native & Infrastructure",
        description: "Docker, Kubernetes, Linux, containerization and orchestration.",
      },
      {
        title: "AI & Intelligent Development",
        description:
          "AI-assisted coding, LLMs, prompt engineering, AI-driven workflows, developer productivity and applied AI.",
      },
      {
        title: "Web3 & Blockchain",
        description:
          "Decentralized applications, blockchain ecosystems, smart contracts and digital ownership.",
      },
      {
        title: "Systems Engineering & Automation",
        description:
          "Linux environments, networking, scripting, system administration and automation.",
      },
      {
        title: "3D Modeling & Digital Fabrication",
        description:
          "Organic and geometric modeling, G-code and product production.",

      },
      {
        title: "Graphic & Visual Design",
        description:
          "Adobe Creative Suite, visual communication, digital aesthetics and multimedia creation.",
      },
    ],
  },
  experiences: {
    "franklin-switzerland": {
      title: "Full Stack Developer",
      location: "Sorengo, Ticino, Switzerland",
      summary:
        "Designed and developed the company's new website, covering the entire process from UI design in Figma to implementation using Next.js, React, TypeScript and Tailwind CSS. Ensured consistency with the company's visual identity and design standards. Worked in an international environment where communication was primarily conducted in English.",
      responsibilities: [
        "Web Development: Designed and developed modern web interfaces and company websites, with a focus on usability, responsive layouts and brand consistency.",
        "Internal Applications: Built custom internal web applications and tools, including solutions for generating branded emails and personalized QR codes.",
        "CMS & CRM Integration: Customized and extended CMS and CRM functionalities, configured YAML-based modules and integrated embedded forms with custom CSS styling.",
        "Website Maintenance & Automation: Developed PHP automations for existing websites, troubleshot technical issues, applied patches and addressed security vulnerabilities.",
        "Landing Pages & Lead Generation: Collaborated with the team on the design and development of website pages and landing pages, focusing on user profiling and lead generation.",
        "Visual Design & Communication: Created graphic assets and corporate communication materials, including flyers and brochures, supporting marketing and communication activities.",
      ],
    },
    "sl-technology": {
      title: "Programmer",
      location: "Crema, Lombardy, Italy",
      summary:
        "Developed and maintained web applications and websites for different businesses, primarily focused on business management, process optimization and tailored software solutions.",
      responsibilities: [
        "Application Development: Developed and maintained web applications and websites, adapting functionalities to different business requirements and operational workflows.",
        "Frontend Development: Worked with HTML, CSS, Bootstrap 4/5 and JavaScript, customizing third-party plugins and libraries to extend application functionality.",
        "Backend Development: Implemented and customized PHP-based application functionalities to support business processes and specific client requirements.",
        "Database Design & Management: Analyzed, designed and managed relational databases, ensuring proper data organization and efficient data handling.",
        "Client Collaboration: Worked directly with clients to gather and analyze requirements, identify suitable technical solutions and troubleshoot business and IT-related issues.",
      ],
    },
    zucchetti: {
      title: "Programmer",
      location: "Lodi, Lombardy, Italy",
      summary:
        "Worked within a Research & Development (R&D) environment, contributing to software development activities and database design while completing an initial technical training program.",
      responsibilities: [
        "Technical Training: Completed an initial two-month training program covering Java, HTML, CSS, JavaScript, SQL, T-SQL, Linux and concurrent programming.",
        "Database Development: Designed and developed databases, focusing on data organization, structure and management.",
        "UI Development: Designed and implemented user interfaces, with particular attention to usability, clarity and an intuitive user experience.",
        "Team Collaboration: Collaborated with the development team on software engineering activities and business process management within an environment operating under ISO/IEC 27001 information security standards.",
      ],
    },
  },
  skillCategories: {
    web: {
      title: "Web Development",
      description: "Interfaces, frameworks, styling, and web application delivery.",
    },
    database: {
      title: "Database Management",
      description:
        "Relational and document databases, ORM/BaaS tooling, and day-to-day database administration.",
    },
    infrastructure: {
      title: "Infrastructure & DevOps",
      description:
        "Systems, containers, networking, and self-hosted environments that support real software.",
    },
    blockchain: {
      title: "Blockchain & Web3",
      description:
        "Active interest and practical exploration of crypto ecosystems, Web3 tooling, and digital assets.",
    },
    "3d": {
      title: "3D Modeling & Manufacturing",
      description:
        "Digital modeling and fabrication — from sculpting and CAD to printed prototypes.",
    },
    design: {
      title: "Graphic Design & Digital Media",
      description:
        "Visual communication and motion — composition, image work, and edited video.",
    },
  },
  skillLabels: {
    "Database design": "Database design",
    Networking: "Networking",
    "Self-hosted infrastructure": "Self-hosted infrastructure",
    "Cryptocurrency ecosystem": "Cryptocurrency ecosystem",
    "Blockchain technologies": "Blockchain technologies",
    "Cryptocurrency portfolio tracking": "Cryptocurrency portfolio tracking",
    "Organic modeling": "Organic modeling",
    "Digital sculpting": "Digital sculpting",
    "Hard-surface modeling": "Hard-surface modeling",
    "3D printing": "3D printing",
    Prototyping: "Prototyping",
    Virtualization: "Virtualization",
  },
  projectsContent: {
    arischiogatti: {
      name: "Arischiogatti",
      shortDescription:
        "Website for the Arischiogatti di Crema association — shelter, care, and adoption support for cats in need.",
      detailedDescription:
        "End-to-end delivery of the association’s public website: full visual design, Drupal CMS integration for content management, and production deployment. The project was donated to the association to support their work in Crema and the surrounding area.",
      highlights: [
        "Complete visual design of the public site",
        "Drupal CMS setup for editorial content and updates",
        "Production deploy, donated to the association",
      ],
    },
  },
  projectFilters: {
    all: "All",
    "full-stack": "Full Stack",
    frontend: "Frontend",
    backend: "Backend",
    infrastructure: "Infrastructure",
    blockchain: "Blockchain / Web3",
    creative: "3D & Creative",
  },
};

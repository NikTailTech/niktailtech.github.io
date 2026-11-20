import type { Dictionary } from "@/i18n/types";

export const en: Dictionary = {
  meta: {
    skipToContent: "Skip to content",
  },
  nav: {
    tldr: "TL;DR",
    about: "About",
    experience: "Experiences",
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
  },
  tldr: {
    eyebrow: "TL;DR",
    lead: "Too long? Here’s the cheat sheet.",
    stackSignal: "Stack",
    stackGroups: {
      daily: "Daily use",
      also: "Also use",
    },
    stackDomains: {
      frontend: "Frontend",
      backend: "Backend",
      data: "Data",
      cloud: "Cloud & infra",
      libraries: "Libraries",
      design: "Design",
    },
  },
  about: {
    eyebrow: "About",
    title: "End to End, Design to Deploy",
    intro: "A short look at how I work, what I dig into, and why I build the way I do.",
    basedIn: "Based in",
  },
  experience: {
    eyebrow: "Experience",
    title: "Professional Timeline",
    description: "Roles, responsibilities, and stack from my professional path.",
  },
  skills: {
    eyebrow: "Skills",
    title: "Technical Skills",
    description:
      "Split by how often I use them: day-to-day tools, then others I know and can work with.",
  },
  projects: {
    eyebrow: "Work",
    title: "Featured Projects",
    description:
      "Selected work across product engineering, self-hosted tools, and client delivery.",
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
    heading: "Let’s Talk",
    body: "Open to chats about software, infrastructure, side projects, or anything interesting you're building. Drop me a line.",
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
    navigate: "Navigation",
    connect: "Connect",
    followMe: "Follow Me",
    rights: "All rights reserved.",
    backToTop: "Back to top",
  },
  profile: {
    title: "Full Stack Developer",
    shortBio:
      "I'm a Full Stack Developer. I like building software end to end — the interface, the services behind it, and the infrastructure that keeps it running.",
    personalStatement:
      "What keeps me going is pretty simple: figure out how something works, find a cleaner way to build it, and turn a messy idea into something real.",
    availability:
      "Open to professional opportunities and technical collaborations — full stack roles, product work, and projects where I can own features from design to production.",
    about: [
      "I'm a Full Stack Developer. I like building software end to end — the interface people use, the services behind it, and the infrastructure that keeps it running.",
      "I don't stop at writing features. Architecture, data models, and how things hold up in production matter to me. Day to day that means TypeScript, React, Next.js, PHP, SQL, Docker, and Linux — making sure an app works outside a laptop, not just in local.",
      "Outside product work I also do 3D modeling, digital fabrication, printing, and visual design when I want something more hands-on — and I use Three.js when an interface needs real 3D in the browser.",
      "I learn by trying things and taking on problems I haven't seen before. Shipping an app, setting up infra, or making a design real — that's when it clicks for me.",
      "What keeps me going is pretty simple: figure out how something works, find a cleaner way to build it, and turn a messy idea into something real.",
    ],

    focusAreas: [
      {
        title: "Full Stack Development",
        description:
          "Interfaces, APIs, and application logic with React, Next.js, TypeScript, Node.js, and PHP.",
      },
      {
        title: "Databases & APIs",
        description:
          "Relational data modeling, SQL, PostgreSQL, Prisma, and REST services that stay maintainable.",
      },
      {
        title: "Shipping & Environments",
        description:
          "Docker, Linux, and Git day to day; personal homelab Kubernetes for self-hosted apps.",
      },
      {
        title: "Side Practice",
        description:
          "Design in Figma, Three.js in the browser, and hands-on 3D / fabrication when I want a break from product work.",
      },
    ],
  },
  experiences: {
    "franklin-switzerland": {
      title: "Full Stack Developer",
      location: "Sorengo, Ticino, Switzerland",
      summary:
        "Built the company's new website end to end — UI in Figma through implementation with Next.js, React, TypeScript, and Tailwind CSS — keeping visual identity and design standards consistent. Worked in an international team with English as the main language. The public launch was later deprioritized after an internal reorganization.",
      responsibilities: [
        "Web Development: Designed and built modern web interfaces for the company site, with attention to usability, responsive layouts, and brand consistency.",
        "Internal Applications: Built custom internal web tools, including branded email generation and personalized QR codes.",
        "CMS & CRM Integration: Customized CMS and CRM modules, configured YAML-based setups, and styled embedded forms.",
        "Website Maintenance & Automation: Wrote PHP automations for existing sites, fixed issues, applied patches, and addressed security findings.",
        "Landing Pages & Lead Generation: Collaborated on pages and landing pages aimed at user profiling and lead capture.",
        "Visual Design & Communication: Produced graphic assets and print materials (flyers, brochures) for marketing and communication.",
      ],
    },
    "sl-technology": {
      title: "Full Stack Web Developer",
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
      title: "Full Stack Developer",
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
    daily: {
      title: "Daily use",
      description: "What I use regularly to ship interfaces, APIs, data, and deploys.",
    },
    also: {
      title: "Also use",
      description: "Technologies I know and can work with when the project needs them.",
    },
  },
  skillLabels: {},
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
    "crypto-tracker": {
      name: "Crypto Tracker",
      shortDescription:
        "Self-hosted app to record crypto transactions, calculate cost basis, and follow portfolio performance.",
      detailedDescription:
        "A local Next.js app for personal portfolio management: buys, sells, swaps, transfers, and staking, with FIFO, LIFO, and average-cost strategies. Prices can refresh from Kraken, and a yearly tax report exports to CSV or JSON. Portfolio data stays in your own PostgreSQL database.",
      highlights: [
        "Cost basis engine with FIFO, LIFO, and average cost",
        "Kraken CSV import and live price refresh",
        "Yearly tax report, plus backup export and import",
      ],
    },
    "finance-tracker": {
      name: "Finance Tracker",
      shortDescription:
        "Self-hosted personal finance app for accounts, envelopes, and EUR / CHF balances.",
      detailedDescription:
        "Built for an Italian–Swiss setup: checking accounts in EUR and CHF, each split into Needs, Play, Investment, and Savings. Balances are computed from the ledger, and transfers or currency conversions stay separate from income and expenses.",
      highlights: [
        "Dashboard with FX-aware net worth and category breakdown",
        "Account, envelope, and EUR–CHF moves that are not income or expenses",
        "Debts, recurring templates, and deploy on Docker or my homelab Kubernetes",
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

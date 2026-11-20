import type {
  CvDocument,
  EducationItem,
  ExperienceItem,
  FocusArea,
  Person,
  Project,
  Seo,
  SkillTier,
  SocialLink,
} from "@/types";

/**
 * Single source of truth for everything that also appears on the CV.
 * Names, companies, dates, education, languages and skills must stay identical
 * to the CV PDF. Never add employers, metrics or tools that are not on the CV
 * or backed by a linked project.
 */

export const person: Person = {
  name: "Nicholas Codazzi",
  givenName: "Nicholas",
  familyName: "Codazzi",
  jobTitle: "Full Stack Developer",
  githubUsername: "NikTailTech",
  email: "codazzi.nicholas03@gmail.com",
  location: {
    region: "Ticino",
    country: "Switzerland",
    countryCode: "CH",
  },
  languages: [
    { name: "Italian", code: "it", level: "Native" },
    { name: "English", code: "en", level: "C1" },
  ],
};

export const socialLinks: SocialLink[] = [
  { id: "github", label: "GitHub", href: `https://github.com/${person.githubUsername}` },
  { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/nicholas-codazzi/" },
];

export const cvDocument: CvDocument = {
  // TODO(user): the current CV PDF lists a phone number, which must not be published.
  // Export a copy without phone number or street address to this path, then set available: true.
  path: "/documents/nicholas-codazzi-cv.pdf",
  available: false,
};

export const shortBio =
  "I'm a Full Stack Developer. I like building software end to end — the interface, the services behind it, and the infrastructure that keeps it running.";

export const about: string[] = [
  "I'm a Full Stack Developer. I like building software end to end — the interface people use, the services behind it, and the infrastructure that keeps it running.",
  "I don't stop at writing features. Architecture, data models, and how things hold up in production matter to me. Day to day that means TypeScript, React, Next.js, PHP, SQL, Docker, and Linux — making sure an app works outside a laptop, not just in local.",
  "Outside product work I also do 3D modeling, digital fabrication, printing, and visual design when I want something more hands-on.",
  "What keeps me going is pretty simple: figure out how something works, find a cleaner way to build it, and turn a messy idea into something real.",
];

export const focusAreas: FocusArea[] = [
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
    description: "Design in Figma and hands-on 3D / fabrication when I want a break from product work.",
  },
];

export const skillTiers: SkillTier[] = [
  {
    id: "daily",
    title: "Daily use",
    description: "What I use regularly to ship interfaces, APIs, data, and deploys.",
    skills: [
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "jQuery",
      "Node.js",
      "PHP",
      "REST APIs",
      "PostgreSQL",
      "SQL",
      "Prisma",
      "Docker",
      "Linux",
      "Kubernetes",
      "CI/CD",
      "Git",
      "GitHub",
      "Figma",
    ],
  },
  {
    id: "also",
    title: "Also use",
    description: "Technologies I know and can work with when the project needs them.",
    skills: ["Bootstrap", "Java", "Blender", "Adobe Photoshop", "Adobe Illustrator"],
  },
];

export const experience: ExperienceItem[] = [
  {
    id: "franklin-switzerland",
    company: "Franklin Switzerland",
    title: "Full Stack Developer",
    start: "2025-06",
    end: null,
    location: "Sorengo, Switzerland",
    bullets: [
      "Web Development: Designed and built modern web interfaces for the company site, with attention to usability, responsive layouts, and brand consistency.",
      "Internal Applications: Built custom internal web tools, including branded email generation and personalized QR codes.",
      "CMS & CRM Integration: Customized CMS and CRM modules, configured YAML-based setups, and styled embedded forms.",
      "Website Maintenance & Automation: Wrote PHP automations for existing sites, fixed issues, applied patches, and addressed security findings.",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Figma", "PHP"],
  },
  {
    id: "sl-technology",
    company: "SL Technology s.r.l.",
    title: "Full Stack Web Developer",
    start: "2023-02",
    end: "2025-05",
    location: "Crema, Italy",
    bullets: [
      "Application Development: Developed and maintained web applications and websites, adapting functionalities to different business requirements and operational workflows.",
      "Backend Development: Implemented and customized PHP-based application functionalities to support business processes and specific client requirements.",
      "Database Design & Management: Analyzed, designed and managed relational databases, ensuring proper data organization and efficient data handling.",
      "Client Collaboration: Worked directly with clients to gather and analyze requirements, identify suitable technical solutions and troubleshoot business and IT-related issues.",
    ],
    technologies: ["PHP", "JavaScript", "HTML", "CSS", "Bootstrap", "SQL"],
  },
  {
    id: "zucchetti",
    company: "Zucchetti S.p.A.",
    title: "Full Stack Developer",
    start: "2022-10",
    end: "2023-02",
    location: "Lodi, Italy",
    bullets: [
      "Technical Training: Completed an initial two-month training program covering Java, JavaScript, SQL, T-SQL, Linux and concurrent programming.",
      "Database Development: Designed and developed databases, focusing on data organization, structure and management.",
      "UI Development: Designed and implemented user interfaces, with particular attention to usability, clarity and an intuitive user experience.",
      "Team Collaboration: Collaborated with the development team within an environment operating under ISO/IEC 27001 information security standards.",
    ],
    technologies: ["Java", "JavaScript", "SQL", "T-SQL", "Linux"],
  },
];

export const education: EducationItem[] = [
  {
    id: "iis-galilei",
    qualification: "Diploma in Information Technology",
    institution: "IIS Galileo Galilei",
    location: "Crema, Italy",
    startYear: 2017,
    endYear: 2022,
  },
];

export const projects: Project[] = [
  {
    id: "arischiogatti",
    name: "Arischiogatti",
    outcome:
      "Website for the Arischiogatti di Crema association — shelter, care, and adoption support for cats in need.",
    role: "Full Stack Developer",
    // TODO(user): confirm the project year.
    year: "2025",
    stack: ["Next.js", "React", "TypeScript", "Drupal", "PHP", "Figma"],
    approach:
      "End-to-end delivery of the association’s public website: full visual design, Drupal CMS integration for content management, and production deployment.",
    result: "Donated to the association to support their work in Crema and the surrounding area.",
    image: {
      src: "/images/projects/arischiogatti-cover.png",
      width: 1902,
      height: 944,
      alt: "Arischiogatti home page",
    },
    liveUrl: "https://arischiogatti.it/",
  },
  {
    id: "crypto-tracker",
    name: "Crypto Tracker",
    outcome:
      "Self-hosted app to record crypto transactions, calculate cost basis, and follow portfolio performance.",
    role: "Personal project",
    year: "2026",
    stack: ["Next.js", "React", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS", "Zod", "Recharts"],
    approach:
      "Buys, sells, swaps, transfers, and staking, with FIFO, LIFO, and average-cost strategies. Prices can refresh from Kraken, and a yearly tax report exports to CSV or JSON.",
    result: "Portfolio data stays in your own PostgreSQL database.",
    image: {
      src: "/images/projects/crypto-tracker.png",
      width: 1904,
      height: 957,
      alt: "Crypto Tracker dashboard",
    },
    repoUrl: "https://github.com/NikTailTech/crypto-tracker",
  },
  {
    id: "finance-tracker",
    name: "Finance Tracker",
    outcome: "Self-hosted personal finance app for accounts, envelopes, and EUR / CHF balances.",
    role: "Personal project",
    year: "2026",
    stack: ["Next.js", "React", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS", "Docker", "Zod"],
    approach:
      "Checking accounts in EUR and CHF, each split into Needs, Play, Investment, and Savings. Balances are computed from the ledger.",
    result: "Transfers or currency conversions stay separate from income and expenses.",
    image: {
      src: "/images/projects/finance-tracker.png",
      width: 1905,
      height: 957,
      alt: "Finance Tracker dashboard",
    },
    repoUrl: "https://github.com/NikTailTech/finance-tracker",
  },
];

export const contact = {
  heading: "Let’s Talk",
  body: "Open to chats about software, infrastructure, side projects, or anything interesting you're building. Drop me a line.",
  mailtoSubject: "Professional inquiry — portfolio",
  mailtoBody: `Hi Nicholas,

I came across your portfolio and would like to get in touch.

Role / opportunity:
Company / context:
Timeline:

Best regards,
`,
};

export const seo: Seo = {
  siteUrl: "https://niktailtech.github.io",
  title: "Nicholas Codazzi — Full Stack Developer",
  description:
    "Portfolio of Nicholas Codazzi, Full Stack Developer — web applications with React, Next.js, TypeScript, PHP, and Docker.",
  keywords: [
    "Nicholas Codazzi",
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "PHP",
    "PostgreSQL",
    "Docker",
  ],
  ogImage: {
    src: "/images/og-default.svg",
    width: 1200,
    height: 630,
    alt: "Nicholas Codazzi — Full Stack Developer",
  },
  locale: "en_US",
};

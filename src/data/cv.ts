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

export const hero = {
  stack: "TypeScript, Next.js and PHP",
  valueProposition:
    "I design and ship web applications end to end, from Figma to production, with the infrastructure to keep them reliable.",
  workAuthorization: "No visa sponsorship required",
  openTo: "Open to Full Stack roles in Ticino or remote (EU)",
};

export const glance: { areas: FocusArea[]; also: string } = {
  areas: [
    {
      title: "Full Stack web",
      description: "Next.js, React and TypeScript front ends; Node.js and PHP (5 to 8+) back ends.",
    },
    {
      title: "Databases and APIs",
      description: "PostgreSQL, SQL and Prisma; REST and SOAP integrations.",
    },
    {
      title: "DevOps and self-hosting",
      description: "Docker, Kubernetes and Linux; CI/CD with GitHub Actions; a Proxmox homelab.",
    },
  ],
  also: "Also: Web3, 3D modeling, graphic design",
};

export const about = {
  title: "From Figma to Production",
  subtitle: "I take a feature from the first layout to the server it runs on.",
  paragraphs: [
    "I'm a Full Stack Developer based in Ticino. I like owning a feature end to end: the layout in Figma, the React or Next.js interface, the API and database behind it, and the deploy that puts it in front of users.",
    "At Franklin Switzerland I took the company's new website from Figma to production, and I maintain its existing PHP site: automations, patches and security fixes. Before that I spent over two years at SL Technology building and maintaining PHP web applications, working directly with clients on their requirements.",
    "I care about how software behaves once it's live, so I run my own projects in Docker on a Proxmox and Kubernetes homelab. That's where I learn the infrastructure side without risking production.",
    "Outside work I've created an NFT collection with its smart contract, and I do 3D modeling and graphic design.",
  ],
};

export const skillTiers: SkillTier[] = [
  {
    id: "daily",
    title: "Daily drivers",
    description: "What I build and ship with.",
    skills: [
      "TypeScript",
      "JavaScript",
      "PHP",
      "React",
      "Next.js",
      "Node.js",
      "PostgreSQL / SQL",
      "Prisma",
      "Docker",
      "Git / GitHub",
      "GitHub Actions",
      "Tailwind CSS",
    ],
  },
  {
    id: "working",
    title: "Working knowledge and side projects",
    description: "Used at work or in my own projects, not every day.",
    skills: [
      "Vue.js",
      "Kubernetes / k3s",
      "Proxmox",
      "Python",
      "Grafana",
      "Solidity",
      "Blender",
      "Fusion 360",
      "Adobe CC",
      "Figma",
      "Java (training)",
    ],
  },
];

/** Also on the CV; listed so the site and the CV name the same tools. */
export const alsoOnCv = [
  "Bootstrap",
  "jQuery",
  "T-SQL",
  "NoSQL",
  "REST and SOAP APIs",
  "Postman",
  "Cursor (AI-assisted development)",
];

export const beyondTheStack: FocusArea[] = [
  { title: "Web3", description: "Created an NFT collection and its smart contract in Solidity." },
  { title: "3D", description: "Modeling in Blender and Fusion 360." },
  { title: "Design", description: "Graphic design in Adobe CC and Figma." },
];

export const experience: ExperienceItem[] = [
  {
    id: "franklin-switzerland",
    company: "Franklin Switzerland",
    title: "Full Stack Developer",
    start: "2025-06",
    end: null,
    location: "Sorengo, Switzerland",
    context: "International team, working primarily in English.",
    // TODO(user): add confirmed results (e.g. performance, leads, tool adoption, security fixes).
    bullets: [
      "Took ownership of the company's new website end to end, from Figma layouts to production in React, Next.js, TypeScript and Tailwind CSS, with a focus on SEO, user profiling and lead generation.",
      "Built internal web applications, including tools that generate customized emails and QR codes.",
      "Integrated CMS and CRM platforms and embedded forms, customizing their behavior through YAML modules and custom CSS.",
      "Maintained the existing PHP website: implemented automations, applied patches, fixed security vulnerabilities and resolved technical issues.",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PHP", "Figma", "YAML"],
  },
  {
    id: "sl-technology",
    company: "SL Technology s.r.l.",
    title: "Full Stack Web Developer",
    start: "2023-02",
    end: "2025-05",
    location: "Crema, Italy",
    // TODO(user): add confirmed results (e.g. number of applications or clients maintained, performance gains).
    bullets: [
      "Developed and maintained web applications and websites for business process management, tailored to the needs of different organizations, in PHP, JavaScript, HTML, CSS and Bootstrap 4/5.",
      "Analyzed, designed and managed relational databases to keep data well organized and queries efficient.",
      "Worked directly with clients to gather requirements, propose technical solutions and troubleshoot business and IT issues, improving system performance and operational efficiency.",
      "Extended applications by implementing and customizing plugins and third-party libraries.",
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
      "Joined a Research and Development team after a two-month training in Java, JavaScript, SQL, T-SQL, Linux and concurrent programming.",
      "Designed and built databases and user interfaces focused on a simple, intuitive user experience.",
      "Collaborated with the team in an environment compliant with the ISO/IEC 27001 information security standard.",
    ],
    technologies: ["JavaScript", "SQL", "T-SQL", "Linux", "Java (training)"],
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
  heading: "Let’s talk",
  body: "Hiring for a Full Stack or PHP role in Ticino or remote? Email is the fastest way to reach me; LinkedIn works too.",
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

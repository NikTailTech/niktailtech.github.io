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
  openTo: "Open to Full Stack roles in Switzerland or remote (EU)",
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
  also: "Also: Web3, 3D Modeling, Graphic Design",
};

export const about = {
  title: "From Figma to Production",
  subtitle: "I take a feature from the first layout to the server it runs on.",
  paragraphs: [
    "I'm a Full Stack Developer based in Ticino. I like owning a feature end to end: the layout in Figma, the React or Next.js interface, the API and database behind it, and the deploy that puts it in front of users.",
    "At Franklin Switzerland I took the company's new website from Figma to production, and I maintain its existing PHP site: automations, patches and security fixes. Before that I spent over two years at SL Technology building and maintaining PHP web applications, working directly with clients on their requirements.",
    "I care about how software behaves once it's live, so I run my own projects in Docker on a Proxmox and Kubernetes homelab. That's where I learn the infrastructure side without risking production.",
    "Outside work I do graphic design, 3D modeling and 3D printing.",
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
    outcome: "Public website for a cat-rescue association in Crema, designed and built end to end and donated.",
    role: "Design and full stack development",
    // TODO(user): confirm the project year, and how Next.js reads from Drupal (JSON:API or GraphQL; static or server-rendered) and where it is hosted.
    year: "2025",
    stack: ["Next.js", "React", "TypeScript", "Drupal (headless)", "PHP", "Figma"],
    problem:
      "The Arischiogatti di Crema association shelters cats in need and finds them homes. It needed a public website with content it could update itself.",
    approach:
      "Designed the site in Figma, built the front end in Next.js and TypeScript, and set up Drupal as a headless CMS that serves the content.",
    result: "Live in production at arischiogatti.it, donated to the association.",
    architecture: "Next.js front end (React, TypeScript) → content from headless Drupal (PHP)",
    image: {
      src: "/images/projects/arischiogatti",
      width: 1280,
      height: 800,
      alt: "Arischiogatti home page: a tabby cat photo behind the headline “Ogni zampa merita una seconda occasione” and a button to meet the cats",
    },
    liveUrl: "https://arischiogatti.it/",
  },
  {
    id: "crypto-tracker",
    name: "Crypto Tracker",
    outcome:
      "Self-hosted portfolio tracker that turns raw crypto transactions into cost basis, profit and loss, and a yearly tax report.",
    role: "Personal project",
    year: "2026",
    // TODO(user): add a short demo GIF or video if available.
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Zod", "decimal.js", "Recharts", "Vitest"],
    problem:
      "Working out cost basis by hand breaks down once swaps, transfers, staking rewards and fees paid in other assets pile up, and the answer depends on the accounting method.",
    approach:
      "A cost-basis engine replays transactions in date order and builds lots under FIFO, LIFO or average cost, fed by Kraken CSV imports and Kraken's public price ticker.",
    result:
      "Side-by-side strategy comparison, realized and unrealized profit and loss, and a yearly tax report exported to CSV or JSON. The engine, CSV import and tax report have Vitest tests.",
    decisions: [
      "Cost-basis engine with FIFO, LIFO and average cost, fees included in the basis",
      "decimal.js for every amount, so money math never uses floating point",
      "PostgreSQL as the source of truth; JSON backups are only an interchange format",
      "Prices stored in CHF, EUR and USD; portfolio valued in CHF",
    ],
    image: {
      src: "/images/projects/crypto-tracker",
      width: 1280,
      height: 800,
      alt: "Crypto Tracker dashboard showing total equity, profit, ROI, realized and unrealized profit and loss, and holdings in CHF",
    },
    repoUrl: "https://github.com/NikTailTech/crypto-tracker",
  },
  {
    id: "finance-tracker",
    name: "Finance Tracker",
    outcome:
      "Self-hosted finance app for an Italian–Swiss setup, with EUR and CHF accounts and balances derived from a ledger.",
    role: "Personal project",
    year: "2026",
    // TODO(user): add a short demo GIF or video if available.
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Zod", "decimal.js", "Docker", "Kubernetes"],
    problem:
      "With EUR and CHF accounts split into budget envelopes, money moves between accounts, envelopes and currencies every month. Counting those moves as income or spending distorts the numbers.",
    approach:
      "A ledger model where every balance is computed from transactions and transfers, never stored. Transfers and EUR–CHF conversions are their own entity, separate from income and expenses.",
    result:
      "A dashboard with FX-aware net worth and balances per account and envelope, deployable with Docker Compose or on Kubernetes with health checks and persistent PostgreSQL.",
    decisions: [
      "Ledger-based balances: no stored totals that can drift out of sync",
      "Amounts stored as Decimal(19,4) and handled with decimal.js",
      "EUR–CHF conversions use a configurable rate and never count as income or expense",
      "Standalone Next.js build with Docker Compose and Kubernetes manifests, probed on /api/health",
    ],
    image: {
      src: "/images/projects/finance-tracker",
      width: 1280,
      height: 800,
      alt: "Finance Tracker dashboard showing EUR and CHF account totals, each account split into Needs, Play, Investment and Savings",
    },
    repoUrl: "https://github.com/NikTailTech/finance-tracker",
  },
];

export const contact = {
  heading: "Let’s talk",
  body: "Hiring for a Full Stack or PHP role in Switzerland or remote? Email is the fastest way to reach me; LinkedIn works too.",
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
  title: "Nicholas Codazzi – Full Stack Developer (TypeScript, PHP)",
  description:
    "Full Stack Developer in Ticino, Switzerland. I build web apps end to end with TypeScript, React, Next.js, PHP and PostgreSQL, from Figma to production.",
  keywords: [
    "Nicholas Codazzi",
    "Full Stack Developer",
    "Full Stack Developer Ticino",
    "PHP Developer",
    "Next.js Developer",
    "TypeScript",
    "React",
    "PostgreSQL",
    "Lugano",
  ],
  ogImage: {
    src: "/images/og-image.png",
    width: 1200,
    height: 630,
    alt: "Nicholas Codazzi, Full Stack Developer: TypeScript, Next.js, PHP. Ticino, Switzerland.",
  },
  locale: "en_US",
};

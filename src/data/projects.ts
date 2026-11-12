import type { Project, ProjectCategory } from "@/types";

/**
 * Featured projects. Replace placeholders with real work.
 * Images live under public/images/projects/
 *
 * Set to "live" when case studies are ready — project cards and filters stay intact.
 */
export const projectsSectionMode: "coming-soon" | "live" = "live";

export const projectFilters: { id: ProjectCategory | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "full-stack", label: "Full Stack" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "infrastructure", label: "Infrastructure" },
  { id: "blockchain", label: "Blockchain / Web3" },
  { id: "creative", label: "3D & Creative" },
];

export const projects: Project[] = [
  {
    id: "arischiogatti",
    name: "Arischiogatti",


    shortDescription:
      "Website for the Arischiogatti di Crema association — shelter, care, and adoption support for cats in need.",
    detailedDescription:
      "End-to-end delivery of the association’s public website: full visual design, Drupal CMS integration for content management, and production deployment. The project was donated to the association to support their work in Crema and the surrounding area.",
    category: "full-stack",
    technologies: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Figma",
      "Drupal CMS",
      "PHP",
      "HTML",
      "CSS",
    ],

    image: "/images/projects/arischiogatti-cover.png",

    status: "completed",
    highlights: [
      "Complete visual design of the public site",
      "Drupal CMS setup for editorial content and updates",
      "Production deploy, donated to the association",
    ],
    liveUrl: "https://arischiogatti.it/",

    isPlaceholder: false,
  },
  {
    id: "crypto-tracker",
    name: "Crypto Tracker",
    shortDescription:
      "Self-hosted app to record crypto transactions, calculate cost basis, and follow portfolio performance.",
    detailedDescription:
      "A local Next.js app for personal portfolio management: buys, sells, swaps, transfers, and staking, with FIFO, LIFO, and average-cost strategies. Prices can refresh from Kraken, and a yearly tax report exports to CSV or JSON. Portfolio data stays in your own PostgreSQL database.",
    category: "full-stack",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Tailwind CSS",
      "Zod",
      "Recharts",
    ],
    image: "/images/projects/crypto-tracker.png",
    githubUrl: "https://github.com/NikTailTech/crypto-tracker",
    status: "completed",
    highlights: [
      "Cost basis engine with FIFO, LIFO, and average cost",
      "Kraken CSV import and live price refresh",
      "Yearly tax report, plus backup export and import",
    ],
    isPlaceholder: false,
  },
  {
    id: "finance-tracker",
    name: "Finance Tracker",
    shortDescription:
      "Self-hosted personal finance app for accounts, envelopes, and EUR / CHF balances.",
    detailedDescription:
      "Built for an Italian–Swiss setup: checking accounts in EUR and CHF, each split into Needs, Play, Investment, and Savings. Balances are computed from the ledger, and transfers or currency conversions stay separate from income and expenses.",
    category: "full-stack",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Tailwind CSS",
      "Docker",
      "Zod",
    ],
    image: "/images/projects/finance-tracker.png",
    githubUrl: "https://github.com/NikTailTech/finance-tracker",
    status: "completed",
    highlights: [
      "Dashboard with FX-aware net worth and category breakdown",
      "Account, envelope, and EUR–CHF moves that are not income or expenses",
      "Debts, recurring templates, and Docker or Kubernetes deploy",
    ],
    isPlaceholder: false,
  },
];

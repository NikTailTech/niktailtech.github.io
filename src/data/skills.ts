import type { SkillCategory } from "@/types";

/**
 * Technical skills by domain.
 * Levels are optional and intentionally coarse — edit manually; do not invent expertise.
 * Levels: exploring | working | proficient | advanced
 */
export const skillCategories: SkillCategory[] = [
  {
    id: "web",
    title: "Web Development",
    description:
      "Interfaces, frameworks, styling, and web application delivery.",

    skills: [
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "HTML" },
      { name: "CSS" },
      { name: "SCSS" },
      { name: "React.js" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "Bootstrap" },
      { name: "shadcn/ui" },
      { name: "jQuery" },
      { name: "Three.js" },
      { name: "PHP" },
      { name: "REST apis" },
      { name: "SOAP apis" },
      { name: "i18n" },
    ],
  },
  {
    id: "database",

    title: "Database Management",
    description:
      "Relational and document databases, ORM/BaaS tooling, and day-to-day database administration.",
    skills: [
      { name: "Database design" },
      { name: "SQL" },
      { name: "T-SQL" },
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "SQL Server" },
      { name: "Azure SQL" },
      { name: "MongoDB" },
      { name: "Prisma" },
      { name: "Supabase" },
      { name: "SQL Server Management Studio" },
      { name: "MySQL Workbench" },
    ],
  },

  {
    id: "infrastructure",
    title: "Infrastructure & DevOps",
    description:
      "Systems, containers, networking, and self-hosted environments that support real software.",
    skills: [
      { name: "Linux" },
      { name: "Docker" },
      { name: "Kubernetes" },
      { name: "k3s" },
      { name: "k9s" },

      { name: "Proxmox" },
      { name: "Networking" },
      { name: "Tailscale" },
      { name: "CI/CD" },
      { name: "Git" },
      { name: "GitHub" },
      { name: "Virtualization" },
      { name: "Self-hosted infrastructure" },
    ],
  },
  {
    id: "blockchain",
    title: "Blockchain & Web3",
    description:
      "Active interest and practical exploration of crypto ecosystems, Web3 tooling, and digital assets.",
    skills: [
      { name: "Cryptocurrency ecosystem" },
      { name: "Blockchain technologies" },
      { name: "DeFi" },
      { name: "Solidity" },

      { name: "NFT Creation" },
      { name: "Cryptocurrency portfolio tracking" },
    ],



  },
  {
    id: "3d",
    title: "3D Modeling & Manufacturing",
    description:
      "Digital modeling and fabrication — from sculpting and CAD to printed prototypes.",
    skills: [
      { name: "Blender" },
      { name: "Fusion 360" },
      { name: "Organic modeling" },
      { name: "Digital sculpting" },
      { name: "Hard-surface modeling" },
      { name: "3D printing" },

      { name: "Prototyping" },
    ],
  },
  {
    id: "design",
    title: "Graphic Design & Digital Media",
    description:
      "Visual communication and motion — composition, image work, and edited video.",
    skills: [
      { name: "Figma" },
      { name: "Adobe Photoshop" },
      { name: "Adobe Illustrator" },
      { name: "Adobe Premiere Pro" },
      { name: "Adobe After Effects" },
    ],

  },
];

export const levelLabels: Record<string, string> = {
  exploring: "Exploring",
  working: "Working knowledge",
  proficient: "Proficient",
  advanced: "Advanced",
};

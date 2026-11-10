import type { SkillCategory } from "@/types";

/**
 * Technical skills by domain.
 * Levels are optional and intentionally coarse — edit manually; do not invent expertise.
 * Levels: exploring | working | proficient | advanced
 */
export const skillCategories: SkillCategory[] = [
  {
    id: "software",
    title: "Software Engineering",
    description:
      "Application development across the stack — interfaces, APIs, data, and delivery.",
    skills: [
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "React" },
      { name: "Next.js" },
      { name: "Node.js" },
      { name: "Three.js" },
      { name: "shadcn/ui" },
      { name: "HTML" },
      { name: "CSS" },
      { name: "Tailwind CSS" },
      { name: "Bootstrap" },
      { name: "PHP" },
      { name: "Java" },
      { name: "SQL" },
      { name: "REST APIs" },
      { name: "MongoDB" },
      { name: "PostgreSQL" },
      { name: "Prisma" },
      { name: "Supabase" },
      { name: "Git" },
      { name: "GitHub" },
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
      { name: "Proxmox" },
      { name: "Networking" },
      { name: "Tailscale" },
      { name: "CI/CD" },
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
      { name: "Cryptocurrency ecosystem", level: "working" },
      { name: "Blockchain technologies", level: "exploring" },
      { name: "Web3", level: "exploring" },
      { name: "NFT creation", level: "working" },
      { name: "Digital assets", level: "working" },
      { name: "Cryptocurrency portfolio tracking", level: "working" },
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
      { name: "CAD-oriented design" },
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
      { name: "Adobe Photoshop" },
      { name: "Adobe Illustrator" },
      { name: "Adobe Premiere Pro" },
      { name: "Adobe After Effects" },
      { name: "Graphic design" },
      { name: "Image editing" },
      { name: "Vector graphics" },
      { name: "Video editing" },
      { name: "Motion graphics" },
    ],
  },
];

export const levelLabels: Record<string, string> = {
  exploring: "Exploring",
  working: "Working knowledge",
  proficient: "Proficient",
  advanced: "Advanced",
};

import type { SkillCategory } from "@/types";

/**
 * Skills split by how often they're used, then by domain.
 */
export const skillCategories: SkillCategory[] = [
  {
    id: "daily",
    title: "Daily use",
    description: "What I use regularly to ship interfaces, APIs, data, and deploys.",
    domains: [
      {
        id: "frontend",
        skills: [
          { name: "TypeScript" },
          { name: "JavaScript" },
          { name: "React" },
          { name: "Next.js" },
          { name: "HTML" },
          { name: "CSS" },
          { name: "Tailwind CSS" },
          { name: "jQuery" },
        ],
      },
      {
        id: "backend",
        skills: [{ name: "Node.js" }, { name: "PHP" }, { name: "REST APIs" }],
      },
      {
        id: "data",
        skills: [{ name: "PostgreSQL" }, { name: "SQL" }, { name: "Prisma" }],
      },
      {
        id: "cloud",
        skills: [
          { name: "Docker" },
          { name: "Linux" },
          { name: "Kubernetes" },
          { name: "CI/CD" },
          { name: "Git" },
          { name: "GitHub" },
        ],
      },
      {
        id: "libraries",
        skills: [{ name: "Three.js" }],
      },
      {
        id: "design",
        skills: [{ name: "Figma" }],
      },
    ],
  },
  {
    id: "also",
    title: "Also use",
    description: "Technologies I know and can work with when the project needs them.",
    domains: [
      {
        id: "frontend",
        skills: [{ name: "SCSS" }, { name: "Bootstrap" }],
      },
      {
        id: "libraries",
        skills: [{ name: "shadcn/ui" }],
      },
      {
        id: "backend",
        skills: [{ name: "Java" }],
      },
      {
        id: "data",
        skills: [{ name: "MongoDB" }, { name: "Supabase" }, { name: "MySQL" }],
      },
      {
        id: "design",
        skills: [
          { name: "Blender" },
          { name: "Adobe Photoshop" },
          { name: "Adobe Illustrator" },
        ],
      },
    ],
  },
];

export const levelLabels: Record<string, string> = {
  exploring: "Exploring",
  working: "Working knowledge",
  proficient: "Proficient",
  advanced: "Advanced",
};

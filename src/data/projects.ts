import type { Project, ProjectCategory } from "@/types";

/**
 * Featured projects. Replace placeholders with real work.
 * Images live under public/images/projects/
 */
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
    id: "placeholder-fullstack",
    name: "Full Stack Application",
    shortDescription:
      "Placeholder — describe a complete web application you built end-to-end.",
    detailedDescription:
      "TODO: Replace with a real project narrative covering problem, approach, stack, and outcome. Do not invent metrics or client names.",
    category: "full-stack",
    technologies: ["TypeScript", "React", "Next.js", "Node.js", "PostgreSQL"],
    image: "/images/projects/placeholder-fullstack.svg",
    status: "placeholder",
    highlights: [
      "TODO: Technical highlight",
      "TODO: Architecture or delivery highlight",
      "TODO: Deployment or DX highlight",
    ],
    architecture:
      "TODO: Brief architecture overview (e.g. SPA + REST API + managed database).",
    githubUrl: undefined,
    liveUrl: undefined,
    isPlaceholder: true,
  },
  {
    id: "placeholder-infra",
    name: "Self-Hosted Infrastructure Lab",
    shortDescription:
      "Placeholder — document a homelab, cluster, or deployment setup you operate.",
    detailedDescription:
      "TODO: Describe Proxmox / Docker / k3s (or similar) environments you run, what services you host, and how you automate them.",
    category: "infrastructure",
    technologies: ["Linux", "Docker", "Proxmox", "k3s", "CI/CD"],
    image: "/images/projects/placeholder-infra.svg",
    status: "placeholder",
    highlights: [
      "TODO: Networking or security practice",
      "TODO: Orchestration or automation detail",
    ],
    isPlaceholder: true,
  },
  {
    id: "placeholder-nft",
    name: "Original NFT Collection",
    shortDescription:
      "Placeholder — showcase the original NFT collection you created.",
    detailedDescription:
      "TODO: Add the real collection name, creative direction, tooling used, and any public links. Do not invent chain, standard, or marketplace details.",
    category: "blockchain",
    technologies: ["NFT creation", "Digital assets", "Web3"],
    image: "/images/projects/placeholder-nft.svg",
    status: "placeholder",
    highlights: [
      "TODO: Creative or technical approach",
      "TODO: Distribution or tooling note",
    ],
    isPlaceholder: true,
  },
  {
    id: "placeholder-3d",
    name: "3D Modeling & Print Study",
    shortDescription:
      "Placeholder — a modeling-to-print workflow from Blender or Fusion 360.",
    detailedDescription:
      "TODO: Describe a specific model, print, or prototype — organic, hard-surface, or CAD — and the tools used.",
    category: "creative",
    technologies: ["Blender", "Fusion 360", "3D printing"],
    image: "/images/projects/placeholder-3d.svg",
    status: "placeholder",
    highlights: [
      "TODO: Modeling technique",
      "TODO: Print / prototype outcome",
    ],
    isPlaceholder: true,
  },
];

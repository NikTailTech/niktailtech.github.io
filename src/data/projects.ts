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

    image: "/images/projects/arischiogatti-cover.jpg",

    status: "completed",
    highlights: [
      "Complete visual design of the public site",
      "Drupal CMS setup for editorial content and updates",
      "Production deploy, donated to the association",
    ],
    liveUrl: "https://arischiogatti.it/",

    isPlaceholder: false,
  },
];

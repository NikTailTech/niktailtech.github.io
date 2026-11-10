import type { ExperienceItem } from "@/types";

/**
 * Professional experience timeline.
 * Add real roles below. Keep placeholders clearly marked until replaced.
 *
 * Do not invent employers, dates, titles, or achievements.
 */
export const experiences: ExperienceItem[] = [
  {
    id: "placeholder-role-1",
    company: "Company Name",
    title: "Role Title",
    period: "Start – End",
    location: "Location",
    summary:
      "TODO: Replace this placeholder with a real role. Describe the scope of work in one or two sentences.",
    responsibilities: [
      "TODO: Primary responsibility or ownership area",
      "TODO: Collaboration, delivery, or systems work",
      "TODO: Notable technical focus for this role",
    ],
    technologies: ["TypeScript", "React", "Node.js"],
    achievements: [
      "TODO: Optional measurable or qualitative outcome — only add verified facts",
    ],
    isPlaceholder: true,
  },
  {
    id: "placeholder-role-2",
    company: "Company or Project",
    title: "Role Title",
    period: "Start – End",
    location: "Location / Remote",
    summary:
      "TODO: Second experience entry. Duplicate this object pattern for additional roles.",
    responsibilities: [
      "TODO: Ownership or delivery area",
      "TODO: Collaboration or systems focus",
    ],
    technologies: ["Docker", "Linux", "PostgreSQL"],
    isPlaceholder: true,
  },
];

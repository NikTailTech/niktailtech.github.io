import type { Repository } from "@/types";
import { profile } from "./profile";

const gh = (repo: string) => `https://github.com/${profile.githubUsername}/${repo}`;

/**
 * Public GitHub repositories — configured statically (no runtime API).
 * Update names, descriptions, and URLs to match real public repos.
 */
export const repositories: Repository[] = [
  {
    id: "placeholder-repo-1",
    name: "repository-name",
    description:
      "TODO: Short description of a public repository. Replace name and URL with a real NikTailTech repo.",
    tags: ["TypeScript", "Next.js"],
    url: gh("repository-name"),
    language: "TypeScript",
    isPlaceholder: true,
  },
  {
    id: "placeholder-repo-2",
    name: "another-repo",
    description:
      "TODO: Add another public repository. Keep entries limited to repos you want recruiters to see.",
    tags: ["Node.js", "Docker"],
    url: gh("another-repo"),
    language: "JavaScript",
    isPlaceholder: true,
  },
  {
    id: "placeholder-repo-3",
    name: "infra-or-tooling",
    description:
      "TODO: Optional third repository — scripts, infrastructure-as-code, or tooling.",
    tags: ["Linux", "Automation"],
    url: gh("infra-or-tooling"),
    language: "Shell",
    isPlaceholder: true,
  },
];

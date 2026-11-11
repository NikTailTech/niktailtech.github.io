import { z } from "zod";

const socialLinkSchema = z.object({
  id: z.string().min(1),
  label: z.string().min(1),
  href: z.string().min(1),
  enabled: z.boolean(),
  todo: z.string().optional(),
});

const projectSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  shortDescription: z.string().min(1),
  detailedDescription: z.string().min(1),
  category: z.enum([
    "full-stack",
    "frontend",
    "backend",
    "infrastructure",
    "blockchain",
    "creative",
  ]),
  technologies: z.array(z.string()).min(1),
  image: z.string().startsWith("/"),
  status: z.enum(["concept", "in-progress", "completed", "archived", "placeholder"]),
  highlights: z.array(z.string()),
  isPlaceholder: z.boolean().optional(),
});

export const profileSchema = z.object({
  name: z.string().min(1),
  title: z.string().min(1),
  githubUsername: z.string().min(1),
  shortBio: z.string().min(1),
  personalStatement: z.string().min(1),
  about: z.array(z.string()).min(1),
  focusAreas: z
    .array(
      z.object({
        title: z.string().min(1),
        description: z.string().min(1),
      }),
    )
    .min(1),
  stackGroups: z
    .array(
      z.object({
        id: z.string().min(1),
        items: z.array(z.string().min(1)).min(1),
      }),
    )
    .min(1),
  email: z.string().min(1),
  emailConfigured: z.boolean(),
  cvPath: z.string().startsWith("/"),
  cvAvailable: z.boolean(),
  seo: z.object({
    siteUrl: z.string().url(),
    title: z.string().min(1),
    description: z.string().min(1),
    keywords: z.array(z.string()),
    ogImage: z.string().startsWith("/"),
    locale: z.string().min(2),
  }),
});

export { socialLinkSchema, projectSchema };

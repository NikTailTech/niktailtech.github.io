import { z } from "zod";

const yearMonth = z.string().regex(/^\d{4}-(0[1-9]|1[0-2])$/);
const nonEmpty = z.string().trim().min(1);

export const experienceSchema = z.object({
  id: nonEmpty,
  company: nonEmpty,
  title: nonEmpty,
  start: yearMonth,
  end: yearMonth.nullable(),
  location: nonEmpty,
  context: nonEmpty.optional(),
  bullets: z.array(nonEmpty).min(1).max(4),
  technologies: z.array(nonEmpty).min(1),
  links: z.array(z.object({ label: nonEmpty, href: z.string().url() })).optional(),
});

export const projectSchema = z.object({
  id: nonEmpty,
  name: nonEmpty,
  outcome: nonEmpty,
  role: nonEmpty,
  year: z.string().regex(/^\d{4}(–\d{4})?$/),
  stack: z.array(nonEmpty).min(1),
  problem: nonEmpty,
  approach: nonEmpty,
  result: nonEmpty,
  decisions: z.array(nonEmpty).optional(),
  architecture: nonEmpty.optional(),
  image: z.object({
    src: z.string().startsWith("/images/"),
    width: z.number().int().positive(),
    height: z.number().int().positive(),
    alt: nonEmpty,
  }),
  liveUrl: z.string().url().optional(),
  repoUrl: z.string().url().optional(),
});

/** Copy that must never ship on the live page. */
export const forbiddenCopy = [
  /\bTODO\b/i,
  /\[X\]/i,
  /placeholder/i,
  /coming soon/i,
  /lorem ipsum/i,
  /sorting through/i,
];

/** Swiss / Italian / international phone numbers. */
export const phonePattern = /(\+|00)\d{2}[\s\d]{8,}|\b0\d{2}\s?\d{3}\s?\d{2}\s?\d{2}\b/;

/** Every string value reachable from `value`, for copy checks. */
export function collectStrings(value: unknown): string[] {
  if (typeof value === "string") return [value];
  if (Array.isArray(value)) return value.flatMap(collectStrings);
  if (value && typeof value === "object") return Object.values(value).flatMap(collectStrings);
  return [];
}

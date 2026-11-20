import { describe, expect, it } from "vitest";
import * as cv from "./cv";
import { dictionaries } from "@/i18n/dictionaries";
import {
  collectStrings,
  experienceSchema,
  forbiddenCopy,
  phonePattern,
  projectSchema,
} from "@/lib/validate-content";

const publishedCopy = [...collectStrings(cv), ...collectStrings(dictionaries)];

describe("CV consistency", () => {
  it("uses the full name everywhere and the handle only for GitHub", () => {
    expect(cv.person.name).toBe("Nicholas Codazzi");
    expect(cv.person.githubUsername).toBe("NikTailTech");
    expect(cv.seo.title.startsWith("Nicholas Codazzi")).toBe(true);
  });

  it("matches the CV employers, titles, locations and dates exactly", () => {
    expect(
      cv.experience.map(({ company, title, location, start, end }) => ({
        company,
        title,
        location,
        start,
        end,
      })),
    ).toEqual([
      {
        company: "Franklin Switzerland",
        title: "Full Stack Developer",
        location: "Sorengo, Switzerland",
        start: "2025-06",
        end: null,
      },
      {
        company: "SL Technology s.r.l.",
        title: "Full Stack Web Developer",
        location: "Crema, Italy",
        start: "2023-02",
        end: "2025-05",
      },
      {
        company: "Zucchetti S.p.A.",
        title: "Full Stack Developer",
        location: "Lodi, Italy",
        start: "2022-10",
        end: "2023-02",
      },
    ]);
  });

  it("matches the CV education and languages", () => {
    expect(cv.education).toEqual([
      {
        id: "iis-galilei",
        qualification: "Diploma in Information Technology",
        institution: "IIS Galileo Galilei",
        location: "Crema, Italy",
        startYear: 2017,
        endYear: 2022,
      },
    ]);
    expect(cv.person.languages.map((l) => `${l.name} ${l.level}`)).toEqual([
      "Italian Native",
      "English C1",
    ]);
  });

  it("validates experience and project shapes", () => {
    for (const item of cv.experience) expect(() => experienceSchema.parse(item)).not.toThrow();
    for (const project of cv.projects) expect(() => projectSchema.parse(project)).not.toThrow();
  });
});

describe("positioning copy", () => {
  it("keeps At a glance to four lines", () => {
    expect(cv.glance.areas.length + 1).toBeLessThanOrEqual(4);
  });

  it("keeps About between 120 and 150 words", () => {
    const words = cv.about.paragraphs.join(" ").split(/\s+/).filter(Boolean).length;
    expect(words).toBeGreaterThanOrEqual(120);
    expect(words).toBeLessThanOrEqual(150);
  });

  it("lists every skill once, with Java only as training and no C/C++", () => {
    const all = [...cv.skillTiers.flatMap((tier) => tier.skills), ...cv.alsoOnCv];
    const normalized = all.map((s) => s.toLowerCase().replace(/\s+/g, ""));
    expect(new Set(normalized).size).toBe(normalized.length);
    expect(all.filter((s) => /\bjava\b/i.test(s))).toEqual(["Java (training)"]);
    expect(all.some((s) => /^c(\+\+)?$/i.test(s))).toBe(false);
  });
});

describe("published copy", () => {
  it("contains no placeholder or unfinished copy", () => {
    for (const text of publishedCopy) {
      for (const pattern of forbiddenCopy) expect(text).not.toMatch(pattern);
    }
  });

  it("contains no phone number", () => {
    for (const text of publishedCopy) expect(text).not.toMatch(phonePattern);
  });
});

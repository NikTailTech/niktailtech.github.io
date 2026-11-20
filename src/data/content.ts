import type { Locale } from "@/i18n/types";
import type { CvTranslation } from "@/types";
import * as cv from "./cv";
import { cvIt } from "./cv.it";

const english = {
  person: cv.person,
  socialLinks: cv.socialLinks,
  cvDocument: cv.cvDocument,
  hero: cv.hero,
  glance: cv.glance,
  about: cv.about,
  skillTiers: cv.skillTiers,
  alsoOnCv: cv.alsoOnCv,
  beyondTheStack: cv.beyondTheStack,
  experience: cv.experience,
  education: cv.education,
  projects: cv.projects,
  contact: cv.contact,
  seo: cv.seo,
};

export type Content = typeof english;

const translations: Partial<Record<Locale, CvTranslation>> = { it: cvIt };

function translate(tr: CvTranslation): Content {
  const label = (skill: string) => tr.skillLabels[skill] ?? skill;

  return {
    ...english,
    person: {
      ...cv.person,
      location: { ...cv.person.location, country: tr.country },
      languages: cv.person.languages.map((language) => ({
        ...language,
        ...tr.languages[language.code],
      })),
    },
    hero: tr.hero,
    glance: tr.glance,
    about: tr.about,
    skillTiers: cv.skillTiers.map((tier) => ({
      ...tier,
      ...tr.skillTiers[tier.id],
      skills: tier.skills.map(label),
    })),
    alsoOnCv: cv.alsoOnCv.map(label),
    beyondTheStack: tr.beyondTheStack,
    experience: cv.experience.map((item) => ({
      ...item,
      ...tr.experience[item.id],
      technologies: item.technologies.map(label),
    })),
    education: cv.education.map((item) => ({ ...item, ...tr.education[item.id] })),
    projects: cv.projects.map((project) => {
      const { imageAlt, ...prose } = tr.projects[project.id];
      return { ...project, ...prose, image: { ...project.image, alt: imageAlt } };
    }),
    contact: tr.contact,
    seo: {
      ...cv.seo,
      title: tr.seo.title,
      description: tr.seo.description,
      locale: tr.seo.locale,
      ogImage: { ...cv.seo.ogImage, alt: tr.seo.ogImageAlt },
    },
  };
}

export function getContent(locale: Locale): Content {
  const tr = translations[locale];
  return tr ? translate(tr) : english;
}

export const locales: Locale[] = ["en", "it"];

/** Path of the home page for a locale (trailingSlash is on). */
export function localePath(locale: Locale): string {
  return locale === "en" ? "/" : `/${locale}/`;
}

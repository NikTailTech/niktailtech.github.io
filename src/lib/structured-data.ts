import { education, experience, person, seo, skillTiers, socialLinks } from "@/data/cv";

export function personJsonLd(url: string) {
  const currentRole = experience.find((item) => item.end === null);

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    givenName: person.givenName,
    familyName: person.familyName,
    jobTitle: person.jobTitle,
    description: seo.description,
    url,
    email: `mailto:${person.email}`,
    sameAs: socialLinks.map((link) => link.href),
    address: {
      "@type": "PostalAddress",
      addressLocality: person.location.region,
      addressCountry: person.location.countryCode,
    },
    knowsAbout: skillTiers.find((tier) => tier.id === "daily")?.skills ?? [],
    knowsLanguage: person.languages.map((language) => ({
      "@type": "Language",
      name: language.name,
      alternateName: language.code,
    })),
    ...(currentRole
      ? { worksFor: { "@type": "Organization", name: currentRole.company } }
      : {}),
    alumniOf: education.map((item) => ({
      "@type": "EducationalOrganization",
      name: item.institution,
    })),
  };
}

/** Safe to inline in a <script> tag. */
export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

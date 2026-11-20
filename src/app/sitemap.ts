import type { MetadataRoute } from "next";
import { localePath, locales } from "@/data/content";
import { siteUrl } from "@/lib/metadata";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(locales.map((l) => [l, `${siteUrl}${localePath(l)}`]));

  return locales.map((locale) => ({
    url: `${siteUrl}${localePath(locale)}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: locale === "en" ? 1 : 0.8,
    alternates: { languages },
  }));
}

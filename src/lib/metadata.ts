import type { Metadata, Viewport } from "next";
import { getContent, localePath, locales } from "@/data/content";
import type { Locale } from "@/i18n/types";

export const siteUrl = getContent("en").seo.siteUrl.replace(/\/$/, "");

export function buildMetadata(locale: Locale): Metadata {
  const { person, seo } = getContent(locale);
  const path = localePath(locale);

  return {
    metadataBase: new URL(siteUrl),
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    authors: [{ name: person.name, url: siteUrl }],
    creator: person.name,
    alternates: {
      canonical: path,
      languages: {
        ...Object.fromEntries(locales.map((l) => [l, localePath(l)])),
        "x-default": localePath("en"),
      },
    },
    openGraph: {
      type: "profile",
      locale: seo.locale,
      alternateLocale: locales
        .filter((l) => l !== locale)
        .map((l) => getContent(l).seo.locale),
      url: path,
      title: seo.title,
      description: seo.description,
      siteName: person.name,
      firstName: person.givenName,
      lastName: person.familyName,
      images: [
        {
          url: seo.ogImage.src,
          width: seo.ogImage.width,
          height: seo.ogImage.height,
          alt: seo.ogImage.alt,
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [{ url: seo.ogImage.src, alt: seo.ogImage.alt }],
    },
    robots: {
      index: true,
      follow: true,
    },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "48x48" },
        { url: "/icon.svg", type: "image/svg+xml" },
      ],
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    },
    manifest: "/manifest.webmanifest",
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3f4f6" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0b0d" },
  ],
  colorScheme: "dark light",
};

import type { MetadataRoute } from "next";
import { profile } from "@/data/profile";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = profile.seo.siteUrl.replace(/\/$/, "");
  return [
    {
      url: `${base}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}

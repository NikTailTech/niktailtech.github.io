import type { MetadataRoute } from "next";
import { seo } from "@/data/cv";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = seo.siteUrl.replace(/\/$/, "");
  return [
    {
      url: `${base}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}

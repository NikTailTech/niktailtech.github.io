import type { MetadataRoute } from "next";
import { seo } from "@/data/cv";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const base = seo.siteUrl.replace(/\/$/, "");
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${base}/sitemap.xml`,
  };
}

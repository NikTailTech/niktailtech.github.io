import type { MetadataRoute } from "next";
import { profile } from "@/data/profile";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const base = profile.seo.siteUrl.replace(/\/$/, "");
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${base}/sitemap.xml`,
  };
}

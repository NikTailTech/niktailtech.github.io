import type { NextConfig } from "next";

/**
 * GitHub Pages basePath:
 * - User site (https://niktailtech.github.io): leave empty
 * - Project site (username.github.io/repo-name): set NEXT_PUBLIC_BASE_PATH=/repo-name
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, "") || "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;

/**
 * Prefix a public asset path with the configured basePath for GitHub Pages.
 * Use for raw <img src> / href values that do not go through next/image or next/link.
 */
export function withBasePath(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, "") || "";
  if (!path.startsWith("/")) return path;
  if (!base) return path;
  return `${base}${path}`;
}

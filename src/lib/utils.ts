export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}

export function externalRel(href: string): string | undefined {
  if (href.startsWith("http") || href.startsWith("mailto:")) {
    return "noopener noreferrer";
  }
  return undefined;
}

export function isExternalHref(href: string): boolean {
  return href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("//");
}

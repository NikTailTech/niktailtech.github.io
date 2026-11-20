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

/** "2025-06" -> "Jun 2025" (en) / "giu 2025" (it) */
export function formatYearMonth(yearMonth: string, locale: string): string {
  const [year, month] = yearMonth.split("-").map(Number);
  return new Intl.DateTimeFormat(locale, {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(year, month - 1, 1)));
}

export function formatPeriod(
  start: string,
  end: string | null,
  locale: string,
  presentLabel: string,
): string {
  return `${formatYearMonth(start, locale)} – ${end ? formatYearMonth(end, locale) : presentLabel}`;
}

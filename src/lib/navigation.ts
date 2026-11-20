import type { Dictionary } from "@/i18n/types";
import type { NavItem } from "@/types";

export function getNavigation(t: Dictionary): NavItem[] {
  return [
    { label: t.nav.glance, href: "#glance" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.contact, href: "#contact" },
  ];
}

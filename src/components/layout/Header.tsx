"use client";

import { profile } from "@/data/profile";
import { enabledSocialLinks } from "@/data/social";
import { Container } from "@/components/ui/Container";
import { ThemeToggle } from "@/components/navigation/ThemeToggle";
import { MobileNav } from "@/components/navigation/MobileNav";

import { GitHubIcon, LinkedInIcon } from "@/components/ui/SocialIcons";
import { useLocale } from "@/i18n/LocaleProvider";

export function Header() {
  const { t } = useLocale();

  const navigation = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.contact, href: "#contact" },
  ];

  const headerSocial = enabledSocialLinks.filter(
    (l) => l.id === "github" || l.id === "linkedin",
  );

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/85 backdrop-blur-md">
      <Container className="flex h-[var(--nav-height)] items-center justify-between gap-4">
        <a
          href="#top"
          className="group flex items-baseline gap-2 font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight text-fg"
        >
          <span>
            {profile.name} {profile.surname}
          </span>
        </a>

        <nav aria-label={t.nav.primary} className="hidden items-center gap-1 md:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-sm px-3 py-2 text-sm text-fg-muted transition-colors hover:text-fg"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {headerSocial.map((link) => (
            <a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-border text-fg-muted transition-colors hover:border-border-strong hover:text-fg"
              aria-label={`${link.label} profile`}
            >
              {link.id === "github" ? (
                <GitHubIcon className="h-4 w-4" />
              ) : (
                <LinkedInIcon className="h-4 w-4" />
              )}
            </a>
          ))}
          <ThemeToggle />

          <MobileNav items={navigation} />
        </div>
      </Container>
    </header>
  );
}


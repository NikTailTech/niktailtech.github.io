"use client";

import { ArrowUp } from "lucide-react";
import { profile } from "@/data/profile";
import { enabledSocialLinks } from "@/data/social";
import { Container } from "@/components/ui/Container";
import { useLocale } from "@/i18n/LocaleProvider";

export function Footer() {
  const year = new Date().getFullYear();
  const { t } = useLocale();

  const navigation = [
    { label: t.nav.tldr, href: "#tldr" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.contact, href: "#contact" },
  ];

  const followLinks = enabledSocialLinks.filter(
    (l) => l.id === "github" || l.id === "linkedin",
  );

  return (
    <footer className="section-rule border-t border-border bg-bg-elevated py-12">
      <Container className="flex flex-col gap-10">
        <div className="grid gap-10 sm:grid-cols-[2fr_1fr] sm:gap-12 lg:gap-16">
          <nav aria-label={t.nav.footer}>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-fg-subtle">
              {t.footer.navigate}
            </p>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-fg-muted transition-colors hover:text-fg"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-fg-subtle">
              {t.footer.followMe}
            </p>
            <ul className="flex flex-col gap-3 text-sm">
              {followLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-fg-muted transition-colors hover:text-fg"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
          <p className="font-mono text-xs text-fg-subtle">
            © {year} {profile.name}. {t.footer.rights}
          </p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2 rounded-sm border border-border px-3 py-2 text-xs font-medium text-fg-muted transition-colors hover:border-border-strong hover:text-fg"
          >
            {t.footer.backToTop}
            <ArrowUp className="h-3.5 w-3.5" aria-hidden />
          </button>
        </div>
      </Container>
    </footer>
  );
}

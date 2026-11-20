import { getContent, localePath } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { ThemeToggle } from "@/components/navigation/ThemeToggle";
import { MobileNav } from "@/components/navigation/MobileNav";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/SocialIcons";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/types";
import { getNavigation } from "@/lib/navigation";

export function Header({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const { person, socialLinks } = getContent(locale);
  const navigation = getNavigation(t);
  const otherLocale: Locale = locale === "en" ? "it" : "en";

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/85 backdrop-blur-md">
      <Container className="flex h-[var(--nav-height)] items-center justify-between gap-4">
        <a
          href="#top"
          className="inline-flex min-h-11 items-center whitespace-nowrap font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight text-fg"
        >
          {person.name}
        </a>

        <nav aria-label={t.nav.primary} className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="inline-flex min-h-11 items-center whitespace-nowrap rounded-sm px-3 text-sm text-fg-muted transition-colors hover:text-fg"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden h-10 w-10 items-center justify-center rounded-sm border border-border text-fg-muted transition-colors hover:border-border-strong hover:text-fg sm:inline-flex"
              aria-label={`${link.label} profile`}
            >
              {link.id === "github" ? (
                <GitHubIcon className="h-4 w-4" />
              ) : (
                <LinkedInIcon className="h-4 w-4" />
              )}
            </a>
          ))}
          <a
            href={localePath(otherLocale)}
            hrefLang={otherLocale}
            lang={otherLocale}
            title={t.language.switchLabel}
            className="inline-flex h-10 min-w-10 items-center justify-center rounded-sm border border-border px-2 font-mono text-xs text-fg-muted transition-colors hover:border-border-strong hover:text-fg"
          >
            {t.language.switchShort}
            <span className="sr-only"> – {t.language.switchLabel}</span>
          </a>
          <ThemeToggle labels={t.theme} />
          <MobileNav
            items={navigation}
            labels={{ mobile: t.nav.mobile, open: t.nav.openMenu, close: t.nav.closeMenu }}
          />
        </div>
      </Container>
    </header>
  );
}

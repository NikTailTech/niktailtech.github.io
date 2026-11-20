import { ArrowUp } from "lucide-react";
import { person, socialLinks } from "@/data/cv";
import { Container } from "@/components/ui/Container";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/types";
import { getNavigation } from "@/lib/navigation";

export function Footer({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const navigation = getNavigation(t);
  const year = new Date().getFullYear();

  return (
    <footer className="section-rule border-t border-border bg-bg-elevated py-12">
      <Container className="flex flex-col gap-10">
        <div className="grid gap-10 sm:grid-cols-[2fr_1fr] sm:gap-12 lg:gap-16">
          <nav aria-label={t.nav.footer}>
            <h2 className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-fg-subtle">
              {t.footer.navigate}
            </h2>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-1 text-sm">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="inline-flex min-h-8 items-center text-fg-muted transition-colors hover:text-fg"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-fg-subtle">
              {t.footer.followMe}
            </h2>
            <ul className="flex flex-col gap-1 text-sm">
              {socialLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-8 items-center text-fg-muted transition-colors hover:text-fg"
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
            © {year} {person.name}. {t.footer.rights}
          </p>
          <a
            href="#top"
            className="inline-flex items-center gap-2 rounded-sm border border-border px-3 py-2 text-xs font-medium text-fg-muted transition-colors hover:border-border-strong hover:text-fg"
          >
            {t.footer.backToTop}
            <ArrowUp className="h-3.5 w-3.5" aria-hidden />
          </a>
        </div>
      </Container>
    </footer>
  );
}

import { ArrowDownRight, Download, MapPin } from "lucide-react";
import { cvDocument, hero, person, socialLinks } from "@/data/cv";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/SocialIcons";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/types";

export function Hero({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const facts = [hero.workAuthorization, hero.openTo];

  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden border-b border-border"
    >
      <div className="pointer-events-none absolute inset-0 hero-grid" aria-hidden />
      <div
        className="pointer-events-none absolute -right-48 -top-14 h-[44rem] w-[44rem] bg-[radial-gradient(closest-side,color-mix(in_srgb,var(--accent)_12%,transparent),transparent)]"
        aria-hidden
      />

      <Container className="relative py-20 sm:py-28 lg:py-32">
        <div className="max-w-3xl">
          <h1
            id="hero-heading"
            className="font-[family-name:var(--font-display)] text-5xl font-semibold tracking-tight text-fg sm:text-6xl lg:text-7xl"
          >
            {person.name}
          </h1>

          <p className="mt-4 text-xl text-fg sm:text-2xl">
            {person.jobTitle}
            <span className="text-fg-muted"> – {hero.stack}</span>
          </p>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-fg-muted sm:text-lg">
            {hero.valueProposition}
          </p>

          <ul className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs text-fg-muted sm:text-sm">
            <li className="inline-flex items-center gap-1.5 text-fg">
              <MapPin className="h-4 w-4 text-accent-ink" aria-hidden />
              {t.hero.basedIn} {person.location.region}, {person.location.country}
            </li>
            {facts.map((fact) => (
              <li key={fact} className="inline-flex w-full items-center gap-3 sm:w-auto">
                <span className="hidden text-border-strong sm:inline" aria-hidden>
                  /
                </span>
                {fact}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            {cvDocument.available ? (
              <Button href={cvDocument.path} variant="primary" download>
                <Download className="h-4 w-4" aria-hidden />
                {t.hero.downloadCv}
              </Button>
            ) : null}
            <Button href="#projects" variant={cvDocument.available ? "secondary" : "primary"}>
              {t.hero.viewProjects}
              <ArrowDownRight className="h-4 w-4" aria-hidden />
            </Button>
            <Button href="#contact" variant="secondary">
              {t.hero.contact}
            </Button>
          </div>

          <ul className="mt-6 flex flex-wrap gap-5 text-sm">
            {socialLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-6 items-center gap-2 text-fg-muted underline-offset-4 transition-colors hover:text-fg hover:underline"
                >
                  {link.id === "github" ? (
                    <GitHubIcon className="h-4 w-4" />
                  ) : (
                    <LinkedInIcon className="h-4 w-4" />
                  )}
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

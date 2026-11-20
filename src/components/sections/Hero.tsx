"use client";

import { ArrowDownRight, Download, MapPin } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { cvDocument, hero, person, socialLinks } from "@/data/cv";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/SocialIcons";
import { useLocale } from "@/i18n/LocaleProvider";

export function Hero() {
  const reduce = useReducedMotion();
  const { t } = useLocale();
  const fadeUp = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay },
  });

  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden border-b border-border"
    >
      <div className="pointer-events-none absolute inset-0 hero-grid" aria-hidden />
      <div
        className="pointer-events-none absolute -right-24 top-10 h-[28rem] w-[28rem] rounded-full bg-accent/10 blur-3xl"
        aria-hidden
      />

      <Container className="relative py-20 sm:py-28 lg:py-32">
        <div className="max-w-3xl">
          <motion.h1
            id="hero-heading"
            className="font-[family-name:var(--font-display)] text-5xl font-semibold tracking-tight text-fg sm:text-6xl lg:text-7xl"
            {...fadeUp(0)}
          >
            {person.name}
          </motion.h1>

          <motion.p className="mt-4 text-xl text-fg sm:text-2xl" {...fadeUp(0.06)}>
            {person.jobTitle}
            <span className="text-fg-muted"> – {hero.stack}</span>
          </motion.p>

          <motion.p
            className="mt-5 max-w-2xl text-base leading-relaxed text-fg-muted sm:text-lg"
            {...fadeUp(0.12)}
          >
            {hero.valueProposition}
          </motion.p>

          <motion.ul
            className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs text-fg-muted sm:text-sm"
            {...fadeUp(0.16)}
          >
            <li className="inline-flex items-center gap-1.5 text-fg">
              <MapPin className="h-4 w-4 text-accent" aria-hidden />
              {t.hero.basedIn} {person.location.region}, {person.location.country}
            </li>
            <li>{hero.workAuthorization}</li>
            <li>{hero.openTo}</li>
          </motion.ul>

          <motion.div className="mt-9 flex flex-wrap items-center gap-3" {...fadeUp(0.2)}>
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
          </motion.div>

          <motion.ul className="mt-6 flex flex-wrap gap-5 text-sm" {...fadeUp(0.24)}>
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
          </motion.ul>
        </div>
      </Container>
    </section>
  );
}

"use client";

import { ArrowDownRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { profile } from "@/data/profile";
import { enabledSocialLinks, socialLinks } from "@/data/social";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/SocialIcons";
import { useLocale } from "@/i18n/LocaleProvider";

export function Hero() {
  const reduce = useReducedMotion();
  const { t } = useLocale();
  const linkedIn = socialLinks.find((l) => l.id === "linkedin");
  const github = enabledSocialLinks.find((l) => l.id === "github");

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

      <Container className="relative flex min-h-[calc(100svh-var(--nav-height))] items-center py-16 lg:py-20">
        <div className="max-w-3xl">
          <motion.h1
            id="hero-heading"
            className="font-[family-name:var(--font-display)] text-5xl font-semibold tracking-tight text-fg sm:text-6xl lg:text-7xl"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            {profile.name + " " + profile.surname}
          </motion.h1>

          <motion.p
            className="mt-3 text-2xl text-fg-muted sm:text-3xl"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            {t.profile.title}
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap items-center gap-3"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
          >
            <Button href="#projects" variant="primary">
              {t.hero.exploreProjects}
              <ArrowDownRight className="h-4 w-4" aria-hidden />
            </Button>
            <Button href="#contact" variant="secondary">
              {t.hero.getInTouch}
            </Button>
            {github ? (
              <Button href={github.href} variant="ghost" aria-label="GitHub">
                <GitHubIcon className="h-4 w-4" />
                GitHub
              </Button>
            ) : null}
            {linkedIn?.enabled ? (
              <Button href={linkedIn.href} variant="ghost" aria-label="LinkedIn">
                <LinkedInIcon className="h-4 w-4" />
                LinkedIn
              </Button>
            ) : null}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

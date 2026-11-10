"use client";

import { ArrowDownRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { profile } from "@/data/profile";
import { enabledSocialLinks, socialLinks } from "@/data/social";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/SocialIcons";

export function Hero() {
  const reduce = useReducedMotion();
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

      <Container className="relative grid min-h-[calc(100svh-var(--nav-height))] grid-cols-1 items-center gap-12 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:py-20">
        <div>
          <motion.p
            className="mb-5 font-mono text-xs uppercase tracking-[0.24em] text-accent"
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            Portfolio
          </motion.p>

          <motion.h1
            id="hero-heading"
            className="font-[family-name:var(--font-display)] text-5xl font-semibold tracking-tight text-fg sm:text-6xl lg:text-7xl"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
          >
            {profile.name + " " + profile.surname}
          </motion.h1>

          <motion.p
            className="mt-3 text-xl text-fg-muted sm:text-2xl"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
          >
            {profile.title}
          </motion.p>

          <motion.p
            className="mt-6 max-w-xl text-base leading-relaxed text-fg-muted sm:text-lg"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
          >
            {profile.shortBio}
          </motion.p>

          <motion.p
            className="mt-4 max-w-xl border-l-2 border-accent pl-4 text-sm leading-relaxed text-fg sm:text-base"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
          >
            {profile.personalStatement}
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap items-center gap-3"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button href="#projects" variant="primary">
              Explore Projects
              <ArrowDownRight className="h-4 w-4" aria-hidden />
            </Button>
            <Button href="#contact" variant="secondary">
              Get in Touch
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

        <motion.aside
          className="relative hidden lg:block"
          aria-label="Focus areas"
          initial={reduce ? false : { opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative overflow-hidden rounded-sm border border-border bg-bg-elevated">
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,color-mix(in_srgb,var(--accent)_22%,transparent),transparent_55%)]"
              aria-hidden
            />
            <div className="relative m-6 flex flex-col border border-border/80 p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-fg-subtle">
                Focus
              </p>
              <ul className="mt-4 space-y-3.5">
                {profile.focusAreas.map((area) => (
                  <li key={area.title} className="flex gap-3">
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-accent"
                      aria-hidden
                    />
                    <div>
                      <p className="text-sm font-medium text-fg">{area.title}</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-fg-muted">
                        {area.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-6 border-t border-border pt-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-fg-subtle">
                  Stack signal
                </p>
                <p className="mt-3 text-sm leading-relaxed text-fg">
                  {profile.stackSignal.join(" • ")}
                </p>
              </div>
            </div>
          </div>
        </motion.aside>
      </Container>
    </section>
  );
}

"use client";

import { Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { enabledSocialLinks, socialLinks } from "@/data/social";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/SocialIcons";
import { useLocale } from "@/i18n/LocaleProvider";

export function Contact() {
  const { t } = useLocale();
  const linkedIn = socialLinks.find((l) => l.id === "linkedin");
  const github = enabledSocialLinks.find((l) => l.id === "github");
  const mailto = profile.emailConfigured
    ? `mailto:${profile.email}?subject=${encodeURIComponent(t.contact.mailtoSubject)}&body=${encodeURIComponent(t.contact.mailtoBody)}`
    : undefined;

  return (
    <Section id="contact" labelledBy="contact-heading">
      <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">

        <SectionHeading
          id="contact-heading"
          eyebrow={t.contact.eyebrow}
          title={t.contact.heading}
          description={t.contact.body}
        />

        <div className="border border-border bg-bg-elevated p-6 sm:p-8">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-fg-subtle">
            {t.contact.reachOut}
          </p>

          <ul className="mt-6 space-y-4">
            <li>
              {mailto ? (
                <a
                  href={mailto}
                  className="inline-flex items-center gap-3 text-fg hover:text-accent"
                >
                  <Mail className="h-4 w-4" aria-hidden />
                  <span>{profile.email}</span>
                </a>
              ) : null}
            </li>
            {github ? (
              <li>
                <a
                  href={github.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-fg hover:text-accent"
                >
                  <GitHubIcon className="h-4 w-4" />
                  github.com/{profile.githubUsername}
                </a>
              </li>
            ) : null}
            {linkedIn?.enabled ? (
              <li>
                <a
                  href={linkedIn.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-fg hover:text-accent"
                >
                  <LinkedInIcon className="h-4 w-4" />
                  LinkedIn
                </a>
              </li>
            ) : null}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            {mailto ? (
              <Button href={mailto} variant="primary">
                {t.contact.emailNicholas}
              </Button>
            ) : (
              <Button href={`https://github.com/${profile.githubUsername}`} variant="primary">
                GitHub
              </Button>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}

"use client";

import { Mail } from "lucide-react";
import { contact, person, socialLinks } from "@/data/cv";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/SocialIcons";
import { useLocale } from "@/i18n/LocaleProvider";

export function Contact() {
  const { t } = useLocale();
  const mailto = `mailto:${person.email}?subject=${encodeURIComponent(contact.mailtoSubject)}&body=${encodeURIComponent(contact.mailtoBody)}`;

  return (
    <Section id="contact" labelledBy="contact-heading">
      <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
        <SectionHeading
          id="contact-heading"
          eyebrow={t.contact.eyebrow}
          title={contact.heading}
          description={contact.body}
        />

        <div className="border border-border bg-bg-elevated p-6 sm:p-8">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-fg-subtle">
            {t.contact.reachOut}
          </p>

          <ul className="mt-6 space-y-4">
            <li>
              <a href={mailto} className="inline-flex items-center gap-3 text-fg hover:text-accent">
                <Mail className="h-4 w-4" aria-hidden />
                <span>{person.email}</span>
              </a>
            </li>
            {socialLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-fg hover:text-accent"
                >
                  {link.id === "github" ? (
                    <GitHubIcon className="h-4 w-4" />
                  ) : (
                    <LinkedInIcon className="h-4 w-4" />
                  )}
                  {link.id === "github" ? `github.com/${person.githubUsername}` : link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={mailto} variant="primary">
              {t.contact.emailMe}
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}

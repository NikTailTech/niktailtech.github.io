import { Download, Mail } from "lucide-react";
import { contactConfig } from "@/data/contact";
import { profile } from "@/data/profile";
import { enabledSocialLinks, socialLinks } from "@/data/social";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/SocialIcons";

export function Contact() {
  const linkedIn = socialLinks.find((l) => l.id === "linkedin");
  const github = enabledSocialLinks.find((l) => l.id === "github");
  const mailto = profile.emailConfigured
    ? `mailto:${profile.email}?subject=${encodeURIComponent(contactConfig.mailtoSubject)}`
    : undefined;

  return (
    <Section id="contact" labelledBy="contact-heading">
      <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-end">
        <SectionHeading
          id="contact-heading"
          eyebrow="Contact"
          title={contactConfig.heading}
          description={contactConfig.body}
        />

        <div className="border border-border bg-bg-elevated p-6 sm:p-8">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-fg-subtle">
            Reach out
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
              ) : (
                <div className="text-sm text-fg-muted">
                  <p className="inline-flex items-center gap-3 text-fg">
                    <Mail className="h-4 w-4" aria-hidden />
                    Email not configured yet
                  </p>
                  <p className="mt-2 font-mono text-xs text-warning">
                    TODO: Set email in src/data/profile.ts and emailConfigured: true
                  </p>
                </div>
              )}
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
            ) : (
              <li className="text-sm text-fg-muted">
                <p className="inline-flex items-center gap-3">
                  <LinkedInIcon className="h-4 w-4" />
                  LinkedIn pending
                </p>
                <p className="mt-2 font-mono text-xs text-warning">
                  TODO: Enable LinkedIn in src/data/social.ts
                </p>
              </li>
            )}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            {mailto ? (
              <Button href={mailto} variant="primary">
                Email Nicholas
              </Button>
            ) : (
              <Button href={`https://github.com/${profile.githubUsername}`} variant="primary">
                Message via GitHub
              </Button>
            )}
            {profile.cvAvailable ? (
              <Button href={profile.cvPath} variant="secondary">
                <Download className="h-4 w-4" aria-hidden />
                Download CV
              </Button>
            ) : (
              <p className="w-full pt-2 font-mono text-xs text-fg-subtle">
                TODO: Add public/documents/nicholas-cv.pdf and set cvAvailable: true
              </p>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}

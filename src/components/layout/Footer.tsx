"use client";

import { ArrowUp } from "lucide-react";
import { profile } from "@/data/profile";
import { enabledSocialLinks, navigation } from "@/data/social";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="section-rule border-t border-border bg-bg-elevated py-12">
      <Container className="flex flex-col gap-10">
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr_auto]">
          <div>
            <p className="font-[family-name:var(--font-display)] text-xl font-semibold text-fg">
              {profile.name}
            </p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-fg-muted">
              {profile.title}. Building software with systems awareness and a multidisciplinary
              practice.
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-fg-subtle">
              Navigate
            </p>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-fg-muted hover:text-fg">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-fg-subtle">
              Connect
            </p>
            <ul className="flex flex-col gap-2 text-sm">
              {enabledSocialLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-fg-muted hover:text-fg"
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
            © {year} {profile.name}. All rights reserved.
          </p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2 rounded-sm border border-border px-3 py-2 text-xs font-medium text-fg-muted transition-colors hover:border-border-strong hover:text-fg"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5" aria-hidden />
          </button>
        </div>
      </Container>
    </footer>
  );
}

import type { Metadata } from "next";
import { fontVariables } from "./fonts";
import { ThemeScript } from "@/components/layout/ThemeScript";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { getContent } from "@/data/content";
import { getDictionary } from "@/i18n/dictionaries";
import "./globals.css";

const en = getDictionary("en");
const it = getDictionary("it");

export const metadata: Metadata = {
  title: `${en.notFound.title} · ${getContent("en").person.name}`,
};

export default function GlobalNotFound() {
  return (
    <html lang="en" className={`${fontVariables} h-full`} suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className="flex min-h-full flex-col antialiased">
        <main id="main" className="flex flex-1 items-center py-24">
          <Container className="text-center">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent-ink">404</p>
            <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-semibold text-fg sm:text-5xl">
              {en.notFound.title}
            </h1>
            <p className="mx-auto mt-4 max-w-md text-fg-muted">{en.notFound.body}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button href="/" variant="primary">
                {en.notFound.back}
              </Button>
              <Button href="/it/" variant="secondary" lang="it" hrefLang="it">
                {it.notFound.back}
              </Button>
            </div>
          </Container>
        </main>
      </body>
    </html>
  );
}

import type { ReactNode } from "react";
import { fontVariables } from "./fonts";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SkipLink } from "@/components/layout/SkipLink";
import { ThemeScript } from "@/components/layout/ThemeScript";
import { getContent, localePath } from "@/data/content";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/types";
import { siteUrl } from "@/lib/metadata";
import { personJsonLd, serializeJsonLd } from "@/lib/structured-data";

export function RootDocument({ locale, children }: { locale: Locale; children: ReactNode }) {
  const t = getDictionary(locale);
  const jsonLd = personJsonLd(`${siteUrl}${localePath(locale)}`, getContent(locale));

  return (
    <html lang={locale} className={`${fontVariables} h-full`} suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <SkipLink label={t.meta.skipToContent} />
        <Header locale={locale} />
        <div className="flex-1">{children}</div>
        <Footer locale={locale} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
        />
      </body>
    </html>
  );
}

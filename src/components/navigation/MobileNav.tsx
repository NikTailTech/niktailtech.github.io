"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useId, useState } from "react";
import { useLocale } from "@/i18n/LocaleProvider";
import { cn } from "@/lib/utils";


type NavItem = { label: string; href: string };

export function MobileNav({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const { t } = useLocale();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-border text-fg"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      <div
        id={panelId}
        className={cn(
          "fixed inset-x-0 top-[var(--nav-height)] z-40 border-b border-border bg-bg/95 backdrop-blur-md transition-[opacity,visibility] duration-200",
          open ? "visible opacity-100" : "invisible opacity-0 pointer-events-none",
        )}
      >
        <nav aria-label={t.nav.mobile} className="flex flex-col gap-1 px-5 py-4">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-sm px-3 py-3 text-base font-medium text-fg hover:bg-bg-muted"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>

      </div>
    </div>
  );
}

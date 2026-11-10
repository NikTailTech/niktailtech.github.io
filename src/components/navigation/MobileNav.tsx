"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useId, useState } from "react";
import { navigation } from "@/data/social";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const panelId = useId();

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
        aria-label={open ? "Close menu" : "Open menu"}
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
        <nav aria-label="Mobile" className="flex flex-col gap-1 px-5 py-4">
          {navigation.map((item) => (
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

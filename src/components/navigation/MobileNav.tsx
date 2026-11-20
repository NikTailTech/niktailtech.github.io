"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/types";

export function MobileNav({
  items,
  labels,
}: {
  items: NavItem[];
  labels: { mobile: string; open: string; close: string };
}) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (open) panelRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-border text-fg"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? labels.close : labels.open}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
      </button>

      <div
        ref={panelRef}
        id={panelId}
        className={cn(
          "fixed inset-x-0 top-[var(--nav-height)] z-40 border-b border-border bg-bg/95 backdrop-blur-md transition-[opacity,visibility] duration-200",
          open ? "visible opacity-100" : "invisible pointer-events-none opacity-0",
        )}
      >
        <nav aria-label={labels.mobile} className="flex flex-col gap-1 px-5 py-4">
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

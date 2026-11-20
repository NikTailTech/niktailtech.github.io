"use client";

import { Check, Copy } from "lucide-react";
import { useEffect, useState } from "react";

export function CopyEmailButton({
  email,
  label,
  copiedLabel,
}: {
  email: string;
  label: string;
  copiedLabel: string;
}) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 2500);
    return () => window.clearTimeout(timer);
  }, [copied]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      return;
    } catch {
      // Clipboard API is blocked in some embedded browsers and insecure contexts.
    }
    const field = document.createElement("textarea");
    field.value = email;
    field.setAttribute("readonly", "");
    field.style.position = "fixed";
    field.style.opacity = "0";
    document.body.appendChild(field);
    field.select();
    const ok = document.execCommand("copy");
    field.remove();
    if (ok) setCopied(true);
    else window.prompt(label, email);
  }

  return (
    <>
      <button
        type="button"
        onClick={copy}
        className="inline-flex items-center justify-center gap-2 rounded-sm border border-border-strong px-5 py-2.5 text-sm font-medium tracking-wide text-fg transition-colors hover:border-fg hover:bg-bg-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-ring"
      >
        {copied ? <Check className="h-4 w-4" aria-hidden /> : <Copy className="h-4 w-4" aria-hidden />}
        {copied ? copiedLabel : label}
      </button>
      <span className="sr-only" role="status" aria-live="polite">
        {copied ? copiedLabel : ""}
      </span>
    </>
  );
}

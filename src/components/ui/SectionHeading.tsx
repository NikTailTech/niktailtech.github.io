import { cn } from "@/lib/utils";

type Props = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  className,
  align = "left",
}: Props) {
  return (
    <header
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-accent">
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-fg sm:text-4xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-fg-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </header>
  );
}

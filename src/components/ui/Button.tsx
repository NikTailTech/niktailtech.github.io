import { cn, externalRel, isExternalHref } from "@/lib/utils";
import { withBasePath } from "@/lib/paths";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "link";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-accent-fg hover:brightness-110 border border-transparent",
  secondary:
    "bg-transparent text-fg border border-border-strong hover:border-fg hover:bg-bg-muted",
  ghost: "bg-transparent text-fg-muted hover:text-fg hover:bg-bg-muted border border-transparent",
  link: "bg-transparent text-accent underline-offset-4 hover:underline px-0 py-0 border-0",
};

type Common = {
  variant?: Variant;
  children: ReactNode;
  className?: string;
};

type ButtonAsButton = Common &
  Omit<ComponentPropsWithoutRef<"button">, "children" | "className"> & {
    href?: undefined;
  };

type ButtonAsAnchor = Common &
  Omit<ComponentPropsWithoutRef<"a">, "children" | "className"> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsAnchor;

export function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-sm px-5 py-2.5 text-sm font-medium tracking-wide transition-[color,background,border,filter,transform] duration-200",
    "disabled:pointer-events-none disabled:opacity-45",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-ring",
    variants[variant],
    className,
  );

  if ("href" in props && props.href) {
    const { href, ...rest } = props;
    const external = isExternalHref(href);
    const resolved = external || href.startsWith("#") || href.startsWith("mailto:")
      ? href
      : withBasePath(href);

    return (
      <a
        href={resolved}
        className={classes}
        rel={external ? externalRel(href) : undefined}
        target={external && href.startsWith("http") ? "_blank" : undefined}
        {...rest}
      >
        {children}
      </a>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button type={buttonProps.type ?? "button"} className={classes} {...buttonProps}>
      {children}
    </button>
  );
}

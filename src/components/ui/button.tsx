import Link from "next/link";
import { cn } from "@/lib/utils";

interface BaseButtonProps {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "accent";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
}

type ButtonAsButton = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = BaseButtonProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button(props: ButtonProps) {
  const {
    className,
    variant = "primary",
    size = "md",
    children,
  } = props;

  const baseStyles =
    "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

  const variants = {
    primary:
      "bg-primary-600 text-white shadow-sm shadow-primary-950/10 hover:bg-primary-700 hover:shadow-md",
    secondary:
      "bg-accent-600 text-white shadow-sm shadow-accent-950/10 hover:bg-accent-700 hover:shadow-md",
    outline:
      "border border-slate-300 bg-white/80 text-slate-900 hover:border-slate-400 hover:bg-white",
    ghost:
      "bg-transparent text-slate-600 hover:bg-slate-100 hover:text-slate-900",
    accent:
      "bg-gradient-to-r from-primary-600 via-primary-500 to-accent-600 text-white shadow-sm shadow-slate-950/15 hover:from-primary-700 hover:to-accent-700 hover:shadow-md",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if ("href" in props && props.href) {
    const { href, ...linkProps } = props;
    const isExternal =
      href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");

    if (isExternal) {
      return (
        <a href={href} className={classes} {...linkProps}>
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  const { href: _href, ...buttonProps } = props as ButtonAsButton;

  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}

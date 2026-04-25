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
      "bg-purple-600 text-white shadow-sm shadow-purple-950/20 hover:bg-purple-700 hover:shadow-md",
    secondary:
      "bg-primary-600 text-white shadow-sm shadow-primary-950/10 hover:bg-primary-700 hover:shadow-md",
    outline:
      "border border-white/15 bg-white/5 text-white hover:border-white/25 hover:bg-white/10",
    ghost:
      "bg-transparent text-slate-300 hover:bg-white/10 hover:text-white",
    accent:
      "bg-gradient-to-r from-purple-600 to-purple-500 text-white shadow-lg shadow-purple-950/30 hover:from-purple-700 hover:to-purple-600 hover:shadow-xl",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if ("href" in props && props.href) {
    const {
      href,
      className: _cls,
      variant: _v,
      size: _s,
      children: _c,
      ...anchorProps
    } = props as ButtonAsLink;

    const isExternal =
      href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");

    if (isExternal) {
      return (
        <a href={href} className={classes} {...anchorProps}>
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} {...(anchorProps as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </Link>
    );
  }

  const {
    href: _href,
    className: _cls,
    variant: _v,
    size: _s,
    children: _c,
    ...buttonProps
  } = props as ButtonAsButton;

  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}

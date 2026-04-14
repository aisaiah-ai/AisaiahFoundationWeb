import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "primary" | "accent" | "muted";
}

export function Badge({
  variant = "default",
  className,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        {
          default: "bg-slate-100 text-slate-700",
          primary: "bg-primary-50 text-primary-700",
          accent: "bg-accent-50 text-accent-700",
          muted: "bg-slate-50 text-slate-500",
        }[variant],
        className
      )}
      {...props}
    />
  );
}

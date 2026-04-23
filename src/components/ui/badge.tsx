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
          default: "bg-white/10 text-slate-300",
          primary: "bg-purple-500/10 text-purple-400",
          accent: "bg-primary-500/10 text-primary-400",
          muted: "bg-white/5 text-slate-500",
        }[variant],
        className
      )}
      {...props}
    />
  );
}

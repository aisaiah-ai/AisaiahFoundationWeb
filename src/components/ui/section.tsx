import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "default" | "muted" | "dark" | "gradient" | "spiritual";
}

export function Section({
  className,
  variant = "default",
  children,
  ...props
}: SectionProps) {
  const variants = {
    default: "bg-slate-950 text-white",
    muted: "bg-[#0c1222] text-white",
    dark: "bg-slate-950 text-white",
    gradient: "text-white",
    spiritual: "text-white",
  };

  const isGradient = variant === "gradient" || variant === "spiritual";

  return (
    <section
      className={cn("py-20 md:py-28", variants[variant], className)}
      style={isGradient ? { background: "var(--gradient-spiritual)" } : undefined}
      {...props}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

export function SectionHeader({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("mx-auto max-w-3xl text-center mb-16", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function SectionTitle({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn(
        "text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-white",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
}

export function SectionDescription({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-lg md:text-xl text-slate-300 leading-relaxed", className)}
      {...props}
    >
      {children}
    </p>
  );
}

import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "default" | "muted" | "dark" | "gradient";
}

export function Section({
  className,
  variant = "default",
  children,
  ...props
}: SectionProps) {
  const variants = {
    default: "bg-white",
    muted: "bg-slate-50",
    dark: "bg-slate-900 text-white",
    gradient: "bg-gradient-hero text-white",
  };

  return (
    <section
      className={cn("py-20 md:py-28", variants[variant], className)}
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
        "text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6",
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
      className={cn("text-lg md:text-xl text-slate-600 leading-relaxed", className)}
      {...props}
    >
      {children}
    </p>
  );
}

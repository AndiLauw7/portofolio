import clsx from "clsx";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "accent" | "muted" | "orange" | "blue";
  className?: string;
}

export function Badge({ children, variant = "accent", className }: BadgeProps) {
  const variants = {
    accent:
      "text-accent bg-accent/8 border border-accent/15",
    muted:
      "text-ink-muted bg-surface border border-border",
    orange:
      "text-accent-orange bg-accent-orange/8 border border-accent-orange/20",
    blue:
      "text-accent-blue bg-accent-blue/8 border border-accent-blue/20",
  };

  return (
    <span
      className={clsx(
        "inline-block font-mono text-[0.68rem] tracking-wider px-2 py-[3px]",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

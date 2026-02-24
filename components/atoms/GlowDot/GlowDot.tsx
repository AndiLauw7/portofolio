import clsx from "clsx";

interface GlowDotProps {
  color?: "accent" | "blue" | "orange";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function GlowDot({ color = "accent", size = "md", className }: GlowDotProps) {
  const colors = {
    accent: "bg-accent shadow-[0_0_20px_rgba(0,255,170,0.5)]",
    blue: "bg-accent-blue shadow-[0_0_20px_rgba(0,200,255,0.5)]",
    orange: "bg-accent-orange shadow-[0_0_20px_rgba(255,107,53,0.5)]",
  };
  const sizes = {
    sm: "w-1.5 h-1.5",
    md: "w-2 h-2",
    lg: "w-3 h-3",
  };

  return (
    <span
      className={clsx("inline-block rounded-full", colors[color], sizes[size], className)}
    />
  );
}

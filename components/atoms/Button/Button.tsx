"use client";
import { motion } from "framer-motion";
import clsx from "clsx";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
}

export function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className,
  type = "button",
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase transition-all duration-300 font-mono";

  const variants = {
    primary: clsx(
      "px-6 py-3 bg-accent text-bg",
      "[clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,10px_100%,0_calc(100%-10px))]",
      "hover:bg-accent-blue hover:shadow-[0_0_25px_rgba(0,200,255,0.35)] active:scale-[0.98]"
    ),
    secondary: clsx(
      "px-6 py-3 border border-border text-ink-muted",
      "hover:border-accent hover:text-accent hover:shadow-[0_0_15px_rgba(0,255,170,0.1)]"
    ),
    ghost: clsx("px-4 py-2 text-ink-faint hover:text-accent"),
  };

  const Component = href ? motion.a : motion.button;
  const props = href
    ? { href, target: href.startsWith("http") ? "_blank" : undefined }
    : { type, onClick };

  return (
    <Component
      {...(props as Record<string, unknown>)}
      className={clsx(base, variants[variant], className)}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </Component>
  );
}

"use client";
import { motion } from "framer-motion";

interface NavLinkProps {
  href: string;
  label: string;
}

export function NavLink({ href, label }: NavLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.a
      href={href}
      onClick={handleClick}
      className="relative font-mono text-[0.75rem] text-ink-muted tracking-widest uppercase group"
      whileHover={{ color: "#00ffaa" }}
    >
      {label}
      <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent group-hover:w-full transition-all duration-300" />
    </motion.a>
  );
}

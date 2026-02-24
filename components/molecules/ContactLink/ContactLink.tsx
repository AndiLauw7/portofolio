"use client";
import { motion } from "framer-motion";
import type { ContactLink as ContactLinkType } from "@/types";

interface ContactLinkProps {
  link: ContactLinkType;
}

export function ContactLink({ link }: ContactLinkProps) {
  return (
    <motion.a
      href={link.href}
      target={link.href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="flex items-center gap-4 font-mono text-sm text-ink-muted bg-surface px-5 py-4 border border-border group"
      whileHover={{ x: 4, borderColor: "rgba(0,255,170,0.3)", color: "#00ffaa" }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      <span className="text-lg">{link.icon}</span>
      <div className="flex flex-col">
        <span className="text-[0.65rem] text-ink-faint tracking-widest uppercase mb-0.5">
          {link.label}
        </span>
        <span className="text-[0.82rem]">{link.display}</span>
      </div>
      <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-accent">
        →
      </span>
    </motion.a>
  );
}

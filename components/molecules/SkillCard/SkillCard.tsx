"use client";
import { motion } from "framer-motion";
import { Badge } from "@/components/atoms";
import type { Skill } from "@/types";

interface SkillCardProps {
  skill: Skill;
}

export function SkillCard({ skill }: SkillCardProps) {
  return (
    <motion.div
      className="relative bg-surface p-8 overflow-hidden group cursor-default"
      style={{ border: "1px solid rgba(0,255,170,0.1)" }}
      whileHover={{
        y: -4,
        borderColor: "rgba(0,255,170,0.3)",
        boxShadow: "0 20px 40px rgba(0,0,0,0.4), 0 0 20px rgba(0,255,170,0.05)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Hover overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-accent/[0.04] to-transparent"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      />

      <span className="text-2xl mb-4 block relative z-10">{skill.icon}</span>
      <h3 className="font-syne font-bold text-base mb-2 relative z-10">
        {skill.name}
      </h3>
      <p className="font-mono text-[0.75rem] text-ink-faint leading-relaxed mb-5 relative z-10">
        {skill.description}
      </p>
      <div className="flex flex-wrap gap-1.5 relative z-10">
        {skill.tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>
    </motion.div>
  );
}

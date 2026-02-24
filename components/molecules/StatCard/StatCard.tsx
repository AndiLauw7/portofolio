"use client";
import { motion } from "framer-motion";
import type { Stat } from "@/types";

interface StatCardProps {
  stat: Stat;
}

export function StatCard({ stat }: StatCardProps) {
  return (
    <motion.div
      className="relative bg-surface border-border overflow-hidden p-8 group cursor-default"
      style={{ borderWidth: "1px", borderStyle: "solid" }}
      whileHover={{ backgroundColor: "#141e28" }}
    >
      {/* Top glow bar on hover */}
      <motion.div
        className="absolute top-0 left-0 h-[2px] bg-gradient-accent"
        initial={{ width: 0 }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.4 }}
      />
      <div className="text-5xl font-extrabold font-syne leading-none mb-1 tracking-tight">
        {stat.num}
        {stat.suffix && <span className="text-accent">{stat.suffix}</span>}
      </div>
      <div className="font-mono text-[0.7rem] text-ink-faint tracking-widest uppercase">
        {stat.label}
      </div>
    </motion.div>
  );
}

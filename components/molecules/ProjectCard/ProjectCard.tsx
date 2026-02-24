"use client";
import { motion } from "framer-motion";
import { Badge, Button } from "@/components/atoms";
import type { Project } from "@/types";
import clsx from "clsx";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

const colorMap: Record<string, string> = {
  "project-blue":
    "bg-[linear-gradient(135deg,#0a1628,#0d2040)] [--radial:rgba(0,200,255,0.12)]",
  "project-purple":
    "bg-[linear-gradient(135deg,#120a28,#1e0d40)] [--radial:rgba(120,80,255,0.12)]",
  "project-green":
    "bg-[linear-gradient(135deg,#0a2820,#0d4030)] [--radial:rgba(0,255,150,0.1)]",
};

export function ProjectCard({ project, featured }: ProjectCardProps) {
  return (
    <motion.article
      className={clsx(
        "relative bg-surface overflow-hidden group",
        "border border-border",
        featured && "md:col-span-2"
      )}
      whileHover={{
        borderColor: "rgba(0,200,255,0.3)",
        boxShadow: "0 30px 60px rgba(0,0,0,0.4), 0 0 30px rgba(0,200,255,0.05)",
      }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      {/* Visual */}
      <div className={clsx("relative overflow-hidden", featured ? "h-64" : "h-48")}>
        <motion.div
          className={clsx(
            "w-full h-full flex items-center justify-center text-5xl relative",
            colorMap[project.colorClass]
          )}
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.5 }}
        >
          {/* Radial glow */}
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle at 50% 50%, var(--radial, transparent), transparent 60%)`,
            }}
          />
          <span className="relative z-10" style={{ filter: "drop-shadow(0 0 16px rgba(0,200,255,0.4))" }}>
            {project.emoji}
          </span>
        </motion.div>

        {/* Overlay on hover */}
        <motion.div
          className="absolute inset-0 bg-bg/70 flex items-center justify-center gap-3"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
        >
          {project.liveUrl && (
            <Button variant="primary" href={project.liveUrl}>
              Live Demo
            </Button>
          )}
          {project.repoUrl && (
            <Button variant="secondary" href={project.repoUrl}>
              Source
            </Button>
          )}
        </motion.div>
      </div>

      {/* Info */}
      <div className="p-6">
        <div className="flex justify-between items-center mb-2">
          <span className="font-mono text-[0.68rem] text-accent tracking-widest uppercase">
            {project.category}
          </span>
          <span className="font-mono text-[0.68rem] text-ink-faint">
            {project.year}
          </span>
        </div>
        <h3 className="font-syne font-bold text-lg tracking-tight mb-2">
          {project.title}
        </h3>
        <p className="font-mono text-[0.78rem] text-ink-muted leading-relaxed mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

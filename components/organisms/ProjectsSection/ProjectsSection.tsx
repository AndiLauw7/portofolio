"use client";
import { motion } from "framer-motion";
import { SectionLabel } from "@/components/atoms";
import { ProjectCard } from "@/components/molecules";
import { PROJECTS } from "@/lib/data";

export function ProjectsSection() {
  return (
    <section id="projects" className="px-6 md:px-10 py-24 relative">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent-orange/4 blur-3xl pointer-events-none" />

      <SectionLabel index="03" label="Proyek" />

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-syne font-extrabold tracking-tight mt-4 mb-16"
        style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
      >
        Karya{" "}
        <em
          className="font-serif not-italic"
          style={{
            background: "linear-gradient(135deg, #00ffaa, #00c8ff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Terpilih
        </em>
      </motion.h2>

      <motion.div
        className="grid md:grid-cols-2 gap-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        {PROJECTS.map((project) => (
          <motion.div
            key={project.id}
            className={project.featured ? "md:col-span-2" : ""}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
            }}
          >
            <ProjectCard project={project} featured={project.featured} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

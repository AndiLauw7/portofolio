"use client";
import { motion } from "framer-motion";
import { SectionLabel } from "@/components/atoms";
import { SkillCard } from "@/components/molecules";
import { SKILLS } from "@/lib/data";
import { useScrollReveal } from "@/lib/useScrollReveal";

export function SkillsSection() {
  const [ref, controls] = useScrollReveal();

  return (
    <section id="skills" className="px-6 md:px-10 py-24 bg-bg-secondary relative">
      {/* Subtle left glow */}
      <div className="absolute top-1/2 left-0 w-72 h-72 rounded-full bg-accent/4 blur-3xl pointer-events-none -translate-y-1/2" />

      <SectionLabel index="02" label="Keahlian" />

      <motion.h2
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={controls}
        variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 30 } }}
        transition={{ duration: 0.6 }}
        className="font-syne font-extrabold tracking-tight mt-4 mb-16"
        style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
      >
        Tech{" "}
        <em
          className="font-serif not-italic"
          style={{
            background: "linear-gradient(135deg, #00ffaa, #00c8ff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Stack
        </em>
      </motion.h2>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.08 } },
        }}
      >
        {SKILLS.map((skill) => (
          <motion.div
            key={skill.id}
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
            }}
          >
            <SkillCard skill={skill} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

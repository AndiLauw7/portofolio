"use client";
import { motion } from "framer-motion";
import { SectionLabel } from "@/components/atoms";
import { StatCard } from "@/components/molecules";
import { STATS } from "@/lib/data";
import { useScrollReveal } from "@/lib/useScrollReveal";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function AboutSection() {
  const [ref, controls] = useScrollReveal();

  return (
    <section id="about" className="px-6 md:px-10 py-24 relative">
      {/* Ambient glow */}
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-accent-blue/5 blur-3xl pointer-events-none" />

      <SectionLabel index="01" label="Tentang Saya" />

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="mt-4"
      >
        <motion.h2
          variants={itemVariants}
          className="font-syne font-extrabold tracking-tight mb-16"
          style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
        >
          Siapa{" "}
          <em
            className="font-serif not-italic"
            style={{
              background: "linear-gradient(135deg, #00ffaa, #00c8ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            saya?
          </em>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div variants={itemVariants} className="space-y-5">
            {[
              <>
                Saya adalah seorang <strong className="text-accent font-medium">Frontend Developer</strong> yang berbasis di Indonesia,
                dengan fokus pada pembuatan aplikasi web yang performan, aksesibel, dan memikat secara visual.
              </>,
              <>
                Perjalanan saya dimulai dari ketertarikan mendalam pada dunia desain dan teknologi.
                Kini saya mengkhususkan diri dalam ekosistem <strong className="text-accent font-medium">React & Vue.js</strong>,
                dengan pemahaman kuat tentang arsitektur frontend modern.
              </>,
              <>
                Ketika tidak coding, saya mengeksplorasi <strong className="text-accent font-medium">design systems</strong>,
                berkontribusi ke open source, dan terus belajar hal baru di dunia web.
              </>,
            ].map((para, i) => (
              <p key={i} className="font-mono text-[0.87rem] leading-loose text-ink-muted">
                {para}
              </p>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 gap-px bg-border border border-border"
          >
            {STATS.map((stat) => (
              <StatCard key={stat.label} stat={stat} />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

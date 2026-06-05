"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/atoms";
import { CodeWindow } from "@/components/molecules";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: "easeOut" },
});

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen grid md:grid-cols-2 items-center px-6 md:px-10 pt-28 pb-16 overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,255,170,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,170,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-accent/5 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-64 h-64 rounded-full bg-accent-blue/5 blur-3xl pointer-events-none" />

      {/* Left content */}
      <div className="relative z-10">
        <motion.div
          className="font-mono text-[0.72rem] text-accent tracking-[0.15em] uppercase mb-8 flex items-center gap-2"
          {...fadeUp(0.2)}
        >
          <span className="text-ink-faint"> </span>Full Stack Developer
        </motion.div>

        <motion.h1
          className="font-syne font-extrabold leading-none tracking-tight mb-3"
          style={{ fontSize: "clamp(3.5rem, 6vw, 6.5rem)" }}
          {...fadeUp(0.35)}
        >
          Andi
          <br />
          <span
            className="text-transparent"
            style={{
              background: "linear-gradient(135deg, #00ffaa, #00c8ff)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
            }}
          >
            Safariansyah.
          </span>
        </motion.h1>

        <motion.p
          className="font-serif italic text-ink-muted mb-8"
          style={{ fontSize: "clamp(1.1rem, 2vw, 1.6rem)" }}
          {...fadeUp(0.5)}
        >
          {/* Crafting digital experiences */}
        </motion.p>

        <motion.p
          className="font-mono text-[0.85rem] leading-loose text-ink-muted max-w-md mb-10"
          {...fadeUp(0.65)}
        >
          Pengembang antarmuka web modern, responsif, dan skalabel dengan
          performa optimal guna memberikan pengalaman pengguna yang luar biasa.
          {/* Saya membangun interface yang tidak hanya terlihat indah — tetapi
          terasa <span className="text-accent font-medium">hidup</span>.
          Spesialis React, Vue.js, dan modern CSS dengan passion pada performa
          dan UX yang exceptional.  */}
        </motion.p>

        <motion.div className="flex gap-4 flex-wrap" {...fadeUp(0.8)}>
          <Button href="#projects">Lihat Proyek →</Button>
          <Button variant="secondary" href="#contact">
            Hubungi Saya
          </Button>
        </motion.div>
      </div>

      {/* Right: Code Window */}
      <div className="hidden md:flex justify-center items-center">
        <CodeWindow />
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        <div className="w-px h-14 bg-gradient-to-b from-accent to-transparent animate-scroll-line" />
        <span className="font-mono text-[0.6rem] text-ink-faint tracking-widest uppercase">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}

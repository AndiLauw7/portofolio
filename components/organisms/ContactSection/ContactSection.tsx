"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { SectionLabel, Button } from "@/components/atoms";
import { ContactLink } from "@/components/molecules";
import { CONTACT_LINKS } from "@/lib/data";

export function ContactSection() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="px-6 md:px-10 py-24 bg-bg-secondary relative">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-64 rounded-full bg-accent/4 blur-3xl pointer-events-none" />

      <SectionLabel index="04" label="Kontak" />

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-syne font-extrabold tracking-tight mt-4 mb-16"
        style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
      >
        Mari{" "}
        <em
          className="font-serif not-italic"
          style={{
            background: "linear-gradient(135deg, #00ffaa, #00c8ff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Berkolaborasi
        </em>
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-[0.87rem] leading-loose text-ink-muted mb-8">
            Punya proyek yang ingin diwujudkan? Atau sekadar ingin ngobrol soal
            teknologi? Inbox saya selalu terbuka. Mari membangun sesuatu yang luar
            biasa bersama.
          </p>
          <div className="flex flex-col gap-3">
            {CONTACT_LINKS.map((link) => (
              <ContactLink key={link.label} link={link} />
            ))}
          </div>
        </motion.div>

        {/* Right: Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-col gap-4"
        >
          {[
            { label: "Nama", type: "text", placeholder: "John Doe" },
            { label: "Email", type: "email", placeholder: "john@example.com" },
          ].map((field) => (
            <div key={field.label} className="flex flex-col gap-1.5">
              <label className="font-mono text-[0.68rem] text-ink-faint tracking-widest uppercase">
                {field.label}
              </label>
              <input
                type={field.type}
                placeholder={field.placeholder}
                required
                className="bg-surface border border-border text-ink font-mono text-[0.85rem] px-4 py-3 outline-none focus:border-accent transition-colors placeholder:text-ink-faint"
              />
            </div>
          ))}

          <div className="flex flex-col gap-1.5">
            <label className="font-mono text-[0.68rem] text-ink-faint tracking-widest uppercase">
              Pesan
            </label>
            <textarea
              placeholder="Ceritakan proyekmu..."
              required
              rows={5}
              className="bg-surface border border-border text-ink font-mono text-[0.85rem] px-4 py-3 outline-none focus:border-accent transition-colors placeholder:text-ink-faint resize-none"
            />
          </div>

          <Button type="submit" className="self-start">
            {sent ? "Terkirim! ✓" : "Kirim Pesan →"}
          </Button>
        </motion.form>
      </div>
    </section>
  );
}

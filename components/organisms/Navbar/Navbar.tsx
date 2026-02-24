"use client";
import { motion } from "framer-motion";
import { NavLink } from "@/components/molecules";
import { StatusDot } from "@/components/atoms";
import { NAV_ITEMS } from "@/lib/data";

export function Navbar() {
  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-10 py-5 bg-bg/80 backdrop-blur-xl border-b border-border"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <span className="font-mono text-[0.82rem] text-accent tracking-widest">
        // YN.DEV
      </span>

      <ul className="hidden md:flex items-center gap-10">
        {NAV_ITEMS.map((item) => (
          <li key={item.href}>
            <NavLink href={item.href} label={item.label} />
          </li>
        ))}
      </ul>

      <StatusDot />
    </motion.nav>
  );
}

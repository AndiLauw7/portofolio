"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const CODE_LINES = [
  { indent: 0, content: [{ t: "comment", v: "// Hello, World! 👋" }] },
  {
    indent: 0,
    content: [
      { t: "kw", v: "const " },
      { t: "var", v: "developer" },
      { t: "plain", v: " = {" },
    ],
  },
  {
    indent: 1,
    content: [
      { t: "prop", v: "name" },
      { t: "plain", v: ": " },
      { t: "str", v: '"Andi Lauw"' },
      { t: "plain", v: "," },
    ],
  },
  {
    indent: 1,
    content: [
      { t: "prop", v: "role" },
      { t: "plain", v: ": " },
      { t: "str", v: '"Frontend Developer"' },
      { t: "plain", v: "," },
    ],
  },
  {
    indent: 1,
    content: [
      { t: "prop", v: "experience" },
      { t: "plain", v: ": " },
      { t: "num", v: "2" },
      { t: "comment", v: ", // years" },
    ],
  },
  {
    indent: 1,
    content: [
      { t: "prop", v: "stack" },
      { t: "plain", v: ": [" },
    ],
  },
  {
    indent: 2,
    content: [
      { t: "str", v: '"React"' },
      { t: "plain", v: ", " },
      { t: "str", v: '"Next"' },
      { t: "plain", v: "," },
      { t: "str", v: '"Angular"' },
      { t: "plain", v: "," },
    ],
  },
  {
    indent: 2,
    content: [
      { t: "str", v: '"TypeScript"' },
      { t: "plain", v: ", " },
      { t: "str", v: '"Javascript"' },
    ],
  },
  { indent: 1, content: [{ t: "plain", v: "]," }] },
  {
    indent: 1,
    content: [
      { t: "prop", v: "passion" },
      { t: "plain", v: ": " },
      { t: "str", v: '"UI/UX & Performance"' },
      { t: "plain", v: "," },
    ],
  },
  {
    indent: 1,
    content: [
      { t: "prop", v: "available" },
      { t: "plain", v: ": " },
      { t: "kw", v: "true" },
    ],
  },
  { indent: 0, content: [{ t: "plain", v: "};" }] },
  { indent: 0, content: [] },
  {
    indent: 0,
    content: [
      { t: "fn", v: "console" },
      { t: "plain", v: "." },
      { t: "fn", v: "log" },
      { t: "plain", v: "(" },
      { t: "str", v: '"Let\'s build"' },
    ],
  },
  {
    indent: 1,
    content: [
      { t: "plain", v: "+ " },
      { t: "str", v: '"something great!"' },
      { t: "plain", v: ");" },
      { t: "cursor", v: "" },
    ],
  },
];

const colorMap: Record<string, string> = {
  comment: "text-ink-faint italic",
  kw: "text-[#ff79c6]",
  var: "text-[#bd93f9]",
  prop: "text-ink-muted",
  str: "text-accent",
  num: "text-accent-orange",
  fn: "text-accent-blue",
  plain: "text-ink",
  cursor: "",
};

export function CodeWindow() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines((v) => {
        if (v >= CODE_LINES.length) { clearInterval(interval); return v; }
        return v + 1;
      });
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="relative bg-surface border border-border rounded-sm overflow-hidden w-full max-w-[480px]"
      style={{ boxShadow: "0 40px 80px rgba(0,0,0,0.5), 0 0 30px rgba(0,255,170,0.08)" }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      {/* Top glow line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-50" />

      {/* Header */}
      <div className="flex items-center gap-2 px-4 py-3 bg-bg-secondary border-b border-border">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        <span className="font-mono text-[0.65rem] text-ink-faint ml-2">portfolio.tsx</span>
      </div>

      {/* Code body */}
      <div className="px-5 py-5 font-mono text-[0.78rem] leading-[1.9]">
        {CODE_LINES.slice(0, visibleLines).map((line, i) => (
          <div key={i} style={{ paddingLeft: `${line.indent * 1.2}rem` }}>
            {line.content.map((token, j) =>
              token.t === "cursor" ? (
                <span key={j} className="inline-block w-[2px] h-[1em] bg-accent animate-blink align-text-bottom" />
              ) : (
                <span key={j} className={colorMap[token.t] || "text-ink"}>
                  {token.v}
                </span>
              )
            )}
            {line.content.length === 0 && <span>&nbsp;</span>}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

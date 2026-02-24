import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ["var(--font-syne)", "sans-serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
        serif: ["var(--font-instrument)", "serif"],
      },
      colors: {
        bg: {
          DEFAULT: "#070b0e",
          secondary: "#0c1117",
        },
        surface: {
          DEFAULT: "#101820",
          secondary: "#141e28",
        },
        accent: {
          DEFAULT: "#00ffaa",
          blue: "#00c8ff",
          orange: "#ff6b35",
        },
        ink: {
          DEFAULT: "#e8eef2",
          muted: "#7a8fa6",
          faint: "#3a4a5a",
        },
        border: {
          DEFAULT: "rgba(0,255,170,0.1)",
          hover: "rgba(0,255,170,0.3)",
        },
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(0,255,170,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,170,0.03) 1px, transparent 1px)",
        "gradient-accent":
          "linear-gradient(135deg, #00ffaa, #00c8ff)",
        "gradient-radial-cyan":
          "radial-gradient(circle at 50% 50%, rgba(0,200,255,0.12), transparent 60%)",
      },
      backgroundSize: {
        grid: "60px 60px",
      },
      animation: {
        "blink": "blink 1s step-end infinite",
        "pulse-dot": "pulseDot 2s ease-in-out infinite",
        "scroll-line": "scrollLine 1.8s ease-in-out infinite",
        "fade-up": "fadeUp 0.7s ease forwards",
        "fade-in": "fadeIn 0.7s ease forwards",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        blink: { "0%,100%": { opacity: "1" }, "50%": { opacity: "0" } },
        pulseDot: {
          "0%,100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.4", transform: "scale(0.7)" },
        },
        scrollLine: {
          "0%": { transform: "scaleY(0)", transformOrigin: "top", opacity: "1" },
          "50%": { transform: "scaleY(1)", transformOrigin: "top", opacity: "1" },
          "100%": { transform: "scaleY(1)", transformOrigin: "bottom", opacity: "0" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      clipPath: {
        chamfer: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))",
      },
    },
  },
  plugins: [],
};
export default config;

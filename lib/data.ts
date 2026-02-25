import type { Project, Skill, Stat, ContactLink, NavItem } from "@/types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Tentang", href: "#about" },
  { label: "Keahlian", href: "#skills" },
  { label: "Proyek", href: "#projects" },
  { label: "Kontak", href: "#contact" },
];

export const STATS: Stat[] = [
  { num: "3", suffix: "+", label: "Tahun Pengalaman" },
  { num: "40", suffix: "+", label: "Proyek Selesai" },
  { num: "15", suffix: "+", label: "Klien Puas" },
  { num: "∞", label: "Semangat Belajar" },
];

export const SKILLS: Skill[] = [
  {
    id: "frameworks",
    icon: "⚛️",
    name: "Frontend Frameworks",
    description:
      "Membangun aplikasi skala besar dengan arsitektur bersih dan maintainable.",
    tags: ["React", "Vue.js", "Next.js", "Nuxt"],
  },
  {
    id: "styling",
    icon: "🎨",
    name: "Styling & Design",
    description:
      "Menciptakan antarmuka responsif, animatif, dan pixel-perfect.",
    tags: ["Tailwind CSS", "SASS/SCSS", "Framer Motion", "CSS Animations"],
  },
  {
    id: "languages",
    icon: "🔧",
    name: "Languages & Tools",
    description:
      "Fondasi kuat dalam bahasa modern dan workflow pengembangan profesional.",
    tags: ["TypeScript", "JavaScript ES6+", "Git", "Vite"],
  },
  {
    id: "state",
    icon: "🗄️",
    name: "State & API",
    description:
      "Mengelola state kompleks dan integrasi API dengan pola yang efisien.",
    tags: ["Redux Toolkit", "Pinia", "React Query", "GraphQL"],
  },
  {
    id: "testing",
    icon: "🧪",
    name: "Testing & Quality",
    description:
      "Memastikan kode berjalan dengan benar melalui strategi testing yang solid.",
    tags: ["Jest", "Vitest", "Cypress", "Storybook"],
  },
  {
    id: "devops",
    icon: "🚀",
    name: "DevOps & Deploy",
    description:
      "Deployment dan CI/CD pipeline untuk delivery yang cepat dan reliable.",
    tags: ["Vercel", "Docker", "GitHub Actions", "AWS"],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "shopnest",
    title: "ShopNest — Modern E-Commerce Platform",
    category: "E-Commerce",
    year: "2024",
    description:
      "Platform belanja online full-featured dengan real-time inventory, cart management, payment gateway integration, dan dashboard analytics. Lighthouse score 98.",
    emoji: "🛒",
    colorClass: "project-blue",
    stack: ["Next.js 14", "TypeScript", "Tailwind", "Prisma", "Stripe"],
    liveUrl: "#",
    repoUrl: "#",
    featured: true,
  },
  {
    id: "dataviz",
    title: "DataViz — Analytics Dashboard",
    category: "Dashboard",
    year: "2024",
    description:
      "Dashboard visualisasi data real-time dengan 20+ jenis chart interaktif, filter dinamis, dan export PDF.",
    emoji: "📊",
    colorClass: "project-purple",
    stack: ["Vue 3", "D3.js", "Pinia", "Socket.io"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    id: "chatflow",
    title: "ChatFlow — Realtime Chat App",
    category: "SaaS App",
    year: "2023",
    description:
      "Aplikasi chat realtime dengan rooms, file sharing, message reactions, dan end-to-end encryption.",
    emoji: "💬",
    colorClass: "project-green",
    stack: ["React", "Firebase", "WebRTC", "Framer Motion"],
    liveUrl: "#",
    repoUrl: "#",
  },
];

export const CONTACT_LINKS: ContactLink[] = [
  {
    icon: "✉️",
    label: "Email",
    href: "mailto:andi.safariansyah7@gmail.com",
    display: "andi.safariansyah7@gmail.com",
  },
  {
    icon: "💼",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/andi-safariansyah/",
    display: "linkedin.com/in/andi-safariansyah/",
  },
  {
    icon: "🐙",
    label: "GitHub",
    href: "https://github.com/AndiLauw7",
    display: "github.com/AndiLauw7",
  },
];

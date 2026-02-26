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
    id: "companyProfile",
    title: "Ultra Digital Indonesia — Company Profile",
    category: "Company Profile",
    year: "2026",
    description:
      "Mengembangkan situs web profil perusahaan Ultra Digital Indonesia secara mandiri dari awal hingga akhir.",
    emoji: "🏢",
    colorClass: "project-blue",
    stack: ["Next.js", "TypeScript", "Atomic Design", "Tailwind", "SEO"],
    liveUrl: "https://ultradigitalindonesia.co.id/",
    repoUrl: "#",
    featured: true,
  },
  {
    id: "companyProfile2",
    title: "UDIN Payment — Company Profile",
    category: "Company Profile",
    year: "2026",
    description:
      "Mengembangkan situs web profil perusahaan UDIN secara mandiri dari awal hingga akhir.",
    emoji: "🏢",
    colorClass: "project-blue",
    stack: ["Next.js", "TypeScript", "Atomic Design", "Tailwind", "SEO"],
    liveUrl: "https://udin.ultradigitalindonesia.co.id/",
    repoUrl: "#",
    featured: true,
  },
  {
    id: "wordpress",
    title: "WordPress — Company Profile",
    category: "Deployment",
    year: "2026",
    description:
      "Mengelola pengaturan infrastruktur WordPress secara mandiri pada server VPS Ubuntu.",
    emoji: "🏢",
    colorClass: "project-blue",
    stack: ["WordPress", "PHP", "MySQL", "Ubuntu", "Nginx"],
    liveUrl: "https://berita.brnr.co.id/",
    repoUrl: "#",
    featured: true,
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

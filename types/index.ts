// ─── Project Types ─────────────────────────────────────────────
export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  emoji: string;
  colorClass: string;
  stack: string[];
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
}

// ─── Skill Types ────────────────────────────────────────────────
export interface Skill {
  id: string;
  icon: string;
  name: string;
  description: string;
  tags: string[];
}

// ─── Stat Types ─────────────────────────────────────────────────
export interface Stat {
  num: string;
  suffix?: string;
  label: string;
}

// ─── Contact Link Types ─────────────────────────────────────────
export interface ContactLink {
  icon: string;
  label: string;
  href: string;
  display: string;
}

// ─── Nav Link Types ─────────────────────────────────────────────
export interface NavItem {
  label: string;
  href: string;
}

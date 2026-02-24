export function Footer() {
  return (
    <footer className="px-6 md:px-10 py-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-3">
      <p className="font-mono text-[0.72rem] text-ink-faint">
        © 2025 <span className="text-accent">Nama Kamu</span>. Crafted with passion.
      </p>
      <p className="font-mono text-[0.72rem] text-ink-faint">
        Built with <span className="text-accent">Next.js · TypeScript · Tailwind</span>
      </p>
    </footer>
  );
}

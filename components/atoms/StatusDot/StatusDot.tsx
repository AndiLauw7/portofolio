export function StatusDot() {
  return (
    <div className="flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-accent animate-pulse-dot" />
      <span className="font-mono text-[0.68rem] text-ink-faint tracking-wider">
        Available for work
      </span>
    </div>
  );
}

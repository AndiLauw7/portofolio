interface SectionLabelProps {
  index: string;
  label: string;
}

export function SectionLabel({ index, label }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="font-mono text-[0.68rem] text-ink-faint tracking-widest">
        {index}
      </span>
      <span className="w-8 h-px bg-border" />
      <span className="font-mono text-[0.72rem] text-accent tracking-[0.2em] uppercase">
        {label}
      </span>
    </div>
  );
}

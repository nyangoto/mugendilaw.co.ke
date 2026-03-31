interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <p
      className={`text-xs font-sans font-semibold tracking-[0.2em] uppercase text-gold mb-4 ${className}`}
    >
      {children}
    </p>
  );
}

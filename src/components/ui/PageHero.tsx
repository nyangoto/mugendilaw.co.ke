import { SectionLabel } from "./SectionLabel";

interface PageHeroProps {
  label?: string;
  title: string;
  subtitle?: string;
}

export function PageHero({ label, title, subtitle }: PageHeroProps) {
  return (
    <section className="relative pt-40 pb-20 px-6 overflow-hidden">
      {/* Subtle gradient top */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 40% at 50% 0%, rgba(201,168,76,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-5xl mx-auto">
        {label && <SectionLabel>{label}</SectionLabel>}
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg text-muted-foreground max-w-2xl">{subtitle}</p>
        )}
      </div>

      {/* Gold line beneath */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(201,168,76,0.25) 50%, transparent)",
        }}
      />
    </section>
  );
}

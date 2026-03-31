import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GoldDivider } from "@/components/ui/GoldDivider";

const COUNTRIES = ["Kenya", "Uganda", "Tanzania", "Rwanda"];

export function RegionalReach() {
  return (
    <section className="section-padding px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <AnimatedSection>
            <SectionLabel>Our Reach</SectionLabel>
            <h2 className="font-heading text-4xl lg:text-5xl text-foreground mb-6">
              One Firm.<br />Four Countries.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-md">
              While our home is Heri Plaza, Karen, our mandates extend across
              East Africa. We support clients with cross-border investments,
              multi-jurisdiction transactions, and regional regulatory matters
              through established partnerships in Uganda, Tanzania, and Rwanda.
            </p>

            <div className="flex flex-wrap gap-3">
              {COUNTRIES.map((country) => (
                <span
                  key={country}
                  className="px-4 py-1.5 text-sm font-sans text-foreground/80 border"
                  style={{ borderColor: "rgba(201,168,76,0.25)", background: "rgba(201,168,76,0.05)" }}
                >
                  {country}
                </span>
              ))}
            </div>
          </AnimatedSection>

          {/* Decorative right side */}
          <AnimatedSection delay={0.15} className="hidden lg:block">
            <div
              className="relative p-10 border"
              style={{ borderColor: "rgba(201,168,76,0.15)", background: "rgba(201,168,76,0.03)" }}
            >
              <p className="font-heading text-3xl text-foreground/20 leading-tight mb-6 italic">
                &ldquo;To be a trusted regional law firm recognized for excellence in tax advisory, immigration law, property transactions, and corporate legal services.&rdquo;
              </p>
              <GoldDivider className="mb-4" />
              <p className="text-xs font-sans tracking-widest uppercase text-gold">
                Our Vision — Mugendi Law Advocates LLP
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GoldDivider } from "@/components/ui/GoldDivider";

export function MissionVision() {
  return (
    <section className="section-padding px-6 bg-surface">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <AnimatedSection>
            <p className="text-xs font-sans font-semibold tracking-[0.2em] uppercase text-gold mb-5">
              Our Mission
            </p>
            <h2 className="font-heading text-3xl text-foreground mb-5">
              Navigate complexity.<br />Enable confidence.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              To provide practical, strategic legal advice that enables our
              clients to navigate complex legal and regulatory environments with
              confidence.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div
              className="hidden lg:block absolute top-0 left-0 bottom-0 w-px"
              style={{ background: "rgba(201,168,76,0.20)" }}
            />
            <p className="text-xs font-sans font-semibold tracking-[0.2em] uppercase text-gold mb-5">
              Our Vision
            </p>
            <h2 className="font-heading text-3xl text-foreground mb-5">
              A trusted name<br />across East Africa.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              To be a trusted regional law firm recognized for excellence in tax
              advisory, immigration law, property transactions, and corporate
              legal services.
            </p>
          </AnimatedSection>
        </div>

        <GoldDivider fade className="mt-16" />
      </div>
    </section>
  );
}

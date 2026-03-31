import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { MissionVision } from "@/components/about/MissionVision";
import { ValuesGrid } from "@/components/about/ValuesGrid";
import { ContactCTA } from "@/components/home/ContactCTA";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionLabel } from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "About",
  description:
    "Mugendi Law Advocates LLP is a Nairobi-based law firm blending technical legal strength with the accessibility of a boutique practice. Karen, Nairobi.",
  alternates: { canonical: "https://mugendilaw.co.ke/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About the Firm"
        title="Who We Are"
        subtitle="A dynamic mid-tier law firm based in Karen, Nairobi, advising clients across Kenya and East Africa."
      />

      {/* Who We Are */}
      <section className="section-padding px-6 bg-surface">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection>
              <SectionLabel>The Firm</SectionLabel>
              <h2 className="font-heading text-3xl text-foreground mb-6">
                Boutique practice.<br />Institutional depth.
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Mugendi Law Advocates LLP is a Nairobi-based law firm offering
                  comprehensive legal services to businesses, investors, developers,
                  and private clients.
                </p>
                <p>
                  From our offices at Heri Plaza, Karen, we advise clients throughout
                  Kenya, Uganda, Tanzania, Rwanda, and the broader East African region.
                </p>
                <p>
                  We blend the technical strength of large law firms with the
                  accessibility and responsiveness of a boutique practice — because
                  our clients deserve both.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="space-y-0">
                {[
                  "Practical legal solutions",
                  "Prompt and responsive client service",
                  "Deep understanding of regulatory and commercial environments",
                  "Regional capability through trusted networks",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 py-5 border-b"
                    style={{ borderColor: "rgba(201,168,76,0.12)" }}
                  >
                    <span className="text-gold font-heading text-lg mt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm text-foreground/80 leading-relaxed pt-1">{item}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <MissionVision />
      <ValuesGrid />
      <ContactCTA />
    </>
  );
}

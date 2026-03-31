import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function ContactCTA() {
  return (
    <section
      className="py-28 px-6 relative overflow-hidden"
      style={{ background: "#0A0A0A" }}
    >
      {/* Gold gradient backdrop */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 70% at 50% 50%, rgba(201,168,76,0.07) 0%, transparent 70%)",
        }}
      />

      <AnimatedSection className="relative max-w-3xl mx-auto text-center">
        <p className="text-xs font-sans font-semibold tracking-[0.25em] uppercase text-gold mb-5">
          Get in Touch
        </p>
        <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6">
          Ready to Protect<br />Your Interests?
        </h2>
        <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
          Whether you&apos;re a business, investor, or individual — our team is
          ready to advise. Schedule a confidential consultation today.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center px-10 py-4 text-sm font-sans font-semibold tracking-wider text-background bg-gold hover:brightness-110 transition-all"
        >
          Request a Consultation
        </Link>
      </AnimatedSection>
    </section>
  );
}

import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { GoldDivider } from "@/components/ui/GoldDivider";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Mugendi Law Advocates LLP at Heri Plaza, Karen, Ngong Road, Nairobi. Request a confidential consultation.",
  alternates: { canonical: "https://mugendilaw.co.ke/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Get in Touch"
        title="Request a Consultation"
        subtitle="All enquiries are treated in strict confidence. We respond within one business day."
      />

      <section className="section-padding px-6 bg-surface">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

            {/* Contact details */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <p className="text-xs font-sans font-semibold tracking-[0.2em] uppercase text-gold mb-5">
                  Our Office
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin size={15} className="text-gold mt-0.5 shrink-0" />
                    <address className="not-italic text-sm text-muted-foreground leading-relaxed">
                      Heri Plaza, Karen<br />
                      Ngong Road<br />
                      Nairobi, Kenya
                    </address>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone size={15} className="text-gold mt-0.5 shrink-0" />
                    <a
                      href="tel:+254725150497"
                      className="text-sm text-muted-foreground hover:text-gold transition-colors"
                    >
                      +254(0) 725 150 497
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail size={15} className="text-gold mt-0.5 shrink-0" />
                    <a
                      href="mailto:info@mugendilaw.co.ke"
                      className="text-sm text-muted-foreground hover:text-gold transition-colors"
                    >
                      info@mugendilaw.co.ke
                    </a>
                  </div>
                </div>
              </div>

              <GoldDivider />

              <div>
                <p className="text-xs font-sans font-semibold tracking-[0.2em] uppercase text-gold mb-5">
                  Service Region
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Kenya", "Uganda", "Tanzania", "Rwanda"].map((country) => (
                    <span
                      key={country}
                      className="px-3 py-1 text-xs font-sans text-foreground/70 border"
                      style={{
                        borderColor: "rgba(201,168,76,0.20)",
                        background: "rgba(201,168,76,0.04)",
                      }}
                    >
                      {country}
                    </span>
                  ))}
                </div>
              </div>

              <GoldDivider />

              {/* Map link */}
              <div>
                <p className="text-xs font-sans font-semibold tracking-[0.2em] uppercase text-gold mb-4">
                  Find Us
                </p>
                <a
                  href="https://maps.google.com/?q=Heri+Plaza+Karen+Nairobi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full aspect-video bg-elevated border relative overflow-hidden group"
                  style={{ borderColor: "rgba(201,168,76,0.15)" }}
                  aria-label="View on Google Maps"
                >
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                    <MapPin size={24} className="text-gold" />
                    <span className="text-xs font-sans text-muted-foreground group-hover:text-foreground transition-colors">
                      Heri Plaza, Karen — View on Google Maps
                    </span>
                  </div>
                  <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/20 transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

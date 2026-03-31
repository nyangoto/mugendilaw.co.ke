import type { Metadata } from "next";
import Script from "next/script";
import { HeroSection } from "@/components/home/HeroSection";
import { PracticeAreasGrid } from "@/components/home/PracticeAreasGrid";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { RegionalReach } from "@/components/home/RegionalReach";
import { ContactCTA } from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  title: "Mugendi Law Advocates LLP | Karen, Nairobi",
  alternates: { canonical: "https://mugendilaw.co.ke" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Mugendi Law Advocates LLP",
  description:
    "Trusted legal advisors in Tax Advisory, Immigration, Conveyancing, and Corporate Law across East Africa.",
  url: "https://mugendilaw.co.ke",
  logo: "https://mugendilaw.co.ke/logo.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Heri Plaza, Ngong Road",
    addressLocality: "Karen, Nairobi",
    addressCountry: "KE",
  },
  areaServed: ["Kenya", "Uganda", "Tanzania", "Rwanda"],
  serviceType: ["Tax Advisory", "Immigration Law", "Conveyancing", "Corporate Law"],
};

export default function HomePage() {
  return (
    <>
      {/*
       * Safe: jsonLd is a hardcoded static object — no user input involved.
       * This is the canonical Next.js pattern for injecting JSON-LD schema.
       */}
      <Script
        id="json-ld-legal"
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <PracticeAreasGrid />
      <WhyChooseUs />
      <RegionalReach />
      <ContactCTA />
    </>
  );
}

import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { PracticeCard } from "@/components/practice/PracticeCard";
import { ContactCTA } from "@/components/home/ContactCTA";
import { practiceAreas } from "@/lib/practice-areas";

export const metadata: Metadata = {
  title: "Practice Areas",
  description:
    "Mugendi Law Advocates LLP advises on Tax Advisory, Immigration, Conveyancing, and Corporate & Commercial Law across Kenya and East Africa.",
};

export default function PracticeAreasPage() {
  return (
    <>
      <PageHero
        label="What We Do"
        title="Our Practice Areas"
        subtitle="Four specialist practices, one trusted partnership. We advise businesses, investors, and individuals across East Africa."
      />

      <section className="section-padding px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {practiceAreas.map((area) => (
              <PracticeCard key={area.slug} area={area} />
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { ServiceList } from "@/components/practice/ServiceList";
import { ContactCTA } from "@/components/home/ContactCTA";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { getPracticeArea, getAllSlugs } from "@/lib/practice-areas";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = getPracticeArea(slug);
  if (!area) return {};
  return {
    title: area.metaTitle,
    description: area.metaDescription,
    alternates: { canonical: `https://mugendilaw.co.ke/practice-areas/${slug}` },
  };
}

export default async function PracticeAreaPage({ params }: Props) {
  const { slug } = await params;
  const area = getPracticeArea(slug);
  if (!area) notFound();

  return (
    <>
      <PageHero label="Practice Area" title={area.title} />

      <section className="section-padding px-6 bg-surface">
        <div className="max-w-5xl mx-auto">
          {/* Back link */}
          <Link
            href="/practice-areas"
            className="inline-flex items-center gap-2 text-xs font-sans text-muted-foreground hover:text-gold transition-colors mb-12 tracking-wide uppercase"
          >
            <ArrowLeft size={13} /> All Practice Areas
          </Link>

          {/* Overview */}
          <AnimatedSection className="mb-12">
            <p className="text-lg text-foreground/80 leading-relaxed max-w-2xl">
              {area.overview}
            </p>
          </AnimatedSection>

          <GoldDivider className="mb-12" />

          {/* Services */}
          <AnimatedSection className="mb-16">
            <h2 className="font-heading text-2xl text-foreground mb-8">
              Our Services
            </h2>
            <ServiceList services={area.services} />
          </AnimatedSection>

          <GoldDivider className="mb-12" />

          {/* Why it matters */}
          <AnimatedSection>
            <div
              className="p-8 border"
              style={{
                borderColor: "rgba(201,168,76,0.20)",
                background: "rgba(201,168,76,0.04)",
              }}
            >
              <p className="text-xs font-sans font-semibold tracking-[0.2em] uppercase text-gold mb-4">
                Why It Matters
              </p>
              <p className="text-foreground/80 leading-relaxed">{area.whyItMatters}</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}

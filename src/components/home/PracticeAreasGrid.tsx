"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { staggerContainer, VIEWPORT } from "@/lib/animations";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { PracticeCard } from "@/components/practice/PracticeCard";
import { practiceAreas } from "@/lib/practice-areas";

export function PracticeAreasGrid() {
  return (
    <section className="section-padding px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <AnimatedSection className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <SectionLabel>What We Do</SectionLabel>
            <h2 className="font-heading text-4xl lg:text-5xl text-foreground">
              Four Practices.<br />One Trusted Firm.
            </h2>
          </div>
          <Link
            href="/practice-areas"
            className="inline-flex items-center gap-2 text-sm font-sans text-gold hover:brightness-125 transition-all shrink-0"
          >
            All Practice Areas <ArrowRight size={15} />
          </Link>
        </AnimatedSection>

        {/* Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {practiceAreas.map((area) => (
            <PracticeCard key={area.slug} area={area} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

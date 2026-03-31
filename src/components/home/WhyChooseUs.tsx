"use client";

import { motion } from "framer-motion";
import { Briefcase, Clock, Shield, Globe } from "lucide-react";
import { staggerContainer, fadeUp, VIEWPORT } from "@/lib/animations";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const PILLARS = [
  {
    Icon: Briefcase,
    title: "Practical Legal Advice",
    body: "We translate complex law into decisions you can act on — without the jargon.",
  },
  {
    Icon: Clock,
    title: "Responsive by Design",
    body: "Direct access to your legal team. Fast turnarounds on time-sensitive matters.",
  },
  {
    Icon: Shield,
    title: "Regulatory Authority",
    body: "Deep experience navigating KRA, immigration bodies, and the Lands Registry.",
  },
  {
    Icon: Globe,
    title: "East Africa Capability",
    body: "Cross-border mandates across Kenya, Uganda, Tanzania, and Rwanda through trusted networks.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="section-padding px-6" style={{ background: "#0A0A0A" }}>
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="mb-14 max-w-xl">
          <SectionLabel>Why Clients Choose Us</SectionLabel>
          <h2 className="font-heading text-4xl lg:text-5xl text-foreground">
            Commercially Minded.<br />Regionally Connected.
          </h2>
        </AnimatedSection>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {PILLARS.map(({ Icon, title, body }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              className="group flex flex-col gap-4"
            >
              <div
                className="w-10 h-10 flex items-center justify-center border"
                style={{ borderColor: "rgba(201,168,76,0.25)", background: "rgba(201,168,76,0.06)" }}
              >
                <Icon size={18} className="text-gold" />
              </div>
              <div>
                <h3 className="font-heading text-lg text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

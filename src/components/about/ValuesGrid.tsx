"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp, VIEWPORT } from "@/lib/animations";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const VALUES = [
  { title: "Integrity", body: "We hold ourselves to the highest ethical standards in every engagement." },
  { title: "Professional Excellence", body: "Deep expertise, meticulously applied to every client matter." },
  { title: "Client Focus", body: "Your objectives are our objectives. We measure success by your outcomes." },
  { title: "Commercial Awareness", body: "Legal advice grounded in the realities of doing business." },
  { title: "Responsiveness", body: "Accessible, prompt, and present when it matters most." },
];

export function ValuesGrid() {
  return (
    <section className="section-padding px-6" style={{ background: "#0A0A0A" }}>
      <div className="max-w-5xl mx-auto">
        <AnimatedSection className="mb-12">
          <SectionLabel>What We Stand For</SectionLabel>
          <h2 className="font-heading text-4xl text-foreground">Our Values</h2>
        </AnimatedSection>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {VALUES.map(({ title, body }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              className="p-6 border-t-2"
              style={{
                borderColor: "rgba(201,168,76,0.35)",
                background: "#111111",
              }}
            >
              <h3 className="font-heading text-lg text-gold mb-3">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

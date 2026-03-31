"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { fadeUp } from "@/lib/animations";

const HERO_ITEMS = [
  { delay: 0.1, variant: "eyebrow" },
  { delay: 0.25, variant: "heading" },
  { delay: 0.4, variant: "sub" },
  { delay: 0.55, variant: "ctas" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24 pb-20 overflow-hidden">
      {/* Background radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 30%, rgba(201,168,76,0.07) 0%, transparent 65%)",
        }}
      />

      {/* Subtle grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative max-w-4xl mx-auto flex flex-col items-center gap-6">
        {/* Eyebrow */}
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: 0.1 }}
          className="text-xs font-sans font-semibold tracking-[0.25em] uppercase text-gold"
        >
          Heri Plaza, Karen · Nairobi, Kenya
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: 0.25 }}
          className="font-heading text-5xl sm:text-6xl lg:text-7xl text-foreground leading-[1.1] tracking-tight"
        >
          Navigate Kenya&apos;s Legal{" "}
          <span
            className="italic"
            style={{
              background: "linear-gradient(135deg, #C9A84C 0%, #E8C96A 50%, #C9A84C 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Landscape
          </span>{" "}
          with Confidence.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: 0.4 }}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed"
        >
          Strategic counsel in Tax Advisory, Immigration, Conveyancing, and
          Corporate Law — for businesses and individuals across East Africa.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: 0.55 }}
          className="flex flex-col sm:flex-row items-center gap-4 pt-2"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-sans font-semibold tracking-wide text-background bg-gold hover:brightness-110 transition-[filter]"
          >
            Request a Consultation
          </Link>
          <Link
            href="/practice-areas"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-sans font-medium text-foreground/80 hover:text-gold transition-[color,border-color] border border-foreground/10 hover:border-gold/30"
          >
            Explore Practice Areas
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: 0.7 }}
          className="flex items-center gap-8 pt-10 text-center"
        >
          {[
            { value: "4", label: "Practice Areas" },
            { value: "4+", label: "East African Countries" },
            { value: "100%", label: "Client Focus" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="font-heading text-2xl text-gold">{stat.value}</span>
              <span className="text-xs font-sans text-muted-foreground tracking-wide mt-0.5">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{ delay: 1.1, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground/40"
      >
        <ChevronDown size={20} aria-hidden="true" />
      </motion.div>
    </section>
  );
}

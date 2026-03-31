"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { scaleIn } from "@/lib/animations";
import type { PracticeArea } from "@/types";

interface PracticeCardProps {
  area: PracticeArea;
}

export function PracticeCard({ area }: PracticeCardProps) {
  return (
    <motion.div variants={scaleIn} className="group relative overflow-hidden">
      <Link href={`/practice-areas/${area.slug}`} className="block">
        {/* Image */}
        <div className="relative h-56 overflow-hidden bg-surface">
          <Image
            src={area.image}
            alt={area.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-70 group-hover:opacity-85"
          />
          {/* Gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.3) 60%, transparent 100%)",
            }}
          />
        </div>

        {/* Content */}
        <div
          className="relative p-6 bg-surface border-t-2"
          style={{ borderColor: "rgba(201,168,76,0)" }}
        >
          {/* Gold bottom-border hover effect */}
          <div
            className="absolute bottom-0 left-0 h-0.5 bg-gold transition-all duration-300 w-0 group-hover:w-full"
          />

          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-heading text-lg text-foreground mb-2 group-hover:text-gold transition-colors duration-200">
                {area.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {area.descriptor}
              </p>
            </div>
            <ArrowUpRight
              size={18}
              aria-hidden="true"
              className="shrink-0 mt-1 text-gold opacity-0 group-hover:opacity-100 transition-[opacity,transform] duration-200 translate-x-1 group-hover:translate-x-0"
            />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

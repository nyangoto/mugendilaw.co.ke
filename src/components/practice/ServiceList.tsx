"use client";

import { motion } from "framer-motion";
import { staggerContainerFast, fadeUp, VIEWPORT } from "@/lib/animations";

interface ServiceListProps {
  services: string[];
}

export function ServiceList({ services }: ServiceListProps) {
  return (
    <motion.ul
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      variants={staggerContainerFast}
      className="grid grid-cols-1 sm:grid-cols-2 gap-3"
    >
      {services.map((service) => (
        <motion.li
          key={service}
          variants={fadeUp}
          className="flex items-start gap-3 py-3 border-b"
          style={{ borderColor: "rgba(201,168,76,0.12)" }}
        >
          <span
            className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 bg-gold"
          />
          <span className="text-sm text-foreground/80 leading-relaxed">{service}</span>
        </motion.li>
      ))}
    </motion.ul>
  );
}

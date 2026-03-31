"use client";

import { motion, type Variants } from "framer-motion";
import { fadeUp, VIEWPORT } from "@/lib/animations";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
  as?: "div" | "section" | "article" | "li";
}

export function AnimatedSection({
  children,
  className,
  variants = fadeUp,
  delay = 0,
  as = "div",
}: AnimatedSectionProps) {
  const Component = motion[as];

  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      variants={variants}
      transition={delay ? { delay } : undefined}
      className={className}
    >
      {children}
    </Component>
  );
}

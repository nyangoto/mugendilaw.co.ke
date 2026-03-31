"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/practice-areas", label: "Practice Areas" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            key="panel"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed top-0 right-0 bottom-0 z-50 w-80 flex flex-col"
            style={{
              background: "#111111",
              borderLeft: "1px solid rgba(201,168,76,0.15)",
              overscrollBehavior: "contain",
            }}
          >
            {/* Close */}
            <div className="flex items-center justify-between px-6 py-5">
              <span className="text-xs tracking-[0.2em] uppercase text-gold font-semibold font-sans">
                Menu
              </span>
              <button
                onClick={onClose}
                className="text-muted-foreground hover:text-foreground transition-[color] p-1"
                aria-label="Close menu"
              >
                <X size={20} aria-hidden="true" />
              </button>
            </div>

            <div className="mx-6 h-px" style={{ background: "rgba(201,168,76,0.15)" }} />

            {/* Links */}
            <nav className="flex flex-col gap-1 px-4 py-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className="px-4 py-3 text-lg font-heading text-foreground hover:text-gold transition-[color]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="mt-auto px-6 pb-10">
              <Link
                href="/contact"
                onClick={onClose}
                className="block w-full py-3 text-center text-sm font-sans font-semibold tracking-wide text-background bg-gold hover:brightness-110 transition-[filter]"
              >
                Request a Consultation
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

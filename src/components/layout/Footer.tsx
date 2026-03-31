import Link from "next/link";
import Image from "next/image";
import { GoldDivider } from "@/components/ui/GoldDivider";

const PRACTICE_LINKS = [
  { href: "/practice-areas/tax-advisory", label: "Tax Advisory" },
  { href: "/practice-areas/immigration", label: "Immigration" },
  { href: "/practice-areas/conveyancing", label: "Conveyancing" },
  { href: "/practice-areas/corporate-commercial", label: "Corporate & Commercial" },
];

const FIRM_LINKS = [
  { href: "/about", label: "About the Firm" },
  { href: "/practice-areas", label: "Practice Areas" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-surface mt-20">
      <GoldDivider />

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Image
                src="/logo.jpg"
                alt="Mugendi Law Advocates"
                width={48}
                height={48}
                className="rounded-full"
              />
              <div className="font-heading text-foreground leading-tight">
                Mugendi Law<br />
                <span className="text-gold text-xs tracking-widest uppercase font-sans font-semibold">
                  Advocates LLP
                </span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Strategic legal counsel for businesses and individuals across Kenya and East Africa.
            </p>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="text-xs font-sans font-semibold tracking-[0.2em] uppercase text-gold mb-5">
              Practice Areas
            </h4>
            <ul className="space-y-3">
              {PRACTICE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-sans font-semibold tracking-[0.2em] uppercase text-gold mb-5">
              Contact
            </h4>
            <address className="not-italic space-y-2 text-sm text-muted-foreground">
              <p>Heri Plaza, Karen</p>
              <p>Ngong Road, Nairobi, Kenya</p>
              <p className="pt-2">
                <a
                  href="tel:+254725150497"
                  className="hover:text-gold transition-colors"
                >
                  +254(0) 725 150 497
                </a>
              </p>
              <p>
                <a
                  href="mailto:info@mugendilaw.co.ke"
                  className="hover:text-gold transition-colors"
                >
                  info@mugendilaw.co.ke
                </a>
              </p>
              <p className="pt-1 text-xs text-muted-foreground/60">
                Kenya · Uganda · Tanzania · Rwanda
              </p>
            </address>

            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center px-5 py-2.5 text-xs font-sans font-semibold tracking-wide text-background bg-gold hover:brightness-110 transition-all"
              >
                Request a Consultation
              </Link>
            </div>
          </div>
        </div>

        <GoldDivider />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-xs text-muted-foreground/50">
            © {new Date().getFullYear()} Mugendi Law Advocates LLP. All rights reserved.
          </p>
          <nav className="flex gap-6">
            {FIRM_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-muted-foreground/50 hover:text-muted-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}

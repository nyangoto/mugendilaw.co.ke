import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mugendilaw.co.ke"),
  title: {
    default: "Mugendi Law Advocates LLP | Karen, Nairobi",
    template: "%s | Mugendi Law Advocates LLP",
  },
  description:
    "Mugendi Law Advocates LLP — trusted legal advisors in Tax Advisory, Immigration, Conveyancing, and Corporate Law. Based in Heri Plaza, Karen, Nairobi, serving East Africa.",
  keywords: [
    "law firm Kenya",
    "tax lawyer Nairobi",
    "immigration lawyer Kenya",
    "conveyancing Nairobi",
    "corporate law Kenya",
    "Karen law firm",
    "KRA tax dispute",
    "work permit Kenya",
    "property lawyer Nairobi",
    "Heri Plaza Karen",
  ],
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://mugendilaw.co.ke",
    siteName: "Mugendi Law Advocates LLP",
    title: "Mugendi Law Advocates LLP | Strategic Legal Counsel in East Africa",
    description:
      "Tax, Immigration, Conveyancing & Corporate Law. Heri Plaza, Karen, Nairobi.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Mugendi Law Advocates LLP" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mugendi Law Advocates LLP",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://mugendilaw.co.ke" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`} style={{ colorScheme: "dark" }}>
      <head>
        <meta name="theme-color" content="#0A0A0A" />
      </head>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-gold focus:text-background focus:text-sm focus:font-semibold"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

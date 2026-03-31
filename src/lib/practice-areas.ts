import type { PracticeArea } from "@/types";

export const practiceAreas: PracticeArea[] = [
  {
    slug: "tax-advisory",
    shortTitle: "Tax Advisory",
    title: "Tax Advisory & Dispute Resolution",
    descriptor: "Navigate KRA audits, compliance, and international tax with precision.",
    overview:
      "Tax compliance and planning are critical to businesses operating in Kenya and the region. Our tax practice advises corporates, investors, and individuals on both contentious and non-contentious tax matters, including all interactions with the Kenya Revenue Authority.",
    whyItMatters:
      "A proactive tax strategy is not a luxury — it is a competitive advantage. We help you stay compliant, minimise exposure, and resolve disputes efficiently before they escalate.",
    services: [
      "Tax structuring and advisory",
      "Corporate tax planning",
      "VAT advisory and compliance",
      "Tax audits and investigations",
      "Tax dispute resolution and litigation",
      "Transfer pricing advisory",
      "International tax considerations",
    ],
    image: "/images/practice-tax.jpg",
    metaTitle: "Tax Advisory & Dispute Resolution",
    metaDescription:
      "Expert Kenyan tax counsel — VAT, corporate tax, KRA disputes, and transfer pricing. Mugendi Law Advocates LLP, Heri Plaza, Karen Nairobi.",
  },
  {
    slug: "immigration",
    shortTitle: "Immigration",
    title: "Immigration & Work Permit Services",
    descriptor: "Relocate talent, secure permits, and stay compliant with Kenya's immigration law.",
    overview:
      "Kenya remains a key investment and employment hub in East Africa, attracting global talent and international businesses. Our immigration practice assists companies and individuals with efficient navigation of Kenya's immigration laws and procedures.",
    whyItMatters:
      "Immigration delays cost businesses time and money. Our end-to-end support ensures smooth relocation for your team and full compliance with Kenyan regulations — so you can focus on your operations, not the paperwork.",
    services: [
      "Work permit applications and renewals",
      "Investor permits and special passes",
      "Dependent passes and residency matters",
      "Citizenship applications",
      "Immigration compliance advisory for employers",
      "Appeals and immigration dispute resolution",
    ],
    image: "/images/practice-immigration.jpg",
    metaTitle: "Immigration & Work Permit Services",
    metaDescription:
      "Work permits, investor passes, and immigration compliance for businesses and individuals in Kenya. Mugendi Law Advocates LLP, Karen Nairobi.",
  },
  {
    slug: "conveyancing",
    shortTitle: "Conveyancing",
    title: "Conveyancing & Real Estate",
    descriptor: "Secure every property transaction — acquisitions, leases, and development advisory.",
    overview:
      "Our conveyancing practice provides comprehensive legal support for property acquisitions, developments, leasing, and financing transactions. We advise developers, investors, lenders, and individuals in residential, commercial, and mixed-use real estate matters.",
    whyItMatters:
      "Property transactions are among the most significant decisions individuals and businesses make. Our team ensures every transaction is legally secure, efficiently executed, and fully aligned with your objectives — protecting your investment at every stage.",
    services: [
      "Property acquisitions and disposals",
      "Title searches and due diligence",
      "Drafting and review of sale agreements",
      "Lease drafting and negotiations",
      "Property financing and security documentation",
      "Real estate development advisory",
      "Land registration and compliance",
    ],
    image: "/images/practice-conveyancing.jpg",
    metaTitle: "Conveyancing & Real Estate",
    metaDescription:
      "Property acquisitions, title due diligence, leasing, and real estate development advisory in Kenya. Mugendi Law Advocates LLP, Karen Nairobi.",
  },
  {
    slug: "corporate-commercial",
    shortTitle: "Corporate & Commercial",
    title: "Corporate & Commercial Law",
    descriptor: "From company formation to M&A — legal support that moves with your business.",
    overview:
      "Businesses operating in Kenya require reliable legal partners who understand both the legal framework and the commercial realities of doing business. Our corporate and commercial practice advises startups, SMEs, and multinational companies across various industries.",
    whyItMatters:
      "Sound legal foundations enable businesses to grow with confidence. Whether you are entering the market, scaling, or restructuring, we provide the practical legal solutions that support sustainable business growth.",
    services: [
      "Company incorporation and structuring",
      "Corporate governance advisory",
      "Commercial contracts drafting and negotiation",
      "Joint ventures and partnerships",
      "Mergers and acquisitions support",
      "Regulatory compliance",
      "Business restructuring",
    ],
    image: "/images/practice-corporate.jpg",
    metaTitle: "Corporate & Commercial Law",
    metaDescription:
      "Company formation, contracts, M&A, and corporate governance for businesses in Kenya and East Africa. Mugendi Law Advocates LLP, Karen Nairobi.",
  },
];

export function getPracticeArea(slug: string): PracticeArea | undefined {
  return practiceAreas.find((area) => area.slug === slug);
}

export function getAllSlugs(): string[] {
  return practiceAreas.map((area) => area.slug);
}

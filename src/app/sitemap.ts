import type { MetadataRoute } from "next";
import { getAllSlugs } from "@/lib/practice-areas";

const BASE_URL = "https://mugendilaw.co.ke";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL,                  lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${BASE_URL}/about`,       lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/practice-areas`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/contact`,     lastModified: new Date(), changeFrequency: "yearly",  priority: 0.7 },
  ];

  const practiceRoutes: MetadataRoute.Sitemap = getAllSlugs().map((slug) => ({
    url:             `${BASE_URL}/practice-areas/${slug}`,
    lastModified:    new Date(),
    changeFrequency: "monthly",
    priority:        0.85,
  }));

  return [...staticRoutes, ...practiceRoutes];
}

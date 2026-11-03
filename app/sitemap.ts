import { MetadataRoute } from "next";
import { services } from "@/data/services";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://eg-interiors.vercel.app";

  const staticPages = [
    { url: base, lastModified: new Date(), priority: 1 },
    { url: `${base}/about`, lastModified: new Date(), priority: 0.9 },
    { url: `${base}/services`, lastModified: new Date(), priority: 0.9 },
    { url: `${base}/projects`, lastModified: new Date(), priority: 0.9 },
    { url: `${base}/process`, lastModified: new Date(), priority: 0.8 },
    { url: `${base}/contact`, lastModified: new Date(), priority: 0.9 },
  ];

  const servicePages = services.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: new Date(),
    priority: 0.8,
  }));

  const projectPages = projects.map((p) => ({
    url: `${base}/projects/${p.slug}`,
    lastModified: new Date(),
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages, ...projectPages];
}


import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: "https://akhil16-svg.github.io/Estar-Seguro/", changeFrequency: "monthly", priority: 1 }];
}

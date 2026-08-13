import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.sunrayvpower.in",
      lastModified: new Date(),
    },
    {
      url: "https://www.sunrayvpower.in/products",
      lastModified: new Date(),
    },
    {
      url: "https://www.sunrayvpower.in/services",
      lastModified: new Date(),
    },
  ];
}
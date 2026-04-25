import type { MetadataRoute } from "next";
import { rooms } from "@/lib/data/rooms";
import { venues } from "@/lib/data/dining";

const base = "https://thecourtyard.example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date();
  const staticPaths = [
    "",
    "/rooms",
    "/dining",
    "/spa",
    "/experiences",
    "/events",
    "/offers",
    "/gallery",
    "/about",
    "/contact",
    "/reserve",
  ];

  return [
    ...staticPaths.map((p) => ({
      url: `${base}${p}`,
      lastModified: today,
    })),
    ...rooms.map((r) => ({
      url: `${base}/rooms/${r.slug}`,
      lastModified: today,
    })),
    ...venues.map((v) => ({
      url: `${base}/dining/${v.slug}`,
      lastModified: today,
    })),
  ];
}

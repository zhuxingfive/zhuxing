import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "Googlebot", allow: "/" },
      { userAgent: "Bingbot", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" }, // ChatGPT search crawler — allow
      { userAgent: "GPTBot", disallow: "/" }, // AI training crawler — block per handbook 5.2
      { userAgent: "*", allow: "/" }
    ],
    sitemap: `${site.url}/sitemap.xml`
  };
}

import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["*", "/"],
      disallow: ["/_next/", "/404", "/500"],
    },
    host: "https://vercel.com",
    sitemap: [
      "https://golamrabbiazad.vercel.app/sitemap.xml",
      "https://golamrabbiazad.vercel.app/blog/sitemap.xml",
    ],
  }
}

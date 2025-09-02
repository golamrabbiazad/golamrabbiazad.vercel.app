import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/_next/", "/api/"],
    },
    host: "https://vercel.com",
    sitemap: [
      "https://golamrabbiazad.vercel.app/sitemap.xml",
      "https://golamrabbiazad.vercel.app/posts/sitemap.xml",
    ],
  }
}

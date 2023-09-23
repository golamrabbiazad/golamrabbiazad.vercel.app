import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: "https://golamrabbiazad.pages.dev/sitemap.xml",
    host: "https://vercel.com",
  }
}

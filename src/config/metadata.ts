import { Metadata } from "next"

export const metadataConfig: Metadata = {
  title:
    "Golamrabbi Azad - Cloud Architect, Full-Stack Engineer, An entrepreneur",
  description:
    "Experienced Full-Stack Engineer (TypeScript, React, Node.js, Python) with deep DevOps, kOps expertise, CI/CD, Linux_x64, 🐞 OSS Contributor and AWS cloud infrastructure.",
  category: "portfolio",
  authors: {
    name: "Golamrabbi Azad",
    url: "https://twitter.com/golamrabbiazad",
  },
  publisher: "Vercel",
  creator: "@golamrabbiazad",
  icons: {
    shortcut: "/favicon.ico",
    icon: "/favicon.ico",
  },
  robots: {
    follow: true,
    index: true,
  },
  openGraph: {
    type: "website",
    url: "https://golamrabbiazad.vercel.app",
    title: "Golamrabbi Azad",
    description: "Experienced Full-Stack Engineer (TypeScript, React, Node.js, Python) with deep DevOps, kOps expertise, CI/CD, Linux_x64, 🐞 OSS Contributor and AWS cloud infrastructure.",
    siteName: "https://golamrabbiazad.vercel.app",
    images: [{
      url: "https://golamrabbiazad.vercel.app/assets/images/profile-photo.png",
    }],
  }
}

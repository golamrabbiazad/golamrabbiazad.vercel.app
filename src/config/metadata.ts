import { Metadata } from "next"

export const metadataConfig: Metadata = {
  title:
    "Golamrabbi Azad - Senior Software Engineer, AWS CCP, An entrepreneur",
  description:
    "8+ years of experience as a Full-Stack Engineer with extensive DevOps skills in Infrastructure as Code (IaC), Terraform, Kubernetes, Docker, CI/CD, Linux_x64, 🐞 OSS Contributor and AWS, GCP cloud infrastructure.",
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
    description: "8+ years of experience as a Full-Stack Engineer with extensive DevOps skills in Infrastructure as Code (IaC), Terraform, Kubernetes, Docker, CI/CD, Linux_x64, 🐞 OSS Contributor and AWS, GCP cloud infrastructure.",
    siteName: "https://golamrabbiazad.vercel.app",
    images: [{
      url: "https://golamrabbiazad.vercel.app/assets/images/profile-photo.png",
    }],
  }
}

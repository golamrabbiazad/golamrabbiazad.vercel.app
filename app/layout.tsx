import "./globals.css"

import { ReactNode } from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"

import Footer from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { ThemeProvider } from "@/components/theme-provider"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "600", "800"],
})

export const metadata: Metadata = {
  title: "Golamrabbi Azad - Developer, Freelancer, Youtuber",
  description:
    "Full-stack Engineer, TypeScript, Next.js, Astro.build, Node.js, Java, Golang, Docker Enthusiast, and a video creator.",
  category: "website",
  themeColor: [
    {
      media: "(prefers-color-scheme: dark)",
      color: "#000000",
    },
    {
      media: "(prefers-color-scheme: light)",
      color: "#ffffff",
    },
  ],
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
}

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.className} min-h-screen bg-slate-50 text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-50`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex">{children}</main>
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}

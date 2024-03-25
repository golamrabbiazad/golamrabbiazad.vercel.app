import "./globals.css"

import { ReactNode } from "react"
import type { Metadata, Viewport } from "next"
import { Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

import Footer from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { ThemeProvider } from "@/components/theme-provider"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "600", "800"],
})

export const viewport: Viewport = {
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
}

export const metadata: Metadata = {
  title: "Golamrabbi Azad - SWE, Freelancer, Youtuber",
  description:
    "I talk about TypeScript, Next.js, React.js, and Cloudflare ecosystems.",
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
}

interface RootLayoutProps {
  children: Readonly<ReactNode>
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
          <main>{children}</main>
          <Footer />
          <Analytics />
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  )
}

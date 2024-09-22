import "./globals.css"

import { ReactNode } from "react"
import { Poppins } from "next/font/google"
import ThemeProvider from "@/providers/theme-provider"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

import { metadataConfig } from "@/config/metadata"
import Footer from "@/components/footer"
import { Navbar } from "@/components/navbar"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
})

export const viewport = {
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

export const metadata = metadataConfig

interface RootLayoutProps {
  children: Readonly<ReactNode>
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.className} bg-slate-50 text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-50`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

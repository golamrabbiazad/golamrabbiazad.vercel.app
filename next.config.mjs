import { withContentlayer } from "next-contentlayer"

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    typedRoutes: true,
    scrollRestoration: true,
  },
}

export default withContentlayer(nextConfig)

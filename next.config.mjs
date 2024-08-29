import { withContentlayer } from "next-contentlayer"

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    ppr: true,
    typedRoutes: true,
    reactCompiler: true,
    scrollRestoration: true,
  },
}

export default withContentlayer(nextConfig)

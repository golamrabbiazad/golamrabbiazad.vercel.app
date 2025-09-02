import { withContentCollections } from "@content-collections/next";
import { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  typedRoutes: true,
  experimental: {
    scrollRestoration: true,
    reactCompiler: true,
  },
}

export default withContentCollections(nextConfig);
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    ppr: true,
    typedRoutes: true,
    reactCompiler: true,
    scrollRestoration: true,
    mdxRs: true,
  },
}

export default nextConfig

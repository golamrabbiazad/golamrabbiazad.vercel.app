import { withContentCollections } from "@content-collections/next";
import createMDX from "@next/mdx";
import { NextConfig } from "next";
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
    rehypePlugins: [],
  },
});

const nextConfig: NextConfig = {
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    formats: ["image/avif", "image/webp"],
  },
  typedRoutes: true,
  experimental: {
    scrollRestoration: true,
    reactCompiler: true,
  },
}

export default withContentCollections(withMDX(nextConfig));
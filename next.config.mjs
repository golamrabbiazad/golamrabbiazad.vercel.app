import { withContentCollections } from "@content-collections/next";
import createMDX from "@next/mdx";
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'


const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
    rehypePlugins: [],
  },
});


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    typedRoutes: true,
    scrollRestoration: true,
    reactCompiler: true,
  },
}

export default withContentCollections(withMDX(nextConfig));
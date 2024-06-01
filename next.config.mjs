import MillionLint from "@million/lint"
import million from "million/compiler"
import { withContentlayer } from "next-contentlayer"

const millionConfig = {
  auto: { rsc: true },
  mute: true,
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

export default million.next(
  MillionLint.next(withContentlayer(nextConfig), millionConfig)
)

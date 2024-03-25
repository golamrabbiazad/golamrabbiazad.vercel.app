import million from "million/compiler"
import { withContentlayer } from "next-contentlayer"

const millionConfig = {
  auto: { rsc: true },
  mute: true,
}

/** @type {import('next').NextConfig} */
const nextConfig = {}

export default million.next(withContentlayer(nextConfig), millionConfig)

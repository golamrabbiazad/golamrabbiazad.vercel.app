const { withContentlayer } = require("next-contentlayer")

module.exports = withContentlayer({
  images: {
    formats: ["image/avif", "image/webp"],
  },
  reactStrictMode: true,
  typescript: {
    // BURNING :fire
    // shut the up to the validation of types check :sad
    // BURNING :fire
    ignoreBuildErrors: true,
  },
})

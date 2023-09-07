const { withContentlayer } = require("next-contentlayer")

module.exports = withContentlayer({
  images: {
    formats: ["image/avif", "image/webp"],
  },
  reactStrictMode: true,
})

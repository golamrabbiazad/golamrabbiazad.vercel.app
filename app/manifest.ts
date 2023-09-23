import { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Golamrabbi Azad",
    short_name: "golamrabbiazad",
    description: "A developer, youtuber, gamer and a bad reader",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    dir: "ltr",
    lang: "en-US",
    orientation: "portrait-primary",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}

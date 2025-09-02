import { metadataConfig } from "@/config/metadata"

export const metadata = {
    ...metadataConfig,
    title: "Blog | Golamrabbi Azad - Senior Software Engineer, An entrepreneur",
    openGraph: {
        ...metadataConfig.openGraph,
        title: "Blog | Golamrabbi Azad - Senior Software Engineer, An entrepreneur",
        url: "https://golamrabbiazad.vercel.app/posts"
    }
}

export default function MdxLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            {children}
        </div>
    )
}
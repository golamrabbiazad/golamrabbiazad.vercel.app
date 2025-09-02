import { metadataConfig } from "@/config/metadata"

export const metadata = {
    ...metadataConfig,
    title: "Blog | Golamrabbi Azad - Senior Software Engineer",
    openGraph: {
        ...metadataConfig.openGraph,
        title: "Blog | Golamrabbi Azad - Senior Software Engineer",
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
import { metadataConfig } from "@/config/metadata"

export const metadata = {
    ...metadataConfig,
    title: "Contact | Golamrabbi Azad - Senior Software Engineer, An entrepreneur",
    openGraph: {
        ...metadataConfig.openGraph,
        title: "Contact | Golamrabbi Azad - Senior Software Engineer, An entrepreneur",
        url: "https://golamrabbiazad.vercel.app/contact"
    }
}

export default async function Contact() {
    return (
        <div className="mx-auto max-w-3xl flex-col justify-center py-12 lg:max-w-3xl">
            <h2 className="text-center text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
                Contact
            </h2>

            <p className="mt-12 text-lg">Contact form comming soon!</p>
        </div>
    )
}

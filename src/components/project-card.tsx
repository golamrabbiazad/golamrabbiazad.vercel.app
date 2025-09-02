import { cn } from "@/utils/helpers"

export default function ProjectCard({
  title,
  description,
  slug,
  gredient,
}: {
  title: string
  description: string
  slug: string
  gredient: string
}) {
  return (
    <a
      className={cn(
        "transition-all hover:scale-[1.01]",
        "h-[150px] w-full rounded-xl bg-linear-to-r p-1",
        gredient
      )}
      href={slug}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex h-full flex-col justify-between rounded-lg bg-white p-4 dark:bg-gray-900">
        <div className="flex flex-col justify-between gap-4">
          <h4 className="w-full text-lg font-semibold text-gray-900 dark:text-gray-100 md:text-lg">
            {title}
          </h4>

          <p className="text-sm">{description}</p>
        </div>
      </div>
    </a>
  )
}

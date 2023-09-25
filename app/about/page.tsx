import Link from "next/link"

export default function About() {
  return (
    <div className="mx-auto mb-16 flex w-full flex-col items-center justify-center">
      <h1 className="mb-12 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
        About Me
      </h1>
      <div className="prose dark:prose-invert mb-8 leading-6">
        <p>
          I&apos;m a seasoned Full-stack Engineer with four years of experience
          in web development. My passion for technology drives me to stay at the
          forefront of the field. In the frontend, I excel in TypeScript
          (ts/tsx), Next.js, Component.astro, Solid.js, and Tailwind CSS
          (tailwind.config.ts), crafting elegant and responsive user interfaces.
          On the backend, I leverage Node.js, Bun.js, Prisma, Java (☕️), Go
          (🐹), Vitest, and Playwright to build robust and scalable server-side
          solutions. Databases are a forte, including MongoDB, PostgreSQL (🐘),
          and PlanetScale. <br /> <br /> My toolbox includes Visual Studio Code,
          IntelliJ IDEA, DataGrip, and Docker, streamlining my development
          workflow. I&apos;m well-versed in Cloudflare, Vercel, and AWS for
          cloud deployments. <br />
          <br /> My career is defined by a dedication to innovation,
          problem-solving, and continuous learning. I&apos;m committed to
          staying ahead in the ever-evolving web development landscape,
          delivering high-quality code efficiently. I look forward to
          contributing my expertise to future projects and embracing the
          exciting advancements in the field.
        </p>
        <h2>Bio</h2>
        <h3>Job Title</h3>
        <p>Golamrabbi Azad, Full-Stack Engineer | MERN Stack</p>
        <h3>Education</h3>
        B.Sc in Computer Science & Engineering
        <p className="-mt-0.5 font-bold">National University of Bangladesh</p>
        <span className="italic">Session: 2017-2018</span>
        <h2>Links</h2>
        <p>Let&apos;s connect.</p>
        <ul>
          <li>
            Twitter:{" "}
            <a
              href="https://twitter.com/golamrabbiazad"
              target="_blank"
              rel="noreferrer"
            >
              @golamrabbiazad
            </a>
          </li>
          <li>
            GitHub:{" "}
            <a
              href="https://github.com/golamrabbiazad"
              target="_blank"
              rel="noreferrer"
            >
              @golamrabbiazad
            </a>
          </li>
          <li>
            Website with Astro:{" "}
            <Link href="https://golamrabbiazad.pages.dev">
              https://golamrabbiazad.pages.dev
            </Link>
          </li>
          <li>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/golamrabbiazad/"
              target="_blank"
              rel="noreferrer"
            >
              https://www.linkedin.com/in/golamrabbiazad
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

import Image from "next/image"
import Link from "next/link"

import Container from "../components/Container"

export default function About() {
  return (
    <Container title="About - Golamrabbi Azad">
      <div className="w-full flex flex-col justify-center items-center mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <div className="mb-8 prose dark:prose-dark leading-6">
          <h2>Links</h2>
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
              Website: <Link href="/">https://golamrabbiazad.vercel.app</Link>
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
          <h2>Bio</h2>
          <h3>Job Title</h3>
          <p>Golamrabbi Azad, Full-Stack Developer | MERN Stack</p>
          <h3>Education</h3>
          B.Sc in Computer Science & Engineering
          <p className="font-bold -mt-0.5">National University of Bangladesh</p>
          <span className="italic">Session: 2017-2018</span>
          <h2>Photo</h2>
          <div className="flex gap-6">
            <Image
              alt="Golamrabbi Azad"
              width={480}
              quality={100}
              height={460}
              className="rounded-md"
              src="/avatar.jpg"
            />
          </div>
        </div>
      </div>
    </Container>
  )
}

import Link from "next/link";
import Image from "next/image";
import Container from "../components/Container";

export default function About() {
  return (
    <Container title="About - Golamrabbi Azad">
      <div className="flex flex-col justify-center items-center max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <div className="mb-8 prose dark:prose-dark leading-6">
          <h2>Links</h2>
          <ul>
            <li>
              Twitter:{" "}
              <a href="https://twitter.com/golamrabbiazad">@golamrabbiazad</a>
            </li>
            <li>
              GitHub:{" "}
              <a href="https://github.com/golamrabbiazad">@golamrabbiazad</a>
            </li>
            <li>
              Website:{" "}
              <Link href="/">
                <a>https://golamrabbiazad.vercel.app</a>
              </Link>
            </li>
            <li>
              LinkedIn:{" "}
              <a href="https://www.linkedin.com/in/golamrabbiazad/">
                https://www.linkedin.com/in/golamrabbiazad
              </a>
            </li>
          </ul>
          <h2>Bio</h2>
          <h3>Job Title</h3>
          <p>Golamrabbi Azad, Full-stack Developer | MERN Stack</p>

          <h3>Education</h3>
          <p className="flex flex-col">
            Golamrabbi Azad is studying Computer Science & Engineering from
            National University of Bangladesh.
            <span className="font-bold italic">Session: 2017-2018</span>
          </p>

          <h2>Photos</h2>
          <div className="flex gap-6">
            <Image
              alt="Golamrabbi Azad"
              width={480}
              quality={100}
              height={460}
              className="rounded-md"
              src="/avatar.jpg"
            ></Image>
            <Image
              alt="Golamrabbi Azad"
              width={400}
              quality={100}
              height={460}
              className="rounded-md"
              src="https://scontent.cdninstagram.com/v/t51.2885-15/278099346_669627207643960_8452307979631279876_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=scontent.cdninstagram.com&_nc_cat=104&_nc_ohc=BhrRu3IyH2UAX_-2jP8&edm=AJBgZrYBAAAA&ccb=7-5&ig_cache_key=MjgxMzU1OTEzNTEzMDgxMjUyNQ%3D%3D.2-ccb7-5&oh=00_AT-9M_YnHvq2N2CLHLQyG8K6ZYKRySvMKUntYgOMZS9tMw&oe=63215238&_nc_sid=78c662&dl=1"
            ></Image>
          </div>
        </div>
      </div>
    </Container>
  );
}

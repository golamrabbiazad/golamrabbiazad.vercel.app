import { ExternalLink } from "@/utils"

export const runtime = "edge"

export default function Work() {
  return (
    <div className="mx-auto mb-32 flex w-full flex-col items-center justify-center">
      <h1 className="mb-12 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
        Work
      </h1>
      {/* company name, location, role joining date, etc. */}
      <div className="flex flex-col justify-center divide-x sm:flex-col md:flex-row xl:flex-row">
        <div className="flex flex-col p-12 ">
          <h2 className="mb-2 text-2xl font-bold">Current Job</h2>
          <p className="text-xl">
            <ExternalLink href="https://www.m4yours.com/" className="font-bold">
              M4yours
            </ExternalLink>
            , <span className="font-medium tracking-tighter">SWE</span>
          </p>
          <p className="text-sm">From Jan, 2024 - Present</p>
          <p className="text-sm">Elephant Road, Bangladesh</p>
        </div>

        <div className="flex flex-col p-12">
          <h2 className="mb-2 text-xl font-bold">Previous Jobs</h2>
          <div className="mb-6 flex flex-col">
            <p className="text-medium">
              <ExternalLink href="https://linkedin.com/" className="font-bold">
                Remote
              </ExternalLink>
              , <span className="font-medium">Core Developer</span>
            </p>
            <p className="text-sm">From April, 2022 - Dec, 2022</p>
            <p className="text-sm">Chicago, USA</p>
          </div>
          <div className="flex flex-col">
            <p className="text-medium">
              <ExternalLink
                href="https://nextsolutionlab.com/"
                className="font-bold"
              >
                Next Solution Lab
              </ExternalLink>
              , <span className="font-medium">Data Annotator</span>
            </p>
            <p className="text-sm">From Feb, 2022 - April, 2022</p>
            <p className="text-sm">Mirpur DOHS, Bangladesh</p>
          </div>
        </div>
        <div className="flex flex-col p-12">
          <h3 className="text-xl font-bold">Education</h3>
          B.Sc in Computer Science & Engineering
          <p className="-mt-0.5 font-bold">National University of Bangladesh</p>
          <span className="italic">Session: 2017-2018</span>
        </div>
      </div>
    </div>
  )
}

import { ExternalLink } from "@/utils"

export const runtime = "edge"

export default function Work() {
  return (
    <div className="mx-auto my-12 max-w-xl flex-col justify-center lg:max-w-2xl">
      <h2 className="text-center text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
        Work Experience
      </h2>
      <div className="max-w-6xl py-16 grid grid-cols-1 gap-5">
        <div className="flex flex-col">
          <h2 className="text-xl font-bold lg:mb-2">Current Job</h2>
          <p>null</p>
          {/* <p className="text-xl">
            <ExternalLink href="https://www.m4yours.com/" className="font-bold">
              M4yours
            </ExternalLink>
            ,<span className="font-medium tracking-tighter"> SWE</span>
          </p>
          <p className="text-sm">From Jan, 2024 - June, 2024 (6 months)</p>

          <p className="text-sm">Elephant Road, Bangladesh</p> */}
        </div>

        <div className="flex flex-col">
          <h2 className="text-xl font-bold lg:mb-2">Previous Jobs</h2>
          <div className="mb-2 flex flex-col">
            <p className="text-medium">
              <ExternalLink
                href="https://www.m4yours.com/"
                className="font-bold"
              >
                M4yours
              </ExternalLink>
              , <span className="font-medium">SWE</span>
            </p>
            <p className="text-sm">From Jan, 2024 - June, 2024 (6 months)</p>
            <p className="text-sm">Elephant Road, Bangladesh</p>
          </div>
          <div className="mb-2 flex flex-col">
            <p className="text-medium">
              <ExternalLink href="https://linkedin.com/" className="font-bold">
                Remote
              </ExternalLink>
              , <span className="font-medium">Software Engineer</span>
            </p>
            <p className="text-sm">From April, 2022 - Dec, 2022 (9 months)</p>
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
            <p className="text-sm">From March, 2022 - April, 2022 (2 months)</p>
            <p className="text-sm">Mirpur DOHS, Bangladesh</p>
          </div>
        </div>
        {/* <div className="flex flex-col lg:pl-8">
          <h4 className="text-xl font-bold lg:mb-2">Education</h4>
          B.Sc in Computer Science & Engineering
          <p className="font-bold">National University of Bangladesh</p>
          <p className="italic">Session: 2017-2018</p>
        </div> */}
      </div>
    </div>
  )
}

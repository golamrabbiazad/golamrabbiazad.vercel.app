import ExternalLink from "@/utils/external-link"

export const runtime = "edge"

export default function Work() {
  return (
    <div className="mx-auto my-12 max-w-xl flex-col justify-center lg:max-w-2xl">
      <h2 className="text-center text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
        Work Experience
      </h2>
      <div className="grid max-w-6xl grid-cols-1 gap-5 py-16 lg:grid-cols-2">
        <div className="flex flex-col">
          <h2 className="text-xl font-bold lg:mb-2">Current Job</h2>
          <p>Freelancing</p>
          {/* <p className="text-lg">
            <ExternalLink href="https://www.m4yours.com/" className="font-bold underline decoration-2 decoration-blue-500 box-decoration-clone underline-offset-4">
              M4yours
            </ExternalLink>
            ,<span className="font-medium tracking-tighter"> Senior SWE</span>
          </p>
          <p className="text-sm">From Oct, 2024 - Nov, 2024 <br />(2 month - Contract)</p>

          <p className="text-sm">Elephant Road, Bangladesh</p> */}
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold">Previous Jobs</h2>

          <div className="mb-2 flex flex-col">
            <p className="text-medium">
              <ExternalLink
                href="https://www.m4yours.com/"
                className="font-bold underline decoration-2 decoration-blue-500 box-decoration-clone underline-offset-4"
              >
                M4yours
              </ExternalLink>
              , <span className="font-medium">Software Engineer</span>
            </p>
            <p className="text-sm">From Jan, 2023 - Nov, 2024 (1 year, 9 months)</p>
            <p className="text-sm">Elephant Road, Bangladesh</p>
          </div>
          <div className="mb-2 flex flex-col">
            <p className="text-medium">
              <ExternalLink href="https://linkedin.com/" className="font-bold underline decoration-2 decoration-blue-500 box-decoration-clone underline-offset-4">
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
                className="font-bold underline decoration-2 decoration-blue-500 box-decoration-clone underline-offset-4"
              >
                Next Solution Lab
              </ExternalLink>
              , <span className="font-medium">Data Annotator</span>
            </p>
            <p className="text-sm">From March, 2022 - April, 2022 (2 months)</p>
            <p className="text-sm">Mirpur DOHS, Bangladesh</p>
          </div>
        </div>
        {/* <div className="flex flex-col py-12">
          <h4 className="text-xl font-bold lg:mb-2">Education</h4>
          B.Sc in Computer Science & Engineering
          <p className="font-bold">National University of Bangladesh</p>
          <p className="italic">Session: 2017-2018</p>
        </div> */}
      </div>
    </div>
  )
}

export const runtime = "edge"

export default function Work() {
  return (
    <div className="mx-auto mb-16 flex w-full flex-col items-center justify-center">
      <h1 className="mb-12 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
        Work
      </h1>
      <div className="prose dark:prose-invert mb-8 leading-6">
        <h3>Job Title</h3>
        <p>Golamrabbi Azad, SWE</p>
        <h3>Education</h3>
        B.Sc in Computer Science & Engineering
        <p className="-mt-0.5 font-bold">National University of Bangladesh</p>
        <span className="italic">Session: 2017-2018</span>
      </div>
    </div>
  )
}

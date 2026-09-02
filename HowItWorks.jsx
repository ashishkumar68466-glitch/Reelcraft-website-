import { steps } from '../data/siteContent.js'

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="border-b border-line bg-void">
      <div className="mx-auto max-w-content px-6 py-20 md:px-10">
        <h2 className="max-w-xl font-display text-3xl font-black leading-tight tracking-tight text-paper sm:text-4xl">
          From raw footage to published clips, in four steps.
        </h2>

        <div className="relative mt-16 grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-6">
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-6 hidden h-px bg-line md:block"
          />
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <div className="relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-full border border-line bg-void">
                <span className="tnum font-display text-sm font-bold text-tally">
                  {step.number}
                </span>
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-paper">{step.title}</h3>
              <p className="mt-2 max-w-[22ch] text-sm leading-relaxed text-ash">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { finalCta } from '../data/siteContent.js'

export default function FinalCTA() {
  return (
    <section className="bg-tally">
      <div className="mx-auto max-w-content px-6 py-20 text-center md:px-10">
        <h2 className="mx-auto max-w-2xl font-display text-3xl font-black leading-tight tracking-tight text-paper sm:text-4xl">
          {finalCta.headline}
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-paper/85">
          {finalCta.sub}
        </p>
        <a
          href="#pricing"
          className="mt-8 inline-block rounded-sm bg-paper px-7 py-3.5 text-sm font-semibold text-ink transition-opacity hover:opacity-90"
        >
          {finalCta.cta}
        </a>
      </div>
    </section>
  )
}

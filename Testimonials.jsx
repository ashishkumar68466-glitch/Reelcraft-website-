import { Quote } from 'lucide-react'
import { testimonials } from '../data/siteContent.js'

export default function Testimonials() {
  return (
    <section className="border-b border-line bg-void">
      <div className="mx-auto max-w-content px-6 py-20 md:px-10">
        <h2 className="max-w-xl font-display text-3xl font-black leading-tight tracking-tight text-paper sm:text-4xl">
          What creators say about working with us.
        </h2>
        <p className="mt-3 text-sm text-smoke">
          Demo testimonials for layout purposes — replace with real client feedback.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="flex flex-col rounded-lg border border-line p-7">
              <Quote className="h-5 w-5 text-tally" />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ash">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 border-t border-line pt-4">
                <p className="text-sm font-semibold text-paper">{t.name}</p>
                <p className="text-xs text-smoke">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

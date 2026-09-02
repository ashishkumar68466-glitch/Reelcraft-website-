import { Icon } from './icons.jsx'
import { whyChooseUs } from '../data/siteContent.js'

export default function WhyChooseUs() {
  return (
    <section className="border-b border-line-light bg-paper">
      <div className="mx-auto max-w-content px-6 py-20 md:px-10">
        <h2 className="max-w-lg font-display text-3xl font-black leading-tight tracking-tight text-ink sm:text-4xl">
          {whyChooseUs.headline}
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2">
          {whyChooseUs.items.map((item) => (
            <div key={item.title} className="flex gap-4">
              <Icon name={item.icon} className="mt-0.5 h-5 w-5 flex-shrink-0 text-tally" />
              <div>
                <h3 className="font-display text-base font-bold text-ink">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-smoke">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

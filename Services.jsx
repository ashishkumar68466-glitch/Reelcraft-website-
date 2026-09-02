import { Icon } from './icons.jsx'
import { services } from '../data/siteContent.js'

export default function Services() {
  return (
    <section id="services" className="border-b border-line bg-void">
      <div className="mx-auto max-w-content px-6 py-20 md:px-10">
        <h2 className="max-w-xl font-display text-3xl font-black leading-tight tracking-tight text-paper sm:text-4xl">
          Everything you need to turn long-form content into short-form growth.
        </h2>

        <div className="mt-14 grid grid-cols-1 border-t border-line sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group border-b border-r-0 border-line p-8 transition-colors hover:bg-white/[0.02] sm:border-r lg:border-r"
            >
              <div className="border-l-2 border-transparent pl-4 transition-colors group-hover:border-tally">
                <Icon name={service.icon} className="h-6 w-6 text-tally" />
                <h3 className="mt-5 font-display text-lg font-bold text-paper">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ash">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

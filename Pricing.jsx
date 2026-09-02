import { Check } from 'lucide-react'
import { agency, pricing } from '../data/siteContent.js'

export default function Pricing() {
  return (
    <section id="pricing" className="border-b border-line bg-void">
      <div className="mx-auto max-w-content px-6 py-20 md:px-10">
        <h2 className="max-w-xl font-display text-3xl font-black leading-tight tracking-tight text-paper sm:text-4xl">
          Simple pricing, built around how much content you need.
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {pricing.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col rounded-lg border p-8 ${
                plan.highlighted ? 'border-tally bg-white/[0.03]' : 'border-line'
              }`}
            >
              {plan.tag && (
                <span className="mb-4 inline-block w-fit rounded-sm bg-tally px-3 py-1 text-xs font-semibold text-paper">
                  {plan.tag}
                </span>
              )}
              <h3 className="font-display text-lg font-bold text-paper">{plan.name}</h3>
              <p className="mt-4 flex items-baseline gap-1">
                <span className="tnum font-display text-4xl font-black text-paper">
                  ${plan.price}
                </span>
                <span className="text-sm text-ash">{plan.period}</span>
              </p>

              <ul className="mt-6 flex flex-1 flex-col gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-ash">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-tally" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={`mailto:${agency.email}?subject=${encodeURIComponent(plan.name + ' plan')}`}
                className={`mt-8 rounded-sm px-5 py-3 text-center text-sm font-semibold transition-colors ${
                  plan.highlighted
                    ? 'bg-tally text-paper hover:bg-tally-dark'
                    : 'border border-line text-paper hover:border-ash'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

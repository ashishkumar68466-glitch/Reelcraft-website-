import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { faq } from '../data/siteContent.js'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="border-b border-line bg-void">
      <div className="mx-auto max-w-content px-6 py-20 md:px-10">
        <h2 className="max-w-xl font-display text-3xl font-black leading-tight tracking-tight text-paper sm:text-4xl">
          Questions creators ask before starting.
        </h2>

        <div className="mt-10 divide-y divide-line border-t border-line">
          {faq.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div key={item.q}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-display text-base font-bold text-paper">{item.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 text-ash transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-hidden={!isOpen}
                  className={`grid overflow-hidden transition-all duration-300 ${
                    isOpen ? 'grid-rows-[1fr] pb-5 opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <p className="max-w-2xl overflow-hidden text-sm leading-relaxed text-ash">
                    {item.a}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

import { beforeAfter } from '../data/siteContent.js'

export default function BeforeAfter() {
  return (
    <section className="border-b border-line bg-void">
      <div className="mx-auto max-w-content px-6 py-20 md:px-10">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.14em] text-smoke">
              {beforeAfter.before.label}
            </span>
            <h3 className="mt-3 font-display text-2xl font-bold text-paper">
              {beforeAfter.before.title}
            </h3>
            <p className="mt-2 max-w-xs text-sm text-ash">{beforeAfter.before.description}</p>

            <div className="mt-8 h-14 w-full rounded-md border border-line bg-gradient-to-r from-[#232220] to-[#141413]" />
          </div>

          <div>
            <span className="text-xs uppercase tracking-[0.14em] text-tally">
              {beforeAfter.after.label}
            </span>
            <h3 className="mt-3 font-display text-2xl font-bold text-paper">
              {beforeAfter.after.title}
            </h3>
            <p className="mt-2 max-w-xs text-sm text-ash">{beforeAfter.after.description}</p>

            <div className="mt-8 grid grid-cols-6 gap-2 sm:grid-cols-8">
              {Array.from({ length: 20 }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-[9/16] rounded-sm border border-line"
                  style={{
                    backgroundColor: i % 5 === 0 ? '#D7263D22' : '#1B1A18',
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

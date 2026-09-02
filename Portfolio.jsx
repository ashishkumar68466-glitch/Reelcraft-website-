import { Play } from 'lucide-react'
import { portfolio } from '../data/siteContent.js'

export default function Portfolio() {
  return (
    <section id="portfolio" className="border-b border-line bg-void">
      <div className="mx-auto max-w-content px-6 py-20 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="max-w-xl font-display text-3xl font-black leading-tight tracking-tight text-paper sm:text-4xl">
            A look at the kind of clips we cut.
          </h2>
        </div>
        <p className="mt-3 text-sm text-smoke">
          Demo content shown below — swap in thumbnails and links from your own client work.
        </p>

        <div className="no-scrollbar mt-10 flex gap-5 overflow-x-auto pb-4 sm:grid sm:grid-cols-2 sm:overflow-visible lg:grid-cols-3">
          {portfolio.map((clip) => (
            <article
              key={clip.hook}
              className="w-64 flex-shrink-0 sm:w-auto"
            >
              <div
                className="group relative flex aspect-[9/16] flex-col justify-between overflow-hidden rounded-lg border border-line p-4"
                style={{ backgroundImage: `linear-gradient(165deg, ${clip.from}, ${clip.to})` }}
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-sm bg-void/60 px-2 py-1 text-[11px] font-semibold text-paper">
                    {clip.platform}
                  </span>
                  <span className="tnum text-[11px] text-paper/80">{clip.views}</span>
                </div>

                <button
                  type="button"
                  aria-label={`Play example: ${clip.hook}`}
                  className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-paper/90 transition-transform group-hover:scale-105"
                >
                  <Play className="ml-0.5 h-4 w-4 fill-void text-void" />
                </button>

                <p className="text-sm font-medium leading-snug text-paper">{clip.hook}</p>
              </div>
              <p className="mt-3 text-xs text-smoke">{clip.context}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

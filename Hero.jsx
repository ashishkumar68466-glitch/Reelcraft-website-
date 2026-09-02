import { Play } from 'lucide-react'
import { hero } from '../data/siteContent.js'

const clips = [
  { platform: 'Reels', tag: '0:42', from: '#3A2E2C', to: '#161514' },
  { platform: 'Shorts', tag: '0:29', from: '#2C2E3A', to: '#141416' },
  { platform: 'TikTok', tag: '0:51', from: '#333026', to: '#161513' },
]

export default function Hero() {
  return (
    <section id="home" className="border-b border-line bg-void">
      <div className="mx-auto grid max-w-content gap-16 px-6 py-16 md:grid-cols-2 md:items-center md:px-10 md:py-24">
        <div>
          <h1 className="max-w-xl font-display text-4xl font-black leading-[1.05] tracking-tight text-paper sm:text-5xl lg:text-[3.4rem]">
            {hero.headline}
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-ash">{hero.sub}</p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#pricing"
              className="rounded-sm bg-tally px-6 py-3.5 text-sm font-semibold text-paper transition-colors hover:bg-tally-dark"
            >
              {hero.ctaPrimary}
            </a>
            <a
              href="#portfolio"
              className="rounded-sm border border-line px-6 py-3.5 text-sm font-semibold text-paper transition-colors hover:border-ash"
            >
              {hero.ctaSecondary}
            </a>
          </div>

          <p className="mt-8 text-xs uppercase tracking-[0.14em] text-smoke">
            {hero.trustLine}
          </p>
        </div>

        <div aria-hidden="true" className="relative">
          {/* Timeline track — represents the single long-form source video */}
          <div className="relative mb-10 h-1.5 w-full overflow-hidden rounded-full bg-line">
            <span className="absolute inset-y-0 left-0 w-full origin-left scale-x-0 animate-drawline rounded-full bg-smoke" />
            <span className="absolute top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-tally shadow-[0_0_0_4px_rgba(215,38,61,0.2)] animate-playhead" />
          </div>

          {/* Clips branching off the timeline — the transformation payoff */}
          <div className="grid grid-cols-3 gap-4">
            {clips.map((clip, i) => (
              <div
                key={clip.platform}
                style={{ animationDelay: `${0.25 + i * 0.18}s` }}
                className="animate-popIn opacity-0"
              >
                <div
                  className="flex aspect-[9/16] flex-col justify-between rounded-lg border border-line p-3"
                  style={{
                    backgroundImage: `linear-gradient(160deg, ${clip.from}, ${clip.to})`,
                  }}
                >
                  <span className="self-start rounded-sm bg-void/60 px-2 py-1 text-[10px] font-semibold text-paper">
                    {clip.platform}
                  </span>
                  <div className="flex flex-col items-center gap-2">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-paper/90">
                      <Play className="ml-0.5 h-3.5 w-3.5 fill-void text-void" />
                    </span>
                    <span className="tnum text-[10px] text-ash">{clip.tag}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

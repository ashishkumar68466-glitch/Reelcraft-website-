import { useEffect, useRef, useState } from 'react'
import { stats } from '../data/siteContent.js'

function Counter({ value, suffix }) {
  const ref = useRef(null)
  const [display, setDisplay] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 900
          const start = performance.now()
          const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setDisplay(Math.round(value * eased))
            if (progress < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.4 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [value])

  return (
    <span ref={ref} className="tnum font-display text-4xl font-black text-ink sm:text-5xl">
      {display}
      {suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section className="border-b border-line-light bg-paper">
      <div className="mx-auto max-w-content px-6 py-14 md:px-10">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-6">
          {stats.map((stat) => (
            <div key={stat.label}>
              <Counter value={stat.value} suffix={stat.suffix} />
              <p className="mt-2 text-sm text-smoke">{stat.label}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-xs text-smoke/80">
          Example figures shown for illustration — replace with your own delivery numbers.
        </p>
      </div>
    </section>
  )
}

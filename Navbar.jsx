import { useEffect, useState } from 'react'
import { Icon } from './icons.jsx'
import { agency, nav } from '../data/siteContent.js'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled ? 'bg-void/90 border-line backdrop-blur' : 'bg-void/0 border-transparent'
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-content items-center justify-between px-6 py-4 md:px-10"
      >
        <a href="#home" className="font-display text-xl font-extrabold tracking-tight text-paper">
          {agency.name}
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm text-ash transition-colors hover:text-paper"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#pricing"
          className="hidden rounded-sm bg-tally px-5 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-tally-dark md:inline-block"
        >
          Get started
        </a>

        <button
          type="button"
          className="inline-flex items-center justify-center p-2 text-paper md:hidden"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? 'x' : 'menu'} className="h-6 w-6" />
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-void px-6 pb-6 md:hidden">
          <ul className="flex flex-col gap-4 pt-4">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block text-base text-ash hover:text-paper"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#pricing"
            onClick={() => setOpen(false)}
            className="mt-6 block rounded-sm bg-tally px-5 py-3 text-center text-sm font-semibold text-paper"
          >
            Get started
          </a>
        </div>
      )}
    </header>
  )
}

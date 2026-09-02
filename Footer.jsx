import { Icon } from './icons.jsx'
import { agency, nav, services } from '../data/siteContent.js'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-void">
      <div className="mx-auto max-w-content px-6 py-16 md:px-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-lg font-extrabold text-paper">{agency.name}</p>
            <p className="mt-3 max-w-[26ch] text-sm leading-relaxed text-ash">
              {agency.shortDescription}
            </p>
            <div className="mt-5 flex items-center gap-4">
              <a href={agency.socials.instagram} aria-label="Instagram" className="text-ash hover:text-paper">
                <Icon name="instagram" className="h-5 w-5" />
              </a>
              <a href={agency.socials.youtube} aria-label="YouTube" className="text-ash hover:text-paper">
                <Icon name="youtube" className="h-5 w-5" />
              </a>
              <a href={agency.socials.tiktok} aria-label="TikTok" className="text-ash hover:text-paper">
                <Icon name="music2" className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-paper">Navigation</p>
            <ul className="mt-4 flex flex-col gap-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-sm text-ash hover:text-paper">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-paper">Services</p>
            <ul className="mt-4 flex flex-col gap-3">
              {services.slice(0, 4).map((service) => (
                <li key={service.title} className="text-sm text-ash">
                  {service.title}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-paper">Get in touch</p>
            <a
              href={`mailto:${agency.email}`}
              className="mt-4 inline-block text-sm text-ash hover:text-paper"
            >
              {agency.email}
            </a>
          </div>
        </div>

        <div className="mt-14 border-t border-line pt-6">
          <p className="text-xs text-smoke">
            © {year} {agency.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

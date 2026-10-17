import { Github, Linkedin, Instagram } from 'lucide-react'
import { nav, socials } from '../data/siteData'

export default function Footer() {
  const handleClick = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <a href="#home" onClick={(e) => handleClick(e, '#home')} className="font-mono text-sm">
          Pol Jesvin Tanag
        </a>

        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-mono text-[11px] uppercase tracking-widest text-ash">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className="hover:text-ink transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-8 w-8 items-center justify-center border border-line hover:border-ink transition-colors"
          >
            <Github size={14} />
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-8 w-8 items-center justify-center border border-line hover:border-ink transition-colors"
          >
            <Linkedin size={14} />
          </a>
          <a
            href={socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex h-8 w-8 items-center justify-center border border-line hover:border-ink transition-colors"
          >
            <Instagram size={14} />
          </a>
          <a
            href={socials.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="flex h-8 w-8 items-center justify-center border border-line hover:border-ink transition-colors font-mono text-[10px]"
          >
            TT
          </a>
        </div>
      </div>

      <p className="mt-8 text-center font-mono text-[10px] uppercase tracking-widest text-ash">
        &copy; 2026 Pol Jesvin Tanag. All rights reserved.
      </p>
    </footer>
  )
}

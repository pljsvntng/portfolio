import { useEffect, useState } from 'react'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { nav } from '../data/siteData'
import useActiveSection from '../hooks/useActiveSection'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
  )
  const ids = nav.map((n) => n.href.replace('#', ''))
  const active = useActiveSection(ids)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  const handleClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 pt-4">
        <div className="flex items-center justify-between border border-line bg-paper/90 backdrop-blur-sm px-4 sm:px-6 py-3">
          <a
            href="#home"
            onClick={(e) => handleClick(e, '#home')}
            className="flex items-center gap-2 font-mono text-sm tracking-tight"
          >
            <span className="flex h-7 w-7 items-center justify-center border border-ink text-[11px] font-medium">
              PJT
            </span>
            <span className="hidden sm:inline text-ink">Pol Jesvin Tanag</span>
          </a>

          <nav className="hidden md:flex items-center gap-1 font-mono text-[11px] tracking-widest">
            {nav.map((item) => {
              const id = item.href.replace('#', '')
              const isActive = active === id
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  aria-current={isActive ? 'true' : undefined}
                  className={`px-3 py-2 uppercase transition-colors ${
                    isActive ? 'text-ink' : 'text-ash hover:text-ink'
                  }`}
                >
                  {item.label}
                </a>
              )
            })}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setDark((d) => !d)}
              aria-label="Toggle theme"
              aria-pressed={dark}
              className="hidden sm:flex h-8 w-8 items-center justify-center border border-line hover:border-ink transition-colors"
            >
              {dark ? <Sun size={14} /> : <Moon size={14} />}
            </button>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              className="flex md:hidden h-8 w-8 items-center justify-center border border-line"
            >
              {open ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>

        {open && (
          <nav className="md:hidden mt-2 border border-line bg-paper font-mono text-xs uppercase tracking-widest">
            {nav.map((item) => {
              const id = item.href.replace('#', '')
              const isActive = active === id
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className={`block px-5 py-3 border-b border-line last:border-b-0 ${
                    isActive ? 'text-ink bg-line/30' : 'text-ash'
                  }`}
                >
                  {item.label}
                </a>
              )
            })}
          </nav>
        )}
      </div>
    </header>
  )
}

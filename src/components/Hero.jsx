import { Mail, Linkedin, Github, ArrowDown } from 'lucide-react'
import { stats, socials } from '../data/siteData'

export default function Hero() {
  const handleProjects = (e) => {
    e.preventDefault()
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="pt-32 sm:pt-40 pb-16 sm:pb-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Left: copy */}
          <div className="lg:col-span-7">
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-ash mb-4">
              Hi, I&rsquo;m
            </p>
            <h1 className="font-display text-clamp1 leading-[0.95] tracking-tight">
              Code by <span className="italic font-normal">JesDev</span>
            </h1>
            <p className="mt-4 font-mono text-sm sm:text-base tracking-wide text-ash uppercase">
              Fullstack Developer<br />&amp; UI/UX Designer
            </p>

            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-ash">
              I build exceptional, high-performing digital experiences, clean
              web interfaces, and robust backend systems with modern
              technologies.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                onClick={handleProjects}
                className="inline-flex items-center gap-2 bg-ink text-paper px-5 py-3 text-sm font-medium hover:opacity-85 transition-opacity"
              >
                View Projects
              </a>
              <a
                href="/assets/dev-cruz-cv.pdf"
                download
                className="inline-flex items-center gap-2 border border-ink px-5 py-3 text-sm font-medium hover:bg-ink hover:text-paper transition-colors"
              >
                Download CV
              </a>
            </div>

            <dl className="mt-14 grid grid-cols-3 max-w-md border-t border-line pt-6">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className={`pr-4 ${i > 0 ? 'border-l border-line pl-4' : ''}`}
                >
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="font-display text-2xl sm:text-3xl tabular">{s.value}</dd>
                  <dd className="mt-1 font-mono text-[10px] uppercase tracking-widest text-ash leading-tight">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Right: framed image */}
          <div className="lg:col-span-5">
            <div className="frame-corners border border-line p-2">
              <div className="aspect-[4/5] bg-line/40 overflow-hidden">
                <img
                  src="/assets/pol.jpg"
                  alt="Portrait of Pol Jesvin Tanag at a workstation"
                  className="h-full w-full object-cover grayscale contrast-125"
                  loading="eager"
                />
              </div>
            </div>

            <div className="mt-6">
              <p className="font-mono text-[10px] uppercase tracking-widest text-ash mb-3">
                Let&rsquo;s Connect
              </p>
              <div className="flex items-center gap-2">
                <a
                  href={socials.email}
                  aria-label="Email Pol Jesvin Tanag"
                  className="flex h-10 w-10 items-center justify-center border border-line hover:border-ink transition-colors"
                >
                  <Mail size={16} />
                </a>
                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Pol Jesvin Tanag on LinkedIn"
                  className="flex h-10 w-10 items-center justify-center border border-line hover:border-ink transition-colors"
                >
                  <Linkedin size={16} />
                </a>
                <a
                  href={socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Pol Jesvin Tanag on GitHub"
                  className="flex h-10 w-10 items-center justify-center border border-line hover:border-ink transition-colors"
                >
                  <Github size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault()
            document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
          }}
          className="hidden sm:flex items-center gap-2 mt-16 font-mono text-[10px] uppercase tracking-widest text-ash hover:text-ink transition-colors"
        >
          <ArrowDown size={12} /> Scroll
        </a>
      </div>
    </section>
  )
}

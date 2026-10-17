import { useState } from 'react'
import { skillCategories } from '../data/siteData'
import useReveal from '../hooks/useReveal'

export default function Expertise() {
  const ref = useReveal()
  const [activeId, setActiveId] = useState(skillCategories[0].id)
  const active = skillCategories.find((c) => c.id === activeId)

  return (
    <section id="skills" className="py-20 sm:py-28 border-t border-line">
      <div ref={ref} className="reveal mx-auto max-w-6xl px-5 sm:px-8">
        <h2 className="font-display text-3xl sm:text-4xl mb-12">My Expertise</h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Category nav */}
          <div className="lg:col-span-3">
            <div
              role="tablist"
              aria-orientation="vertical"
              className="flex lg:flex-col gap-1 overflow-x-auto lg:overflow-visible -mx-5 px-5 lg:mx-0 lg:px-0 pb-2 lg:pb-0"
            >
              {skillCategories.map((cat) => (
                <button
                  key={cat.id}
                  role="tab"
                  aria-selected={activeId === cat.id}
                  onClick={() => setActiveId(cat.id)}
                  className={`shrink-0 text-left px-4 py-3 border font-mono text-xs uppercase tracking-widest transition-colors whitespace-nowrap lg:whitespace-normal ${
                    activeId === cat.id
                      ? 'border-ink bg-ink text-paper'
                      : 'border-line text-ash hover:border-ink hover:text-ink'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Panel */}
          <div className="lg:col-span-9">
            <div className="border border-line">
              <div className="flex items-center gap-4 border-b border-line px-4 py-3">
                <div className="flex items-center gap-1.5" aria-hidden="true">
                  <span className="h-2 w-2 rounded-full bg-line" />
                  <span className="h-2 w-2 rounded-full bg-line" />
                  <span className="h-2 w-2 rounded-full bg-line" />
                </div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-ash">
                  Expertise / Tech Stack &mdash; {active.label}
                </p>
              </div>

              <div
                role="tabpanel"
                className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-5"
              >
                {active.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 border border-line px-3 py-3 bg-paper"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center border border-line font-mono text-[11px]">
                      {item.slice(0, 2).toUpperCase()}
                    </span>
                    <span className="text-sm truncate">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

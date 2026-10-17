import { useState, useId } from 'react'
import { Plus } from 'lucide-react'

export default function ServiceCard({ service }) {
  const [open, setOpen] = useState(false)
  const panelId = useId()

  return (
    <div className="border border-line p-6 sm:p-7">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={panelId}
        className="w-full text-left group"
      >
        <div className="flex items-start justify-between">
          <span className="font-mono text-xs text-ash">{service.number}</span>
          <span
            className={`flex h-7 w-7 shrink-0 items-center justify-center border border-line transition-transform duration-300 ${
              open ? 'rotate-45' : ''
            }`}
          >
            <Plus size={13} />
          </span>
        </div>

        <p className="mt-6 font-mono text-[10px] uppercase tracking-widest text-ash">
          {service.label}
        </p>
        <h3 className="mt-2 font-display text-xl sm:text-2xl leading-tight">
          {service.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-ash">
          {service.description}
        </p>

        <span className="mt-5 inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-wide text-ink">
          {open ? 'Hide details' : 'Click to view details'} <span aria-hidden="true">&rarr;</span>
        </span>
      </button>

      <div
        id={panelId}
        className={`grid transition-all duration-300 ease-out ${
          open ? 'grid-rows-[1fr] opacity-100 mt-5' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <ul className="border-t border-line pt-4 space-y-2">
            {service.details.map((d) => (
              <li key={d} className="text-sm text-ash leading-relaxed pl-4 relative">
                <span className="absolute left-0 top-2 h-1 w-1 bg-ink" aria-hidden="true" />
                {d}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

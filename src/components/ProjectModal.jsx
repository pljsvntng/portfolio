import { useEffect, useRef } from 'react'
import { X, Github, ExternalLink } from 'lucide-react'
import { projectImages } from './ProjectCard'

export default function ProjectModal({ project, onClose }) {
  const closeRef = useRef(null)
  const dialogRef = useRef(null)

  useEffect(() => {
    closeRef.current?.focus()
    document.body.style.overflow = 'hidden'

    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'Tab') {
        const focusable = dialogRef.current?.querySelectorAll(
          'a[href], button:not([disabled])'
        )
        if (!focusable || focusable.length === 0) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [onClose])

  if (!project) return null

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-6"
      role="presentation"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="absolute inset-0 bg-ink/60 animate-[fadeIn_0.2s_ease]" aria-hidden="true" />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className="relative w-full sm:max-w-2xl max-h-[92vh] overflow-y-auto bg-paper border border-line animate-[slideUp_0.25s_ease]"
      >
        <div className="flex items-center gap-4 border-b border-line px-4 py-3 sticky top-0 bg-paper z-10">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="h-2 w-2 rounded-full bg-line" />
            <span className="h-2 w-2 rounded-full bg-line" />
            <span className="h-2 w-2 rounded-full bg-line" />
          </div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-ash flex-1 truncate">
            Project / {project.title}
          </p>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="flex h-8 w-8 items-center justify-center border border-line hover:border-ink transition-colors"
          >
            <X size={14} />
          </button>
        </div>

        <div className="aspect-[16/9] bg-line/40 overflow-hidden">
          <img
            src={projectImages[project.id]}
            alt={`${project.title} preview`}
            className="h-full w-full object-cover grayscale contrast-125"
          />
        </div>

        <div className="p-6 sm:p-8">
          <p className="font-mono text-[10px] uppercase tracking-widest text-ash mb-2">
            {project.category}
          </p>
          <h3 id="project-modal-title" className="font-display text-2xl sm:text-3xl mb-4">
            {project.title}
          </h3>
          <p className="text-sm leading-relaxed text-ash mb-6">{project.description}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-mono text-[10px] uppercase tracking-widest text-ash mb-2">
                Problem
              </h4>
              <p className="text-sm leading-relaxed">{project.problem}</p>
            </div>
            <div>
              <h4 className="font-mono text-[10px] uppercase tracking-widest text-ash mb-2">
                Solution
              </h4>
              <p className="text-sm leading-relaxed">{project.solution}</p>
            </div>
          </div>

          <h4 className="font-mono text-[10px] uppercase tracking-widest text-ash mb-2">
            Features
          </h4>
          <ul className="mb-6 space-y-1.5">
            {project.features.map((f) => (
              <li key={f} className="text-sm leading-relaxed pl-4 relative">
                <span className="absolute left-0 top-2 h-1 w-1 bg-ink" aria-hidden="true" />
                {f}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-1.5 mb-8">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="font-mono text-[9px] uppercase tracking-wide border border-line px-2 py-1 text-ash"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 border-t border-line pt-6">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-ink px-4 py-2.5 text-sm font-medium hover:bg-ink hover:text-paper transition-colors"
            >
              <Github size={14} /> View Code
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-ink text-paper px-4 py-2.5 text-sm font-medium hover:opacity-85 transition-opacity"
              >
                <ExternalLink size={14} /> Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

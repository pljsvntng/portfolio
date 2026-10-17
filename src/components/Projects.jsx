import { useState } from 'react'
import { projects } from '../data/siteData'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'
import useReveal from '../hooks/useReveal'

export default function Projects() {
  const ref = useReveal()
  const [selected, setSelected] = useState(null)

  return (
    <section id="projects" className="py-20 sm:py-28 border-t border-line">
      <div ref={ref} className="reveal mx-auto max-w-6xl px-5 sm:px-8">
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-ash mb-3">
          Sample Projects
        </p>
        <h2 className="font-display text-3xl sm:text-4xl mb-12">Selected Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} onOpen={setSelected} />
          ))}
        </div>
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  )
}

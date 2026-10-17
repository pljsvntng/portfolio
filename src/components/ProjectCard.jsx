const images = {
  'student-management-portal':
    '/public/projects/Student-Portal.jpg',
  'virtual-study-group':
    '/public/projects/Virtual-Study-Group.jpg',
  'quiz-flashcard-app': 
    '/public/projects/PoliCard.jpg',
  'healthcare-website':
    '/public/projects/UB-Health-Center.jpg',
  'photobooth-website':
    '/public/projects/Photobooth.jpg',
  'java-quiz-game':
    '/public/projects/Java-Quest.jpg',
  'bottle-royale':
    '/public/projects/Bottle-Royale.jpg',
}

export default function ProjectCard({ project, onOpen }) {
  return (
    <button
      type="button"
      onClick={() => onOpen(project)}
      className="group text-left border border-line overflow-hidden bg-paper flex flex-col"
    >
      <div className="aspect-[4/3] overflow-hidden bg-line/40">
        <img
          src={images[project.id]}
          alt={`${project.title} preview`}
          className="h-full w-full object-cover grayscale contrast-125 transition-transform duration-500 group-hover:scale-[1.02]"
          loading="lazy"
        />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <p className="font-mono text-[10px] uppercase tracking-widest text-ash mb-2">
          {project.category}
        </p>
        <h3 className="font-display text-lg leading-snug">{project.title}</h3>
        <p className="mt-2 text-sm text-ash leading-relaxed line-clamp-3">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 3).map((t) => (
            <span
              key={t}
              className="font-mono text-[9px] uppercase tracking-wide border border-line px-2 py-1 text-ash"
            >
              {t}
            </span>
          ))}
        </div>
        <span className="mt-5 inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-wide text-ink">
          View Project <span aria-hidden="true">&rarr;</span>
        </span>
      </div>
    </button>
  )
}

export { images as projectImages }

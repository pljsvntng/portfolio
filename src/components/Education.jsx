import { education } from '../data/siteData'
import useReveal from '../hooks/useReveal'

export default function Education() {
  const ref = useReveal()

  const rows = [
    { label: 'Degree', value: education.degree },
    { label: 'Focus', value: education.focus },
    { label: 'Status', value: education.status },
    { label: 'School', value: education.school },
  ]

  return (
    <section id="about" className="py-20 sm:py-28 border-t border-line">
      <div ref={ref} className="reveal mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          <div className="lg:col-span-7">
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-ash mb-3">
              {education.fileLabel}
            </p>
            <h2 className="font-display text-3xl sm:text-4xl mb-5">
              {education.heading}
            </h2>
            <p className="max-w-lg text-[15px] leading-relaxed text-ash mb-8">
              {education.description}
            </p>

            <dl className="border-t border-line">
              {rows.map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-3 gap-4 py-4 border-b border-line"
                >
                  <dt className="font-mono text-[10px] uppercase tracking-widest text-ash pt-0.5">
                    {row.label}
                  </dt>
                  <dd className="col-span-2 text-sm sm:text-base">{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-5">
            <div className="frame-corners border border-line p-2">
              <div className="aspect-[4/3] bg-line/40 overflow-hidden">
                <img
                  src="/public/assets/cvsugrounds.jpeg"
                  alt="Portrait of Dev Cruz at a workstation"
                  className="h-full w-full object-cover grayscale contrast-125"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

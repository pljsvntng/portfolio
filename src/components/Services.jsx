import { services } from '../data/siteData'
import ServiceCard from './ServiceCard'
import useReveal from '../hooks/useReveal'

export default function Services() {
  const ref = useReveal()

  return (
    <section id="services" className="py-20 sm:py-28 border-t border-line">
      <div ref={ref} className="reveal mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-ash mb-3">
              Services Offer
            </p>
            <h2 className="font-display text-3xl sm:text-4xl">What I Do</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {services.map((service) => (
            <ServiceCard key={service.number} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}

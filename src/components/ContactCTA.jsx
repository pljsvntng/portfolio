import { socials } from '../data/siteData'
import useReveal from '../hooks/useReveal'

export default function ContactCTA() {
  const ref = useReveal()

  return (
    <section className="py-24 sm:py-32 border-t border-line">
      <div ref={ref} className="reveal mx-auto max-w-6xl px-5 sm:px-8 text-center">
        <div className="inline-flex items-center gap-2 border border-line px-4 py-1.5 mb-8 font-mono text-[10px] uppercase tracking-widest text-ash">
          <span className="h-1.5 w-1.5 bg-rust rounded-full" aria-hidden="true" />
          Available for select opportunities
        </div>

        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.02] max-w-3xl mx-auto">
          Let&rsquo;s Build Together.
        </h2>

        <p className="mt-6 max-w-lg mx-auto text-[15px] leading-relaxed text-ash">
          Crafting performant, accessible, and user-centric web applications
          from concept to code. Always open to interesting conversations and
          ideas.
        </p>

        <a
          href={socials.email}
          className="mt-10 inline-flex items-center gap-2 bg-ink text-paper px-7 py-3.5 text-sm font-medium hover:opacity-85 transition-opacity"
        >
          Get in Touch <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </section>
  )
}

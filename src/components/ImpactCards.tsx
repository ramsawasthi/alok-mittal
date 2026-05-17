import { Reveal } from './Reveal'

const cards = [
  {
    title: 'Builder',
    body: 'Created and scaled meaningful ventures.',
  },
  {
    title: 'Mentor',
    body: 'Helped shape founders and teams.',
  },
  {
    title: 'Investor',
    body: 'Backed ideas, people, and courage.',
  },
  {
    title: 'Institution Creator',
    body: 'Contributed to platforms that outlast individuals.',
  },
] as const

export function ImpactCards() {
  return (
    <section
      id="impact"
      className="scroll-mt-6 border-t border-white/[0.06] bg-ink px-6 py-24 md:py-28"
      aria-labelledby="impact-heading"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2
            id="impact-heading"
            className="text-center font-display text-3xl font-medium text-mist md:text-4xl"
          >
            Impact, in four quiet truths
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-center text-sm text-slate-400">
            The work shows up in companies — and in the people who carry the lessons
            forward.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:gap-6">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={0.06 * i}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-slate-deep/40 to-navy/30 p-8 shadow-[0_0_0_1px_rgba(212,168,83,0.06)_inset] transition hover:border-gold/25 hover:shadow-[0_0_60px_-24px_rgba(212,168,83,0.35)]">
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold/5 blur-2xl transition group-hover:bg-gold/10" />
                <h3 className="font-display text-2xl font-medium text-amber-50">
                  {c.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400 md:text-[15px]">
                  {c.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

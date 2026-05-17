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
      className="scroll-mt-4 border border-[#c5cad3] bg-white px-3 py-8 shadow-sm sm:px-5 sm:py-10"
      aria-labelledby="impact-heading"
    >
      <div className="mx-auto max-w-6xl font-sans">
        <Reveal>
          <h2
            id="impact-heading"
            className="text-center text-2xl font-bold text-[#cc0000] sm:text-3xl"
          >
            Impact
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-center text-sm text-[#6b7280]">
            In four quiet truths — the work shows up in companies and in people.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:gap-5">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={0.06 * i}>
              <article className="h-full rounded-md border border-[#c5cad3] bg-[#fafbfc] p-6 shadow-sm transition hover:border-[#9cb9d9]">
                <h3 className="text-lg font-bold text-[#0066cc]">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4b5563] md:text-[15px]">
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

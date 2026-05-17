import { motion } from 'framer-motion'
import { Reveal } from './Reveal'

const milestones = [
  {
    title: 'JobsAhead',
    era: '1999',
    note: 'Pioneering online talent in India’s first internet spring.',
    detail:
      'A product culture formed in the uncertainty of dial-up — where trust was earned in pixels and patience.',
  },
  {
    title: 'Monster.com acquisition era',
    era: 'Early 2000s',
    note: 'A landmark moment — global scale meets Indian ambition.',
    detail:
      'Proof that what began as a local bet could travel — and that teams built here could meet the world’s bar.',
  },
  {
    title: 'Canaan Partners',
    era: 'Venture chapter',
    note: 'Backing founders with patience, pattern recognition, and courage.',
    detail:
      'The shift from operator to steward of capital — choosing depth over noise, cycle after cycle.',
  },
  {
    title: 'Indian Angel Network',
    era: 'Ecosystem',
    note: 'Democratising early capital and founder access across the country.',
    detail:
      'Opening doors that used to stay closed — making “first cheque” a little less lonely for builders everywhere.',
  },
  {
    title: 'Indifi',
    era: 'Fintech',
    note: 'Credit infrastructure for the businesses that power India’s economy.',
    detail:
      'Moving from ideas on a screen to working capital in the hands of people who keep the economy humming.',
  },
  {
    title: 'Plaksha',
    era: 'Institution',
    note: 'Reimagining research and learning for a technology-forward India.',
    detail:
      'Building something meant to outlast any single career — a campus, a community, a compass for the next generation.',
  },
] as const

export function TimelineSection() {
  return (
    <section
      id="timeline"
      className="scroll-mt-4 border border-[#c5cad3] bg-white px-3 py-8 shadow-sm sm:px-5 sm:py-10"
      aria-labelledby="timeline-heading"
    >
      <div className="relative mx-auto max-w-3xl font-sans">
        <Reveal>
          <h2
            id="timeline-heading"
            className="text-center text-2xl font-bold text-[#0066cc] sm:text-3xl"
          >
            Through the years
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-sm text-[#6b7280] sm:text-base">
            A concise arc — ventures, platforms, and institutions that echo far beyond any
            single headline.
          </p>
        </Reveal>

        <ol className="relative mt-10 space-y-0">
          <div className="absolute left-[11px] top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-[#0066cc]/50 via-[#0066cc]/20 to-transparent md:block" />

          {milestones.map((m, i) => (
            <Reveal key={m.title} delay={0.05 * i}>
              <li className="relative grid gap-4 pb-10 md:grid-cols-[7rem_1fr] md:gap-8 md:pb-12">
                <div className="flex items-start gap-4 md:block">
                  <motion.span
                    className="relative mt-1.5 flex h-3 w-3 shrink-0 rounded-full border-2 border-[#0066cc] bg-[#cc0000] md:mt-2"
                    initial={{ scale: 0.6, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.05 * i }}
                  />
                  <time className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#0066cc] md:mt-2 md:block md:text-xs">
                    {m.era}
                  </time>
                </div>
                <div className="rounded-md border border-[#d1d5db] bg-[#fafbfc] px-4 py-4 shadow-sm md:px-5 md:py-5">
                  <h3 className="text-lg font-bold text-[#1a1a1a] md:text-xl">{m.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#4b5563] md:text-[15px]">
                    {m.note}
                  </p>
                  <p className="mt-2 border-l-2 border-[#0066cc]/30 pl-3 text-[13px] leading-relaxed text-[#6b7280] md:text-sm">
                    {m.detail}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

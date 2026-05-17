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
      className="relative scroll-mt-6 border-t border-white/[0.06] bg-gradient-to-b from-void via-ink to-void px-6 py-24 md:py-32"
      aria-labelledby="timeline-heading"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="relative mx-auto max-w-3xl">
        <Reveal>
          <h2
            id="timeline-heading"
            className="text-center font-display text-3xl font-medium text-mist md:text-4xl"
          >
            Through the years
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm text-slate-400 md:text-base">
            A concise arc — ventures, platforms, and institutions that echo far beyond any
            single headline.
          </p>
        </Reveal>

        <ol className="relative mt-16 space-y-0">
          <div className="absolute left-[11px] top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-gold/40 via-gold/15 to-transparent md:block" />

          {milestones.map((m, i) => (
            <Reveal key={m.title} delay={0.05 * i}>
              <li className="relative grid gap-4 pb-12 md:grid-cols-[7rem_1fr] md:gap-10 md:pb-14">
                <div className="flex items-start gap-4 md:block">
                  <motion.span
                    className="relative mt-1.5 flex h-3 w-3 shrink-0 rounded-full border border-gold/50 bg-gradient-to-br from-gold to-amber-700 shadow-[0_0_20px_rgba(212,168,83,0.45)] md:mt-2"
                    initial={{ scale: 0.6, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.05 * i }}
                  />
                  <time className="font-mono text-xs uppercase tracking-[0.2em] text-gold/80 md:mt-3 md:block">
                    {m.era}
                  </time>
                </div>
                <div className="border border-white/[0.07] bg-white/[0.02] px-5 py-5 md:px-7 md:py-6">
                  <h3 className="font-display text-xl font-medium text-mist md:text-2xl">
                    {m.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400 md:text-[15px]">
                    {m.note}
                  </p>
                  <p className="mt-3 border-l border-gold/20 pl-4 text-[13px] leading-relaxed text-slate-500 md:text-sm">
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

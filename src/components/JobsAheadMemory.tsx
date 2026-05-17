import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import { Reveal } from './Reveal'
import { TributeImage } from './TributeImage'
import { tributeConfig } from '../tribute.config'

const jobsAheadMore = (
  <>
    <p>
      There were whiteboards that never quite erased, dial tones in the background, and
      the quiet thrill of watching a listing go live when the country was still learning
      to trust the browser.
    </p>
    <p>
      JobsAhead was where many of us learned that ambition could be gentle, rigorous, and
      generous at the same time — a tone set from the top.
    </p>
  </>
)

export function JobsAheadMemory() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const gridY = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion === true ? ([0, 0] as [number, number]) : ([14, -14] as [number, number]),
  )

  const [open, setOpen] = useState(false)

  return (
    <section
      ref={sectionRef}
      id="memories"
      className="relative scroll-mt-8 border-t border-white/[0.07] bg-[linear-gradient(180deg,var(--color-ja-midnight)_0%,var(--color-ja-deep)_42%,var(--color-ink)_100%)] px-6 py-24 md:py-32"
      aria-labelledby="memories-heading"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-ja-sky/25 via-ja-red/30 to-ja-sky/25"
        aria-hidden
      />

      <div
        className="pointer-events-none absolute inset-x-0 top-24 mx-auto h-64 max-w-3xl rounded-[100%] bg-[radial-gradient(ellipse_at_center,rgba(157,203,236,0.08),transparent_68%)] blur-3xl"
        aria-hidden
      />

      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.42]"
        style={{
          y: gridY,
          backgroundImage: `
            linear-gradient(rgba(157, 203, 236, 0.055) 1px, transparent 1px),
            linear-gradient(90deg, rgba(157, 203, 236, 0.055) 1px, transparent 1px)
          `,
          backgroundSize: '44px 44px',
          maskImage:
            'radial-gradient(ellipse 72% 62% at 50% 38%, black 12%, transparent 78%)',
        }}
      />

      <div className="relative mx-auto max-w-5xl">
        <Reveal>
          <p className="text-center text-[11px] font-medium uppercase tracking-[0.34em] text-ja-sky-muted/90">
            1999
          </p>
          <p className="mt-6 flex items-baseline justify-center gap-0 font-sans text-[clamp(1.25rem,3.4vw,1.85rem)] font-semibold tracking-[0.02em]">
            <span className="text-ja-azure/95">Jobs</span>
            <span className="text-ja-red-rich">Ahead</span>
          </p>
          <h2
            id="memories-heading"
            className="mx-auto mt-5 max-w-2xl text-center font-display text-3xl font-medium leading-snug tracking-tight text-mist/95 md:text-4xl"
          >
            Where India’s internet dreams began
          </h2>
          <div className="mx-auto mt-5 h-px w-12 bg-gradient-to-r from-ja-sky/50 via-ja-red/40 to-ja-sky/50 opacity-90" />
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-start">
          <Reveal className="order-2 lg:order-1" delay={0.08}>
            <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-slate-deep/70 via-ja-midnight/90 to-ja-deep/95 shadow-[0_0_0_1px_rgba(157,203,236,0.06)_inset,0_28px_64px_-36px_rgba(0,0,0,0.75)] backdrop-blur-sm">
              <div className="flex items-center gap-2 border-b border-white/[0.06] bg-black/25 px-4 py-3 md:px-5">
                <span className="flex gap-1.5" aria-hidden>
                  <span className="h-2 w-2 rounded-full bg-ja-red/85 ring-1 ring-white/10" />
                  <span className="h-2 w-2 rounded-full bg-ja-sky/50 ring-1 ring-white/10" />
                  <span className="h-2 w-2 rounded-full bg-white/15 ring-1 ring-white/10" />
                </span>
                <span className="ml-2 font-mono text-[11px] tracking-[0.04em] text-slate-500">
                  <span className="text-ja-azure/90">Jobs</span>
                  <span className="text-ja-red-rich/95">Ahead</span>
                  <span className="text-slate-600"> — dial-up era</span>
                </span>
              </div>

              <div className="relative aspect-[16/10] max-h-[min(52vh,420px)] border-b border-white/[0.06]">
                <TributeImage
                  src={tributeConfig.images.jobsAhead}
                  alt="1990s-style desktop computer and keyboard on a desk — stock photo for era mood, not an official JobsAhead product screen"
                  className="h-full min-h-[200px] w-full"
                  imgClassName="scale-[1.02] contrast-[0.94] saturate-[0.92]"
                  hint="Replace `public/tribute/jobsahead.jpg` with your own JobsAhead-era photo or UI if you have rights to publish it."
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ja-midnight/95 via-ja-sky/[0.04] to-transparent" />
              </div>

              <div className="space-y-4 p-6 font-mono text-[12px] leading-relaxed text-slate-400 md:p-8 md:text-[13px]">
                <p>
                  <span className="text-ja-sky-muted/95">&gt;</span>{' '}
                  <span className="text-ja-red-rich/90">jobsahead.com</span>
                </p>
                <p className="border-l-2 border-ja-sky/25 pl-4 text-slate-300/95">
                  “We believed the market could move online — before it was obvious.”
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {['HTML', 'ASP', 'SQL', 'hope'].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-white/[0.08] bg-white/[0.03] px-2 py-0.5 text-[10px] uppercase tracking-wider text-slate-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <motion.div
                className="pointer-events-none absolute -left-20 top-1/3 h-48 w-48 rounded-full bg-ja-sky/10 blur-3xl"
                animate={{ opacity: [0.25, 0.4, 0.25] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                className="pointer-events-none absolute -right-16 -top-8 h-36 w-36 rounded-full bg-ja-red/10 blur-3xl"
                animate={{ opacity: [0.2, 0.38, 0.2] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
          </Reveal>

          <Reveal className="order-1 space-y-6 lg:order-2" delay={0.12}>
            <div className="relative pl-8 before:absolute before:left-0 before:top-2 before:h-[calc(100%-0.5rem)] before:w-px before:bg-gradient-to-b before:from-ja-sky/45 before:via-ja-red/25 before:to-transparent after:absolute after:left-[-3px] after:top-1.5 after:h-2 after:w-2 after:rounded-full after:border after:border-ja-sky/35 after:bg-ja-red/90 after:shadow-[0_0_0_1px_rgba(15,26,42,0.9)]">
              <p className="text-lg font-light leading-relaxed text-slate-300/95 md:text-xl">
                In 1999, JobsAhead was not just a company. It was a belief that India’s
                talent market could move online.
              </p>
              <p className="text-base font-light leading-relaxed text-slate-400 md:text-lg">
                For many of us, it became a place of learning, ambition, courage, and
                lifelong memories.
              </p>

              <AnimatePresence initial={false}>
                {open && (
                  <motion.div
                    key="more"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="space-y-4 border-l-2 border-ja-sky/20 pl-4 pt-4 text-base font-light leading-relaxed text-slate-400 md:text-[17px]">
                      {jobsAheadMore}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                className="group mt-6 inline-flex items-center gap-2 text-left text-sm font-medium tracking-wide text-ja-sky transition hover:text-ja-azure focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ja-sky/45"
              >
                <span className="border-b border-ja-sky/35 pb-px transition group-hover:border-ja-azure/50">
                  {open ? 'Fold the memory' : 'Continue reading'}
                </span>
                <motion.span
                  aria-hidden
                  className="text-ja-sky-muted/90"
                  animate={{ rotate: open ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  ↓
                </motion.span>
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

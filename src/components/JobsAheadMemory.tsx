import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import { JobsAheadClassicHome } from './JobsAheadClassicHome'
import { Reveal } from './Reveal'

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
    reduceMotion === true ? ([0, 0] as [number, number]) : ([10, -10] as [number, number]),
  )

  const [open, setOpen] = useState(false)

  return (
    <section
      ref={sectionRef}
      id="memories"
      className="relative scroll-mt-4 border border-[#c5cad3] bg-[#f4f7fb] px-3 py-8 shadow-sm sm:px-5 sm:py-10"
      aria-labelledby="memories-heading"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          y: gridY,
          backgroundImage: `
            linear-gradient(rgba(0, 102, 204, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 102, 204, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: '36px 36px',
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <p className="text-center font-sans text-[11px] font-semibold uppercase tracking-[0.28em] text-[#0066cc]">
            1999
          </p>
          <h2
            id="memories-heading"
            className="mx-auto mt-3 max-w-2xl text-center font-sans text-2xl font-bold leading-snug text-[#1a1a1a] sm:text-3xl"
          >
            Where India’s internet dreams began
          </h2>
          <div className="mx-auto mt-3 h-0.5 w-16 bg-gradient-to-r from-[#0066cc] via-[#cc0000] to-[#0066cc]" />
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)] lg:items-start">
          <Reveal className="order-2 lg:order-1" delay={0.06}>
            <JobsAheadClassicHome />
          </Reveal>

          <Reveal className="order-1 space-y-5 lg:order-2" delay={0.1}>
            <div className="rounded-md border border-[#c5cad3] bg-white p-5 font-sans shadow-sm sm:p-6">
              <div className="border-l-4 border-[#0066cc] pl-4">
                <p className="text-sm font-normal leading-relaxed text-[#374151] sm:text-base">
                  In 1999, JobsAhead was not just a company. It was a belief that India’s
                  talent market could move online.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[#6b7280] sm:text-[15px]">
                  For many of us, it became a place of learning, ambition, courage, and
                  lifelong memories.
                </p>
              </div>

              <AnimatePresence initial={false}>
                {open && (
                  <motion.div
                    key="more"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 space-y-3 border-t border-[#e5e7eb] pt-4 text-sm leading-relaxed text-[#6b7280] sm:text-[15px]">
                      {jobsAheadMore}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                className="mt-4 font-sans text-sm font-semibold text-[#0066cc] underline decoration-[#0066cc]/40 hover:text-[#004499]"
              >
                {open ? 'Fold the memory ↑' : 'Continue reading ▼'}
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

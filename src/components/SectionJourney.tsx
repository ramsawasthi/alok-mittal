import { motion, useReducedMotion } from 'framer-motion'
import { useCallback, useEffect, useMemo, useState } from 'react'

const SECTIONS = [
  { id: 'welcome', label: 'Welcome', short: 'Start' },
  { id: 'memories', label: 'JobsAhead', short: '1999' },
  { id: 'timeline', label: 'Timeline', short: 'Years' },
  { id: 'impact', label: 'Impact', short: 'Impact' },
  { id: 'message', label: 'Note', short: 'Note' },
  { id: 'closing', label: 'Closing', short: 'End' },
] as const

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function SectionJourney() {
  const reduceMotion = useReducedMotion()
  const [active, setActive] = useState<(typeof SECTIONS)[number]['id']>(SECTIONS[0].id)
  const [progress, setProgress] = useState(0)

  const spy = useCallback(() => {
    const line = window.scrollY + window.innerHeight * 0.28
    let current: (typeof SECTIONS)[number]['id'] = SECTIONS[0].id
    for (const s of SECTIONS) {
      const el = document.getElementById(s.id)
      if (!el) continue
      const top = el.getBoundingClientRect().top + window.scrollY
      if (top <= line + 1) current = s.id
    }
    setActive(current)

    const doc = document.documentElement
    const max = doc.scrollHeight - doc.clientHeight
    setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0)
  }, [])

  useEffect(() => {
    spy()
    window.addEventListener('scroll', spy, { passive: true })
    window.addEventListener('resize', spy)
    return () => {
      window.removeEventListener('scroll', spy)
      window.removeEventListener('resize', spy)
    }
  }, [spy])

  const activeIndex = useMemo(
    () => SECTIONS.findIndex((s) => s.id === active),
    [active],
  )

  const activeMeta = SECTIONS[activeIndex] ?? SECTIONS[0]

  const goNext = () => {
    if (activeIndex < 0 || activeIndex >= SECTIONS.length - 1) return
    scrollToId(SECTIONS[activeIndex + 1].id)
  }

  const goPrev = () => {
    if (activeIndex <= 0) return
    scrollToId(SECTIONS[activeIndex - 1].id)
  }

  return (
    <nav
      aria-label="Navigate this birthday celebration"
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-white/[0.09] bg-[linear-gradient(180deg,rgba(2,6,23,0.72)_0%,rgba(2,6,23,0.94)_40%,#020617_100%)] shadow-[0_-32px_64px_-28px_rgba(0,0,0,0.75)] backdrop-blur-2xl"
    >
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/35 to-transparent opacity-80" />

      <div className="h-1 w-full bg-white/[0.06]">
        <motion.div
          className="h-full bg-gradient-to-r from-gold/40 via-gold to-amber-200/90"
          initial={false}
          animate={{ scaleX: progress }}
          transition={{
            type: 'tween',
            duration: reduceMotion ? 0 : 0.14,
            ease: 'easeOut',
          }}
          style={{ transformOrigin: 'left' }}
        />
      </div>

      <div className="mx-auto flex max-w-5xl items-stretch gap-2 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 sm:gap-3 sm:px-5">
        <button
          type="button"
          onClick={goPrev}
          disabled={activeIndex <= 0}
          aria-label="Previous section"
          className="flex h-11 w-11 shrink-0 items-center justify-center self-center rounded-xl border border-white/[0.1] bg-white/[0.04] text-sm text-slate-200 transition hover:border-gold/35 hover:bg-white/[0.07] hover:text-amber-50 disabled:pointer-events-none disabled:opacity-20 sm:h-12 sm:w-12"
        >
          ↑
        </button>

        <div className="flex min-w-0 flex-1 flex-col gap-1.5">
          <div className="flex items-center justify-between gap-2 px-0.5">
            <span className="font-mono text-[9px] font-medium uppercase tracking-[0.28em] text-gold/55">
              Journey
            </span>
            <span className="truncate text-right font-display text-xs text-slate-500 sm:text-sm">
              <span className="text-slate-600">Now · </span>
              <span className="text-slate-300">{activeMeta.label}</span>
            </span>
          </div>

          <div
            className="flex gap-1.5 overflow-x-auto overscroll-x-contain py-0.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {SECTIONS.map((s) => {
              const isActive = s.id === active
              return (
                <button
                  key={s.id}
                  type="button"
                  aria-current={isActive ? 'true' : undefined}
                  title={s.label}
                  onClick={() => scrollToId(s.id)}
                  className={`shrink-0 rounded-full border px-2.5 py-2 text-[10px] font-medium uppercase tracking-[0.14em] transition sm:px-3.5 sm:text-[11px] sm:tracking-[0.16em] ${
                    isActive
                      ? 'border-gold/45 bg-gradient-to-b from-gold/20 to-gold/5 text-amber-50 shadow-[0_0_24px_-6px_rgba(212,168,83,0.45)]'
                      : 'border-transparent bg-white/[0.04] text-slate-500 hover:border-white/10 hover:bg-white/[0.07] hover:text-slate-200'
                  }`}
                >
                  <span className="sm:hidden">{s.short}</span>
                  <span className="hidden sm:inline">{s.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        <button
          type="button"
          onClick={goNext}
          disabled={activeIndex < 0 || activeIndex >= SECTIONS.length - 1}
          aria-label="Next section"
          className="flex h-11 w-11 shrink-0 items-center justify-center self-center rounded-xl border border-gold/30 bg-gold/10 text-sm font-medium text-amber-50 transition hover:border-gold/50 hover:bg-gold/15 disabled:pointer-events-none disabled:opacity-20 sm:h-12 sm:w-12"
        >
          ↓
        </button>
      </div>
    </nav>
  )
}

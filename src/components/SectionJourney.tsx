import { motion, useReducedMotion } from 'framer-motion'
import { useCallback, useEffect, useMemo, useState } from 'react'

const SECTIONS = [
  { id: 'welcome', label: 'Home', short: 'Home' },
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
      className="fixed inset-x-0 bottom-0 z-[60] border-t-2 border-[#2a6ebb] bg-gradient-to-b from-[#2f7fd4] to-[#1a5cad] shadow-[0_-8px_24px_rgba(0,0,0,0.15)]"
    >
      <div className="h-1 w-full bg-white/20">
        <motion.div
          className="h-full bg-[#cc0000]"
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

      <div className="mx-auto flex max-w-6xl items-stretch gap-2 px-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2 sm:gap-3 sm:px-4 sm:pb-3 sm:pt-3">
        <button
          type="button"
          onClick={goPrev}
          disabled={activeIndex <= 0}
          aria-label="Previous section"
          className="flex h-10 w-10 shrink-0 items-center justify-center self-center rounded border border-white/30 bg-white/10 text-sm font-bold text-white transition hover:bg-white/20 disabled:pointer-events-none disabled:opacity-30 sm:h-11 sm:w-11"
        >
          ↑
        </button>

        <div className="flex min-w-0 flex-1 flex-col gap-1">
          <div className="flex items-center justify-between gap-2 px-0.5">
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/80">
              Sections
            </span>
            <span className="truncate text-right text-[10px] text-white/90 sm:text-xs">
              Now: <span className="font-semibold">{activeMeta.label}</span>
            </span>
          </div>

          <div className="flex gap-1 overflow-x-auto overscroll-x-contain py-0.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {SECTIONS.map((s) => {
              const isActive = s.id === active
              return (
                <button
                  key={s.id}
                  type="button"
                  aria-current={isActive ? 'true' : undefined}
                  title={s.label}
                  onClick={() => scrollToId(s.id)}
                  className={`shrink-0 rounded-sm border px-2 py-1.5 text-[10px] font-semibold uppercase tracking-wide transition sm:px-2.5 sm:text-[11px] ${
                    isActive
                      ? 'border-[#cc0000] bg-[#cc0000] text-white shadow'
                      : 'border-white/25 bg-white/10 text-white hover:bg-white/20'
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
          className="flex h-10 w-10 shrink-0 items-center justify-center self-center rounded border border-[#cc0000] bg-[#cc0000] text-sm font-bold text-white shadow transition hover:bg-[#b30000] disabled:pointer-events-none disabled:opacity-30 sm:h-11 sm:w-11"
        >
          ↓
        </button>
      </div>
    </nav>
  )
}

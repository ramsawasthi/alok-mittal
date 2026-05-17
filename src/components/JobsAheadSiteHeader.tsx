const NAV = [
  { id: 'welcome', label: 'Home' },
  { id: 'memories', label: 'JobsAhead' },
  { id: 'timeline', label: 'Timeline' },
  { id: 'impact', label: 'Impact' },
  { id: 'message', label: 'Note' },
  { id: 'closing', label: 'Closing' },
] as const

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function JobsAheadSiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#9cb9d9] bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
      <div className="mx-auto flex max-w-6xl flex-wrap items-end justify-between gap-3 px-3 py-3 sm:px-4">
        <div>
          <div className="font-sans text-[clamp(1.25rem,3.5vw,1.65rem)] font-bold leading-none tracking-tight">
            <span className="text-[#0066cc]">Jobs</span>
            <span className="text-[#cc0000]">Ahead</span>
            <span className="text-[#0066cc]">.com</span>
          </div>
          <p className="mt-0.5 font-sans text-[11px] text-[#6b7280]">Fuel for your ambition</p>
        </div>
        <p className="max-w-xs text-right font-sans text-[11px] font-medium leading-snug text-[#cc0000]">
          Happy Birthday, Alok — a celebration from Ram
        </p>
      </div>

      <div className="border-t border-[#2a6ebb] bg-gradient-to-b from-[#2f7fd4] to-[#1a5cad] px-2 py-1.5 font-sans text-[11px] font-semibold text-white sm:text-xs">
        <nav
          className="mx-auto flex max-w-6xl flex-wrap items-center gap-1 sm:gap-2 sm:px-2"
          aria-label="Page sections"
        >
          {NAV.map((item, i) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToId(item.id)}
              className={
                i === 0
                  ? 'rounded-sm bg-[#5a9fdf] px-2.5 py-1 shadow-inner sm:px-3'
                  : 'flex items-center gap-0.5 rounded-sm px-2 py-1 transition hover:bg-white/10'
              }
            >
              {i > 0 ? <span className="text-[#ffcccc]">►</span> : null}
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="border-t border-[#7eb3e6] bg-gradient-to-b from-[#8ebfe8] to-[#6fa8dc] px-3 py-2 font-sans sm:px-4">
        <p className="mx-auto max-w-6xl text-[10px] text-white/95 sm:text-[11px]">
          Ref. Birthday message, JobsAhead memories, career arc, and more — scroll or use
          the navigation above.
        </p>
        <div className="mx-auto mt-1.5 flex max-w-6xl flex-wrap items-center gap-2">
          <div className="min-h-[24px] min-w-[min(100%,180px)] flex-1 border border-[#9ca3af] bg-white shadow-[inset_0_1px_2px_rgba(0,0,0,0.06)]" />
          <button
            type="button"
            onClick={() => scrollToId('memories')}
            className="border border-[#990000] bg-[#cc0000] px-3 py-0.5 text-xs font-bold text-white shadow-[1px_1px_0_rgba(0,0,0,0.2)]"
          >
            GO
          </button>
          <button
            type="button"
            onClick={() => scrollToId('memories')}
            className="text-[10px] text-[#0a3d6b] underline sm:text-[11px]"
          >
            Scroll to JobsAhead
          </button>
        </div>
      </div>
    </header>
  )
}

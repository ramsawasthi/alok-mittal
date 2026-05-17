/**
 * Nostalgic recreation of the classic JobsAhead.com homepage layout and structure
 * (decorative only — not a functional site).
 */
export function JobsAheadClassicHome() {
  const categories = [
    'IT/Software Jobs',
    'Call Center Jobs',
    'Production/Engg. Jobs',
    'Sales Jobs',
    'Finance Jobs',
    'HR Jobs',
    'Marketing Jobs',
    'Banking Jobs',
    'Pharmaceutical Jobs',
    'Legal Jobs',
    'Retail Chain Jobs',
    'Jobs in other categories',
    'Fresher Jobs',
  ] as const

  const cities = [
    'Jobs in Ahmedabad',
    'Jobs in Bangalore',
    'Jobs in Coimbatore',
    'Jobs in Chandigarh',
    'Jobs in Chennai',
    'Jobs in Delhi region/NCR',
    'Jobs in Hyderabad',
    'Jobs in Kolkata',
    'Jobs in Mumbai',
    'Jobs in Pune',
    'Jobs in Thiruvananthapuram',
    'Jobs in other cities',
    'Senior Management Jobs',
  ] as const

  return (
    <section
      className="overflow-hidden rounded-lg border border-[#9cb9d9] bg-[#f4f7fb] text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.85),0_12px_40px_-12px_rgba(0,0,0,0.45)]"
      aria-label="Decorative recreation of the classic JobsAhead.com homepage layout"
    >
      <div className="border-b border-[#c5d8eb] bg-white px-4 py-3 md:px-5">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <div className="font-sans text-[clamp(1.35rem,4vw,1.85rem)] font-bold leading-none tracking-tight">
              <span className="text-[#0066cc]">Jobs</span>
              <span className="text-[#cc0000]">Ahead</span>
              <span className="text-[#0066cc]">.com</span>
            </div>
            <p className="mt-1 font-sans text-[11px] text-[#6b7280]">Fuel for your ambition</p>
          </div>
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-1 border border-[#2a6ebb] bg-gradient-to-b from-[#2f7fd4] to-[#1a5cad] p-1 font-sans text-[11px] font-semibold text-white md:text-xs">
          <span className="rounded-sm bg-[#5a9fdf] px-3 py-1.5 shadow-inner">Search Jobs</span>
          {['Submit Resume', 'Register', 'Login'].map((label) => (
            <span
              key={label}
              className="flex cursor-default items-center gap-0.5 px-2 py-1 opacity-95"
            >
              <span className="text-[#ffcccc]">►</span>
              {label}
            </span>
          ))}
        </div>

        <div className="mt-0 border border-t-0 border-[#7eb3e6] bg-gradient-to-b from-[#8ebfe8] to-[#6fa8dc] px-3 py-2 font-sans md:px-4">
          <p className="text-[10px] text-white/95 md:text-[11px]">
            Ref. Job Title, Location, Company Name, Skills, Industry, etc.
          </p>
          <div className="mt-1.5 flex flex-wrap items-center gap-2">
            <div className="min-h-[26px] min-w-[min(100%,220px)] flex-1 border border-[#9ca3af] bg-white shadow-[inset_0_1px_2px_rgba(0,0,0,0.06)]" />
            <button
              type="button"
              tabIndex={-1}
              className="cursor-default border border-[#990000] bg-[#cc0000] px-3 py-0.5 font-bold text-white shadow-[1px_1px_0_rgba(0,0,0,0.2)]"
            >
              GO
            </button>
            <div className="flex gap-3 text-[10px] text-[#0a3d6b] underline md:text-[11px]">
              <span className="cursor-default">Advance Search</span>
              <span className="cursor-default">Search Tips</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-0 border-t border-[#d1d5db] bg-white md:grid-cols-3 md:divide-x md:divide-[#e5e7eb]">
        <div className="p-4 font-sans text-[12px] leading-snug text-[#374151] md:p-5">
          <div className="rounded-md border border-[#c5cad3] bg-[#fafbfc] p-3 shadow-sm">
            <h3 className="border-b border-[#e5e7eb] pb-2 font-bold text-[#cc0000]">Career Services</h3>
            <div className="mt-3 space-y-3">
              <div>
                <p className="font-bold text-[#0066cc]">RIGHT RESUME</p>
                <p className="mt-0.5 text-[11px] leading-relaxed text-[#4b5563]">
                  Make a powerful impact. Get your resume written by our experts in 10 days.
                </p>
              </div>
              <div>
                <p className="font-bold text-[#0066cc]">EXPRESS RESUME SERVICE</p>
                <p className="mt-0.5 text-[11px] leading-relaxed text-[#4b5563]">
                  Capitalize on the best opportunities. Send your resume to 1000 consultants in
                  India and abroad.
                </p>
              </div>
              <div>
                <p className="font-bold text-[#0066cc]">CAREER BOOSTER</p>
                <p className="mt-0.5 text-[11px] leading-relaxed text-[#4b5563]">
                  Double power your job hunt. Subscribe to our customized combination package.
                </p>
              </div>
            </div>
          </div>
          <div className="relative mt-4 inline-flex items-center gap-2 rounded border border-[#2a6ebb] bg-gradient-to-b from-[#3d8ad9] to-[#2563b8] px-3 py-1.5 font-bold text-white shadow">
            <span className="text-[11px] tracking-wide">TOP Consultants</span>
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#cc0000] text-[9px] font-bold text-white shadow">
              ★
            </span>
          </div>
        </div>

        <nav
          className="border-t border-[#e5e7eb] p-4 font-sans text-[12px] md:border-t-0 md:p-5"
          aria-hidden
        >
          <ul className="space-y-1.5">
            {categories.map((c) => (
              <li key={c}>
                <span className="cursor-default text-[#0066cc] underline decoration-[#0066cc]/40 hover:text-[#004499]">
                  {c}
                </span>
              </li>
            ))}
          </ul>
        </nav>

        <nav
          className="border-t border-[#e5e7eb] p-4 font-sans text-[12px] md:border-t-0 md:p-5"
          aria-hidden
        >
          <ul className="space-y-1.5">
            {cities.map((c) => (
              <li key={c}>
                <span className="cursor-default text-[#0066cc] underline decoration-[#0066cc]/40 hover:text-[#004499]">
                  {c}
                </span>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <p className="border-t border-[#e5e7eb] bg-[#eef2f7] px-3 py-2 text-center font-sans text-[10px] text-[#6b7280]">
        Inspired by the original JobsAhead.com homepage — a static layout for context, not a
        live service.
      </p>
    </section>
  )
}

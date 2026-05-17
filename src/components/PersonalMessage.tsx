import { Reveal } from './Reveal'
import { siteConfig } from '../site.config'

export function PersonalMessage() {
  return (
    <section
      id="message"
      className="scroll-mt-4 border border-[#c5cad3] bg-[#f4f7fb] px-3 py-8 shadow-sm sm:px-5 sm:py-10"
      aria-labelledby="message-heading"
    >
      <div className="relative mx-auto max-w-3xl font-sans">
        <Reveal>
          <h2
            id="message-heading"
            className="text-center text-2xl font-bold text-[#cc0000] sm:text-3xl"
          >
            A personal note
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-8 rounded-md border border-[#c5cad3] bg-white p-6 shadow-sm sm:p-8">
            <p className="text-lg font-bold italic text-[#0066cc] sm:text-xl">Dear Alok,</p>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-[#374151] sm:text-base">
              <p>Wishing you a very happy birthday.</p>
              <p>
                For me, JobsAhead was not just an early career chapter. It was a place
                that shaped how I looked at technology, startups, and ambition.
              </p>
              <p>
                Watching your journey over the years has been deeply inspiring. You have
                not only built companies, but also enabled people, founders, and
                institutions.
              </p>
              <p>
                On your birthday, I just want to express gratitude for the impact you
                have created — directly and indirectly — in so many journeys, including
                mine.
              </p>
            </div>
            <p className="mt-8 text-base font-bold text-[#cc0000]">
              Warm wishes,
              <br />
              <span className="text-[#1a1a1a]">Ram</span>
            </p>

            {siteConfig.sendNoteMailto ? (
              <div className="mt-8 border-t border-[#e5e7eb] pt-6 text-center">
                <a
                  href={siteConfig.sendNoteMailto}
                  className="inline-flex border border-[#990000] bg-[#cc0000] px-5 py-2 text-sm font-bold text-white shadow-[1px_1px_0_rgba(0,0,0,0.15)] transition hover:bg-[#b30000]"
                >
                  Send a quiet note
                </a>
                <p className="mt-2 text-xs text-[#6b7280]">
                  Opens your email client with a pre-filled thread you can edit before
                  sending.
                </p>
              </div>
            ) : null}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

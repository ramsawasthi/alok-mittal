import { Reveal } from './Reveal'
import { tributeConfig } from '../tribute.config'

export function PersonalMessage() {
  return (
    <section
      id="message"
      className="relative scroll-mt-6 border-t border-white/[0.06] bg-gradient-to-b from-void to-ink px-6 py-24 md:py-32"
      aria-labelledby="message-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_0%,rgba(212,168,83,0.08),transparent_60%)]" />

      <div className="relative mx-auto max-w-3xl">
        <Reveal>
          <h2
            id="message-heading"
            className="text-center font-display text-3xl font-medium text-mist md:text-4xl"
          >
            A personal note
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 rounded-2xl border border-gold/20 bg-white/[0.02] p-8 shadow-[0_0_80px_-40px_rgba(212,168,83,0.35)] md:p-12">
            <p className="font-display text-xl italic leading-relaxed text-amber-50/95 md:text-2xl">
              Dear Alok,
            </p>
            <div className="mt-6 space-y-5 text-base font-light leading-relaxed text-slate-300 md:text-lg">
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
            <p className="mt-10 font-display text-lg text-gold/90 md:text-xl">
              Warm wishes,
              <br />
              <span className="text-mist">Ram</span>
            </p>

            {tributeConfig.sendNoteMailto ? (
              <div className="mt-10 border-t border-white/[0.08] pt-8 text-center">
                <a
                  href={tributeConfig.sendNoteMailto}
                  className="inline-flex items-center justify-center rounded-full border border-gold/30 bg-gold/5 px-6 py-2.5 text-sm font-medium tracking-wide text-amber-100 transition hover:border-gold/50 hover:bg-gold/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold/60"
                >
                  Send a quiet note
                </a>
                <p className="mt-3 text-xs text-slate-500">
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

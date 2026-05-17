import { motion } from 'framer-motion'
import { siteConfig } from '../site.config'
import { ParticleField } from './ParticleField'
import { StoryImage } from './StoryImage'

export function Hero() {
  const scrollToMemories = () => {
    document.getElementById('memories')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="welcome"
      className="relative isolate flex min-h-svh flex-col items-center justify-center overflow-hidden px-6 pb-24 pt-28"
      aria-labelledby="hero-title"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_-10%,rgba(212,168,83,0.22),transparent_55%)]" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(212,168,83,0.12),transparent_68%)] blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[380px] w-[min(90vw,720px)] -translate-x-1/2 translate-y-1/3 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.08),transparent_65%)] blur-3xl" />

      <div className="absolute inset-0">
        <ParticleField />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.p
          className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-gold/80"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          A celebration
        </motion.p>
        <motion.h1
          id="hero-title"
          className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-medium leading-[1.05] tracking-tight text-mist"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          Happy Birthday,{' '}
          <span className="bg-gradient-to-r from-amber-100 via-gold to-amber-200/90 bg-clip-text text-transparent">
            Alok
          </span>
        </motion.h1>
        <motion.div
          className="mx-auto mt-6 max-w-2xl space-y-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-base font-light leading-relaxed text-slate-200 md:text-lg">
            A builder, mentor, investor, and institution creator.
          </p>
          <p className="text-sm font-light leading-relaxed text-slate-500 md:text-base">
            Celebrating India’s early internet and startup ecosystem.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto mt-10 flex max-w-md flex-col items-center gap-5 sm:flex-row sm:justify-center sm:gap-8"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full border border-gold/35 bg-slate-deep/50 shadow-[0_0_48px_-12px_rgba(212,168,83,0.5)] ring-1 ring-white/10 sm:h-32 sm:w-32"
            aria-hidden
          >
            <StoryImage
              src={siteConfig.images.alokPortrait}
              alt=""
              className="h-full w-full"
              imgClassName="object-cover object-center"
              hint="Add a portrait to public/media/alok.jpg if you’d like this circle to show a photo."
            />
          </div>
          <p className="max-w-xs text-center text-xs font-light leading-relaxed text-slate-500 sm:text-left">
            A small frame beside the story — for the presence behind years of building,
            mentoring, and institutions.
          </p>
        </motion.div>

        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
        >
          <button
            type="button"
            onClick={scrollToMemories}
            className="group relative overflow-hidden rounded-full border border-gold/35 bg-gradient-to-b from-gold/15 to-transparent px-10 py-3.5 text-sm font-medium tracking-wide text-amber-100 shadow-[0_0_40px_-8px_rgba(212,168,83,0.55)] transition hover:border-gold/55 hover:shadow-[0_0_56px_-6px_rgba(212,168,83,0.65)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold/70"
          >
            <span className="relative z-10">Begin the Journey</span>
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition group-hover:translate-x-full group-hover:opacity-100" />
          </button>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-slate-500">
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.span
          className="h-8 w-px bg-gradient-to-b from-gold/60 to-transparent"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
    </section>
  )
}

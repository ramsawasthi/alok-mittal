import { motion } from 'framer-motion'
import { siteConfig } from '../site.config'
import { StoryImage } from './StoryImage'

export function Hero() {
  const scrollToMemories = () => {
    document.getElementById('memories')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="welcome"
      className="relative scroll-mt-4 border border-[#c5cad3] bg-white px-4 py-10 shadow-sm sm:px-8 sm:py-12"
      aria-labelledby="hero-title"
    >
      <div className="mx-auto max-w-3xl text-center font-sans">
        <motion.p
          className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#0066cc]"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          A celebration
        </motion.p>
        <motion.h1
          id="hero-title"
          className="mt-3 text-[clamp(1.75rem,5vw,2.75rem)] font-bold leading-tight tracking-tight text-[#1a1a1a]"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
        >
          Happy Birthday,{' '}
          <span className="text-[#cc0000]">Alok</span>
        </motion.h1>
        <motion.div
          className="mx-auto mt-5 max-w-xl space-y-2 text-sm leading-relaxed text-[#4b5563] sm:text-base"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          <p>A builder, mentor, investor, and institution creator.</p>
          <p className="text-[#0066cc]">
            Celebrating India’s early internet and startup ecosystem.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto mt-8 flex max-w-md flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div
            className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full border-2 border-[#9cb9d9] bg-[#f4f7fb] shadow-inner sm:h-28 sm:w-28"
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
          <p className="max-w-xs text-left text-xs leading-relaxed text-[#6b7280] sm:text-sm">
            A small frame beside the story — for the presence behind years of building,
            mentoring, and institutions.
          </p>
        </motion.div>

        <motion.div
          className="mt-8 flex justify-center"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.22 }}
        >
          <button
            type="button"
            onClick={scrollToMemories}
            className="border border-[#990000] bg-[#cc0000] px-8 py-2 text-sm font-bold tracking-wide text-white shadow-[2px_2px_0_rgba(0,0,0,0.15)] transition hover:bg-[#b30000] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066cc]"
          >
            Begin the Journey »
          </button>
        </motion.div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { useMemo } from 'react'
import { Reveal } from './Reveal'

type Piece = {
  id: number
  left: string
  delay: number
  duration: number
  size: number
  drift: number
  hue: 'gold' | 'amber' | 'cream'
}

const hueClass: Record<Piece['hue'], string> = {
  gold: 'bg-gradient-to-b from-gold/90 to-amber-900/45',
  amber: 'bg-gradient-to-b from-amber-200/85 to-amber-600/35',
  cream: 'bg-gradient-to-b from-mist/50 to-gold/20',
}

export function ClosingSection() {
  const pieces = useMemo<Piece[]>(() => {
    const hues: Piece['hue'][] = ['gold', 'amber', 'cream']
    return Array.from({ length: 42 }, (_, i) => ({
      id: i,
      left: `${(i * 17 + 7) % 100}%`,
      delay: (i % 9) * 0.12 + Math.random() * 0.2,
      duration: 5.5 + (i % 5) * 0.85 + Math.random(),
      size: 2 + (i % 4),
      drift: (i % 2 === 0 ? 1 : -1) * (20 + (i % 6) * 8),
      hue: hues[i % hues.length]!,
    }))
  }, [])

  return (
    <footer
      id="closing"
      className="relative scroll-mt-6 overflow-hidden border-t border-white/[0.06] bg-void px-6 py-28 md:py-36"
      aria-labelledby="closing-heading"
    >
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute left-1/2 top-1/2 h-[min(100vw,720px)] w-[min(100vw,720px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(212,168,83,0.18),transparent_62%)] blur-3xl"
          animate={{ opacity: [0.45, 0.75, 0.45], scale: [1, 1.05, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {pieces.map((p) => (
        <motion.span
          key={p.id}
          className={`pointer-events-none absolute top-[-8%] rounded-sm opacity-0 ${hueClass[p.hue]}`}
          style={{
            left: p.left,
            width: p.size,
            height: p.size * 3.2,
            rotate: p.drift * 0.4,
          }}
          initial={{ y: '-4%', opacity: 0 }}
          animate={{
            y: ['-4%', '108vh'],
            x: [0, p.drift * 0.5],
            opacity: [0, 0.75, 0.75, 0],
            rotate: [p.drift * 0.15, p.drift * 1.1],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'linear',
            repeatDelay: 0.35,
          }}
          aria-hidden
        />
      ))}

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <Reveal>
          <h2
            id="closing-heading"
            className="font-display text-[clamp(1.75rem,4.2vw,2.75rem)] font-medium leading-snug text-mist"
          >
            Some people build companies.
            <br />
            Some people build ecosystems.
            <br />
            <span className="bg-gradient-to-r from-amber-100 via-gold to-amber-200/90 bg-clip-text text-transparent">
              A few quietly build both.
            </span>
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-10 font-display text-2xl text-gold/90 md:text-3xl">
            Happy Birthday, Alok
          </p>
        </Reveal>
      </div>
    </footer>
  )
}

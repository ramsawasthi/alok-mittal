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
  hue: 'blue' | 'red' | 'amber'
}

const hueClass: Record<Piece['hue'], string> = {
  blue: 'bg-gradient-to-b from-[#60a5fa]/90 to-[#2563eb]/50',
  red: 'bg-gradient-to-b from-[#f87171]/90 to-[#b91c1c]/45',
  amber: 'bg-gradient-to-b from-[#fcd34d]/90 to-[#d97706]/40',
}

export function ClosingSection() {
  const pieces = useMemo<Piece[]>(() => {
    const hues: Piece['hue'][] = ['blue', 'red', 'amber']
    return Array.from({ length: 36 }, (_, i) => ({
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
      className="relative scroll-mt-4 overflow-hidden border border-[#c5cad3] bg-white px-3 py-12 shadow-sm sm:px-5 sm:py-16"
      aria-labelledby="closing-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(0,102,204,0.08),transparent_65%)]" />

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
            opacity: [0, 0.65, 0.65, 0],
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

      <div className="relative z-10 mx-auto max-w-3xl text-center font-sans">
        <Reveal>
          <h2
            id="closing-heading"
            className="text-[clamp(1.25rem,3.8vw,1.85rem)] font-bold leading-snug text-[#1a1a1a]"
          >
            Some people build companies.
            <br />
            Some people build ecosystems.
            <br />
            <span className="text-[#0066cc]">A few quietly build both.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-8 text-xl font-bold text-[#cc0000] sm:text-2xl">Happy Birthday, Alok</p>
        </Reveal>
      </div>
    </footer>
  )
}

import { useState } from 'react'

type StoryImageProps = {
  src: string
  alt: string
  className?: string
  imgClassName?: string
  hint: string
}

export function StoryImage({
  src,
  alt,
  className = '',
  imgClassName = '',
  hint,
}: StoryImageProps) {
  const [failed, setFailed] = useState(false)

  if (!src) {
    return <ImageFallback className={className} hint={hint} />
  }

  if (failed) {
    return <ImageFallback className={className} hint={hint} />
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onError={() => setFailed(true)}
        className={`h-full w-full object-cover ${imgClassName}`}
      />
    </div>
  )
}

function ImageFallback({ className, hint }: { className: string; hint: string }) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 border border-dashed border-[#0066cc]/35 bg-white px-4 py-8 text-center ${className}`}
      role="img"
      aria-label={hint}
    >
      <span
        className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#0066cc]/70"
        aria-hidden
      >
        Image
      </span>
      <p className="max-w-[14rem] text-xs leading-relaxed text-slate-500">{hint}</p>
    </div>
  )
}

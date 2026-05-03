import { useEffect, useRef } from 'react'

export default function Hero() {
  const headlineRef = useRef(null)
  const subRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    const els = [headlineRef.current, subRef.current, ctaRef.current]
    els.forEach((el, i) => {
      if (!el) return
      el.style.opacity = '0'
      el.style.transform = 'translateY(40px)'
      setTimeout(() => {
        el.style.transition = 'opacity 0.9s ease, transform 0.9s ease'
        el.style.opacity = '1'
        el.style.transform = 'translateY(0)'
      }, 300 + i * 200)
    })
  }, [])

  return (
    <section id="hero" className="relative w-full h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero_model.png"
          alt="Devnix Studio Hero"
          className="w-full h-full object-cover object-top"
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-16 lg:px-24 max-w-3xl">
        {/* Eyebrow */}
        <p className="text-white/50 text-xs tracking-[0.4em] uppercase mb-6 font-medium">
          SS 2025 Collection
        </p>

        {/* Headline */}
        <h1
          ref={headlineRef}
          className="font-poppins font-black text-5xl md:text-7xl lg:text-8xl leading-none tracking-tight mb-6 hero-text"
        >
          Redefine<br />Your Style.
        </h1>

        {/* Subheadline */}
        <p
          ref={subRef}
          className="text-white/60 text-base md:text-lg font-light leading-relaxed max-w-md mb-10"
        >
          Built for the bold. Worn by the fearless. Devnix Studio crafts minimal essentials for those who move ahead of the curve.
        </p>

        {/* CTA Buttons */}
        <div ref={ctaRef} className="flex flex-wrap gap-4">
          <a
            href="#shop"
            className="btn-primary px-8 py-4 rounded-full text-sm font-semibold tracking-widest uppercase"
          >
            Shop Now
          </a>
          <a
            href="#collections"
            className="btn-outline px-8 py-4 rounded-full text-sm font-semibold tracking-widest uppercase"
          >
            Explore Collection
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-40">
        <span className="text-white text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-12 bg-white/40 animate-pulse" />
      </div>

      {/* Side badge */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-10 hidden lg:flex flex-col items-center gap-3 opacity-40">
        <div className="w-px h-20 bg-white/30" />
        <span
          className="text-white/60 text-[10px] tracking-[0.35em] uppercase"
          style={{ writingMode: 'vertical-rl' }}
        >
          Devnix Studio
        </span>
        <div className="w-px h-20 bg-white/30" />
      </div>
    </section>
  )
}

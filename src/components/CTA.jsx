import { useEffect, useRef, useState } from 'react'

export default function CTA() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target) }
      }),
      { threshold: 0.12 }
    )
    sectionRef.current?.querySelectorAll('.reveal')
      .forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) { setSubmitted(true); setEmail('') }
  }

  return (
    <section ref={sectionRef} className="relative bg-[#0f0f0f] py-32 px-6 overflow-hidden">
      {/* Background grain texture suggestion via pseudo element */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-white/[0.02]" />
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-64 h-64 border-l border-t border-white/[0.04] rounded-br-full" />
        <div className="absolute bottom-0 right-0 w-64 h-64 border-r border-b border-white/[0.04] rounded-tl-full" />
      </div>

      <div className="relative max-w-3xl mx-auto text-center">
        <p className="reveal text-white/40 text-xs tracking-[0.4em] uppercase mb-4">— Exclusive Access</p>
        <h2 className="reveal d1 font-poppins font-black text-5xl md:text-6xl lg:text-7xl text-white leading-none mb-6">
          Join the<br />
          <span className="text-white/30">Movement.</span>
        </h2>
        <p className="reveal d2 text-white/50 text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-12">
          Be the first to know about new drops, limited editions, and exclusive member discounts. No spam, just style.
        </p>

        {/* Form */}
        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="reveal d3 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="cta-input flex-1 bg-white/[0.06] border border-white/10 text-white placeholder-white/30 px-5 py-4 rounded-full text-sm tracking-wide transition-colors"
            />
            <button
              type="submit"
              className="btn-primary px-7 py-4 rounded-full text-sm font-semibold tracking-widest uppercase whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        ) : (
          <div className="reveal d3 glass-card rounded-2xl px-8 py-5 inline-block">
            <p className="text-white text-sm font-medium tracking-wide">
              ✓ &nbsp; You're in. Welcome to Devnix Studio.
            </p>
          </div>
        )}

        <p className="reveal d4 text-white/25 text-xs mt-5 tracking-wide">
          Unsubscribe any time. We hate spam too.
        </p>

        {/* Social proof */}
        <div className="reveal d5 mt-14 flex flex-wrap justify-center gap-8">
          {['50K+ Members', '200+ Drops', 'Free Shipping on $150+'].map(s => (
            <div key={s} className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-white/30" />
              <span className="text-white/40 text-xs tracking-widest uppercase">{s}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

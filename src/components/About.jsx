import { useEffect, useRef } from 'react'

const stats = [
  { value: '50K+', label: 'Happy Customers' },
  { value: '200+', label: 'Unique Pieces' },
  { value: '18', label: 'Countries Shipped' },
  { value: '4.9★', label: 'Average Rating' },
]

export default function About() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target) }
      }),
      { threshold: 0.1 }
    )
    sectionRef.current?.querySelectorAll('.reveal, .reveal-l, .reveal-r')
      .forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="bg-[#0d0d0d] py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
          {/* Text */}
          <div className="reveal-l">
            <p className="text-white/40 text-xs tracking-[0.4em] uppercase mb-4">— Our Story</p>
            <h2 className="font-poppins font-bold text-4xl md:text-5xl text-white leading-tight mb-8">
              Crafted for the<br />
              <span className="text-white/40">Next Generation</span>
            </h2>
            <p className="text-white/55 text-base leading-relaxed mb-6">
              Devnix Studio was born from a desire to strip fashion back to its core — clean lines, intentional design, and uncompromising quality. We build pieces that outlast trends and speak without shouting.
            </p>
            <p className="text-white/40 text-sm leading-relaxed mb-10">
              Every garment is designed in-house and produced in small batches. We believe in slow fashion done boldly — where each piece earns its place in your wardrobe.
            </p>
            <a href="#collections" className="btn-outline px-8 py-4 rounded-full text-xs font-semibold tracking-widest uppercase inline-block">
              Our Philosophy →
            </a>
          </div>

          {/* Image */}
          <div className="reveal-r relative">
            <div className="relative overflow-hidden rounded-2xl aspect-[4/5]">
              <img
                src="/about_brand.png"
                alt="Devnix Studio Atelier"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 glass p-5 rounded-2xl">
              <p className="text-white/40 text-[10px] tracking-widest uppercase mb-1">Founded</p>
              <p className="text-white font-poppins font-bold text-2xl">2021</p>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/[0.06] pt-16">
          {stats.map((s, i) => (
            <div key={s.label} className={`reveal d${i + 1} text-center md:text-left`}>
              <p className="stat-num text-4xl md:text-5xl mb-2">{s.value}</p>
              <p className="text-white/40 text-xs tracking-widest uppercase">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

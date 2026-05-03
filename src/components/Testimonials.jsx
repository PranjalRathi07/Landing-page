import { useEffect, useRef, useState } from 'react'

const reviews = [
  {
    id: 1,
    name: 'Alex Chen',
    handle: '@alexc.studio',
    avatar: 'AC',
    rating: 5,
    text: "Devnix Studio completely changed how I think about my wardrobe. The quality is unreal — the fabric, the fit, the way the pieces just work together. I've never received so many compliments.",
  },
  {
    id: 2,
    name: 'Mia Fontaine',
    handle: '@mia.font',
    avatar: 'MF',
    rating: 5,
    text: "I bought the Shadow Bomber and I wear it literally everywhere. It's the kind of piece that looks effortless but clearly isn't. Premium in every sense of the word.",
  },
  {
    id: 3,
    name: 'Jordan Blake',
    handle: '@j.blake',
    avatar: 'JB',
    rating: 5,
    text: "Finally a brand that understands minimalism. Not cheap and boring, but stripped back and intentional. The cargo trousers are on another level. Fast shipping too.",
  },
  {
    id: 4,
    name: 'Sofia Ren',
    handle: '@sofia.ren',
    avatar: 'SR',
    rating: 5,
    text: "The essentials set is worth every penny. Clean, structured, timeless. Devnix is the only brand I actually look forward to new drops from.",
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target) }
      }),
      { threshold: 0.1 }
    )
    sectionRef.current?.querySelectorAll('.reveal')
      .forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  // Auto-advance
  useEffect(() => {
    const t = setInterval(() => setActive(a => (a + 1) % reviews.length), 4500)
    return () => clearInterval(t)
  }, [])

  return (
    <section id="contact" ref={sectionRef} className="bg-[#0a0a0a] py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="text-white/40 text-xs tracking-[0.4em] uppercase mb-3">— Reviews</p>
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-white">What They Say</h2>
        </div>

        {/* Slider */}
        <div className="reveal d2 overflow-hidden">
          <div
            className="tslider"
            style={{ transform: `translateX(-${active * 100}%)` }}
          >
            {reviews.map(r => (
              <div key={r.id} className="min-w-full px-2 md:px-12">
                <div className="glass-card rounded-2xl p-8 md:p-12 text-center">
                  {/* Stars */}
                  <div className="flex justify-center gap-1 mb-6">
                    {[...Array(r.rating)].map((_, i) => (
                      <span key={i} className="text-white text-base">★</span>
                    ))}
                  </div>
                  {/* Quote */}
                  <p className="text-white/70 text-base md:text-lg leading-relaxed font-light mb-8 max-w-2xl mx-auto">
                    "{r.text}"
                  </p>
                  {/* Author */}
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white text-xs font-bold tracking-wide">
                      {r.avatar}
                    </div>
                    <div className="text-left">
                      <p className="text-white text-sm font-semibold">{r.name}</p>
                      <p className="text-white/40 text-xs">{r.handle}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="reveal d3 flex justify-center gap-2 mt-8">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-1 rounded-full transition-all duration-500 ${i === active ? 'w-8 bg-white' : 'w-2 bg-white/20'}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

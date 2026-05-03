import { useEffect, useRef } from 'react'

const tickers = [
  'NEW ARRIVALS', '·', 'STREETWEAR', '·', 'ESSENTIALS', '·',
  'SS 2025', '·', 'LIMITED DROPS', '·', 'PREMIUM QUALITY', '·',
  'NEW ARRIVALS', '·', 'STREETWEAR', '·', 'ESSENTIALS', '·',
  'SS 2025', '·', 'LIMITED DROPS', '·', 'PREMIUM QUALITY', '·',
]

const collections = [
  {
    id: 'c1',
    label: 'New Arrivals',
    title: 'Matte Oversized Jacket',
    image: '/hero_model.png',
    span: 'col-span-2 row-span-2',
    height: 'h-[520px]',
  },
  {
    id: 'c2',
    label: 'Streetwear',
    title: 'Dark Utility Cargo',
    image: '/collection_streetwear.png',
    span: 'col-span-1',
    height: 'h-[250px]',
  },
  {
    id: 'c3',
    label: 'Essentials',
    title: 'Tonal Essentials Set',
    image: '/collection_essentials.png',
    span: 'col-span-1',
    height: 'h-[250px]',
  },
]

export default function FeaturedCollection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target) }
      }),
      { threshold: 0.12 }
    )
    sectionRef.current?.querySelectorAll('.reveal, .reveal-l, .reveal-r')
      .forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="collections" ref={sectionRef} className="bg-[#0a0a0a] py-24">
      {/* Ticker */}
      <div className="overflow-hidden border-y border-white/[0.06] py-4 mb-20">
        <div className="marquee-track">
          {tickers.concat(tickers).map((t, i) => (
            <span key={i} className="mx-5 text-white/25 text-xs tracking-[0.35em] uppercase font-medium whitespace-nowrap">
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="px-6 md:px-12 lg:px-20">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="reveal">
            <p className="text-white/40 text-xs tracking-[0.4em] uppercase mb-3">— Featured</p>
            <h2 className="font-poppins font-bold text-4xl md:text-5xl text-white">
              The Collection
            </h2>
          </div>
          <a href="#shop" className="reveal d2 btn-outline px-6 py-3 rounded-full text-xs font-semibold tracking-widest uppercase self-start md:self-auto">
            View All →
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {collections.map((c, i) => (
            <div
              key={c.id}
              className={`reveal d${i + 1} group relative overflow-hidden rounded-2xl bg-[#111] cursor-pointer ${c.height} ${i === 0 ? 'md:col-span-2 md:row-span-2 md:h-auto' : ''}`}
            >
              <img
                src={c.image}
                alt={c.title}
                className="card-img w-full h-full object-cover object-center"
              />
              {/* Overlay */}
              <div className="card-overlay absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                <span className="text-white/50 text-[10px] tracking-[0.35em] uppercase mb-1">{c.label}</span>
                <p className="text-white font-poppins font-semibold text-lg">{c.title}</p>
                <button className="mt-3 self-start text-xs text-white/70 border border-white/20 px-4 py-2 rounded-full hover:bg-white/10 transition-colors">
                  Shop This →
                </button>
              </div>
              {/* Always visible label on non-hovered */}
              <div className="absolute top-4 left-4 glass px-3 py-1 rounded-full">
                <span className="text-white/70 text-[10px] tracking-widest uppercase">{c.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { useEffect, useRef, useState } from 'react'

const products = [
  { id: 'p1', name: 'Shadow Bomber Jacket', price: '$289', tag: 'New', image: '/product_jacket.png' },
  { id: 'p2', name: 'Blanc Oversized Tee', price: '$79', tag: 'Bestseller', image: '/product_tee.png' },
  { id: 'p3', name: 'Utility Cargo Trousers', price: '$149', tag: 'Limited', image: '/product_cargo.png' },
  { id: 'p4', name: 'Noir Streetwear Set', price: '$219', tag: 'New', image: '/collection_streetwear.png' },
]

function ProductCard({ product, delay }) {
  const [added, setAdded] = useState(false)

  const handleAdd = () => {
    setAdded(true)
    setTimeout(() => setAdded(false), 1800)
  }

  return (
    <div className={`reveal d${delay} group relative cursor-pointer`}>
      {/* Image container */}
      <div className="relative overflow-hidden rounded-xl bg-[#111] aspect-[3/4] mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="card-img w-full h-full object-cover object-center"
        />
        {/* Tag */}
        <div className="absolute top-3 left-3 glass px-3 py-1 rounded-full">
          <span className="text-white/80 text-[10px] tracking-widest uppercase">{product.tag}</span>
        </div>

        {/* Hover overlay: Quick View + Add to Cart */}
        <div className="card-overlay absolute inset-0 bg-black/50 flex flex-col items-center justify-end pb-6 gap-2 px-4">
          <button className="w-full btn-primary py-3 rounded-full text-xs font-semibold tracking-widest uppercase"
            onClick={handleAdd}>
            {added ? '✓ Added!' : 'Add to Cart'}
          </button>
          <button className="w-full btn-outline py-3 rounded-full text-xs font-semibold tracking-widest uppercase">
            Quick View
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="flex justify-between items-start px-1">
        <div>
          <h3 className="text-white text-sm font-medium mb-1 group-hover:text-white/80 transition-colors">
            {product.name}
          </h3>
          <p className="text-white/40 text-xs tracking-wide">Devnix Studio</p>
        </div>
        <span className="text-white font-poppins font-semibold text-sm">{product.price}</span>
      </div>
    </div>
  )
}

export default function ProductShowcase() {
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

  return (
    <section id="shop" ref={sectionRef} className="bg-[#080808] py-24 px-6 md:px-12 lg:px-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
        <div className="reveal">
          <p className="text-white/40 text-xs tracking-[0.4em] uppercase mb-3">— Shop</p>
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-white">Latest Drops</h2>
        </div>
        <div className="reveal d2 flex gap-2">
          {['All', 'Jackets', 'Tees', 'Trousers'].map(f => (
            <button
              key={f}
              className="px-4 py-2 rounded-full text-xs tracking-wide uppercase border border-white/10 text-white/50 hover:text-white hover:border-white/30 transition-all"
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
        {products.map((p, i) => (
          <ProductCard key={p.id} product={p} delay={i + 1} />
        ))}
      </div>

      {/* Load more */}
      <div className="reveal mt-14 flex justify-center">
        <button className="btn-outline px-10 py-4 rounded-full text-xs font-semibold tracking-widest uppercase">
          Load More
        </button>
      </div>
    </section>
  )
}

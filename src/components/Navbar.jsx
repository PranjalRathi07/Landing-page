import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['Home', 'Shop', 'Collections', 'About', 'Contact']

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 flex items-center justify-between ${scrolled ? 'scrolled' : 'bg-transparent'}`}
    >
      {/* Logo */}
      <a href="#hero" className="font-poppins font-bold text-xl tracking-[0.15em] text-white uppercase select-none">
        Devnix<span className="text-white/40">Studio</span>
      </a>

      {/* Desktop nav */}
      <ul className="hidden md:flex items-center gap-8">
        {links.map(l => (
          <li key={l}>
            <a
              href={`#${l.toLowerCase()}`}
              className="text-sm font-medium text-white/60 hover:text-white transition-colors duration-300 tracking-wide uppercase"
            >
              {l}
            </a>
          </li>
        ))}
      </ul>

      {/* Desktop CTA */}
      <a
        href="#shop"
        className="hidden md:inline-flex btn-primary px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide"
      >
        Shop Now
      </a>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="md:hidden flex flex-col gap-1.5 p-2"
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass border-t border-white/5 px-6 py-6 flex flex-col gap-4">
          {links.map(l => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setMobileOpen(false)}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors uppercase tracking-widest"
            >
              {l}
            </a>
          ))}
          <a href="#shop" className="btn-primary mt-2 px-5 py-3 rounded-full text-sm font-semibold text-center tracking-wide">
            Shop Now
          </a>
        </div>
      )}
    </nav>
  )
}

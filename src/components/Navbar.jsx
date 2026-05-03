import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How it Works', href: '#how-it-works' },
  { label: 'Showcase', href: '#showcase' },
  { label: 'Pricing', href: '#pricing' },
];

const ZapIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const MenuIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const XIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        transition: 'all 0.5s ease',
        transform: visible ? 'translateY(0)' : 'translateY(-80px)',
        opacity: visible ? 1 : 0,
        background: scrolled ? 'rgba(0,0,0,0.6)' : 'transparent',
        backdropFilter: scrolled ? 'blur(24px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
        boxShadow: scrolled ? '0 25px 50px rgba(0,0,0,0.5)' : 'none',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
          <div style={{
            width: 32, height: 32, borderRadius: 10,
            background: 'linear-gradient(135deg, #7c3aed, #3b82f6)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 0 20px rgba(124,58,237,0.4)',
          }}>
            <ZapIcon />
          </div>
          <span className="gradient-text" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 18, letterSpacing: '-0.5px' }}>Nexus</span>
        </a>

        {/* Desktop Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }} className="hide-mobile">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = '#fff'} onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.6)'}>
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }} className="hide-mobile">
          <a href="#" style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontWeight: 500, padding: '8px 16px', transition: 'color 0.2s' }}
            onMouseEnter={e => e.target.style.color = '#fff'} onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.6)'}>
            Sign in
          </a>
          <a href="#" className="btn-glow" style={{
            fontSize: 14, fontWeight: 600, padding: '10px 20px', borderRadius: 12,
            background: 'linear-gradient(135deg, #7c3aed, #3b82f6)', color: '#fff',
            textDecoration: 'none', transition: 'all 0.3s', boxShadow: '0 10px 30px rgba(124,58,237,0.25)',
          }}>
            Get Started Free
          </a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.7)', cursor: 'pointer', padding: 4 }} className="show-mobile">
          {menuOpen ? <XIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="glass-strong" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '16px 24px 24px', display: 'flex', flexDirection: 'column', gap: 12 }}>
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)}
              style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: 14, fontWeight: 500, padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              {link.label}
            </a>
          ))}
          <a href="#" style={{
            marginTop: 8, padding: '12px 20px', borderRadius: 12, textAlign: 'center',
            background: 'linear-gradient(135deg, #7c3aed, #3b82f6)', color: '#fff',
            textDecoration: 'none', fontSize: 14, fontWeight: 600,
          }}>Get Started Free</a>
        </div>
      )}
    </nav>
  );
}

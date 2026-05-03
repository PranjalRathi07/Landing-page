const footerLinks = {
  Product: ['Features', 'Pricing', 'Changelog', 'Roadmap', 'Status'],
  Developers: ['Documentation', 'API Reference', 'CLI', 'SDK', 'Open Source'],
  Company: ['About', 'Blog', 'Careers', 'Press', 'Contact'],
  Legal: ['Privacy', 'Terms', 'Security', 'Cookies'],
};

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: 64, paddingBottom: 32, position: 'relative' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', gap: 32, marginBottom: 64 }} className="footer-grid">
          {/* Brand */}
          <div>
            <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none', marginBottom: 16, width: 'fit-content' }}>
              <div style={{ width: 32, height: 32, borderRadius: 10, background: 'linear-gradient(135deg, #7c3aed, #3b82f6)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 20px rgba(124,58,237,0.4)', fontSize: 16 }}>⚡</div>
              <span className="gradient-text" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 18 }}>Nexus</span>
            </a>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, maxWidth: 220, marginBottom: 20 }}>
              The modern deployment platform built for teams who refuse to compromise.
            </p>
            <div style={{ display: 'flex', gap: 8 }}>
              {['𝕏', 'ⓖ', 'in'].map((icon, i) => (
                <a key={i} href="#" style={{
                  width: 32, height: 32, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                  color: 'rgba(255,255,255,0.4)', fontSize: 14, textDecoration: 'none', transition: 'all 0.2s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.4)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; }}>
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 style={{ fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: 16 }}>{category}</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', textDecoration: 'none', transition: 'color 0.2s' }}
                      onMouseEnter={e => { e.target.style.color = 'rgba(255,255,255,0.7)'; }}
                      onMouseLeave={e => { e.target.style.color = 'rgba(255,255,255,0.35)'; }}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.05)', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)' }}>© 2025 Nexus, Inc. All rights reserved.</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#34d399', animation: 'pulse 2s infinite' }} />
            <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>All systems operational</span>
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 900px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } } @media (max-width: 480px) { .footer-grid { grid-template-columns: 1fr !important; } } @keyframes pulse { 0%,100%{opacity:1;} 50%{opacity:0.4;} } .hide-mobile { display: flex !important; } .show-mobile { display: none !important; } @media (max-width: 768px) { .hide-mobile { display: none !important; } .show-mobile { display: block !important; } }`}</style>
    </footer>
  );
}

import { useEffect, useRef, useState } from 'react';

function useScrollReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

export default function CTA() {
  const [ref, visible] = useScrollReveal();

  return (
    <section style={{ padding: '128px 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, zIndex: -1, background: 'linear-gradient(to bottom, transparent, rgba(79,36,162,0.12), transparent)' }} />
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 1000, height: 500, background: 'radial-gradient(ellipse, rgba(124,58,237,0.1) 0%, transparent 70%)', zIndex: -1 }} />
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>
        <div ref={ref}
          style={{
            position: 'relative', borderRadius: 40, padding: 'clamp(48px, 8vw, 80px)',
            background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(40px)',
            border: '1px solid rgba(255,255,255,0.08)', textAlign: 'center',
            overflow: 'hidden',
            opacity: visible ? 1 : 0,
            transform: visible ? 'scale(1)' : 'scale(0.92)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          {/* Inner gradient */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(124,58,237,0.08) 0%, transparent 50%, rgba(59,130,246,0.08) 100%)', borderRadius: 40 }} />
          {/* Corner decorations */}
          <div style={{ position: 'absolute', top: 32, left: 32, width: 80, height: 80, borderRadius: '50%', border: '1px solid rgba(124,58,237,0.2)' }} />
          <div style={{ position: 'absolute', bottom: 32, right: 32, width: 56, height: 56, borderRadius: '50%', border: '1px solid rgba(59,130,246,0.2)' }} />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <div className="glass" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 16px', borderRadius: 99, border: '1px solid rgba(124,58,237,0.2)', marginBottom: 32 }}>
              <span>✨</span>
              <span style={{ fontSize: 14, color: '#c4b5fd', fontWeight: 500 }}>Join 50,000+ developers</span>
            </div>

            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 900, letterSpacing: '-1.5px', marginBottom: 24, lineHeight: 1.1 }}>
              Ready to ship at<br /><span className="gradient-text">the speed of thought?</span>
            </h2>

            <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.45)', marginBottom: 40, maxWidth: 480, margin: '0 auto 40px' }}>
              Start for free. No credit card required. Deploy your first project in under 60 seconds.
            </p>

            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="#" className="btn-glow" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '16px 40px', borderRadius: 16,
                background: 'linear-gradient(135deg, #7c3aed, #3b82f6)',
                color: '#fff', fontWeight: 600, fontSize: 16, textDecoration: 'none',
                boxShadow: '0 20px 60px rgba(124,58,237,0.3)', transition: 'all 0.3s',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px) scale(1.03)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; }}>
                Get Started Free →
              </a>
              <a href="#" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '16px 40px', borderRadius: 16,
                background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)',
                color: '#fff', fontWeight: 500, fontSize: 16, textDecoration: 'none', transition: 'all 0.3s',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.transform = 'none'; }}>
                Talk to Sales
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

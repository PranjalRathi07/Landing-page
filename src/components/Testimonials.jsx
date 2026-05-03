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

const testimonials = [
  { name: 'Sarah Chen', role: 'CTO at Vertico', avatar: 'SC', color: '#8b5cf6', quote: "Nexus completely transformed our deployment workflow. What used to take our team hours now happens automatically in under a minute. The DX is unlike anything I've seen." },
  { name: 'Marcus Johnson', role: 'Lead Engineer at Blaze', avatar: 'MJ', color: '#60a5fa', quote: "We migrated our entire infrastructure to Nexus in a weekend. The documentation is phenomenal and their support team is incredibly responsive. 10/10 would recommend." },
  { name: 'Priya Sharma', role: 'Founder at Loopify', avatar: 'PS', color: '#34d399', quote: "As a solo founder, Nexus gives me the power of a full DevOps team. I can focus entirely on my product instead of wrestling with infrastructure. It's a game changer." },
  { name: 'Alex Rivera', role: 'VP Engineering at Crest', avatar: 'AR', color: '#f472b6', quote: "The analytics and monitoring built into Nexus are best-in-class. We caught and resolved a critical issue in production before any users were affected thanks to their alert system." },
  { name: 'James Park', role: 'Staff Engineer at Ditto', avatar: 'JP', color: '#fbbf24', quote: "Preview deployments per PR is the killer feature for us. Our QA cycle shrunk by 60% and the whole team ships with way more confidence now. Absolutely worth every penny." },
  { name: 'Lena Fischer', role: 'Engineering Manager at Novu', avatar: 'LF', color: '#fb923c', quote: "Nexus's global edge network brought our app latency down to single-digit milliseconds worldwide. Our users in APAC finally get the same experience as everyone else." },
];

export default function Testimonials() {
  const [headerRef, headerVisible] = useScrollReveal();
  const [gridRef, gridVisible] = useScrollReveal();

  return (
    <section id="testimonials" style={{ padding: '128px 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: 900, height: 400, background: 'radial-gradient(ellipse, rgba(59,130,246,0.05) 0%, transparent 70%)', zIndex: -1 }} />
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <div ref={headerRef} style={{ textAlign: 'center', marginBottom: 80, opacity: headerVisible ? 1 : 0, transform: headerVisible ? 'none' : 'translateY(30px)', transition: 'all 0.7s ease' }}>
          <div className="glass" style={{ display: 'inline-flex', padding: '8px 16px', borderRadius: 99, marginBottom: 24 }}>
            <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase' }}>Testimonials</span>
          </div>
          <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 900, letterSpacing: '-1.5px', lineHeight: 1.1 }}>
            Loved by <span className="gradient-text">engineers</span><br />everywhere
          </h2>
        </div>

        <div ref={gridRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
          {testimonials.map((t, i) => (
            <div key={t.name}
              style={{
                opacity: gridVisible ? 1 : 0,
                transform: gridVisible ? 'none' : 'translateY(40px)',
                transition: `opacity 0.6s ease ${i * 0.08}s, transform 0.6s ease ${i * 0.08}s`,
              }}
            >
              <div className="glass" style={{ borderRadius: 24, padding: 24, border: '1px solid rgba(255,255,255,0.07)', position: 'relative', overflow: 'hidden', transition: 'all 0.3s', cursor: 'default', height: '100%' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px) scale(1.01)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; }}>
                <div style={{ position: 'absolute', top: 16, right: 20, fontSize: 36, opacity: 0.08 }}>❝</div>
                {/* Stars */}
                <div style={{ display: 'flex', gap: 3, marginBottom: 16 }}>
                  {[1,2,3,4,5].map((s) => <span key={s} style={{ color: '#facc15', fontSize: 13 }}>★</span>)}
                </div>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, marginBottom: 20, position: 'relative', zIndex: 1 }}>{t.quote}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{ width: 36, height: 36, borderRadius: '50%', background: t.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, color: '#fff', flexShrink: 0 }}>
                    {t.avatar}
                  </div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: '#fff' }}>{t.name}</div>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>{t.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

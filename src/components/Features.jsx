import { useEffect, useRef, useState } from 'react';

const features = [
  { icon: '⚡', title: 'Lightning Deployments', description: 'Deploy your entire stack in under 30 seconds with zero-downtime rollouts and instant rollbacks.', accent: '#facc15' },
  { icon: '🛡️', title: 'Enterprise Security', description: 'SOC 2 Type II certified. End-to-end encryption, SSO, RBAC, and automated compliance checks built in.', accent: '#34d399' },
  { icon: '📊', title: 'Real-time Analytics', description: 'Deep observability with live dashboards, custom alerts, and AI-powered anomaly detection.', accent: '#60a5fa' },
  { icon: '🌐', title: 'Global Edge Network', description: '300+ PoPs worldwide. Serve every user from the nearest edge location with sub-10ms latency.', accent: '#a78bfa' },
  { icon: '💻', title: 'Developer Experience', description: 'Git-native workflows, preview environments per PR, and a CLI that gets out of your way.', accent: '#f472b6' },
  { icon: '🤖', title: 'AI-Powered Automation', description: 'Intelligent auto-scaling, cost optimization, and predictive infrastructure management powered by ML.', accent: '#818cf8' },
];

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

export default function Features() {
  const [headerRef, headerVisible] = useScrollReveal();
  const [gridRef, gridVisible] = useScrollReveal();

  return (
    <section id="features" style={{ padding: '128px 0', position: 'relative' }}>
      <div style={{ position: 'absolute', inset: 0, zIndex: -1, background: 'radial-gradient(ellipse 800px 500px at 50% 50%, rgba(124,58,237,0.05) 0%, transparent 70%)' }} />
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div ref={headerRef} style={{ textAlign: 'center', marginBottom: 80, opacity: headerVisible ? 1 : 0, transform: headerVisible ? 'none' : 'translateY(30px)', transition: 'all 0.7s ease' }}>
          <div className="glass" style={{ display: 'inline-flex', alignItems: 'center', padding: '8px 16px', borderRadius: 99, marginBottom: 24 }}>
            <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase' }}>Features</span>
          </div>
          <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 900, letterSpacing: '-1.5px', marginBottom: 20, lineHeight: 1.1 }}>
            Everything you need<br /><span className="gradient-text">to move fast</span>
          </h2>
          <p style={{ maxWidth: 560, margin: '0 auto', fontSize: 18, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7 }}>
            From code to production — Nexus gives your team every tool needed to build, ship, and scale without compromise.
          </p>
        </div>

        {/* Grid */}
        <div ref={gridRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
          {features.map((f, i) => (
            <div key={f.title}
              style={{
                opacity: gridVisible ? 1 : 0,
                transform: gridVisible ? 'none' : 'translateY(50px)',
                transition: `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`,
              }}
            >
              <div
                className="glass"
                style={{ borderRadius: 24, padding: 28, border: '1px solid rgba(255,255,255,0.07)', cursor: 'default', transition: 'all 0.35s ease', height: '100%' }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-6px) scale(1.01)';
                  e.currentTarget.style.borderColor = `${f.accent}40`;
                  e.currentTarget.style.boxShadow = `0 30px 80px ${f.accent}10`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  width: 48, height: 48, borderRadius: 16, marginBottom: 20,
                  background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22,
                  transition: 'transform 0.3s',
                }}>
                  {f.icon}
                </div>
                <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 12 }}>{f.title}</h3>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7 }}>{f.description}</p>
                <div style={{ marginTop: 20, fontSize: 12, color: 'rgba(255,255,255,0.3)', transition: 'color 0.3s' }}>Learn more →</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

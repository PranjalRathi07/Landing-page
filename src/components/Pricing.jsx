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

const plans = [
  {
    name: 'Hobby', price: { monthly: 0, annual: 0 },
    description: 'Perfect for personal projects and side hustles.',
    features: ['3 projects', '100GB bandwidth/mo', 'Shared compute', 'Community support', 'Auto-deployments', 'Preview URLs'],
    cta: 'Start Free', highlighted: false,
  },
  {
    name: 'Pro', price: { monthly: 29, annual: 20 },
    description: 'For growing teams that need power and reliability.',
    features: ['Unlimited projects', '1TB bandwidth/mo', 'Dedicated compute', 'Priority support', 'Custom domains (50)', 'Analytics dashboard', 'SSO / SAML', 'Rollback & previews'],
    cta: 'Start Pro Trial', highlighted: true, badge: 'Most Popular',
  },
  {
    name: 'Enterprise', price: { monthly: 99, annual: 79 },
    description: 'Full control, compliance, and enterprise-grade SLAs.',
    features: ['Everything in Pro', 'Unlimited bandwidth', 'Dedicated infra', '24/7 SLA support', 'SOC 2 & HIPAA', 'Custom SLA (99.99%)', 'Audit logs', 'Private networking'],
    cta: 'Contact Sales', highlighted: false,
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);
  const [headerRef, headerVisible] = useScrollReveal();
  const [cardsRef, cardsVisible] = useScrollReveal();

  return (
    <section id="pricing" style={{ padding: '128px 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 800, height: 600, background: 'radial-gradient(ellipse, rgba(124,58,237,0.06) 0%, transparent 70%)', zIndex: -1 }} />
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div ref={headerRef} style={{ textAlign: 'center', marginBottom: 64, opacity: headerVisible ? 1 : 0, transform: headerVisible ? 'none' : 'translateY(30px)', transition: 'all 0.7s ease' }}>
          <div className="glass" style={{ display: 'inline-flex', padding: '8px 16px', borderRadius: 99, marginBottom: 24 }}>
            <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase' }}>Pricing</span>
          </div>
          <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 900, letterSpacing: '-1.5px', marginBottom: 20, lineHeight: 1.1 }}>
            Simple, transparent <span className="gradient-text">pricing</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 18, marginBottom: 32 }}>No hidden fees. No surprises. Cancel anytime.</p>
          {/* Toggle */}
          <div className="glass" style={{ display: 'inline-flex', borderRadius: 99, padding: '6px 8px', border: '1px solid rgba(255,255,255,0.1)' }}>
            {['Monthly', 'Annual'].map((label, idx) => (
              <button key={label} onClick={() => setAnnual(idx === 1)} style={{
                padding: '6px 16px', borderRadius: 99, fontSize: 13, fontWeight: 500, cursor: 'pointer',
                background: annual === (idx === 1) ? 'rgba(255,255,255,0.1)' : 'transparent',
                color: annual === (idx === 1) ? '#fff' : 'rgba(255,255,255,0.4)',
                border: 'none', transition: 'all 0.2s',
              }}>
                {label}
                {idx === 1 && <span style={{ marginLeft: 6, fontSize: 10, color: '#34d399', fontWeight: 700 }}>Save 30%</span>}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div ref={cardsRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, alignItems: 'center' }}>
          {plans.map((plan, i) => (
            <div key={plan.name}
              style={{
                position: 'relative',
                opacity: cardsVisible ? 1 : 0,
                transform: cardsVisible ? (plan.highlighted ? 'scale(1.05)' : 'none') : 'translateY(50px)',
                transition: `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`,
              }}
            >
              {plan.badge && (
                <div style={{ position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)', padding: '4px 16px', borderRadius: 99, background: 'linear-gradient(135deg, #7c3aed, #3b82f6)', fontSize: 11, fontWeight: 700, color: '#fff', whiteSpace: 'nowrap', boxShadow: '0 8px 24px rgba(124,58,237,0.4)', zIndex: 1 }}>
                  {plan.badge}
                </div>
              )}
              <div
                style={{
                  borderRadius: 24, padding: 28, transition: 'transform 0.3s',
                  background: plan.highlighted ? 'linear-gradient(135deg, rgba(79,36,162,0.4), rgba(29,78,156,0.2))' : 'rgba(255,255,255,0.03)',
                  border: plan.highlighted ? '1px solid rgba(124,58,237,0.3)' : '1px solid rgba(255,255,255,0.08)',
                  backdropFilter: 'blur(20px)',
                  boxShadow: plan.highlighted ? '0 40px 100px rgba(124,58,237,0.12)' : 'none',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; }}
              >
                <div style={{ marginBottom: 24 }}>
                  <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 6 }}>{plan.name}</h3>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)' }}>{plan.description}</p>
                </div>
                <div style={{ marginBottom: 24 }}>
                  <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4 }}>
                    <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: 48, fontWeight: 900, color: '#fff', lineHeight: 1 }}>
                      ${annual ? plan.price.annual : plan.price.monthly}
                    </span>
                    {(annual ? plan.price.annual : plan.price.monthly) > 0 && (
                      <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 14, paddingBottom: 6 }}>/mo</span>
                    )}
                  </div>
                  {annual && plan.price.annual > 0 && (
                    <div style={{ fontSize: 11, color: '#34d399', marginTop: 4 }}>Billed annually</div>
                  )}
                </div>
                <ul style={{ listStyle: 'none', marginBottom: 28, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {plan.features.map((feat) => (
                    <li key={feat} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, color: 'rgba(255,255,255,0.65)' }}>
                      <span style={{ color: plan.highlighted ? '#a78bfa' : '#34d399', flexShrink: 0 }}>✓</span>
                      {feat}
                    </li>
                  ))}
                </ul>
                <a href="#" style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                  padding: '14px 20px', borderRadius: 16, fontSize: 14, fontWeight: 600, textDecoration: 'none',
                  background: plan.highlighted ? 'linear-gradient(135deg, #7c3aed, #3b82f6)' : 'rgba(255,255,255,0.05)',
                  color: '#fff', border: plan.highlighted ? 'none' : '1px solid rgba(255,255,255,0.1)',
                  boxShadow: plan.highlighted ? '0 10px 30px rgba(124,58,237,0.3)' : 'none',
                  transition: 'all 0.3s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.opacity = '0.9'; e.currentTarget.style.transform = 'scale(1.02)'; }}
                  onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'none'; }}>
                  {plan.highlighted && <span>⚡</span>}
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

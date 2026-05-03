import { useEffect, useRef, useState } from 'react';

function useScrollReveal(threshold = 0.1) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

const steps = [
  {
    step: '01', icon: '🔗', title: 'Connect Your Repo', accent: '#a78bfa',
    description: 'Link your GitHub, GitLab, or Bitbucket repository in seconds. Nexus auto-detects your framework and configures everything.',
    visual: [
      { text: '$ nexus login', color: 'rgba(255,255,255,0.6)' },
      { text: '✓ Authenticated as @johndoe', color: '#34d399' },
      { text: '$ nexus link github.com/johndoe/myapp', color: 'rgba(255,255,255,0.6)' },
      { text: '✓ Repository connected', color: '#34d399' },
    ],
    type: 'terminal',
  },
  {
    step: '02', icon: '⚙️', title: 'Configure & Customize', accent: '#60a5fa',
    description: 'Set environment variables, define build commands, configure custom domains — all through our intuitive dashboard or CLI.',
    visual: [
      { label: 'Build Command', value: 'npm run build', color: '#60a5fa' },
      { label: 'Node Version', value: '20.x LTS', color: 'rgba(255,255,255,0.7)' },
      { label: 'Output Dir', value: './dist', color: 'rgba(255,255,255,0.7)' },
      { label: 'Custom Domain', value: 'myapp.com ✓', color: '#34d399' },
    ],
    type: 'config',
  },
  {
    step: '03', icon: '🚀', title: 'Deploy with Confidence', accent: '#34d399',
    description: 'Push to any branch and watch your changes go live globally. Every deployment includes preview URLs and full rollback support.',
    visual: ['Installing deps', 'Building app', 'Optimizing assets', 'Deploying globally', 'DNS propagation'],
    type: 'deploy',
  },
  {
    step: '04', icon: '📈', title: 'Monitor & Iterate', accent: '#fbbf24',
    description: 'Real-time logs, analytics, and alerts keep you in control. Iterate faster with AI insights that proactively surface issues.',
    visual: [
      { label: 'Requests/sec', value: '24.8k', color: '#34d399' },
      { label: 'Error Rate', value: '0.002%', color: '#34d399' },
      { label: 'Avg Latency', value: '8ms', color: '#60a5fa' },
      { label: 'Uptime', value: '99.99%', color: '#a78bfa' },
    ],
    type: 'metrics',
  },
];

export default function HowItWorks() {
  const [headerRef, headerVisible] = useScrollReveal();
  const [stepsRef, stepsVisible] = useScrollReveal();

  return (
    <section id="how-it-works" style={{ padding: '128px 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', left: 0, top: '50%', width: 600, height: 600, background: 'radial-gradient(ellipse, rgba(59,130,246,0.05) 0%, transparent 70%)', zIndex: -1 }} />
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div ref={headerRef} style={{ textAlign: 'center', marginBottom: 80, opacity: headerVisible ? 1 : 0, transform: headerVisible ? 'none' : 'translateY(30px)', transition: 'all 0.7s ease' }}>
          <div className="glass" style={{ display: 'inline-flex', padding: '8px 16px', borderRadius: 99, marginBottom: 24 }}>
            <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase' }}>How it Works</span>
          </div>
          <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 900, letterSpacing: '-1.5px', marginBottom: 20, lineHeight: 1.1 }}>
            From zero to prod<br /><span className="gradient-text-warm">in four steps</span>
          </h2>
          <p style={{ maxWidth: 500, margin: '0 auto', fontSize: 18, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7 }}>
            A simple, battle-tested workflow designed for modern development teams.
          </p>
        </div>

        {/* Steps */}
        <div ref={stepsRef} style={{ display: 'flex', flexDirection: 'column', gap: 64 }}>
          {steps.map((step, i) => (
            <div key={step.step}
              style={{
                display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center',
                opacity: stepsVisible ? 1 : 0,
                transform: stepsVisible ? 'none' : (i % 2 === 0 ? 'translateX(-60px)' : 'translateX(60px)'),
                transition: `opacity 0.7s ease ${i * 0.15}s, transform 0.7s ease ${i * 0.15}s`,
              }}
              className="step-grid"
            >
              {/* Content */}
              <div style={{ order: i % 2 === 0 ? 0 : 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                  <div style={{ width: 48, height: 48, borderRadius: 16, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22 }}>
                    {step.icon}
                  </div>
                  <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: step.accent }}>Step {step.step}</span>
                </div>
                <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 28, fontWeight: 800, color: '#fff', marginBottom: 16, letterSpacing: '-0.5px' }}>{step.title}</h3>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', lineHeight: 1.8 }}>{step.description}</p>
              </div>

              {/* Visual */}
              <div style={{ order: i % 2 === 0 ? 1 : 0 }}>
                <div className="glass-strong" style={{ borderRadius: 24, padding: 24, border: '1px solid rgba(255,255,255,0.08)', transition: 'transform 0.3s' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px) scale(1.01)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'none'; }}>
                  {step.type === 'terminal' && (
                    <div style={{ fontFamily: 'monospace', fontSize: 13 }}>
                      <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', marginBottom: 12 }}>terminal</div>
                      {step.visual.map((line, j) => (
                        <div key={j} style={{ color: line.color, marginBottom: 6 }}>{line.text}</div>
                      ))}
                    </div>
                  )}
                  {step.type === 'config' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                      {step.visual.map((row, j) => (
                        <div key={j} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: j < step.visual.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>{row.label}</span>
                          <span style={{ fontSize: 12, fontFamily: 'monospace', fontWeight: 500, color: row.color }}>{row.value}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  {step.type === 'deploy' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: 'rgba(255,255,255,0.4)', marginBottom: 4 }}>
                        <span>Deploying main → production</span>
                        <span style={{ color: '#34d399' }}>Live</span>
                      </div>
                      {step.visual.map((task, j) => (
                        <div key={task} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                          <div style={{ width: 16, height: 16, borderRadius: '50%', background: j < 4 ? 'rgba(52,211,153,0.2)' : 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                            <div style={{ width: 6, height: 6, borderRadius: '50%', background: j < 4 ? '#34d399' : 'rgba(255,255,255,0.2)' }} />
                          </div>
                          <span style={{ fontSize: 13, color: j < 4 ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.3)' }}>{task}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  {step.type === 'metrics' && (
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                      {step.visual.map((m) => (
                        <div key={m.label} className="glass" style={{ borderRadius: 14, padding: 14, border: '1px solid rgba(255,255,255,0.05)' }}>
                          <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)', marginBottom: 4 }}>{m.label}</div>
                          <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 22, fontWeight: 700, color: '#fff' }}>{m.value}</div>
                          <div style={{ fontSize: 11, color: m.color }}>↑ trending</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`.step-grid { } @media (max-width: 768px) { .step-grid { grid-template-columns: 1fr !important; gap: 32px !important; } .step-grid > div { order: unset !important; } }`}</style>
    </section>
  );
}

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

const barHeights = [30,55,42,78,65,90,70,85,60,95,80,72,88,100,76,92];

export default function Showcase() {
  const [headerRef, headerVisible] = useScrollReveal();
  const [gridRef, gridVisible] = useScrollReveal();

  return (
    <section id="showcase" style={{ padding: '128px 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', right: 0, top: '33%', width: 700, height: 500, background: 'radial-gradient(ellipse, rgba(124,58,237,0.06) 0%, transparent 70%)', zIndex: -1 }} />
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div ref={headerRef} style={{ textAlign: 'center', marginBottom: 80, opacity: headerVisible ? 1 : 0, transform: headerVisible ? 'none' : 'translateY(30px)', transition: 'all 0.7s ease' }}>
          <div className="glass" style={{ display: 'inline-flex', padding: '8px 16px', borderRadius: 99, marginBottom: 24 }}>
            <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase' }}>Showcase</span>
          </div>
          <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 900, letterSpacing: '-1.5px', marginBottom: 20, lineHeight: 1.1 }}>
            Built for the <span className="gradient-text">modern stack</span>
          </h2>
          <p style={{ maxWidth: 560, margin: '0 auto', fontSize: 18, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7 }}>
            A unified workspace that brings your entire development lifecycle into one beautiful interface.
          </p>
        </div>

        {/* Grid */}
        <div ref={gridRef} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 20, opacity: gridVisible ? 1 : 0, transform: gridVisible ? 'none' : 'translateY(50px)', transition: 'all 0.7s ease' }} className="showcase-grid">
          {/* Main Dashboard */}
          <div className="glass-strong" style={{ borderRadius: 24, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)', transition: 'transform 0.3s' }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'none'; }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 20px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span>🖥️</span>
                <span style={{ fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.7)' }}>Project Dashboard</span>
              </div>
              <div style={{ padding: '4px 10px', borderRadius: 99, background: 'rgba(52,211,153,0.15)', border: '1px solid rgba(52,211,153,0.3)', color: '#34d399', fontSize: 11, fontWeight: 600 }}>Live</div>
            </div>
            <div style={{ padding: 24, display: 'flex', gap: 16 }}>
              {/* Sidebar */}
              <div style={{ width: 160, flexShrink: 0, display: 'flex', flexDirection: 'column', gap: 4 }}>
                {['Overview','Deployments','Analytics','Domains','Settings'].map((item, idx) => (
                  <div key={item} style={{
                    padding: '8px 12px', borderRadius: 10, fontSize: 13, fontWeight: 500, cursor: 'default',
                    background: idx === 0 ? 'rgba(124,58,237,0.15)' : 'transparent',
                    color: idx === 0 ? '#c4b5fd' : 'rgba(255,255,255,0.4)',
                    border: idx === 0 ? '1px solid rgba(124,58,237,0.2)' : '1px solid transparent',
                  }}>{item}</div>
                ))}
              </div>
              {/* Content */}
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10 }}>
                  {[{ l: 'Deploys', v: '142' }, { l: 'Uptime', v: '99.9%' }, { l: 'Regions', v: '6' }].map((m) => (
                    <div key={m.l} className="glass" style={{ borderRadius: 12, padding: 12, border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
                      <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 20, fontWeight: 700, color: '#fff' }}>{m.v}</div>
                      <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)' }}>{m.l}</div>
                    </div>
                  ))}
                </div>
                <div className="glass" style={{ borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{ padding: '10px 16px', borderBottom: '1px solid rgba(255,255,255,0.05)', fontSize: 11, color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>Recent Deployments</div>
                  {[
                    { commit: 'feat: new dashboard UI', branch: 'main', time: '2m ago' },
                    { commit: 'add rate limiting middleware', branch: 'feat/api-v2', time: '1h ago' },
                    { commit: 'fix token expiry edge case', branch: 'fix/auth-bug', time: '3h ago' },
                  ].map((d, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 16px', borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
                      <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#34d399', flexShrink: 0 }} />
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.7)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{d.commit}</div>
                        <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.35)' }}>{d.branch}</div>
                      </div>
                      <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)', flexShrink: 0 }}>{d.time}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Side Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {/* Alerts */}
            <div className="glass-strong" style={{ borderRadius: 24, border: '1px solid rgba(255,255,255,0.08)', padding: 20, transition: 'transform 0.3s' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                <span>🔔</span>
                <span style={{ fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.7)' }}>Alerts</span>
                <div style={{ marginLeft: 'auto', width: 20, height: 20, borderRadius: '50%', background: 'rgba(251,191,36,0.2)', border: '1px solid rgba(251,191,36,0.3)', color: '#fbbf24', fontSize: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>3</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {[
                  { msg: 'Memory usage above 85%', sev: 'warning', time: '5m ago' },
                  { msg: 'Deploy webhook latency high', sev: 'info', time: '15m ago' },
                  { msg: 'SSL certificate expiring', sev: 'warning', time: '1h ago' },
                ].map((a) => (
                  <div key={a.msg} style={{
                    padding: '10px 12px', borderRadius: 12, fontSize: 11,
                    background: a.sev === 'warning' ? 'rgba(251,191,36,0.08)' : 'rgba(96,165,250,0.08)',
                    border: `1px solid ${a.sev === 'warning' ? 'rgba(251,191,36,0.2)' : 'rgba(96,165,250,0.2)'}`,
                    color: a.sev === 'warning' ? 'rgba(251,191,36,0.8)' : 'rgba(147,197,253,0.8)',
                  }}>
                    <div style={{ fontWeight: 500 }}>{a.msg}</div>
                    <div style={{ opacity: 0.6, fontSize: 10 }}>{a.time}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Live Traffic */}
            <div className="glass-strong" style={{ borderRadius: 24, border: '1px solid rgba(255,255,255,0.08)', padding: 20, transition: 'transform 0.3s' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                <span>📡</span>
                <span style={{ fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.7)' }}>Live Traffic</span>
                <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 4 }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#34d399', animation: 'pulse 2s infinite' }} />
                  <span style={{ fontSize: 10, color: '#34d399' }}>Live</span>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 2, height: 64 }}>
                {barHeights.map((h, i) => (
                  <div key={i} style={{
                    flex: 1, borderRadius: 2,
                    background: 'linear-gradient(to top, rgba(59,130,246,0.7), rgba(167,139,250,0.5))',
                    height: gridVisible ? `${h}%` : '0%',
                    transition: `height 0.4s ease ${0.5 + i * 0.04}s`,
                  }} />
                ))}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8, fontSize: 10, color: 'rgba(255,255,255,0.3)' }}>
                <span>24k req/s</span><span>now</span>
              </div>
            </div>

            {/* Team */}
            <div className="glass-strong" style={{ borderRadius: 24, border: '1px solid rgba(255,255,255,0.08)', padding: 20, transition: 'transform 0.3s' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; }}>
              <div style={{ fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.7)', marginBottom: 12 }}>👥 Team Members</div>
              <div style={{ display: 'flex' }}>
                {['#8b5cf6','#60a5fa','#34d399','#f472b6','#fbbf24'].map((color, i) => (
                  <div key={i} style={{ width: 32, height: 32, borderRadius: '50%', border: '2px solid #0d0d0d', background: color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, color: '#fff', marginLeft: i > 0 ? -8 : 0 }}>
                    {['J','A','M','S','R'][i]}
                  </div>
                ))}
                <div style={{ width: 32, height: 32, borderRadius: '50%', border: '2px solid #0d0d0d', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, color: 'rgba(255,255,255,0.4)', marginLeft: -8 }}>+12</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 900px) { .showcase-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}

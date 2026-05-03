import { useEffect, useRef, useState } from 'react';

const ArrowRightIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
);

const PlayIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2">
    <polygon points="5 3 19 12 5 21 5 3" />
  </svg>
);

const SparklesIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5z" /><path d="M5 3l.75 2.25L8 6l-2.25.75L5 9l-.75-2.25L2 6l2.25-.75z" /><path d="M19 15l.75 2.25L22 18l-2.25.75L19 21l-.75-2.25L16 18l2.25-.75z" />
  </svg>
);

const stats = [
  { value: '50K+', label: 'Teams worldwide' },
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '10x', label: 'Faster deployment' },
];

const barHeights = [40, 65, 50, 80, 60, 90, 75, 95, 70, 100, 85, 110];

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const [barsVisible, setBarsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 200);
    setTimeout(() => setBarsVisible(true), 1000);
  }, []);

  const fade = (delay) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(40px)',
    transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
  });

  return (
    <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', paddingTop: 80 }}>
      {/* Background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: -1 }}>
        <div style={{ position: 'absolute', top: '25%', left: '50%', transform: 'translateX(-50%)', width: 900, height: 600, background: 'radial-gradient(ellipse, rgba(124,58,237,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '50%', left: '25%', width: 500, height: 400, background: 'radial-gradient(ellipse, rgba(59,130,246,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.03,
          backgroundImage: `linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />
      </div>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        {/* Badge */}
        <div style={{ ...fade(0), display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 16px', borderRadius: 99, marginBottom: 32 }} className="glass">
          <SparklesIcon />
          <span style={{ fontSize: 14, color: '#c4b5fd', fontWeight: 500 }}>Introducing Nexus 2.0 — The Future of Work</span>
          <ArrowRightIcon />
        </div>

        {/* Headline */}
        <h1 style={{ ...fade(0.12), fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(44px, 8vw, 88px)', fontWeight: 900, letterSpacing: '-2px', lineHeight: 1.05, marginBottom: 24 }}>
          Build Faster.<br />
          <span className="gradient-text">Ship Smarter.</span><br />
          Scale Infinitely.
        </h1>

        {/* Subheading */}
        <p style={{ ...fade(0.24), maxWidth: 620, margin: '0 auto 40px', fontSize: 'clamp(16px, 2vw, 20px)', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, fontWeight: 300 }}>
          The all-in-one platform that empowers teams to design, build, and deploy world-class products — from idea to production in record time.
        </p>

        {/* CTAs */}
        <div style={{ ...fade(0.36), display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 64 }}>
          <a href="#" className="btn-glow" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '16px 32px', borderRadius: 16,
            background: 'linear-gradient(135deg, #7c3aed, #3b82f6)',
            color: '#fff', fontWeight: 600, fontSize: 16, textDecoration: 'none',
            boxShadow: '0 20px 60px rgba(124,58,237,0.3)', transition: 'all 0.3s',
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px) scale(1.03)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0) scale(1)'; }}>
            Start Building Free <ArrowRightIcon />
          </a>
          <a href="#" style={{
            display: 'inline-flex', alignItems: 'center', gap: 12,
            padding: '16px 32px', borderRadius: 16,
            background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)',
            color: '#fff', fontWeight: 500, fontSize: 16, textDecoration: 'none', transition: 'all 0.3s',
          }}
            onMouseEnter={e => { e.currentTarget.style.border = '1px solid rgba(255,255,255,0.2)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.border = '1px solid rgba(255,255,255,0.1)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
            <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <PlayIcon />
            </div>
            Watch Demo
          </a>
        </div>

        {/* Stats */}
        <div style={{ ...fade(0.48), display: 'flex', justifyContent: 'center', gap: 'clamp(32px, 6vw, 80px)', flexWrap: 'wrap', marginBottom: 80 }}>
          {stats.map((s) => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div className="gradient-text" style={{ fontFamily: 'Outfit, sans-serif', fontSize: 32, fontWeight: 800, marginBottom: 4 }}>{s.value}</div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Mock Dashboard */}
        <div style={{ ...fade(0.6), position: 'relative', maxWidth: 900, margin: '0 auto' }}>
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%', background: 'linear-gradient(to top, #080808, transparent)', zIndex: 1, pointerEvents: 'none' }} />
          <div className="glass-strong" style={{ borderRadius: 24, overflow: 'hidden', boxShadow: '0 40px 120px rgba(124,58,237,0.08)' }}>
            {/* Browser Bar */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '14px 20px', borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.02)' }}>
              <div style={{ display: 'flex', gap: 6 }}>
                {['#ef4444','#eab308','#22c55e'].map((c) => <div key={c} style={{ width: 12, height: 12, borderRadius: '50%', background: c, opacity: 0.6 }} />)}
              </div>
              <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: 8, padding: '6px 20px', fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>app.nexus.io/dashboard</div>
              </div>
            </div>
            {/* Dashboard Content */}
            <div style={{ padding: 24, display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 16, minHeight: 260 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {/* Chart */}
                <div className="glass" style={{ borderRadius: 16, padding: 16, border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', marginBottom: 10, fontWeight: 500 }}>Revenue Overview</div>
                  <div style={{ display: 'flex', alignItems: 'flex-end', gap: 3, height: 60 }}>
                    {barHeights.map((h, i) => (
                      <div key={i} style={{
                        flex: 1, borderRadius: 3,
                        background: 'linear-gradient(to top, rgba(124,58,237,0.7), rgba(96,165,250,0.6))',
                        height: barsVisible ? `${h}%` : '0%',
                        transition: `height 0.5s ease ${0.8 + i * 0.04}s`,
                      }} />
                    ))}
                  </div>
                </div>
                {/* Metrics */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  {[{ label: 'Active Users', value: '12,489', delta: '+18%' }, { label: 'Conversion', value: '8.4%', delta: '+2.3%' }].map((m) => (
                    <div key={m.label} className="glass" style={{ borderRadius: 14, padding: 14, border: '1px solid rgba(255,255,255,0.05)' }}>
                      <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)', marginBottom: 4 }}>{m.label}</div>
                      <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 22, fontWeight: 700, color: '#fff' }}>{m.value}</div>
                      <div style={{ fontSize: 11, color: '#34d399', fontWeight: 600 }}>{m.delta}</div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Activity */}
              <div className="glass" style={{ borderRadius: 16, padding: 16, border: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', marginBottom: 14, fontWeight: 500 }}>Recent Activity</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {[
                    { name: 'Deploy v2.4', time: '2m ago', color: '#34d399' },
                    { name: 'PR #234 merged', time: '5m ago', color: '#60a5fa' },
                    { name: 'Alert resolved', time: '12m ago', color: '#a78bfa' },
                    { name: 'Build passed', time: '30m ago', color: '#fbbf24' },
                  ].map((item) => (
                    <div key={item.name} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <div style={{ width: 6, height: 6, borderRadius: '50%', background: item.color, flexShrink: 0 }} />
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.7)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.name}</div>
                        <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)' }}>{item.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

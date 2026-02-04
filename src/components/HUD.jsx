import { useStore } from '../store/useNexusStore';

export default function HUD() {
  const scroll = useStore((state) => state.scroll);
  const progress = Math.round(scroll * 100);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-40"
      style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 40, color: 'white' }}
    >
      {/* TOP LEFT – SYSTEM TITLE */}
      <div className="absolute top-6 left-6 space-y-1" style={{ position: 'absolute', top: '1.5rem', left: '1.5rem' }}>
        <h1 style={{ fontSize: '1.25rem', fontWeight: 700, letterSpacing: '0.2em' }}>THE CSE NEXUS</h1>
        <p style={{ fontSize: '0.75rem', letterSpacing: '0.3em', color: '#22d3ee' }}>Core Knowledge System v1.0</p>
      </div>

      {/* TOP RIGHT – STATUS (PREMIUM) */}
      <div className="absolute top-6 right-6" style={{ position: 'absolute', top: '1.5rem', right: '1.5rem' }}>
        <div
          style={{
            padding: '0.5rem 1rem',
            borderRadius: '0.75rem',
            background: 'linear-gradient(90deg, rgba(34,211,238,0.2), rgba(59,130,246,0.2))',
            border: '1px solid rgba(34,211,238,0.3)',
            color: '#67e8f9',
            fontSize: '0.75rem',
            letterSpacing: '0.3em',
            boxShadow: '0 0 25px rgba(0,242,255,0.35)',
          }}
        >
          PORTFOLIO_NODE_ACTIVE
        </div>
      </div>

      {/* BOTTOM LEFT – PROGRESS */}
      <div className="absolute bottom-6 left-6" style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem' }}>
        <p style={{ fontSize: '0.75rem', color: '#9ca3af', letterSpacing: '0.3em', marginBottom: '0.25rem' }}>
          Journey Progress
        </p>
        <div style={{ width: '12rem', height: '0.5rem', background: 'rgba(255,255,255,0.1)', borderRadius: '999px', overflow: 'hidden' }}>
          <div
            style={{
              height: '100%',
              width: `${progress}%`,
              background: 'linear-gradient(90deg, #22d3ee, #3b82f6)',
              transition: 'width 0.3s ease',
            }}
          />
        </div>
        <p style={{ fontSize: '0.875rem', color: '#67e8f9', marginTop: '0.25rem', fontFamily: 'monospace' }}>
          {progress}%
        </p>
      </div>

      {/* BOTTOM RIGHT – CONTROLS */}
      <div
        className="absolute bottom-6 right-6 text-right"
        style={{ position: 'absolute', bottom: '1.5rem', right: '1.5rem', textAlign: 'right' }}
      >
        <p style={{ fontSize: '0.75rem', letterSpacing: '0.3em', color: '#9ca3af' }}>
          [SCROLL] Navigate Academic Timeline
        </p>
        <p style={{ fontSize: '0.75rem', letterSpacing: '0.3em', color: '#9ca3af' }}>
          [CLICK] Access Deep Revision Vault
        </p>
      </div>
    </div>
  );
}

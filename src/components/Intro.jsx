import { motion } from 'framer-motion';
import { useStore } from '../store/useNexusStore';

export default function Intro() {
  const startJourney = useStore((s) => s.startJourney);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-[#050505] to-[#0a1a2f]"
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(180deg, #050505 0%, #0a1a2f 100%)',
      }}
    >
      <div style={{ textAlign: 'center', color: 'white' }}>
        <p style={{ fontSize: '0.7rem', letterSpacing: '0.6em', color: 'rgba(0,229,255,0.7)', marginBottom: '1rem' }}>
          PORTFOLIO SYSTEM
        </p>
        <h1 style={{ fontSize: '3rem', fontWeight: 700, letterSpacing: '0.2em' }}>THE CSE NEXUS</h1>
        <p style={{ marginTop: '1rem', color: '#9ca3af' }}>Core Knowledge System v1.0</p>
        <p style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)' }}>
          A 3D academic timeline with cinematic focus panels.
        </p>
        <button
          onClick={startJourney}
          style={{
            marginTop: '2.5rem',
            padding: '0.75rem 2rem',
            border: '1px solid #22d3ee',
            color: '#67e8f9',
            background: 'transparent',
            cursor: 'pointer',
          }}
        >
          Initialize Journey
        </button>
      </div>
    </motion.div>
  );
}

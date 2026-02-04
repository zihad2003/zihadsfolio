import { motion } from 'framer-motion';
import { useStore } from '../store/useNexusStore';

export default function Intro() {
  const startJourney = useStore((s) => s.startJourney);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-[#050505] to-[#0a1a2f]"
    >
      <div className="text-center text-white">
        <p className="text-xs tracking-[0.6em] text-cyan-400/70 mb-4">PORTFOLIO SYSTEM</p>
        <h1 className="text-5xl font-bold tracking-widest">
          THE CSE NEXUS
        </h1>
        <p className="mt-4 text-gray-400">
          Core Knowledge System v1.0
        </p>
        <p className="mt-2 text-sm text-white/60">
          A 3D academic timeline with cinematic focus panels.
        </p>
        <button
          onClick={startJourney}
          className="mt-10 px-8 py-3 border border-cyan-400 text-cyan-300 hover:bg-cyan-400/10 transition"
        >
          Initialize Journey
        </button>
      </div>
    </motion.div>
  );
}

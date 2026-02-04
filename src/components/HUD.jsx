import { useStore } from '../store/useNexusStore';

export default function HUD() {
  const scroll = useStore((state) => state.scroll);
  const progress = Math.round(scroll * 100);

  return (
    <div className="fixed inset-0 pointer-events-none z-40">
      {/* TOP LEFT – SYSTEM TITLE */}
      <div className="absolute top-6 left-6 space-y-1">
        <h1 className="text-xl font-bold tracking-wider text-white">
          THE CSE NEXUS
        </h1>
        <p className="text-xs tracking-widest text-cyan-400">
          Core Knowledge System v1.0
        </p>
      </div>

      {/* TOP RIGHT – STATUS (PREMIUM) */}
      <div className="absolute top-6 right-6">
        <div
          className="
            px-4 py-2 rounded-xl
            bg-gradient-to-r from-cyan-400/20 to-blue-500/20
            backdrop-blur-md
            border border-cyan-400/30
            text-cyan-300 text-xs tracking-widest
            shadow-[0_0_25px_rgba(0,242,255,0.35)]
          "
        >
          PORTFOLIO_NODE_ACTIVE
        </div>
      </div>

      {/* BOTTOM LEFT – PROGRESS */}
      <div className="absolute bottom-6 left-6">
        <p className="text-xs text-gray-400 tracking-widest mb-1">
          Journey Progress
        </p>
        <div className="w-48 h-2 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-sm text-cyan-300 mt-1 font-mono">
          {progress}%
        </p>
      </div>

      {/* BOTTOM RIGHT – CONTROLS */}
      <div className="absolute bottom-6 right-6 text-right">
        <p className="text-xs tracking-widest text-gray-400">
          [SCROLL] Navigate Academic Timeline
        </p>
        <p className="text-xs tracking-widest text-gray-400">
          [CLICK] Access Deep Revision Vault
        </p>
      </div>
    </div>
  );
}

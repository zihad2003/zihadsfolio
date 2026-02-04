import { motion, AnimatePresence } from 'framer-motion';
import { useNexusStore } from '../store/useNexusStore';

export default function FocusOverlay() {
  const { focusedCourse, clearFocus } = useNexusStore();

  return (
    <AnimatePresence>
      {focusedCourse && (
        <motion.div
          initial={{ opacity: 0, x: 120 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 120 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="fixed right-0 top-0 h-full w-[460px] bg-black/80 backdrop-blur-xl border-l border-cyan-500/20 p-16 flex flex-col justify-center shadow-[0_0_45px_rgba(0,229,255,0.15)]"
          style={{
            position: 'fixed',
            right: 0,
            top: 0,
            height: '100%',
            width: '460px',
            background: 'rgba(0,0,0,0.8)',
            backdropFilter: 'blur(18px)',
            borderLeft: '1px solid rgba(34,211,238,0.2)',
            padding: '4rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            color: 'white',
            boxShadow: '0 0 45px rgba(0,229,255,0.15)',
          }}
        >
          <div className="flex items-center gap-4 mb-2">
            <span className="h-[1px] w-8 bg-cyan-400" />
            <span className="text-[10px] tracking-[0.5em] text-cyan-400 font-mono">NODE_IDENTITY</span>
          </div>
          
          <h1 className="text-5xl font-light tracking-tighter text-white mb-4 leading-none">
            {focusedCourse.name}
          </h1>
          <p className="text-xs tracking-[0.4em] text-cyan-400/70 uppercase">
            {focusedCourse.zone} · {focusedCourse.status}
          </p>

          <div className="mt-12 space-y-8 font-mono">
            <section>
              <label className="text-[9px] text-white/40 block mb-2 tracking-widest uppercase">Cognitive Output</label>
              <p className="text-sm text-white/80 leading-relaxed font-light">
                {focusedCourse.description}
              </p>
            </section>

            <section>
              <label className="text-[9px] text-white/40 block mb-2 tracking-widest uppercase">Architectural Value</label>
              <p className="text-sm text-cyan-200/70 italic border-l-2 border-cyan-500/20 pl-4">
                "{focusedCourse.value}"
              </p>
            </section>

            <section>
              <label className="text-[9px] text-white/40 block mb-4 tracking-widest uppercase">Mental Models</label>
              <div className="grid grid-cols-1 gap-2">
                {focusedCourse.models.map((model) => (
                  <div key={model} className="text-[11px] py-1 border-b border-white/5 flex justify-between">
                    <span className="text-white/60">{model}</span>
                    <span className="text-cyan-500/50">VALID</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <label className="text-[9px] text-white/40 block mb-2 tracking-widest uppercase">Trajectory</label>
              <p className="text-[11px] text-white/60">
                {focusedCourse.connects}
              </p>
            </section>
          </div>

          <button
            onClick={clearFocus}
            className="mt-16 text-[10px] tracking-[0.4em] text-white/40 hover:text-cyan-400 transition-colors uppercase self-start"
          >
            [ Terminate View ]
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
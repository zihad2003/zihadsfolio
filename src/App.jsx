import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Atrium from './components/Atrium';
import FocusOverlay from './components/FocusOverlay';
import Intro from './components/Intro';
import HUD from './components/HUD';
import { useNexusStore } from './store/useNexusStore';

export default function App() {
  const mode = useNexusStore((state) => state.mode);
  const scroll = useNexusStore((state) => state.scroll);
  const setScroll = useNexusStore((state) => state.setScroll);

  useEffect(() => {
    const handleWheel = (event) => {
      const next = Math.min(1, Math.max(0, scroll + event.deltaY * 0.0008));
      setScroll(next);
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [scroll, setScroll]);

  return (
    <div className="w-full h-full">
      <Atrium />
      <HUD />
      <FocusOverlay />
      <AnimatePresence>{mode === 'intro' && <Intro />}</AnimatePresence>
    </div>
  );
}

import { useStore } from '../store/useNexusStore';

export default function Dashboard() {
  const { activeCourse, closeCourse, mode } = useStore();

  if (mode !== 'study') return null;

  return (
    <div className="fixed inset-0 z-40 bg-black/60 backdrop-blur-lg flex">
      <div className="w-1/2 p-10 text-white">
        <h2 className="text-4xl font-bold mb-4">
          {activeCourse.name}
        </h2>

        <h3 className="text-cyan-400 mt-6">What I Learned</h3>
        <ul className="list-disc ml-6 text-gray-300">
          {activeCourse.learned.map((l) => (
            <li key={l}>{l}</li>
          ))}
        </ul>

        <h3 className="text-cyan-400 mt-6">Why It Matters</h3>
        <p className="text-gray-400">{activeCourse.impact}</p>

        <button
          onClick={closeCourse}
          className="mt-8 text-cyan-300"
        >
          ← Back to Tunnel
        </button>
      </div>
    </div>
  );
}

import { useFrame } from '@react-three/fiber';
import { PerspectiveCamera, Float } from '@react-three/drei';
import * as THREE from 'three';
import { useStore } from '../store/useNexusStore';
import { courses } from '../data/courses';

export default function Tunnel() {
  const scroll = useStore((s) => s.scroll);
  const openCourse = useStore((s) => s.openCourse);

  useFrame((state) => {
    state.camera.position.z = THREE.MathUtils.lerp(
      state.camera.position.z,
      -scroll * 60,
      0.08
    );
  });

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <ambientLight intensity={0.6} />
      <pointLight position={[0, 0, 5]} intensity={2} color="#00f2ff" />

      <mesh rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[6, 6, 120, 6, 1, true]} />
        <meshStandardMaterial
          side={THREE.BackSide}
          color="#050b15"
          emissive="#001a2d"
          emissiveIntensity={0.6}
        />
      </mesh>

      {courses.map((c) => (
        <Float key={c.id}>
          <mesh
            position={c.position}
            onClick={() => openCourse(c)}
          >
            <icosahedronGeometry args={[0.45, 1]} />
            <meshStandardMaterial
              emissive="#00f2ff"
              emissiveIntensity={2}
              color="#00f2ff"
            />
          </mesh>
        </Float>
      ))}
    </>
  );
}

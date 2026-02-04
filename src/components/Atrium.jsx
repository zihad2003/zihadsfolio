import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, Grid, Float, Stars } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';
import Monolith from './Monolith';
import { courses } from '../data/courses';
import FutureWall from './FutureWall';

const clusterPositions = [
  [0, 0, -6],
  [2, 0, -6],
  [-6, 0, 0],
  [-6, 0, 2],
  [6, 0, 0],
  [6, 0, 2],
  [6, 0, 4],
  [0, -1.5, 6],
  [2, -1.5, 6],
];

function Rig() {
  return useFrame((state) => {
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, state.mouse.x * 1.8, 0.05);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, state.mouse.y * 0.8 + 1.6, 0.05);
    state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, 14, 0.05);
    state.camera.lookAt(0, 0.5, -1.5);
  });
}

export default function Atrium() {
  return (
    <div className="h-screen w-screen bg-[#020408]" style={{ width: '100vw', height: '100vh' }}>
      <div className="scanline" />
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 2, 15]} fov={26} />
        <color attach="background" args={['#020408']} />

        <fog attach="fog" args={['#020408', 8, 28]} />

        <Grid
          infiniteGrid
          fadeDistance={24}
          fadeStrength={6}
          cellSize={1}
          sectionSize={4}
          sectionThickness={1.5}
          sectionColor="#00e5ff"
          cellColor="#0b1424"
          position={[0, -2, 0]}
        />

        <Stars radius={60} depth={40} count={4000} factor={2} saturation={0} fade speed={0.4} />

        <group position={[0, 0.2, -1]}>
          {courses.map((course, index) => (
            <Float key={course.id} speed={1.5} floatIntensity={0.4} rotationIntensity={0.2}>
              <Monolith course={{ ...course, pos: clusterPositions[index] || course.pos }} />
            </Float>
          ))}
        </group>

        <FutureWall />

        <ambientLight intensity={0.2} />
        <pointLight position={[10, 8, 10]} intensity={2.2} color="#00e5ff" />
        <pointLight position={[-8, 4, -8]} intensity={1.4} color="#4057ff" />

        <Rig />
      </Canvas>
    </div>
  );
}
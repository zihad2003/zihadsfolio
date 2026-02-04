import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshTransmissionMaterial, Text, Line } from '@react-three/drei';
import * as THREE from 'three';
import { useNexusStore } from '../store/useNexusStore';

export default function Monolith({ course }) {
  const mesh = useRef();
  const setFocused = useNexusStore((state) => state.setFocused);
  const isFocused = useNexusStore((state) => state.focusedCourse?.id === course.id);
  const [hovered, setHover] = useState(false);

  useFrame((state) => {
    if (!mesh.current) return;
    const t = state.clock.getElapsedTime();
    // Heavy, intentional breathing
    const scaleFactor = isFocused ? 1.18 : (hovered ? 1.08 : 1.0);
    mesh.current.scale.setScalar(THREE.MathUtils.lerp(mesh.current.scale.x, scaleFactor, 0.08));

    // Internal pulse
    if (mesh.current.material) {
      mesh.current.material.emissiveIntensity = 0.6 + Math.sin(t * 1.6) * 0.25;
    }
  });

  return (
    <group position={course.pos}>
      <mesh
        ref={mesh}
        onClick={() => setFocused(course)}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
      >
        <boxGeometry args={[1.7, 4.8, 0.06]} />
        <MeshTransmissionMaterial
          backside
          thickness={0.1}
          chromaticAberration={0.05}
          anisotropy={1}
          clearcoat={1}
          color="#020408"
          emissive="#00e5ff"
          roughness={0}
          transmission={0.95}
        />

        {/* The Thin Edge Highlight */}
        <Line
          points={[[-0.85, 2.4, 0.04], [0.85, 2.4, 0.04], [0.85, -2.4, 0.04], [-0.85, -2.4, 0.04], [-0.85, 2.4, 0.04]]}
          color="#00e5ff"
          lineWidth={0.6}
          transparent
          opacity={hovered ? 1 : 0.35}
        />

        <Text
          position={[0, 2.9, 0]}
          fontSize={0.17}
          font="https://fonts.gstatic.com/s/jetbrainsmono/v18/t6nu21tu_iaS27X6Tjiq8O5e-9eK.woff"
          color="white"
          maxWidth={2}
          textAlign="center"
        >
          {course.name.toUpperCase()}
        </Text>

        <Text
          position={[0, -2.9, 0]}
          fontSize={0.11}
          font="https://fonts.gstatic.com/s/jetbrainsmono/v18/t6nu21tu_iaS27X6Tjiq8O5e-9eK.woff"
          color="#00e5ff"
          maxWidth={2}
          textAlign="center"
        >
          {course.zone.toUpperCase()}
        </Text>
      </mesh>
    </group>
  );
}
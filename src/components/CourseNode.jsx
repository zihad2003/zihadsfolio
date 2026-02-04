import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useStore } from '../store/useNexusStore';

export default function CourseNode({ course }) {
  const meshRef = useRef();
  const [hovered, setHover] = useState(false);
  const setActiveCourse = useStore((state) => state.setActiveCourse);

  return (
    <group position={course.pos}>
      <Float speed={2} rotationIntensity={1} floatIntensity={0.5}>
        <mesh
          ref={meshRef}
          onPointerOver={() => setHover(true)}
          onPointerOut={() => setHover(false)}
          onClick={() => setActiveCourse(course)}
        >
          <icosahedronGeometry args={[0.7, 0]} /> {/* Enlarged size */}
          <MeshDistortMaterial 
            color={hovered ? "#ffffff" : "#00f2ff"} 
            emissive="#00f2ff"
            emissiveIntensity={hovered ? 10 : 2}
            distort={0.4}
            speed={4}
          />
        </mesh>
      </Float>

      {/* Added a glowing ring around the node */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.2, 0.02, 16, 100]} />
        <meshBasicMaterial color="#00f2ff" transparent opacity={0.2} />
      </mesh>

      <Text
        position={[0, -1.5, 0]}
        fontSize={0.4}
        color="white"
        font="https://fonts.gstatic.com/s/orbitron/v9/y73nUOsL_n90L7Y9XN7m3A.woff" // Professional Sci-Fi font
      >
        {course.name}
      </Text>
    </group>
  );
}
import { Text } from '@react-three/drei';
import { useStore } from '../store/useNexusStore';
import { runningCourses } from '../data/courses';

export default function FutureWall() {
  const scrollProgress = useStore((state) => state.scrollProgress);
  const isEnd = scrollProgress > 0.5;

  return (
    <group position={[0, 0, -20]}>
      <mesh>
        <planeGeometry args={[30, 30]} />
        <meshStandardMaterial 
          color="#00f2ff" 
          transparent 
          opacity={isEnd ? 0.05 : 0} 
          wireframe 
        />
      </mesh>
      
      <Text position={[0, 5, 0]} fontSize={1.2} color="#00f2ff" fillOpacity={isEnd ? 1 : 0}>
        CURRENT FOCUS
      </Text>

      {runningCourses.map((course, i) => (
        <group key={course.id} position={[(i - 0.5) * 6, 0, 1]}>
          <Text fontSize={0.5} color="white" fillOpacity={isEnd ? 1 : 0}>
            {`${course.name}\n[ ${course.status.toUpperCase()} ]`}
          </Text>
        </group>
      ))}
    </group>
  );
}
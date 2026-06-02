'use client';

import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function PuppyModel() {
  const groupRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Mesh>(null);
  const leftEarRef = useRef<THREE.Mesh>(null);
  const rightEarRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
      groupRef.current.position.y = Math.sin(clock.elapsedTime * 0.5) * 0.3;
    }

    if (headRef.current) {
      headRef.current.rotation.z = Math.sin(clock.elapsedTime * 0.8) * 0.1;
    }

    if (leftEarRef.current) {
      leftEarRef.current.rotation.z = Math.sin(clock.elapsedTime * 1.2 + 1) * 0.4;
    }

    if (rightEarRef.current) {
      rightEarRef.current.rotation.z = Math.sin(clock.elapsedTime * 1.2) * 0.4;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Body */}
      <mesh position={[0, -0.5, 0]}>
        <boxGeometry args={[0.8, 1.2, 0.6]} />
        <meshStandardMaterial
          color="#a855f7"
          metalness={0.6}
          roughness={0.4}
          emissive="#8b5cf6"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Head */}
      <mesh ref={headRef} position={[0, 0.8, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial
          color="#a855f7"
          metalness={0.7}
          roughness={0.3}
          emissive="#8b5cf6"
          emissiveIntensity={0.4}
        />
      </mesh>

      {/* Left Eye */}
      <mesh position={[-0.15, 1.0, 0.45]}>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshStandardMaterial
          color="#00ff88"
          emissive="#00ff88"
          emissiveIntensity={0.8}
        />
      </mesh>

      {/* Right Eye */}
      <mesh position={[0.15, 1.0, 0.45]}>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshStandardMaterial
          color="#00ff88"
          emissive="#00ff88"
          emissiveIntensity={0.8}
        />
      </mesh>

      {/* Left Ear */}
      <mesh ref={leftEarRef} position={[-0.3, 1.5, 0]}>
        <coneGeometry args={[0.2, 0.6, 8]} />
        <meshStandardMaterial
          color="#a855f7"
          metalness={0.6}
          roughness={0.4}
          emissive="#8b5cf6"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Right Ear */}
      <mesh ref={rightEarRef} position={[0.3, 1.5, 0]}>
        <coneGeometry args={[0.2, 0.6, 8]} />
        <meshStandardMaterial
          color="#a855f7"
          metalness={0.6}
          roughness={0.4}
          emissive="#8b5cf6"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Front Left Paw */}
      <mesh position={[-0.3, -1.2, 0.2]}>
        <cylinderGeometry args={[0.12, 0.12, 0.6, 8]} />
        <meshStandardMaterial
          color="#a855f7"
          metalness={0.5}
          roughness={0.5}
        />
      </mesh>

      {/* Front Right Paw */}
      <mesh position={[0.3, -1.2, 0.2]}>
        <cylinderGeometry args={[0.12, 0.12, 0.6, 8]} />
        <meshStandardMaterial
          color="#a855f7"
          metalness={0.5}
          roughness={0.5}
        />
      </mesh>

      {/* Back Left Paw */}
      <mesh position={[-0.3, -1.2, -0.2]}>
        <cylinderGeometry args={[0.12, 0.12, 0.6, 8]} />
        <meshStandardMaterial
          color="#a855f7"
          metalness={0.5}
          roughness={0.5}
        />
      </mesh>

      {/* Back Right Paw */}
      <mesh position={[0.3, -1.2, -0.2]}>
        <cylinderGeometry args={[0.12, 0.12, 0.6, 8]} />
        <meshStandardMaterial
          color="#a855f7"
          metalness={0.5}
          roughness={0.5}
        />
      </mesh>

      {/* Tail */}
      <mesh position={[0, -0.5, -0.8]}>
        <boxGeometry args={[0.15, 0.15, 1.0]} />
        <meshStandardMaterial
          color="#a855f7"
          metalness={0.5}
          roughness={0.5}
        />
      </mesh>
    </group>
  );
}

export function RoboticPuppy() {
  return (
    <div className="w-full h-full">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 3]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.2} />
        <pointLight position={[-10, -10, 10]} intensity={0.8} color="#8b5cf6" />
        <PuppyModel />
        <OrbitControls enableZoom={false} autoRotate={false} />
      </Canvas>
    </div>
  );
}

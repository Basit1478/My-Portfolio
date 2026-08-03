"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line } from "@react-three/drei";
import { useReducedMotion } from "framer-motion";
import { useRef } from "react";
import * as THREE from "three";

function Sculpture({ reducedMotion }: { reducedMotion: boolean }) {
  const group = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!group.current || reducedMotion) return;
    const targetY = state.clock.elapsedTime * 0.08 + state.pointer.x * 0.28;
    const targetX = Math.sin(state.clock.elapsedTime * 0.16) * 0.08 - state.pointer.y * 0.14;
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetY, 0.035);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, targetX, 0.04);
  });
  return <group ref={group} scale={0.92}>
    <Float speed={1.1} rotationIntensity={0.15} floatIntensity={0.3}>
      <mesh><icosahedronGeometry args={[1.35, 1]} /><meshStandardMaterial color="#6477ff" roughness={0.36} metalness={0.28} wireframe /></mesh>
      <mesh scale={0.48}><icosahedronGeometry args={[1.35, 1]} /><meshStandardMaterial color="#d8ff5b" roughness={0.3} metalness={0.2} /></mesh>
      <Line points={[[0, -2.2, 0], [0, 2.2, 0]]} color="#d8ff5b" lineWidth={1} transparent opacity={0.7} />
      <Line points={[[-2.2, 0, 0], [2.2, 0, 0]]} color="#6677ff" lineWidth={1} transparent opacity={0.7} />
    </Float>
  </group>;
}

export function SignalSculpture() {
  const reducedMotion = Boolean(useReducedMotion());

  return <div className="signal-sculpture" role="img" aria-label="Interactive 3D signal sculpture representing connected AI systems">
    <Canvas frameloop={reducedMotion ? "demand" : "always"} dpr={[1, 1.5]} camera={{ position: [0, 0, 5.3], fov: 42 }} gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={1.4} /><directionalLight position={[3, 4, 5]} intensity={2.5} color="#ffffff" /><pointLight position={[-3, -1, 2]} intensity={14} color="#6677ff" />
      <Sculpture reducedMotion={reducedMotion} />
    </Canvas>
  </div>;
}

"use client";

import { Float, MeshDistortMaterial, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

function Rebar({ position, rotation }: { position: [number, number, number]; rotation: [number, number, number] }) {
  return (
    <Float speed={1.1} rotationIntensity={0.25} floatIntensity={0.25}>
      <mesh position={position} rotation={rotation}>
        <cylinderGeometry args={[0.13, 0.13, 4.6, 32]} />
        <MeshDistortMaterial
          color="#7b828c"
          metalness={0.9}
          roughness={0.24}
          distort={0.08}
          speed={1.4}
        />
      </mesh>
    </Float>
  );
}

export function RebarScene() {
  return (
    <div className="h-[320px] w-full overflow-hidden rounded-[10px] border border-white/10 bg-ink-950/50 sm:h-[420px]">
      <Canvas camera={{ position: [0, 0, 6], fov: 42 }}>
        <ambientLight intensity={1.4} />
        <directionalLight position={[3, 4, 5]} intensity={2.2} color="#ffffff" />
        <pointLight position={[-3, -2, 3]} intensity={4} color="#d71920" />
        <pointLight position={[3, 1, 3]} intensity={2.2} color="#1d4e89" />
        <Rebar position={[-0.86, 0, 0]} rotation={[0.95, 0.25, -0.76]} />
        <Rebar position={[0, 0.08, 0.08]} rotation={[0.95, 0.25, -0.76]} />
        <Rebar position={[0.86, -0.02, 0.16]} rotation={[0.95, 0.25, -0.76]} />
        <mesh position={[0, -1.45, -0.4]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[5, 2.2]} />
          <meshStandardMaterial color="#151719" metalness={0.4} roughness={0.62} />
        </mesh>
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.45} />
      </Canvas>
    </div>
  );
}

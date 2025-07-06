// components/HeroCanvas.jsx
'use client';

import { Canvas } from '@react-three/fiber';
import { Stars, OrbitControls } from '@react-three/drei';

export default function HeroCanvas() {
  return (
    <Canvas className="absolute inset-0 z-0" camera={{ position: [0, 0, 2.2], fov: 50 }}>
      {/* Classic animated starfield with movement */}
      <color attach="background" args={["#0a0a0f"]} />
      <Stars
        radius={90}
        depth={40}
        count={1800}
        factor={2.5}
        saturation={0.8}
        fade
        speed={0.4}
        color="#a29bfe"
      />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.6} />
    </Canvas>
  );
}

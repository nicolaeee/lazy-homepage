import { PC } from "./Pc";
// CanvasComponent.js
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import './Canvas.css'

function CanvasComponent() {
  return (
    <div className="canvas-wrapper">
       <Canvas>
      <OrbitControls enableZoom={true} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[-2, 5, 2]} intensity={1} />
      <Suspense fallback={null}>
        <PC />
      </Suspense>
    </Canvas>
    </div>
  );
}

export default CanvasComponent;

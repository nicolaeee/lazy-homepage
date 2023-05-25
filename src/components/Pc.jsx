import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

export function PC(props) {
  const { nodes, materials } = useGLTF('/pc.gltf');
  const groupRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    // Update the rotation of the group
    groupRef.current.rotation.y = elapsedTime;
  });

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={1.5}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.Object_4.geometry} material={materials.TextureGrid} position={[0, 0, -0.03]} rotation={[0.09, 0, 0]} />
          <mesh geometry={nodes.Object_6.geometry} material={materials.TextureGrid} position={[0, 0.5, 0.03]} rotation={[0.09, 0, 0]} />
          <mesh geometry={nodes.Object_8.geometry} material={materials.TextureGrid} position={[0.88, 0.06, 0.75]} rotation={[0.09, 0, 0]} />
          <mesh geometry={nodes.Object_10.geometry} material={materials.TextureGrid} position={[0, 0.06, 0.81]} rotation={[0.09, 0, 0]} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/pc.gltf');

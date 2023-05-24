import React from 'react';
import { useGLTF } from '@react-three/drei';

export function PC(props) {
  const { nodes, materials } = useGLTF('/pc.gltf');

  // Traverse through the nodes and set castShadow and receiveShadow on the materials
  const traverseMaterials = (object) => {
    if (object.isMesh) {
      object.castShadow = true;
      object.receiveShadow = true;
      if (object.material) {
        object.material.castShadow = true;
        object.material.receiveShadow = true;
      }
    }
    if (object.children) {
      object.children.forEach((child) => traverseMaterials(child));
    }
  };

  // Call traverseMaterials on the root object to enable shadows
  if (nodes && nodes.root) {
    traverseMaterials(nodes.root);
  }

  return (
    <group {...props} dispose={null}>
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

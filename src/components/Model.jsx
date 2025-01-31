import { useGLTF } from "@react-three/drei";
import React, { forwardRef } from "react";

export const Model = forwardRef(({ position }, ref) => {
  const { scene } = useGLTF("cherry.glb");

  return (
    <mesh ref={ref} position={position}>
      <primitive object={scene.clone()} scale={[0.5, 0.5, 0.5]} />
    </mesh>
  );
});

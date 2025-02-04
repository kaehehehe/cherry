import { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";

export function Fog() {
  const { scene } = useThree();

  useEffect(() => {
    scene.fog = new THREE.Fog(0x000000, 5, 30);
    return () => {
      scene.fog = null;
    };
  }, [scene]);

  return null;
}

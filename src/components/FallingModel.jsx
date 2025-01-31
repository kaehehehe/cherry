import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Model } from "./Model";

export function FallingModel({ initialPosition, speed, delay }) {
  const ref = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime() + delay;
    ref.current.rotation.y = elapsedTime;
    ref.current.position.y -= speed;

    if (ref.current.position.y < -10) {
      ref.current.position.y = Math.random() * 10 + 10;
      ref.current.position.x = (Math.random() - 0.5) * 20;
      ref.current.position.z = (Math.random() - 0.5) * 20;
    }
  });

  return <Model ref={ref} position={initialPosition} />;
}

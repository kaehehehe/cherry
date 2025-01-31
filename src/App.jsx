import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { FallingModel } from "./components/FallingModel";
import "./styles.css";

const modelCount = 150;

export default function App() {
  const getRandomSpeed = () => {
    const minSpeed = 0.01;
    const maxSpeed = 0.1;
    return Math.random() * (maxSpeed - minSpeed) + minSpeed;
  };

  const getRandomDelay = () => {
    const minDelay = 0;
    const maxDelay = 2;
    return Math.random() * (maxDelay - minDelay) + minDelay;
  };

  const models = Array.from({ length: modelCount }).map(() => {
    const initialY = Math.random() * 10 + 10;
    const speed = getRandomSpeed();
    const delay = getRandomDelay();

    return {
      position: [
        (Math.random() - 0.5) * 10,
        initialY,
        (Math.random() - 0.5) * 10,
      ],
      speed,
      delay,
    };
  });

  return (
    <Canvas camera={{ fov: 45, position: [0, 1, 10], near: 1, far: 100 }}>
      <ambientLight intensity={1} />
      <Environment preset="warehouse" />
      {models.map(({ position, speed, delay }, i) => (
        <FallingModel
          key={i}
          initialPosition={position}
          speed={speed}
          delay={delay}
        />
      ))}
      <OrbitControls minDistance={10} maxDistance={10} />
    </Canvas>
  );
}

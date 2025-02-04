import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { FallingModel } from "./components/FallingModel";
import { Fog } from "./components/Fog";
import "./styles.css";

const modelCount = 150;

export default function App() {
  const getRandomSpeed = () => {
    const minSpeed = 0.02;
    const maxSpeed = 0.05;
    return Math.random() * (maxSpeed - minSpeed) + minSpeed;
  };

  const getRandomDelay = () => {
    const minDelay = 0;
    const maxDelay = 2;
    return Math.random() * (maxDelay - minDelay) + minDelay;
  };

  const models = Array.from({ length: modelCount }).map((_, index) => {
    const initialY = Math.random() * 10 + 10;
    const speed = getRandomSpeed();
    const delay = getRandomDelay();
    const xPosition = (index / modelCount) * 20 - 10;

    return {
      position: [xPosition, initialY, (Math.random() - 0.5) * 10],
      speed,
      delay,
    };
  });

  return (
    <Canvas camera={{ fov: 45, position: [0, 1, 10], near: 1, far: 100 }}>
      <ambientLight intensity={1} />
      <directionalLight position={[5, 10, 5]} intensity={1} />
      <Fog />
      <Environment preset="warehouse" />
      {models.map(({ position, speed, delay }, i) => (
        <FallingModel
          key={i}
          initialPosition={position}
          speed={speed}
          delay={delay}
        />
      ))}
      <OrbitControls minDistance={6} maxDistance={15} />
    </Canvas>
  );
}

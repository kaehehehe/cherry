import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { FallingModel } from "./components/FallingModel";
import { Fog } from "./components/Fog";
import "./styles.css";

const MODEL_COUNT = 150;
const MIN_SPEED = 0.02;
const MAX_SPEED = 0.05;
const MIN_DELAY = 0;
const MAX_DELAY = 2;
const INITIAL_Y_RANGE = [10, 20];
const POSITION_RANGE = [-10, 10];

const getRandomValue = (min, max) => Math.random() * (max - min) + min;

const createModels = () => {
  return Array.from({ length: MODEL_COUNT }).map((_, index) => {
    const initialY = getRandomValue(...INITIAL_Y_RANGE);
    const speed = getRandomValue(MIN_SPEED, MAX_SPEED);
    const delay = getRandomValue(MIN_DELAY, MAX_DELAY);
    const xPosition =
      (index / MODEL_COUNT) * (POSITION_RANGE[1] - POSITION_RANGE[0]) +
      POSITION_RANGE[0];

    return {
      position: [xPosition, initialY, (Math.random() - 0.5) * 10],
      speed,
      delay,
    };
  });
};

export default function App() {
  const models = createModels();

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

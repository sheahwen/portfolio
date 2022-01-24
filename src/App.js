import React, { useState } from "react";
import { extend, Canvas } from "react-three-fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { Physics, usePlane, useBox } from "@react-three/cannon";
import * as THREE from "three";
import { Text } from "troika-three-text";
import fonts from "./fonts";
import "./style.css";

function Box() {
  const [ref, api] = useBox(() => ({
    mass: 1,
    position: [0, 2, 0],
  }));
  return (
    <mesh
      onClick={() => {
        api.velocity.set(0, 2, 0);
      }}
      ref={ref}
      position={[0, 2, 0]}
    >
      <boxBufferGeometry attach="geometry" />
      <meshNormalMaterial attach="material" color="hotpink" />
    </mesh>
  );
}

function Plane() {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -2, 0],
  }));
  return (
    <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshLambertMaterial attach="material" color="lightblue" />
    </mesh>
  );
}

extend({ Text });

function HelloText() {
  const text = "Hello world";
  // State:
  const [rotation, setRotation] = useState([0, 0, 0, 0]);
  const [opts, setOpts] = useState({
    font: "Philosopher",
    fontSize: 12,
    color: "#99ccff",
    maxWidth: 300,
    lineHeight: 1,
    letterSpacing: 0,
    textAlign: "justify",
    materialType: "MeshPhongMaterial",
  });

  return (
    <text
      position-z={-50}
      position-y={2}
      rotation={rotation}
      {...opts}
      text={text}
      font={fonts[opts.font]}
      anchorX="center"
      anchorY="middle"
    >
      {opts.materialType === "MeshPhongMaterial" ? (
        <meshPhongMaterial attach="material" color={opts.color} />
      ) : null}
    </text>
  );
}

function ClickMe() {
  const text = "Click Me";
  // State:
  const [rotation, setRotation] = useState([-Math.PI / 2, 0, 0]);
  const [opts, setOpts] = useState({
    font: "Philosopher",
    fontSize: 0.5,
    color: "#000000",
    maxWidth: 300,
    lineHeight: 1,
    letterSpacing: 0,
    textAlign: "justify",
    materialType: "MeshPhongMaterial",
  });

  return (
    <text
      position={[-2, -1.9, 0]}
      rotation={rotation}
      {...opts}
      text={text}
      font={fonts[opts.font]}
      anchorX="center"
      anchorY="middle"
    >
      {opts.materialType === "MeshPhongMaterial" ? (
        <meshPhongMaterial attach="material" color={opts.color} />
      ) : null}
      {console.log(rotation)}
    </text>
  );
}

export default function App() {
  return (
    <>
      <div></div>
      <Canvas>
        <OrbitControls />
        <Stars />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 15, 10]} angle={0.3} />
        <Physics>
          <HelloText />
          <ClickMe />
          <Box />
          <Plane />
        </Physics>
      </Canvas>
    </>
  );
}

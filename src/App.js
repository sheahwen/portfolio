import React, { useState, Suspense } from "react";
import { extend, Canvas } from "react-three-fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { Physics, usePlane, useBox } from "@react-three/cannon";
import { useHistory } from "react-router-dom";
import * as THREE from "three";
import { Text } from "troika-three-text";
import fonts from "./fonts";
import "./style.css";
import Robot from "./components/Robot";

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

function Look() {
  const text = "Look";
  // State:
  const [rotation, setRotation] = useState([0, 0, 0, 0]);
  const [opts, setOpts] = useState({
    font: "Philosopher",
    fontSize: 14,
    color: "#99ccff",
    maxWidth: 300,
    lineHeight: 1,
    letterSpacing: 0,
    textAlign: "justify",
    materialType: "MeshPhongMaterial",
  });

  return (
    <text
      position={[-20, 15, -50]}
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

function Up() {
  const text = "Up";
  // State:
  const [rotation, setRotation] = useState([0, 0, 0, 0]);
  const [opts, setOpts] = useState({
    font: "Philosopher",
    fontSize: 14,
    color: "#FFC5A6",
    maxWidth: 300,
    lineHeight: 1,
    letterSpacing: 0,
    textAlign: "justify",
    materialType: "MeshPhongMaterial",
  });

  return (
    <text
      position={[-20, 4, -50]}
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

function Contact() {
  const text = "My Contacts";
  // State:
  const [rotation, setRotation] = useState([Math.PI / 7, Math.PI / 2, 0]);
  const [opts, setOpts] = useState({
    font: "Wallpoet",
    fontSize: 8,
    color: "#FFC5A6",
    maxWidth: 300,
    lineHeight: 1,
    letterSpacing: 0,
    textAlign: "justify",
    materialType: "MeshPhongMaterial",
  });

  return (
    <text
      position={[-80, 40, -30]}
      rotation={rotation}
      {...opts}
      text={text}
      font={fonts[opts.font]}
      anchorX="center"
      anchorY="middle"
      onClick={() => window.appHistory.push("/my-contacts")}
    >
      {opts.materialType === "MeshPhongMaterial" ? (
        <meshPhongMaterial attach="material" color={opts.color} />
      ) : null}
    </text>
  );
}

function About() {
  const text = "About Me";
  // State:
  const [rotation, setRotation] = useState([0, 0, 0]);
  const [opts, setOpts] = useState({
    font: "Wallpoet",
    fontSize: 10,
    color: "#FFC5A6",
    maxWidth: 300,
    lineHeight: 1,
    letterSpacing: 0,
    textAlign: "justify",
    materialType: "MeshPhongMaterial",
  });

  return (
    <text
      position={[0, 60, -70]}
      rotation={rotation}
      {...opts}
      text={text}
      font={fonts[opts.font]}
      anchorX="center"
      anchorY="middle"
      onClick={() => window.appHistory.push("/about-me")}
    >
      {opts.materialType === "MeshPhongMaterial" ? (
        <meshPhongMaterial attach="material" color={opts.color} />
      ) : null}
    </text>
  );
}

function Project() {
  const text = "My Projects";
  // State:
  const [rotation, setRotation] = useState([Math.PI / 7, -Math.PI / 2, 0]);
  const [opts, setOpts] = useState({
    font: "Wallpoet",
    fontSize: 10,
    color: "#FFC5A6",
    maxWidth: 300,
    lineHeight: 1,
    letterSpacing: 0,
    textAlign: "justify",
    materialType: "MeshPhongMaterial",
  });

  return (
    <text
      position={[80, 50, -30]}
      rotation={rotation}
      {...opts}
      text={text}
      font={fonts[opts.font]}
      anchorX="center"
      anchorY="middle"
      onClick={() => window.appHistory.push("/projects")}
    >
      {opts.materialType === "MeshPhongMaterial" ? (
        <meshPhongMaterial attach="material" color={opts.color} />
      ) : null}
    </text>
  );
}

export default function App() {
  return (
    <>
      <Canvas>
        <OrbitControls />
        <Stars />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 15, 10]} angle={0.3} />
        <Physics>
          <Look />
          <Up />
          <Contact />
          <About />
          <Project />
          {/* <Box /> */}
          <Suspense fallback={null}>
            <Robot />
          </Suspense>
          <Plane />
        </Physics>
      </Canvas>
    </>
  );
}

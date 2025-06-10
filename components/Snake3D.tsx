"use client";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  useFBX,
  useTexture,
  useAnimations,
} from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";

const MATERIALS = [
  "mn_sdsn_00_a1",
  "mn_sdsn_00_a2",
  "mn_sdsn_00_a3",
  "mn_sdsn_00_a4",
  "mn_sdsn_00_a5",
  "mn_sdsn_00_a6",
  "mn_sdsn_00_a7",
  "mn_sdsn_00_a8",
];

function SnakeModel() {
  const fbx = useFBX("/Snake.fbx");
  const group = useRef<THREE.Group>(null);

  const diffuseTextures = useTexture(
    MATERIALS.map((name) => `/textures/${name}_d.png`)
  );
  const normalTextures = useTexture(
    MATERIALS.map((name) => `/textures/${name}_n.png`)
  );
  const ormTextures = useTexture(
    MATERIALS.map((name) => `/textures/${name}_orm.png`)
  );

  const { actions } = useAnimations(fbx.animations, group);

  useEffect(() => {
    fbx.traverse((child: any) => {
      if (child.isMesh && Array.isArray(child.material)) {
        child.material.forEach((mat: any) => {
          const baseName = mat.name.replace("_mi", "");
          const idx = MATERIALS.indexOf(baseName);
          if (idx !== -1) {
            mat.map = diffuseTextures[idx];
            mat.normalMap = normalTextures[idx];
            mat.aoMap = ormTextures[idx];
            mat.roughnessMap = ormTextures[idx];
            mat.metalnessMap = ormTextures[idx];
            mat.needsUpdate = true;
          }
        });
      } else if (child.isMesh && child.material) {
        const mat = child.material;
        const baseName = mat.name.replace("_mi", "");
        const idx = MATERIALS.indexOf(baseName);
        if (idx !== -1) {
          mat.map = diffuseTextures[idx];
          mat.normalMap = normalTextures[idx];
          mat.aoMap = ormTextures[idx];
          mat.roughnessMap = ormTextures[idx];
          mat.metalnessMap = ormTextures[idx];
          mat.needsUpdate = true;
        }
      }
    });
  }, [fbx, diffuseTextures, normalTextures, ormTextures]);

  useEffect(() => {
    const firstAction =
      actions && Object.values(actions).find((action) => action != null);

    if (firstAction) {
      firstAction.reset().play();
      firstAction.timeScale = 0.4;
    }

    return () => {
      if (firstAction) {
        firstAction.stop();
      }
    };
  }, [actions]);

  return (
    <primitive
      ref={group}
      object={fbx}
      scale={0.01}
      rotation={[0, 80, 0]}
      position={[0, -1.3, 0]}
    />
  );
}

export default function Snake3D() {
  return (
    <Canvas
      camera={{ position: [0, -2, 8], fov: 45 }}
      style={{ width: "100%", height: "70%" }}
      shadows
    >
      <directionalLight
        position={[10, 10, 5]}
        intensity={1.2}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-bias={-0.01}
      />

      <pointLight position={[-8, 3, 4]} intensity={0.6} color="#c2e9fb" />

      {/* Contraluz */}
      <pointLight position={[0, -3, -8]} intensity={0.3} color="#ffefba" />

      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1.2} castShadow />
      <SnakeModel />
      <OrbitControls enableZoom={true} />
    </Canvas>
  );
}

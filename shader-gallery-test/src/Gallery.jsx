import * as THREE from "three";
import { waterShader } from "./waterShader";
import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";

const images = [
  "img1.jpg",
  "img2.jpg",
  "img3.jpg",
  "img4.jpg",
  "img5.jpg",
];

export default function Gallery() {
    const groupRef = useRef();
    const scroll = useScroll();
  
    useFrame((state, delta) => {
      if (!scroll || !groupRef.current) return;
      const scrollOffset = scroll.offset;
      const y = scrollOffset * 25;
      groupRef.current.position.y = y;
    });

  return (
    <group ref={groupRef}>
      {images.map((img, i) => {
        // Crear uniforms individuales para cada imagen
        const uniforms = {
          uTime: { value: 0 },
          uTexture: { value: new THREE.TextureLoader().load(img) }
        };

        // Actualizar el tiempo para cada shader individualmente
        useFrame((state) => {
          uniforms.uTime.value = state.clock.getElapsedTime();
        });

        return (
          <mesh 
            key={i} 
            position={[
              i % 2 === 0 ? -2 : 2,
              -i * 2,
              0
            ]}
          >
            <planeGeometry args={[3, 1.8]} />
            <shaderMaterial
              fragmentShader={waterShader.fragment}
              vertexShader={waterShader.vertex}
              uniforms={uniforms}
              transparent={true}
            />
          </mesh>
        );
      })}
    </group>
  );
}
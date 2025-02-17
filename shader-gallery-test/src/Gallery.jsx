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
  "img5.jpg"
];

export default function Gallery() {
  const groupRef = useRef();
  const scroll = useScroll();
  const uniforms = {
    uTime: { value: 0 },
    uTexture: { value: null }
  };

  useFrame((state, delta) => {
    uniforms.uTime.value = state.clock.getElapsedTime();
    
    // Update position based on scroll
    const scrollOffset = scroll.offset;
    groupRef.current.position.y = scrollOffset * 10; // Adjust multiplier for scroll sensitivity
  });

  return (
    <group ref={groupRef}>
      {[...images, ...images, ...images].map((img, i) => {
        const texture = new THREE.TextureLoader().load(img);
        uniforms.uTexture.value = texture;

        return (
          <mesh key={i} position={[0, -i * 1.5, 0]}>
            <planeGeometry args={[1, 1.5]} />
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

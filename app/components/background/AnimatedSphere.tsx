"use client";

import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

export default function AnimatedSphere() {
    const mesh = useRef<THREE.Mesh>(null!);

    useFrame(({ clock }) => {
        mesh.current.rotation.y = clock.getElapsedTime() * 0.15;
        mesh.current.rotation.x = clock.getElapsedTime() * 0.1;
    });

    return (
        <mesh ref={mesh} scale={2.8}>
            <sphereGeometry args={[1, 128, 128]} />
            <MeshDistortMaterial
                color="#22d3ee"
                emissive="#6d28d9"
                distort={0.4}
                speed={2}
                roughness={0.2}
            />
        </mesh>
    );
}

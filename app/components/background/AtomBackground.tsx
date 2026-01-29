"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

/* ======================
   ÓRBITA INDIVIDUAL
====================== */
function Orbit({
    radius,
    speed,
    tilt,
}: {
    radius: number;
    speed: number;
    tilt: number;
}) {
    const group = useRef<THREE.Group>(null);

    useFrame(({ clock }) => {
        if (!group.current) return;
        group.current.rotation.y = clock.getElapsedTime() * speed;
    });

    return (
        <group ref={group} rotation={[tilt, tilt * 0.7, 0]}>
            {/* Órbita holográfica */}
            <mesh>
                <torusGeometry args={[radius, 0.006, 24, 160]} />
                <meshBasicMaterial
                    color="#22d3ee"
                    transparent
                    opacity={0.07}
                />
            </mesh>

            {/* Electrón */}
            <mesh position={[radius, 0, 0]}>
                <sphereGeometry args={[0.045, 16, 16]} />
                <meshBasicMaterial
                    color="#a855f7"
                    transparent
                    opacity={0.85}
                />
            </mesh>
        </group>
    );
}

/* ======================
   SISTEMA ATÓMICO
====================== */
export default function AtomSystem() {
    return (
        <>
            {/* Núcleo */}
            <mesh>
                <sphereGeometry args={[0.16, 32, 32]} />
                <meshBasicMaterial
                    color="#22d3ee"
                    transparent
                    opacity={0.9}
                />
            </mesh>

            {/* Órbitas */}
            <Orbit radius={1.2} speed={0.6} tilt={0.6} />
            <Orbit radius={1.9} speed={0.4} tilt={1.1} />
            <Orbit radius={2.6} speed={0.25} tilt={0.9} />
        </>
    );
}

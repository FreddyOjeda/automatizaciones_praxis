"use client";

import { useRef, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const ATOM_COUNT = 600;

export default function DataAtomField() {
    const points = useRef<THREE.Points>(null);
    const { mouse } = useThree();

    const positions = useMemo(() => {
        const arr = new Float32Array(ATOM_COUNT * 3);

        for (let i = 0; i < ATOM_COUNT; i++) {
            const r = Math.random() * 3.5 + 1;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);

            arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
            arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
            arr[i * 3 + 2] = r * Math.cos(phi);
        }

        return arr;
    }, []);

    useFrame(({ clock }) => {
        if (!points.current) return;

        const t = clock.getElapsedTime();
        points.current.rotation.y = t * 0.03 + mouse.x * 0.2;
        points.current.rotation.x = t * 0.01 + mouse.y * 0.2;
    });

    return (
        <points ref={points}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[positions, 3]}
                />
            </bufferGeometry>

            <pointsMaterial
                color="#22d3ee"
                size={0.035}
                sizeAttenuation
                transparent
                opacity={0.35}
                depthWrite={false}
            />
        </points>
    );
}

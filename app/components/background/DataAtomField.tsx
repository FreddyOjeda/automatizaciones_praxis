"use client";

import { useRef, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useEffect, useState } from "react";

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

    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

        const handleChange = () => {
            setIsDark(mediaQuery.matches);
        };

        handleChange(); // inicial

        mediaQuery.addEventListener("change", handleChange);

        return () => {
            mediaQuery.removeEventListener("change", handleChange);
        };
    }, []);

    useFrame(({ clock }) => {
        if (!points.current) return;

        const t = clock.getElapsedTime();

        points.current.rotation.y = t * 0.05 + mouse.x * 0.3;
        points.current.rotation.x = t * 0.02 + mouse.y * 0.3;

        const scale = 1 + Math.sin(t * 0.5) * 0.03;
        points.current.scale.set(scale, scale, scale);
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
                color={isDark ? "#22d3ee" : "#7c3aed"}
                size={isDark ? 0.035 : 0.04}
                sizeAttenuation
                transparent
                opacity={isDark ? 0.35 : 0.6}
                depthWrite={false}
                blending={THREE.AdditiveBlending}
            />
        </points>
    );
}

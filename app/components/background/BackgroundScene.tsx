"use client";

import { Canvas } from "@react-three/fiber";
import DataAtomField from "./DataAtomField";
import { useHeroVisibility } from "./useHeroVisibility";

export default function BackgroundScene() {
    const showBackground = useHeroVisibility(); 
    // true = hero NO visible → mostramos background

    return (
        <div className="fixed inset-0 -z-10 pointer-events-none">
            <Canvas
                camera={{ position: [0, 0, 8], fov: 50 }}
                dpr={[1, 1.5]}
            >
                {/* Luz ambiental suave */}
                <ambientLight intensity={0.4} />

                {/* Campo de átomos / datos */}
                {showBackground && <DataAtomField />}
            </Canvas>
        </div>
    );
}

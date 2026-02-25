import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Automatización Empresarial",
    description:
        "Soluciones de automatización empresarial para optimizar procesos, ventas y atención al cliente con inteligencia artificial.",
};

export default function AutomatizacionEmpresarialPage() {
    return (
        <main className="py-28 px-6 max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">
                Automatización empresarial
            </h1>

            <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
                La automatización empresarial permite conectar procesos,
                integrar sistemas y optimizar operaciones mediante flujos
                inteligentes que reducen errores y aumentan la eficiencia.
            </p>
        </main>
    );
}
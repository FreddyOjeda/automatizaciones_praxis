import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Automatizaciones Avanzadas",
    description:
        "Implementamos automatizaciones avanzadas con arquitecturas escalables e integraciones inteligentes.",
};

export default function AutomatizacionesAvanzadasPage() {
    return (
        <main className="py-28 px-6 max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">
                Automatizaciones avanzadas
            </h1>

            <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
                Creamos flujos automatizados personalizados que conectan
                plataformas, optimizan procesos y escalan operaciones empresariales.
            </p>
        </main>
    );
}
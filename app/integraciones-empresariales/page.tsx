import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Integraciones Empresariales",
    description:
        "Conectamos sistemas empresariales mediante integraciones personalizadas para crear ecosistemas digitales eficientes.",
};

export default function IntegracionesPage() {
    return (
        <main className="py-28 px-6 max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">
                Integraciones empresariales
            </h1>

            <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
                Diseñamos arquitecturas digitales donde CRM, facturación,
                inventarios y herramientas internas se comunican en tiempo real.
            </p>
        </main>
    );
}
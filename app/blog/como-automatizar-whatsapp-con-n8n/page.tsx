import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cómo automatizar WhatsApp",
    description:
        "Guía práctica para automatizar WhatsApp e integrarlo con sistemas empresariales.",
};

export default function BlogArticle() {
    return (
        <main className="py-28 px-6 max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">
                Cómo automatizar WhatsApp
            </h1>

            <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
                Automatizar WhatsApp permite centralizar conversaciones,
                mejorar tiempos de respuesta y optimizar procesos comerciales.
            </p>
        </main>
    );
}
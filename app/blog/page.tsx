import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Blog de Automatización",
    description:
        "Artículos sobre automatización empresarial, inteligencia artificial e integraciones.",
};

export default function BlogPage() {
    return (
        <main className="py-28 px-6 max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-10">
                Blog de automatización empresarial
            </h1>

            <ul className="space-y-4">
                <li>
                    <Link
                        href="/blog/como-automatizar-whatsapp-con-n8n"
                        className="text-lg underline"
                    >
                        Cómo automatizar WhatsApp
                    </Link>
                </li>
            </ul>
        </main>
    );
}
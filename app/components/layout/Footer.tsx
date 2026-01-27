export default function Footer() {
    return (
        <footer className="border-t border-neutral-800 bg-black">
            <div className="max-w-7xl mx-auto px-6 py-12 text-center text-sm text-gray-400">
                <p className="mb-4">
                    © {new Date().getFullYear()} Automatizaciones Praxis
                </p>
                <p>
                    Automatización · IA · Soluciones digitales
                </p>
            </div>
        </footer>
    );
}

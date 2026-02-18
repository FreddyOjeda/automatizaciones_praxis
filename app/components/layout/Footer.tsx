export default function Footer() {
    return (
        <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-background">
            <div className="max-w-7xl mx-auto px-6 py-12 text-center text-sm text-neutral-500 dark:text-neutral-400">
                <p className="mb-4 text-foreground">
                    © {new Date().getFullYear()} Automatizaciones Praxis
                </p>
                <p>
                    Automatización · IA · Soluciones digitales
                </p>
            </div>
        </footer>
    );
}

export default function Navbar() {
    return (
        <header className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur border-b border-neutral-800">
            <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* Logo / Nombre */}
                <div className="font-bold text-lg tracking-wide">
                    Praxis
                </div>

                {/* Navegación */}
                <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
                    <a href="#about" className="hover:text-white transition">Nosotros</a>
                    <a href="#services" className="hover:text-white transition">Servicios</a>
                    <a href="#solutions" className="hover:text-white transition">Soluciones</a>
                    <a href="#plans" className="hover:text-white transition">Planes</a>
                    <a href="#contact" className="hover:text-white transition">Contacto</a>
                </div>

                {/* CTA */}
                <button className="px-4 py-2 rounded-xl bg-white text-black font-semibold">
                    Hablemos
                </button>
            </nav>
        </header>
    );
}

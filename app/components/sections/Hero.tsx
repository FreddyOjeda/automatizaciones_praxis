"use client";

import FadeIn from "../ui/FadeIn";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">

                {/* Background effects */}
                <div className="absolute inset-0 -z-10 overflow-hidden">
                    <div className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
                    <div className="absolute top-1/3 -right-24 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
                </div>
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-1/3 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 bg-purple-600/20 blur-[120px]" />
                    <div className="absolute top-2/3 left-1/3 w-[400px] h-[400px] bg-cyan-500/20 blur-[120px]" />
                </div>

                <div className="max-w-5xl text-center">
                    {/* Eyebrow */}
                    <FadeIn>
                        <span className="inline-block mb-6 px-4 py-2 rounded-full border border-neutral-800 text-sm text-gray-300">
                            Automatización · IA · Negocios
                        </span>
                    </FadeIn>

                    {/* Main title */}
                    <FadeIn delay={0.1}>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
                            Automatizamos la atención, las ventas y los procesos de tu negocio
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                                {" "}con inteligencia artificial
                            </span>
                        </h1>
                    </FadeIn>

                    {/* Subtitle */}
                    <FadeIn delay={0.2}>
                        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12">
                            En Automatizaciones Praxis diseñamos soluciones de IA que optimizan la
                            experiencia del cliente y mejoran la operación interna de los
                            negocios. Especialistas en restaurantes, preparados para cualquier
                            industria.
                        </p>
                    </FadeIn>

                    {/* CTAs */}
                    <FadeIn delay={0.3}>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="px-8 py-4 rounded-xl bg-white text-black font-semibold hover:scale-105 transition">
                                Hablar con un experto
                            </button>

                            <button className="px-8 py-4 rounded-xl border border-neutral-700 text-white hover:bg-white/5 transition">
                                Ver soluciones
                            </button>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </motion.section>
    );
}

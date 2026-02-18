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
            <section
                id="hero"
                className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden pt-20 md:pt-0"
            >
                {/* Background effects */}
                <div className="absolute inset-0 -z-10 overflow-hidden">

                    {/* Cyan blob */}
                    <div className="
                        absolute -top-24 -left-24 w-96 h-96 rounded-full blur-3xl
                        bg-cyan-400/60
                        dark:bg-cyan-500/30
                    " />

                    {/* Purple blob */}
                    <div className="
                        absolute top-1/3 -right-24 w-96 h-96 rounded-full blur-3xl
                        bg-purple-500/60
                        dark:bg-purple-500/30
                    " />
                </div>

                <div className="absolute inset-0 -z-10">

                    {/* Center glow purple */}
                    <div className="
                        absolute top-1/3 left-1/2 w-[600px] h-[600px]
                        -translate-x-1/2 -translate-y-1/2
                        blur-[140px]
                        bg-purple-500/70
                        dark:bg-purple-600/40
                    " />

                    {/* Lower cyan glow */}
                    <div className="
                        absolute top-2/3 left-1/3 w-[450px] h-[450px]
                        blur-[140px]
                        bg-cyan-400/70
                        dark:bg-cyan-500/40
                    " />
                </div>


                <div className="max-w-5xl text-center">

                    {/* Eyebrow */}
                    <FadeIn>
                        <span className="
                            inline-block mb-6 px-4 py-2 rounded-full
                            border border-neutral-200 dark:border-neutral-800
                            text-sm
                            text-neutral-600 dark:text-neutral-300
                        ">
                            Automatización · IA · Negocios
                        </span>
                    </FadeIn>

                    {/* Main title */}
                    <FadeIn delay={0.1}>
                        <h1 className="
                            text-4xl md:text-6xl lg:text-7xl
                            font-bold leading-tight mb-8
                            text-foreground
                        ">
                            Automatizamos la atención, las ventas y los procesos de tu empresa
                            <span className="
                                text-transparent bg-clip-text
                                bg-gradient-to-r
                                from-cyan-500 to-purple-600
                            ">
                                {" "}con inteligencia artificial
                            </span>
                        </h1>
                    </FadeIn>

                    {/* Subtitle */}
                    <FadeIn delay={0.2}>
                        <p className="
                            text-lg md:text-xl
                            text-neutral-600 dark:text-neutral-400
                            max-w-3xl mx-auto mb-12
                        ">
                            En Automatizaciones Praxis diseñamos soluciones de IA que optimizan la
                            experiencia del cliente y mejoran la operación interna de las
                            empresas. Especialistas en restaurantes, preparados para cualquier
                            industria.
                        </p>
                    </FadeIn>

                    {/* CTAs */}
                    <FadeIn delay={0.3}>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">

                            {/* Primary */}
                            <button
                                onClick={() => {
                                    const message = encodeURIComponent(
                                        "Hola, quiero información sobre automatizaciones para mi empresa."
                                    );
                                    window.open(
                                        `https://wa.me/573125946327?text=${message}`,
                                        "_blank"
                                    );
                                }}
                                className="
                                    px-8 py-4 rounded-xl
                                    bg-foreground text-background
                                    font-semibold
                                    hover:opacity-90
                                    transition
                                "
                            >
                                Hablar con un experto
                            </button>

                            {/* Secondary */}
                            <a
                                href="#solutions"
                                className="
                                    px-8 py-4 rounded-xl
                                    border border-neutral-300 dark:border-neutral-700
                                    text-foreground
                                    hover:bg-neutral-100 dark:hover:bg-neutral-900
                                    transition
                                "
                            >
                                Ver soluciones
                            </a>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </motion.section>
    );
}

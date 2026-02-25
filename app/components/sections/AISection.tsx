"use client";

import { Stagger, StaggerItem } from "../ui/Stagger";
import FadeIn from "../ui/FadeIn";
import { motion } from "framer-motion";

export default function AISection() {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <section
                id="ia"
                className="py-28 px-6 border-t border-neutral-200 dark:border-neutral-800"
            >
                <div className="max-w-6xl mx-auto">

                    {/* Header */}
                    <FadeIn delay={0.1}>
                        <div className="max-w-3xl mb-20">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                                Inteligencia artificial aplicada a la automatización empresarial
                            </h2>

                            <p className="text-lg text-neutral-600 dark:text-neutral-400">
                                Integramos inteligencia artificial en los procesos empresariales
                                para crear sistemas capaces de analizar datos, tomar decisiones
                                y optimizar operaciones en tiempo real.
                            </p>
                        </div>
                    </FadeIn>

                    {/* Grid */}
                    <Stagger>
                        <div className="grid md:grid-cols-2 gap-8">
                            {[
                                {
                                    title: "Decisiones basadas en datos",
                                    description:
                                        "Los sistemas inteligentes analizan el comportamiento de clientes y procesos internos para priorizar oportunidades y optimizar recursos.",
                                },
                                {
                                    title: "Automatización inteligente",
                                    description:
                                        "Más allá de tareas repetitivas, diseñamos flujos que se adaptan al contexto y evolucionan según la información recibida.",
                                },
                                {
                                    title: "Optimización de ventas y atención",
                                    description:
                                        "Clasificación automática de prospectos, respuestas personalizadas y seguimiento inteligente sin perder cercanía humana.",
                                },
                                {
                                    title: "Escalabilidad operativa",
                                    description:
                                        "Permite crecer sin aumentar proporcionalmente los costos, manteniendo eficiencia y control.",
                                },
                            ].map((item, index) => (
                                <StaggerItem key={index}>
                                    <FadeIn delay={0.2 + index * 0.1}>
                                        <div
                                            className="
                                                p-8 rounded-2xl
                                                border-2 border-neutral-200 dark:border-neutral-800
                                                bg-neutral-50 dark:bg-neutral-900/40
                                                transition-all duration-300
                                                hover:-translate-y-1
                                                hover:shadow-[0_0_40px_-10px_rgba(139,92,246,0.25)]
                                            "
                                        >
                                            <h3 className="text-xl font-semibold mb-4 text-foreground">
                                                {item.title}
                                            </h3>

                                            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </FadeIn>
                                </StaggerItem>
                            ))}
                        </div>
                    </Stagger>

                </div>
            </section>
        </motion.section>
    );
}
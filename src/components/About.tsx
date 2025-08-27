'use client'

import { motion, useAnimation } from 'framer-motion'
import { useEffect, useRef } from 'react'

// Hook para animación al hacer scroll
function useInViewAnimation() {
    const ref = useRef(null)
    const controls = useAnimation()

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        controls.start('visible')
                    }
                })
            },
            { threshold: 0.1 }
        )

        const currentRef = ref.current
        if (currentRef) observer.observe(currentRef)

        return () => {
            if (currentRef) observer.unobserve(currentRef)
        }
    }, [controls])

    return { ref, controls }
}

export default function About() {
    const { ref: sectionRef, controls: sectionControls } = useInViewAnimation()

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: 'easeOut' }
        }
    }

    return (
        <section
            ref={sectionRef}
            id="about"
            className="py-24 px-6 relative bg-white overflow-hidden"
            aria-labelledby="about-title"
        >
            {/* Fondo decorativo sutil (coherente con Projects) */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -left-20 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50"></div>
                <div className="absolute top-1/2 right-0 w-96 h-96 bg-indigo-50 rounded-full blur-4xl opacity-40"></div>
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                {/* Título */}
                <motion.h2
                    id="about-title"
                    initial="hidden"
                    animate={sectionControls}
                    variants={itemVariants}
                    className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-gray-800 to-blue-700 bg-clip-text text-transparent"
                >
                    Sobre Mí
                </motion.h2>

                {/* Párrafos animados individualmente */}
                <motion.div
                    initial="hidden"
                    animate={sectionControls}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: { staggerChildren: 0.3 }
                        }
                    }}
                    className="space-y-8 text-lg text-gray-700 leading-relaxed"
                >
                    <motion.p
                        variants={itemVariants}
                        className="text-justify"
                    >
                        Soy{' '}
                        <strong className="text-blue-600 font-semibold">Ingeniero Eléctrico</strong>{' '}
                        con más de{' '}
                        <strong className="text-blue-600 font-semibold">10 años de experiencia</strong>{' '}
                        en el diseño, análisis y mantenimiento de sistemas eléctricos industriales. Mi enfoque se centra en la{' '}
                        <strong className="text-blue-600 font-semibold">eficiencia energética</strong>, la{' '}
                        <strong className="text-blue-600 font-semibold">automatización con PLCs</strong>{' '}
                        y la implementación de soluciones innovadoras en{' '}
                        <strong className="text-blue-600 font-semibold">energías renovables</strong>.
                    </motion.p>

                    <motion.p
                        variants={itemVariants}
                        className="text-justify"
                    >
                        A lo largo de mi carrera, he liderado proyectos clave en subestaciones eléctricas, redes de distribución y sistemas de control para plantas industriales. Siempre priorizo la{' '}
                        <strong>seguridad</strong>, la{' '}
                        <strong>sostenibilidad</strong> y el{' '}
                        <strong>rendimiento óptimo</strong>, aplicando estándares internacionales y tecnologías de punta.
                    </motion.p>

                    <motion.p
                        variants={itemVariants}
                        className="text-justify"
                    >
                        Mi objetivo es transformar desafíos técnicos en soluciones eficientes y escalables, aportando valor a cada proyecto con una combinación de conocimiento técnico, pensamiento crítico y pasión por la ingeniería.
                    </motion.p>
                </motion.div>

                {/* Línea divisoria animada */}
                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={sectionControls}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            scaleX: 1,
                            transition: { delay: 0.8, duration: 1, ease: 'easeOut' }
                        }
                    }}
                    style={{ transformOrigin: 'center' }}
                    className="mt-16 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent"
                />
            </div>
        </section>
    )
}
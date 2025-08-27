'use client'

import { motion, useAnimation } from 'framer-motion'
import { useEffect, useRef } from 'react'

const education = [
    {
        degree: "Técnico en electricidad industrial",
        school: "Instituto Politécnico de Jinotepe",
        year: "",
        details: "(Jinotepe, Carazo)"
    },
    {
        degree: "Diplomado Ingeniero Eléctrico",
        school: "Universidad Nacional de Ingeniería",
        year: "",
        details: "(UNI) Managua"
    }
]

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

export default function Education() {
    const { ref: sectionRef, controls: sectionControls } = useInViewAnimation()

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' }
        }
    }

    return (
        <section
            id="education"
            ref={sectionRef}
            className="py-24 px-6 relative bg-white overflow-hidden"
        >
            {/* Fondos decorativos sutiles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -left-20 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50"></div>
                <div className="absolute bottom-20 right-0 w-96 h-96 bg-indigo-50 rounded-full blur-4xl opacity-40"></div>
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                {/* Título */}
                <motion.h2
                    initial="hidden"
                    animate={sectionControls}
                    variants={itemVariants}
                    className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-gray-800 to-blue-700 bg-clip-text text-transparent"
                >
                    Educación
                </motion.h2>

                {/* Lista de logros académicos */}
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
                    className="space-y-8"
                >
                    {education.map((edu, i) => (
                        <motion.div
                            key={i}
                            variants={itemVariants}
                            whileHover={{ y: -6, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                            className="bg-white p-7 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300"
                        >
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{edu.degree}</h3>
                            <p className="text-lg text-blue-700 font-medium mb-2">{edu.school}</p>
                            <p className="text-sm text-gray-500 mb-3 font-medium">{edu.year}</p>
                            <p className="text-gray-600 text-sm italic leading-relaxed">{edu.details}</p>

                            {/* Línea decorativa */}
                            <div className="mt-5 h-0.5 w-full bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
'use client'

import { motion, useAnimation } from 'framer-motion'
import { useEffect, useRef } from 'react'

const skills = [
    { name: "Diseño de Circuitos Eléctricos", icon: "⚡" },
    { name: "Autocad Electrical", icon: "📐" },
    { name: "ETAP / SKM", icon: "📊" },
    { name: "PLC (Siemens, Allen Bradley)", icon: "🔧" },
    { name: "SCADA", icon: "🖥️" },
    { name: "Energías Renovables", icon: "☀️" },
    { name: "Protecciones Eléctricas", icon: "🛡️" },
    { name: "Análisis de Fallas", icon: "🔍" },
    { name: "Matlab / Simulink", icon: "📈" },
    { name: "Normas IEEE y NEC", icon: "📜" },
]

function useInViewAnimation() {
    const ref = useRef(null)
    const controls = useAnimation()

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        controls.start("visible")
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

export default function Skills() {
    const { ref: sectionRef, controls: sectionControls } = useInViewAnimation()

    const itemVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.8 } }
    }

    const cardVariants = (i) => ({
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { delay: i * 0.08, duration: 0.4 }
        }
    })

    return (
        <section
            id="skills"
            ref={sectionRef}
            className="py-20 px-6 bg-gradient-to-b from-white to-blue-50"
        >
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial="hidden"
                    animate={sectionControls}
                    variants={itemVariants}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-extrabold bg-gradient-to-r from-gray-800 to-blue-700 bg-clip-text text-transparent mb-4">
                        Habilidades Técnicas
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Competencias clave en ingeniería eléctrica, automatización y análisis de sistemas.
                    </p>
                </motion.div>

                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((skill, i) => (
                        <motion.li
                            key={i}
                            custom={i}
                            initial="hidden"
                            animate={sectionControls}
                            variants={cardVariants(i)}
                            whileHover={{ y: -6, scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="group p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 transition-all"
                        >
                            <div className="flex items-center gap-5">
                                <motion.span
                                    initial={{ scale: 0.8 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.1 + i * 0.08, type: "spring" }}
                                    className="text-2xl bg-gradient-to-br from-blue-600 to-blue-800 text-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg"
                                >
                                    {skill.icon}
                                </motion.span>
                                <h3 className="text-gray-800 font-semibold text-lg group-hover:text-blue-700 transition-colors">
                                    {skill.name}
                                </h3>
                            </div>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
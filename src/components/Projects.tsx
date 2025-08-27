'use client'

import { motion, useAnimation } from 'framer-motion'
import { useEffect, useRef } from 'react'

const projects = [
    {
        title: "Realización de circuitos eléctricos domiciliares",
        desc: "Proyecto concluido con enfoque en seguridad y normativas básicas.",
        tech: "",
        startDate: "Enero 2003",
        endDate: "Junio 2003",
        icon: "⚡",
        category: "Eléctrico"
    },
    {
        title: "Coordinador y responsable del proyecto",
        desc: "SIEGSA (Sistemas eléctricos generales S.A. Managua)",
        tech: "",
        startDate: "Junio 2003",
        endDate: "Enero 2004",
        icon: "👷",
        category: "Liderazgo"
    },
    {
        title: "Electricista operario de planta",
        desc: "Kars electromecánica de Costa Rica.",
        tech: "",
        startDate: "Enero 2004",
        endDate: "Junio 2004",
        icon: "🔧",
        category: "Industrial"
    },
    {
        title: "Jefe mantenimiento de planta",
        desc: "GILDAN departamento de San Marcos.",
        tech: "",
        startDate: "Junio 2004",
        endDate: "Junio 2006",
        icon: "⚙️",
        category: "Mantenimiento"
    },
    {
        title: "Electromecánico de planta",
        desc: "PLASTINIC (Plásticos de Nicaragua).",
        tech: "",
        startDate: "Octubre 2006",
        endDate: "Mayo 2009",
        icon: "🏭",
        category: "Producción"
    },
    {
        title: "Mecánico electricista y mecánico industrial",
        desc: "VF Jeans wear de Nicaragua.",
        tech: "",
        startDate: "Agosto 2009",
        endDate: "Octubre 2010",
        icon: "🔩",
        category: "Multifuncional"
    },
    {
        title: "Técnico en electrónica",
        desc: "Diseño y mantenimiento de circuitos eléctricos, Costa Rica.",
        tech: "",
        startDate: "Octubre 2010",
        endDate: "Febrero 2011",
        icon: "🔌",
        category: "Electrónica"
    },
    {
        title: "Ing. Eléctrico de planta y mantenimiento electrónico",
        desc: "Diseño y mantenimiento de circuitos eléctricos, Costa Rica.",
        tech: "",
        startDate: "Febrero 2011",
        endDate: "Marzo 2014",
        icon: "📊",
        category: "Ingeniería"
    },
    {
        title: "CEO de DIMEC",
        desc: "DIMEC (Diseños, montajes eléctricos y control). Liderazgo técnico y desarrollo de proyectos industriales.",
        tech: "",
        startDate: "Mayo 2014",
        endDate: "Presente",
        icon: "👔",
        category: "Empresarial"
    }
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
            { threshold: 0.2 }
        )
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [controls])

    return { ref, controls }
}

export default function Projects() {
    const { ref: sectionRef, controls: sectionControls } = useInViewAnimation()

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    }

    const cardVariants = (i) => ({
        hidden: { opacity: 0, x: i % 2 === 0 ? -50 : 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { delay: i * 0.1, duration: 0.6 }
        }
    })

    return (
        <section
            id="projects"
            ref={sectionRef}
            className="py-24 px-6 relative overflow-hidden bg-gradient-to-b from-white via-blue-50 to-white"
        >
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-100 rounded-full opacity-30 blur-3xl"></div>
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div
                    initial="hidden"
                    animate={sectionControls}
                    variants={itemVariants}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-gray-800 to-blue-700 bg-clip-text text-transparent mb-4">
                        Mi Trayectoria
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Una evolución continua desde técnico hasta líder empresarial en ingeniería eléctrica y control industrial.
                    </p>
                </motion.div>

                <div className="relative">
                    <div className="absolute left-8 md:left-1/2 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-blue-300 to-transparent transform -translate-x-1/2"></div>

                    <ul className="space-y-8">
                        {projects.map((project, i) => (
                            <motion.li
                                key={i}
                                custom={i}
                                initial="hidden"
                                animate={sectionControls}
                                variants={cardVariants(i)}
                                whileHover={{ scale: 1.02 }}
                                className={`relative flex items-start gap-6 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse md:flex-row'
                                    }`}
                            >
                                <div className="absolute -left-1 md:left-1/2 transform -translate-x-1/2 z-20">
                                    <span className="block w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-full flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform">
                                        {project.icon}
                                    </span>
                                </div>

                                <div
                                    className={`flex-1 mt-12 p-7 bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 md:max-w-[45%] ${i % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'
                                        }`}
                                >
                                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-700 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-700 mb-4 leading-relaxed">{project.desc}</p>

                                    <div className="flex flex-wrap items-center gap-3 text-sm">
                                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                                            {project.category}
                                        </span>
                                        <span className="text-gray-500">
                                            📅 {project.startDate} – {project.endDate}
                                        </span>
                                    </div>
                                </div>
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}
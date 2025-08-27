'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Contact() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1
    })

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3, delayChildren: 0.2 }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' }
        }
    }

    return (
        <section
            id="contact"
            ref={ref}
            className="py-20 px-6 relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white"
        >
            {/* Fondos decorativos */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-20 w-96 h-96 bg-cyan-500 rounded-full opacity-20 blur-3xl"></div>
                <div className="absolute bottom-20 -left-20 w-96 h-96 bg-blue-400 rounded-full opacity-20 blur-3xl"></div>
            </div>

            {/* Contenido */}
            <motion.div
                className="max-w-4xl mx-auto text-center relative z-10"
                variants={containerVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
            >
                {/* Título responsivo */}
                <motion.h2
                    variants={itemVariants}
                    className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent leading-tight"
                >
                    ¿Trabajamos juntos?
                </motion.h2>

                {/* Párrafo responsivo */}
                <motion.p
                    variants={itemVariants}
                    className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed opacity-90 px-4"
                >
                    Estoy disponible para proyectos, consultoría o nuevas oportunidades en ingeniería eléctrica, automatización y control industrial.
                </motion.p>

                {/* Información de contacto */}
                <motion.div
                    variants={itemVariants}
                    className="space-y-4 text-sm sm:text-base max-w-xs sm:max-w-md mx-auto px-4"
                >
                    <p className="flex items-center justify-center gap-2 sm:gap-3">
                        <span className="text-cyan-300 text-lg">✉️</span>
                        <strong className="text-white text-sm sm:text-base">Email:</strong>
                        <span className="text-blue-50 text-sm sm:text-base truncate max-w-36 sm:max-w-none">
                            heyzamercampos@gmail.com
                        </span>
                    </p>

                    <p className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-3 text-xs sm:text-sm">
                        <span className="text-cyan-300 text-lg">📞</span>
                        <strong className="text-white">Teléfono:</strong>
                        <span className="text-blue-50">+505 8634-8181</span>
                        <span className="hidden sm:inline text-blue-50">|</span>
                        <span className="text-blue-50">+505 8192-6187</span>
                    </p>

                    <p className="flex items-center justify-center gap-2 sm:gap-3">
                        <span className="text-cyan-300 text-lg">📍</span>
                        <strong className="text-white text-sm sm:text-base">Ubicación:</strong>
                        <span className="text-blue-50 text-sm sm:text-base">Managua, Nicaragua</span>
                    </p>
                </motion.div>

                {/* Enlaces */}
                <motion.div
                    variants={itemVariants}
                    className="mt-10 sm:mt-12 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 px-4"
                >
                    <a
                        href="https://linkedin.com/in/heyzamer-campos-447560242"
                        target="_blank"
                        rel="noopener"
                        className="group flex items-center gap-2 px-5 py-3 bg-gray bg-opacity-10 hover:bg-opacity-20 rounded-xl border border-blue-300 hover:border-cyan-300 transition-all duration-300 backdrop-blur-sm min-w-40"
                    >
                        <span className="text-lg group-hover:scale-110 transition-transform">💼</span>
                        <span className="text-sm sm:text-base font-medium">LinkedIn</span>
                    </a>

                    <a
                        href="mailto:heyzamercampos@gmail.com"
                        target="_blank"
                        rel="noopener"
                        className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 min-w-44"
                    >
                        <span className="text-lg group-hover:scale-110 transition-transform">✉️</span>
                        <span className="text-sm sm:text-base font-medium">Enviar Email</span>
                    </a>
                </motion.div>
            </motion.div>
        </section>
    )
}
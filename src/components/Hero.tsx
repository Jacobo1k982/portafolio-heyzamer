'use client'

import { motion, Variants } from 'framer-motion'

export default function Hero() {
    // ✅ Tipado explícito de variantes
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3, delayChildren: 0.3 }
        }
    }

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: 'easeOut' }
        }
    }

    return (
        <section
            className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-950 text-white py-36 px-6 text-center overflow-hidden"
        >
            {/* Fondo de circuito sutil animado */}
            <div
                className="absolute inset-0 opacity-10 bg-[url('/images/circuit.svg')] bg-repeat animate-pulse"
                style={{
                    backgroundSize: '300px',
                    animation: 'pulse 4s ease-in-out infinite'
                }}
            ></div>

            {/* Onda de voltaje animada - capas múltiples */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    {/* Onda principal (más brillante) */}
                    <path
                        id="sine-wave-main"
                        d="M 0 150 Q 100 100 200 150 Q 300 200 400 150 Q 500 100 600 150 Q 700 200 800 150 Q 900 100 1000 150"
                        fill="none"
                        stroke="rgba(147, 200, 255, 0.6)"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                    {/* Onda secundaria (más baja, más suave) */}
                    <path
                        id="sine-wave-low"
                        d="M 0 180 Q 100 130 200 180 Q 300 230 400 180 Q 500 130 600 180 Q 700 230 800 180 Q 900 130 1000 180"
                        fill="none"
                        stroke="rgba(100, 150, 255, 0.3)"
                        strokeWidth="1.5"
                    />
                </defs>

                {/* Capas animadas */}
                <use href="#sine-wave-main" className="animate-voltage-scroll" />
                <use href="#sine-wave-main" x="1000" className="animate-voltage-scroll" />
                <use href="#sine-wave-main" x="2000" className="animate-voltage-scroll" />

                <use href="#sine-wave-low" className="animate-voltage-scroll-slow" />
                <use href="#sine-wave-low" x="1000" className="animate-voltage-scroll-slow" />
                <use href="#sine-wave-low" x="2000" className="animate-voltage-scroll-slow" />
            </svg>

            {/* Contenido principal */}
            <motion.div
                className="max-w-6xl mx-auto relative z-10"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.h1
                    variants={itemVariants}
                    className="text-5xl md:text-8xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent drop-shadow-lg"
                >
                    Heyzamer Campos
                </motion.h1>

                <motion.p
                    variants={itemVariants}
                    className="text-xl md:text-3xl mb-6 opacity-95 bg-gradient-to-r from-blue-200 to-cyan-100 bg-clip-text text-transparent"
                >
                    Ing. Eléctrico | Automatización | Control Industrial
                </motion.p>

                <motion.p
                    variants={itemVariants}
                    className="text-lg md:text-xl mb-10 max-w-4xl mx-auto opacity-90 leading-relaxed"
                >
                    Especializado en diseño de sistemas eléctricos, automatización industrial y eficiencia energética con enfoque en sostenibilidad y innovación tecnológica.
                </motion.p>

                <motion.a
                    href="/cv.pdf"
                    download
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-500 hover:to-teal-400 text-white font-bold py-4 px-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-out mx-auto group"
                >
                    📄 <span>Descargar CV</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                    </svg>
                </motion.a>
            </motion.div>

            {/* Onda inferior de transición suave */}
            <div className="absolute bottom-0 left-0 w-full h-24 pointer-events-none">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 120"
                    className="w-full h-full"
                >
                    <path
                        fill="#f9fafb"
                        fillOpacity="0.8"
                        d="M0,64L60,74.7C120,85,240,107,360,106.7C480,107,600,85,720,74.7C840,64,960,64,1080,74.7C1200,85,1320,107,1380,117.3L1440,128L1440,128L1380,128C1320,128,1200,128,1080,128C960,128,840,128,720,128C600,128,480,128,360,128C240,128,120,128,60,128L0,128Z"
                    ></path>
                    <path
                        fill="#e5e7eb"
                        fillOpacity="0.5"
                        d="M0,96L60,101.3C120,107,240,117,360,117.3C480,117,600,107,720,96C840,85,960,75,1080,74.7C1200,75,1320,85,1380,90.7L1440,96L1440,128L1380,128C1320,128,1200,128,1080,128C960,128,840,128,720,128C600,128,480,128,360,128C240,128,120,128,60,128L0,128Z"
                    ></path>
                </svg>
            </div>
        </section>
    )
}

'use client'

import { useState, useEffect } from 'react'

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('')

    // Secciones a observar
    const sections = ['about', 'education', 'skills', 'projects', 'contact']

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visibleEntry = entries.find((entry) => entry.isIntersecting)
                if (visibleEntry) {
                    setActiveSection(visibleEntry.target.id)
                }
            },
            { threshold: 0.2 }
        )

        sections.forEach((section) => {
            const el = document.getElementById(section)
            if (el) observer.observe(el)
        })

        return () => {
            sections.forEach((section) => {
                const el = document.getElementById(section)
                if (el) observer.unobserve(el)
            })
        }
    }, [])

    const scrollToSection = (id: string) => {
        setIsMenuOpen(false)
        const element = document.getElementById(id)
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 80,
                behavior: 'smooth',
            })
        }
    }

    return (
        <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
            <div className="max-w-6xl mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    {/* Logo / Nombre */}
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault()
                            scrollToSection('about')
                        }}
                        className="text-2xl font-extrabold text-gray-800 hover:text-blue-600 transition-colors"
                    >
                        Heyzamer Campos
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        {sections.map((section) => (
                            <button
                                key={section}
                                onClick={() => scrollToSection(section)}
                                className={`capitalize font-medium text-sm transition-colors duration-200 hover:text-blue-600 ${activeSection === section ? 'text-blue-700 font-semibold' : 'text-gray-700'
                                    }`}
                            >
                                {section.replace('-', ' ')}
                            </button>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden text-gray-700 focus:outline-none"
                        title={isMenuOpen ? "Close menu" : "Open menu"}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                            />
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="mt-4 md:hidden bg-white rounded-lg shadow-lg py-3 px-4 space-y-3">
                        {sections.map((section) => (
                            <button
                                key={section}
                                onClick={() => scrollToSection(section)}
                                className={`block w-full text-left capitalize font-medium py-2 px-3 rounded transition-colors ${activeSection === section
                                        ? 'bg-blue-50 text-blue-700 font-semibold'
                                        : 'text-gray-700 hover:bg-gray-100'
                                    }`}
                            >
                                {section.replace('-', ' ')}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    )
}
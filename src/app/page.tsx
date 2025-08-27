import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <main className="min-h-screen bg-gray-50">
        {/* Sección de Habilidades */}
        <Skills />

        {/* Sección de Experiencia / Trayectoria */}
        <Projects />
      </main>
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
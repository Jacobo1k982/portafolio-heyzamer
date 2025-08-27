import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Carga de fuentes
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Heyzamer Campos | Ingeniero Eléctrico",
  description: "Portafolio de Heyzamer Campos - Especialista en automatización, diseño eléctrico y control industrial.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased min-h-screen bg-gray-50 text-gray-900 transition-colors duration-300`}
      >
        {/* Fondo decorativo sutil */}
        <div className="fixed inset-0 -z-10 bg-gradient-to-br from-white via-blue-50 to-indigo-50"></div>

        {/* Efecto de malla de circuito muy sutil (opcional) */}
        <div
          className="fixed inset-0 -z-10 opacity-5 pointer-events-none"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232563eb' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        ></div>

        {/* Contenido principal */}
        <div className="relative">
          {children}
        </div>
      </body>
    </html>
  );
}
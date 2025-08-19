"use client"

import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import ParticleBackground from "@/components/particle-background" // Import the ParticleBackground component

export default function OQueFazemosPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showScrollButton, setShowScrollButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = Math.min(scrollTop / docHeight, 1)

      setScrollProgress(progress)
      setShowScrollButton(scrollTop > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="min-h-screen">
      {/* Sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-full max-w-[500px] sm:w-[400px] md:w-[500px] bg-[#f5ea8a] z-50 transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button */}
        <button
          onClick={() => setSidebarOpen(false)}
          className="absolute top-4 right-4 text-[#282828] hover:text-[#0a5f04] text-2xl font-bold"
        >
          ×
        </button>

        {/* Navigation items */}
        <nav className="pt-16 px-8">
          <ul className="space-y-8">
            <li>
              <a href="/" className="text-[#282828] text-xl font-bold hover:text-[#0a5f04] transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-[#282828] text-xl font-bold hover:text-[#0a5f04] transition-colors">
                Quem somos
              </a>
            </li>
            <li>
              <a
                href="/socioambiental"
                className="text-[#282828] text-xl font-bold hover:text-[#0a5f04] transition-colors"
              >
                Socioambiental
              </a>
            </li>
            <li>
              <a href="#" className="text-[#282828] text-xl font-bold hover:text-[#0a5f04] transition-colors">
                Fale Conosco
              </a>
            </li>
            <li>
              <a href="/o-que-fazemos" className="text-[#0a5f04] text-xl font-bold transition-colors">
                O que fazemos
              </a>
            </li>
            <li>
              <a href="#" className="text-[#282828] text-xl font-bold hover:text-[#0a5f04] transition-colors">
                Clientes
              </a>
            </li>
          </ul>
        </nav>

        {/* Contact information */}
        <div className="absolute bottom-20 px-4 sm:px-8 w-full">
          <div className="space-y-3 text-[#282828]">
            <div className="border-b border-[#282828] pb-2">
              <p className="font-semibold text-sm sm:text-base">Telefone: +55 11 98564 4535</p>
            </div>
            <div className="border-b border-[#282828] pb-2">
              <p className="font-semibold text-sm sm:text-base">
                Endereço: Rua Jericó, 193 – cj. 32 – Vila Madalena São Paulo/SP – Brasil
              </p>
            </div>
            <div className="border-b border-[#282828] pb-2">
              <p className="font-semibold text-sm sm:text-base">E-mail: atendimento@greenewgroup.com</p>
            </div>
          </div>

          <Button className="bg-[#0a5f04] hover:bg-[#175f30] text-white px-6 py-2 rounded-sm mt-6 w-full">
            <a href="/politica-de-privacidade" className="block w-full h-full">
              Política de privacidade
            </a>
          </Button>
        </div>
      </div>

      {/* Header */}
      <header className="bg-[#f5ea8a] py-4">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/greenew-logo.png" alt="GREENEW group" className="h-8 sm:h-12" />
          </div>
          <Button
            variant="ghost"
            className="text-[#0a5f04] flex items-center gap-2 sm:gap-3"
            onClick={() => setSidebarOpen(true)}
          >
            <div className="flex flex-col gap-1.5">
              <div className="w-6 h-0.5 bg-[#0a5f04] rounded-full"></div>
              <div className="w-6 h-0.5 bg-[#0a5f04] rounded-full"></div>
              <div className="w-6 h-0.5 bg-[#0a5f04] rounded-full"></div>
            </div>
            <span className="text-sm sm:text-base">Menu</span>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-[#0a5f04] py-12 sm:py-16">
        <div className="max-w-[1140px] mx-auto px-6">
          <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
            A Greenew é uma agência de propaganda 360°
          </h1>
        </div>
      </section>

      {/* Tree Section */}
      <section
        className="min-h-[200px] sm:min-h-[300px] lg:min-h-[400px] relative"
        style={{
          backgroundColor: "#0a5f04",
          backgroundImage: "url(/tree-background.png)",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: "#0a5f04",
            opacity: 0.3,
          }}
        />
      </section>

      {/* Main Content Section */}
      <section className="relative overflow-hidden" style={{ minHeight: "600px", height: "auto" }}>
        <div className="absolute inset-0 pointer-events-none">
          {/* Advanced Particle System */}
          <ParticleBackground />
        </div>

        <div className="max-w-[1140px] mx-auto h-full flex flex-col lg:flex-row">
          {/* Left Side - Company Description */}
          <div className="flex-1 bg-[#402315] p-6 sm:p-8 lg:p-12 flex flex-col justify-center relative z-10 min-h-[400px] sm:min-h-[500px]">
            <div className="max-w-md text-white">
              <p className="text-sm leading-relaxed">
                A Greenew é uma agência full-service que trabalha de maneira 360°. Somos capazes de atender diversas
                demandas de marketing e dessa forma desenvolvemos campanhas integradas. Desde 2011 atendemos empresas de
                indústria farmacêutica criando campanhas inovadoras. Eventos corporativos, campanhas publicitárias,
                ações de endomarketing e muito mais. Contamos com uma equipe experiente, criativa e apaixonada.
                Sobretudo focada em resolver com excelência as necessidades dos nossos clientes. A Greenew é uma empresa
                de diversidade que pensa no futuro. Por isso adotamos e buscamos fazer para nossos clientes, soluções
                sustentáveis, que respeitem as questões socioambientais e as pessoas. Porque elas são a força do negócio
                de qualquer empresa.
              </p>
            </div>
          </div>

          {/* Right Side - Digital Circuit Tree Image */}
          <div
            className="w-full lg:w-[542px] relative overflow-hidden flex-shrink-0 min-h-[300px] sm:min-h-[400px]"
            style={{
              backgroundImage: "url(/digital-circuit-tree.jpg)",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                backgroundColor: "#0a5f04",
                opacity: 0.2,
              }}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#f5ea8a] py-8 sm:py-12 lg:py-16 relative min-h-[500px] sm:min-h-[686px] flex flex-col justify-center">
        <div className="max-w-[1140px] mx-auto px-6">
          {/* Top section */}
          <div className="flex flex-col lg:flex-row justify-between items-start mb-8 sm:mb-12 lg:mb-16">
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 lg:w-2/3 mb-8 lg:mb-0 w-full">
              <p className="text-[#282828] text-base sm:text-lg leading-relaxed flex-1">
                A Greenew é uma agência full-service que trabalha de maneira 360°. Somos capazes de atender diversas
                demandas de marketing e dessa forma desenvolvemos campanhas integradas.
              </p>
              <a
                href="#"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-[#0a5f04] rounded-full flex items-center justify-center hover:bg-[#175f30] transition-colors flex-shrink-0"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Bottom section */}
          <div className="flex flex-col sm:flex-row lg:flex-row justify-between items-center gap-4 sm:gap-6">
            {/* DPO Logo */}
            <div className="flex items-center">
              <img src="/dpo-logo.png" alt="DPO Oficial" className="w-16 h-16 sm:w-20 sm:h-20 rounded-full" />
            </div>

            {/* Copyright */}
            <div className="text-[#282828] text-xs sm:text-sm font-medium text-center">
              Greenew todos os direitos reservados
            </div>

            {/* Privacy Policy */}
            <div>
              <a
                href="/politica-de-privacidade"
                className="text-[#282828] text-xs sm:text-sm font-medium hover:text-[#0a5f04] transition-colors"
              >
                Política de privacidade
              </a>
            </div>
          </div>
        </div>

        {/* Scroll to top button */}
        <button
          onClick={scrollToTop}
          className={`fixed bottom-4 right-4 sm:bottom-8 sm:right-8 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-500 shadow-lg bg-transparent z-50 ${
            showScrollButton
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-4 scale-95 pointer-events-none"
          }`}
          style={{
            background: `conic-gradient(#0a5f04 ${scrollProgress * 360}deg, transparent ${scrollProgress * 360}deg)`,
            padding: "2px",
          }}
        >
          <div className="w-full h-full rounded-full bg-[#f5ea8a] flex items-center justify-center">
            <svg
              className={`w-4 h-4 sm:w-6 sm:h-6 transition-colors duration-300 ${
                scrollProgress > 0.1 ? "text-[#0a5f04]" : "text-gray-400"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </div>
        </button>
      </footer>
    </div>
  )
}

"use client"

import { useState } from "react"
import Header from "@/components/header"
import Sidebar from "@/components/sidebar"
import Footer from "@/components/footer"
import AnimatedText from "@/components/animated-text"
import ParticleBackground from "@/components/particle-background"

export default function ClientesPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <Header onMenuClick={() => setSidebarOpen(true)} />
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} currentPage="clientes" />

      {/* Hero Section */}
      <section className="bg-[#0a5f04] pt-24 pb-12 relative overflow-hidden">
        <div className="max-w-[1140px] mx-auto px-6">
          <AnimatedText text="Nossos clientes" className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold" />
        </div>
      </section>

      {/* Particle Background Section */}
      <section className="bg-[#1a1a2e] py-16 relative overflow-hidden">
        <ParticleBackground />
        <div className="absolute right-8 lg:right-16 top-1/2 transform -translate-y-1/2 z-10">
          <AnimatedText
            text="clientes"
            className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold text-transparent"
            style={{
              WebkitTextStroke: "2px #0a5f04",
              textStroke: "2px #0a5f04",
            }}
          />
        </div>
      </section>

      {/* Clients Grid Section */}
      <section className="bg-[#0a5f04] py-16 lg:py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          {/* Row 1 */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12 mb-12 lg:mb-16 items-center">
            <div className="flex justify-center">
              <img
                src="/abbvie-logo-white.png"
                alt="AbbVie"
                className="h-12 lg:h-16 object-contain filter brightness-0 invert"
              />
            </div>
            <div className="flex justify-center">
              <img
                src="/alexion-logo-white.png"
                alt="Alexion"
                className="h-12 lg:h-16 object-contain filter brightness-0 invert"
              />
            </div>
            <div className="flex justify-center">
              <img
                src="/amgen-logo-white.png"
                alt="Amgen"
                className="h-12 lg:h-16 object-contain filter brightness-0 invert"
              />
            </div>
            <div className="flex justify-center">
              <img
                src="/bergamo-logo-white.png"
                alt="Bergamo"
                className="h-12 lg:h-16 object-contain filter brightness-0 invert"
              />
            </div>
            <div className="flex justify-center">
              <img
                src="/binatural-logo-white.png"
                alt="Binatural"
                className="h-12 lg:h-16 object-contain filter brightness-0 invert"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12 mb-12 lg:mb-16 items-center">
            <div className="flex justify-center">
              <img
                src="/biomarin-logo-white.png"
                alt="BioMarin"
                className="h-12 lg:h-16 object-contain filter brightness-0 invert"
              />
            </div>
            <div className="flex justify-center">
              <img
                src="/ems-logo-white.png"
                alt="EMS"
                className="h-12 lg:h-16 object-contain filter brightness-0 invert"
              />
            </div>
            <div className="flex justify-center">
              <img
                src="/eurofarma-logo-white.png"
                alt="Eurofarma"
                className="h-12 lg:h-16 object-contain filter brightness-0 invert"
              />
            </div>
            <div className="flex justify-center">
              <img
                src="/interfarma-logo-white.png"
                alt="Interfarma"
                className="h-12 lg:h-16 object-contain filter brightness-0 invert"
              />
            </div>
            <div className="flex justify-center">
              <img
                src="/johnson-and-johnson-logo-white.png"
                alt="Johnson & Johnson"
                className="h-12 lg:h-16 object-contain filter brightness-0 invert"
              />
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12 mb-12 lg:mb-16 items-center">
            <div className="flex justify-center">
              <img
                src="/placeholder.svg?height=60&width=120"
                alt="Jenesse"
                className="h-12 lg:h-16 object-contain filter brightness-0 invert"
              />
            </div>
            <div className="flex justify-center">
              <img
                src="/johnson-and-johnson-logo-white.png"
                alt="Johnson & Johnson"
                className="h-12 lg:h-16 object-contain filter brightness-0 invert"
              />
            </div>
            <div className="flex justify-center">
              <img
                src="/placeholder.svg?height=60&width=120"
                alt="MSD"
                className="h-12 lg:h-16 object-contain filter brightness-0 invert"
              />
            </div>
            <div className="flex justify-center">
              <img
                src="/placeholder.svg?height=60&width=120"
                alt="Novartis"
                className="h-12 lg:h-16 object-contain filter brightness-0 invert"
              />
            </div>
            <div className="flex justify-center">
              <img
                src="/placeholder.svg?height=60&width=120"
                alt="Novo Nordisk"
                className="h-12 lg:h-16 object-contain filter brightness-0 invert"
              />
            </div>
          </div>

          {/* Row 4 */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12 mb-12 lg:mb-16 items-center">
            <div className="flex justify-center">
              <img
                src="/placeholder.svg?height=60&width=120"
                alt="Petit Bateau"
                className="h-12 lg:h-16 object-contain filter brightness-0 invert"
              />
            </div>
            <div className="flex justify-center">
              <img
                src="/placeholder.svg?height=60&width=120"
                alt="Pfizer"
                className="h-12 lg:h-16 object-contain filter brightness-0 invert"
              />
            </div>
            <div className="flex justify-center">
              <img
                src="/placeholder.svg?height=60&width=120"
                alt="PTC Therapeutics"
                className="h-12 lg:h-16 object-contain filter brightness-0 invert"
              />
            </div>
            <div className="flex justify-center">
              <img
                src="/placeholder.svg?height=60&width=120"
                alt="Sandoz"
                className="h-12 lg:h-16 object-contain filter brightness-0 invert"
              />
            </div>
            <div className="flex justify-center">
              <img
                src="/placeholder.svg?height=60&width=120"
                alt="Sociedade Brasileira de Reumatologia"
                className="h-12 lg:h-16 object-contain filter brightness-0 invert"
              />
            </div>
          </div>

          {/* Row 5 */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-12 items-center justify-center">
            <div className="flex justify-center">
              <img
                src="/placeholder.svg?height=60&width=120"
                alt="Shire"
                className="h-12 lg:h-16 object-contain filter brightness-0 invert"
              />
            </div>
            <div className="flex justify-center">
              <img
                src="/placeholder.svg?height=60&width=120"
                alt="Takeda"
                className="h-12 lg:h-16 object-contain filter brightness-0 invert"
              />
            </div>
            <div className="flex justify-center">
              <img
                src="/placeholder.svg?height=60&width=120"
                alt="UCB"
                className="h-12 lg:h-16 object-contain filter brightness-0 invert"
              />
            </div>
            <div className="flex justify-center">
              <img
                src="/placeholder.svg?height=60&width=120"
                alt="Vidalink"
                className="h-12 lg:h-16 object-contain filter brightness-0 invert"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

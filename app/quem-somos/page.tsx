"use client"

import { useState } from "react"
import Header from "@/components/header"
import Sidebar from "@/components/sidebar"
import Footer from "@/components/footer"
import ParticleBackground from "@/components/particle-background"
import AnimatedText from "@/components/animated-text"

export default function QuemSomos() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <Header onMenuClick={() => setSidebarOpen(true)} />
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} currentPage="quem-somos" />

      {/* Hero Section */}
      <section className="bg-[#0a5f04] pt-20">
        <div className="max-w-[1140px] mx-auto px-6 py-12 sm:py-16">
          <AnimatedText
            text="A Greenew é uma agência de propaganda 360°"
            className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight"
          />
        </div>
      </section>

      {/* Tree Section */}
      <section className="bg-[#0a5f04] py-8 sm:py-12">
        <div
          className="w-full h-64 sm:h-80 lg:h-96 relative"
          style={{
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
              opacity: 0.7,
            }}
          />
        </div>
      </section>

      {/* Main Content Section */}
      <section className="relative" style={{ minHeight: "800px" }}>
        {/* Full-screen particles background */}
        <div className="fixed inset-0 z-0">
          <ParticleBackground />
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row min-h-[800px]">
          {/* Left side content */}
          <div className="flex-1 bg-[#402315] relative">
            <div className="max-w-[1140px] mx-auto px-6 py-12 lg:py-16">
              <div className="relative z-20 text-white max-w-4xl">
                <AnimatedText
                  text="A Greenew é uma agência full-service que trabalha de maneira 360°. Somos capazes de atender diversas demandas de marketing e dessa forma desenvolvemos campanhas integradas. Desde 2011, atendemos empresas da indústria farmacêutica criando campanhas inovadoras. Eventos online e offline utilizando alta tecnologia, branding, digital, vídeos, endomarketing e outros. Contamos com uma equipe experiente, criativa e apaixonada. Sobretudo focada em resolver com excelência as necessidades dos nossos clientes. A Greenew é uma empresa de diversidade que pensa no futuro. Por isso, adotamos e buscamos trazer para nossos clientes soluções sustentáveis, que respeitem as questões socioambientais e as pessoas. Porque elas são a força e a vitalidade de qualquer empresa."
                  className="text-base sm:text-lg leading-relaxed"
                />
              </div>
            </div>
          </div>

          {/* Right side image */}
          <div className="lg:w-[400px] relative">
            <div
              className="w-full h-full min-h-[400px] lg:min-h-[800px]"
              style={{
                backgroundImage: "url(/digital-circuit-tree.jpg)",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

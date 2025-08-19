"use client"

import Header from "@/components/header"
import Sidebar from "@/components/sidebar"
import Footer from "@/components/footer"
import { useState } from "react"
import ParticleBackground from "@/components/particle-background"
import AnimatedText from "@/components/animated-text"

export default function OQueFazemosPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen">
      <Header onMenuClick={() => setSidebarOpen(true)} />
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} currentPage="/o-que-fazemos" />

      {/* Hero Section with Particles */}
      <section className="bg-[#0a5f04] py-16 sm:py-20 lg:py-24 relative overflow-hidden pt-20">
        <div className="absolute inset-0 pointer-events-none">
          <ParticleBackground />
        </div>
        <div className="max-w-[1140px] mx-auto px-6 relative z-10">
          <AnimatedText
            text="Pensamos no futuro, por isso adotamos e buscamos propor soluções sustentáveis que respeitem as questões socioambientais"
            className="text-white text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight max-w-4xl"
          />
        </div>
      </section>

      {/* Digital & Social Section */}
      <section className="min-h-[600px] flex flex-col lg:flex-row">
        {/* Left Side - Image */}
        <div className="w-full lg:w-1/2 relative overflow-hidden min-h-[400px]">
          <img
            src="/modern-office-work.png"
            alt="People working on digital projects"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side - Content */}
        <div className="w-full lg:w-1/2 bg-[#0a5f04] p-8 sm:p-12 lg:p-16 flex flex-col justify-center relative">
          <div className="max-w-lg">
            <AnimatedText
              text="Newdigital & social"
              className="text-[#029fe3] text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
            />
            <AnimatedText
              text="Nossa equipe on-line desenvolve campanhas digitais, web sites, hotsites, portais, e-commerce, aplicativos, mídias sociais, intranet e sistemas web."
              className="text-white text-base sm:text-lg leading-relaxed"
            />
          </div>
          {/* Decorative leaves */}
          <div className="absolute bottom-8 right-8">
            <img src="/placeholder-fez9p.png" alt="Decorative leaves" className="w-20 h-16 opacity-60" />
          </div>
        </div>
      </section>

      {/* Content & Video Section */}
      <section className="min-h-[600px] flex flex-col lg:flex-row bg-[#402315]">
        {/* Left Side - Content */}
        <div className="w-full lg:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
          <div className="max-w-lg">
            <AnimatedText
              text="Newcontent & video"
              className="text-[#029fe3] text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
            />
            <AnimatedText
              text="Nossa equipe conta com profissionais experientes na produção de conteúdo e vídeos. Produzimos vídeos institucionais com captação de imagens, vídeos com animação e vídeos produzidos em estúdio para serem veiculados em variados meios de comunicação."
              className="text-white text-base sm:text-lg leading-relaxed"
            />
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="w-full lg:w-1/2 relative overflow-hidden min-h-[400px]">
          <img
            src="/video-editing-setup.png"
            alt="Video production and editing"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Events Section */}
      <section className="min-h-[600px] flex flex-col lg:flex-row bg-[#0a5f04]">
        {/* Left Side - Image */}
        <div className="w-full lg:w-1/2 relative overflow-hidden min-h-[400px]">
          <img
            src="/business-conference-audience.png"
            alt="Business event and conference"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side - Content */}
        <div className="w-full lg:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
          <div className="max-w-lg">
            <AnimatedText
              text="New Events"
              className="text-[#fab904] text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
            />
            <div className="space-y-4">
              <AnimatedText
                text="Nossa equipe on-line desenvolve campanhas digitais, web sites, hotsites, portais, e-commerce, aplicativos, mídias sociais, intranet e sistemas web."
                className="text-white text-base sm:text-lg leading-relaxed"
              />
              <AnimatedText
                text="A Greenew trabalha com eventos em suas mais diversas etapas, desde o planejamento, montagem, entrega e ações pós-evento. A nossa ampla gama de serviços inclui exposições comerciais, stands, conferências e reuniões com máxima excelência e qualidade."
                className="text-white text-base sm:text-lg leading-relaxed"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

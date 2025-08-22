"use client"

import { useState } from "react"
import Header from "@/components/header"
import Sidebar from "@/components/sidebar"
import Footer from "@/components/footer"
import AnimatedText from "@/components/animated-text"
import Image from "next/image"

export default function ClientesPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const images = [
    'AbbVie_Logo_branco-min.png',
    'Alexion_branco-min.png',
    'Amgen_Logo-02-min.png',
    'Bergamo_branco-min-2048x571.png',
    'binatural_logo-min.png',
    'Logo_BioMarin-03-min.png',
    'EMS_branco-min.png',
    'eurofarma_branco-min.png',
    'logo-interfarma-min.png',
    'jsn_logo_jj_horz_rev_rgb-min-2048x648.png',
    'Logo-Jeunesse_branco-min.png',
    'johnson_and_johnson-02-min.png',
    'Logo_MSD_RGB-04-min.png',
    'NOVARTIS_branco-min.png',
    'novo-nordisk_branco-03-min.png',
    'PETIT-BATEAU-LOGO-min.png',
    'Pfizer_branco_Prancheta-1-min.png',
    'PTC-Therapeutics-min.png',
    'sandoz_branco-min.png',
    'Logo_SBR_branco-03-min.png',
    'Shire-min.png',
    'Logo-Takeda-02-min.png',
    'Logo_UCB_RGB-02-min.png',
    'logo-vidalink-min.png'
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header onMenuClick={() => setSidebarOpen(true)} />
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} currentPage="clientes" />

      {/* Hero Section */}
      <section className="bg-[#0a5f04] pt-[120px] pb-[40px] relative mt-[80px]">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10">
          <AnimatedText
            text="Nossos clientes"
            className="text-white text-2xl sm:text-3xl lg:text-3xl font-bold text-center"
          />
          <h2 className="text-right text-[40px] sm:text-[70px] lg:text-[100px] stroke font-poppins absolute right-2 -bottom-[60px] sm:right-[50px] sm:-bottom-[80px]">Clientes</h2>
        </div>
      </section>

      <div className="min-h-[30vh]" style={{
        backgroundImage: "url(/WhatsApp-Image-2021-07-01-at-14.26.39-1.jpeg)",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}>
      </div>

      <section className="bg-[#402315] py-20">
        <div className="max-w-[1140px] mx-auto px-6">
          <p className="text-white text-center font-poppins text-lg leading-[2] font-medium max-w-[1027px] mx-auto">
            Nosso principal ativo, fruto do nosso bom trabalho. Sabemos que a propaganda é a alma do negócio, ainda mais quando a comunicação é integrada para gerar resultados surpreendentes. Nosso grande objetivo é superar a expectativa de nossos clientes. Os resultados são os frutos do nosso trabalho.
          </p>
          <div className="flex justify-center mt-4">
            <div className="btn-arrow relative w-[20px]">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </section>


      {/* Clients Grid Section */}
      <section className="bg-[#0a5f04] py-16 lg:py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          {/* Row 1 */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-8 lg:mb-16 items-center max-w-[1027px] mx-auto">
            {images.map((image,i) => {
              return (
                <div className="flex justify-center" key={i}>
                  <Image
                    width={169}
                    height={50}
                    src={`/clientes/${image}`}
                    alt="AbbVie"
                    className="w-full "
                  />

                </div>
              )
            })}

          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

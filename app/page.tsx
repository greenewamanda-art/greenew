"use client"

import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import Header from "@/components/header"
import Sidebar from "@/components/sidebar"
import Footer from "@/components/footer"
import AnimatedText from "@/components/animated-text"

export default function HomePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0)
  const [videoModalOpen, setVideoModalOpen] = useState(false)

  const services = [
    { text: "Digital & social", color: "#ff030c" },
    { text: "Content & video", color: "#0a5f04" },
    { text: "Events", color: "#f5ea8a" },
    { text: "Branding", color: "#ff030c" },
    { text: "Endomarketing", color: "#175f30" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % services.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [services.length])

  return (
    <div className="min-h-screen">
      {videoModalOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setVideoModalOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setVideoModalOpen(false)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 text-2xl font-bold z-10 transition-colors"
            >
              ×
            </button>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/WMSO07BjGEY?autoplay=1"
              title="Portfolio Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}

      {/* Header moved before video section */}
      <Header onMenuClick={() => setSidebarOpen(true)} />
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} currentPage="home" />

      {/* YouTube Video */}
      <section className="bg-[#282828] py-8 sm:py-12 pt-20">
        <div className="w-full px-4 sm:px-6">
          <div className="relative aspect-video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/WMSO07BjGEY?controls=0&modestbranding=1"
              title="Video Greenew"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Main Content Split */}
      <section className="flex flex-col lg:flex-row min-h-[400px] sm:min-h-[600px]">
        {/* Left Side - New Design with Services Animation */}
        <div
          className="w-full lg:w-1/2 relative overflow-hidden min-h-[400px] sm:min-h-[600px]"
          style={{
            backgroundColor: "#0A5F04",
            backgroundImage: "url(/tree-background.png)",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: "#402315",
              opacity: 0.7,
            }}
          />

          <div className="absolute bottom-8 sm:bottom-16 left-4 sm:left-8 z-10">
            <AnimatedText
              text="SOLUÇÕES"
              className="text-white text-xs sm:text-sm font-medium tracking-wider mb-2 sm:mb-4"
              as="p"
            />
            <AnimatedText
              text="New"
              className="text-white font-nunito font-bold capitalize tracking-wide leading-tight text-4xl sm:text-6xl lg:text-7xl xl:text-8xl mb-2 sm:mb-4"
              style={{
                fontFamily: '"Nunito", Sans-serif',
                fontWeight: 700,
                textTransform: "capitalize",
                lineHeight: "1.1em",
                letterSpacing: "1.7px",
              }}
              as="h1"
            />
            <div className="text-xl sm:text-2xl lg:text-4xl font-bold transition-all duration-500 ease-in-out">
              <AnimatedText
                key={currentServiceIndex}
                text={services[currentServiceIndex].text}
                className="font-bold"
                as="span"
              />
            </div>
          </div>
        </div>

        {/* Right Side - Updated with black text and dash */}
        <div className="w-full lg:w-1/2 bg-[#f5ea8a] relative overflow-hidden flex flex-col justify-center min-h-[300px] sm:min-h-[400px]">
          <div className="relative z-10 px-6 py-8 sm:py-0">
            <div className="max-w-md">
              <div className="flex items-start gap-3 sm:gap-4 mb-6 sm:mb-8">
                <span className="text-[#282828] text-xl sm:text-2xl font-bold mt-1">—</span>
                <AnimatedText
                  text="Soluções versáteis e eficazes para a real necessidade do cliente"
                  className="text-[#282828] text-xl sm:text-2xl lg:text-3xl font-bold leading-tight"
                  as="h2"
                />
              </div>
              <Button className="bg-[#0a5f04] hover:bg-[#175f30] text-white px-4 sm:px-6 py-2 rounded-sm text-sm sm:text-base">
                Ver mais
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="flex flex-col lg:flex-row min-h-[400px] sm:min-h-[500px]">
        {/* Left Side - About Us */}
        <div className="w-full lg:w-1/2 bg-[#f5ea8a] p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
          <div className="max-w-md">
            <AnimatedText
              text="QUEM SOMOS"
              className="text-[#282828] text-2xl sm:text-3xl font-bold mb-6 sm:mb-8"
              as="h2"
            />
            <AnimatedText
              text="A Greenew é uma agência de propaganda 360° capaz de atender diversas demandas de marketing. Conta com equipe criativa, apaixonada e sobretudo focada em resolver com excelência as necessidades das empresas com que trabalhamos. Nossos profissionais realizam campanhas que concretizam o resultado desejado pelas empresas que solicitam nossos serviços."
              className="text-[#282828] text-sm leading-relaxed mb-6 sm:mb-8"
              as="p"
            />
            <Button className="bg-[#0a5f04] hover:bg-[#175f30] text-white px-4 sm:px-6 py-2 rounded-sm text-sm sm:text-base">
              Saiba mais
            </Button>
          </div>
        </div>

        {/* Right Side - Green Texture */}
        <div
          className="w-full lg:w-1/2 relative overflow-hidden min-h-[200px] sm:min-h-[300px]"
          style={{
            backgroundImage: "url(/digital-tree-blue.jpg)",
            backgroundPosition: "top right",
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

      {/* New Parallax Section - Responsabilidade Socioambiental */}
      <section className="flex flex-col lg:flex-row min-h-[400px] sm:min-h-[600px]">
        {/* Left Side - Parallax Image with Green Overlay */}
        <div
          className="w-full lg:w-1/2 relative overflow-hidden min-h-[300px] sm:min-h-[400px]"
          style={{
            backgroundImage: "url(/tree-background.png)",
            backgroundPosition: "center left",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundAttachment: window.innerWidth > 1024 ? "fixed" : "scroll", // Remove parallax on mobile for better performance
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: "#402315",
              opacity: 0.7,
            }}
          />
        </div>

        {/* Right Side - Text Content */}
        <div className="w-full lg:w-1/2 bg-[#f5ea8a] p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
          <div className="max-w-md">
            <div className="flex items-start gap-3 sm:gap-4 mb-6 sm:mb-8">
              <span className="text-[#282828] text-xl sm:text-2xl font-bold mt-1">—</span>
              <AnimatedText
                text="Responsabilidade Socioambiental"
                className="text-[#282828] text-xl sm:text-2xl lg:text-3xl font-bold leading-tight"
                as="h2"
              />
            </div>
            <AnimatedText
              text="Nosso compromisso em atender à crescente necessidade de revisar padrões vigentes para que o sucesso seja alcançado ponderando-se os impactos sociais e ambientais consequentes da atuação da empresa."
              className="text-[#282828] text-sm leading-relaxed mb-6 sm:mb-8"
              as="p"
            />
            <Button className="bg-[#0a5f04] hover:bg-[#175f30] text-white px-4 sm:px-6 py-2 rounded-sm text-sm sm:text-base">
              Saiba mais
            </Button>
          </div>
        </div>
      </section>

      {/* New Portfolio Section */}
      <section
        className="relative min-h-[400px] sm:min-h-[600px] flex"
        style={{
          backgroundImage: "url(/portfolio-background.jpg)",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {/* Green overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: "#0a5f04",
            opacity: 0.59,
          }}
        />

        {/* Left side content */}
        <div className="w-full">
          <div className="max-w-[1140px] mx-auto px-6 h-full">
            <div className="relative z-10 flex flex-col justify-center h-full min-h-[400px] sm:min-h-[600px]">
              <div className="max-w-md">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <span className="text-white text-xl sm:text-2xl font-bold">—</span>
                  <AnimatedText
                    text="Portfolio"
                    className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold"
                    as="h2"
                  />
                </div>
                <Button className="bg-[#0a5f04] hover:bg-[#175f30] text-white px-4 sm:px-6 py-2 rounded-sm text-sm sm:text-base">
                  Saiba mais
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Centered play button - positioned absolutely to center of entire section */}
        <button
          onClick={() => setVideoModalOpen(true)}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-lg z-20"
        >
          <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#0a5f04] ml-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
      </section>

      <Footer />
    </div>
  )
}

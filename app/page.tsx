"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import Footer from "@/components/footer"
import TypewriterText from "@/components/typewriter-text"
import Link from "next/link"
import { TextAnimate } from "@/components/magicui/text-animate";

export default function HomePage() {
  const [videoModalOpen, setVideoModalOpen] = useState(false)

  const services = [
    { text: "Digital & social", color: "#0169B8" },
    { text: "Content & video", color: "#00A0E6" },
    { text: "Events", color: "#FFA701" },
    { text: "Branding", color: "#FF030C" },
    { text: "Endomarketing", color: "#FF6EAA" },
  ]

  return (
    <div className="min-h-screen sm:mt-[80px] mt-0">
      {videoModalOpen && (
        <div
          className="fixed inset-0  bg-black/80 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
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
              src="https://www.youtube.com/embed/WMSO07BjGEY?autoplay=1&mute=1"
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

      {/* YouTube Video */}
      <section className="bg-[#282828] py-8 sm:py-20 pt-20 mt-[100px] sm:mt-0">
        <div className="w-full  sm:px-0">
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

            {/* <video
              src="https://www.youtube.com/watch?v=WMSO07BjGEY"
              autoPlay
              muted
              playsInline
              loop
              className="w-full h-full rounded-lg shadow-2xl"
            ></video> */}
          </div>
        </div>
      </section>

      {/* Main Content Split */}
      <section className="flex flex-col lg:flex-row min-h-[400px] sm:h-[900px] h-auto">
        {/* Left Side - New Design with Services Animation */}
        <div
          className="w-full lg:w-1/2 relative overflow-hidden min-h-[600px] sm:min-h-[600px]"
          style={{
            backgroundColor: "#0A5F04",
            backgroundImage: "url(/tree-background.png)",
            backgroundPosition: "center top",
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

          <div className="absolute bottom-40 sm:bottom-48 px-7 lg:px-[60px] z-10">
            <p className="text-white text-xs sm:text-sm font-medium tracking-wider mb-2 sm:mb-4">SOLUÇÕES</p>

            <h2 className="text-white stroke font-nunito font-bold capitalize tracking-wide leading-tight text-[80px] sm:text-6xl lg:text-7xl xl:text-8xl mb-2 sm:mb-4">
              <b>New</b>
            </h2>
            <div className="text-xl sm:text-2xl lg:text-4xl font-bold">
              <TypewriterText
                texts={services.map((service) => service.text)}
                colors={services.map((service) => service.color)}
                className="font-bold text-white font-nunito"
                speed={120}
                pauseDuration={1500}
              />
            </div>
          </div>
        </div>

        {/* Right Side - Updated with black text and dash */}
        <div className="w-full lg:w-1/2 bg-[#f5ea8a] relative overflow-hidden flex flex-col justify-center min-h-[300px] lg:min-h-[400px]">
          <div className="relative py-14 lg:py-0 z-10 -mt-0 lg:-mt-[171px] px-7 lg:px-[60px]">
            <div className="max-w-md sm:max-w-4xl">
              <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="w-16 sm:w-20 h-0.5 bg-[#282828]"></div>
                <TextAnimate className="max-w-[550px] text-black text-2xl sm:text-3xl lg:text-4xl font-medium" animation="slideLeft" as="h2">
                  Soluções versáteis e eficazes para a real necessidade do cliente
                </TextAnimate>
              </div>

              <Button variant='link' asChild>
                <Link href='/oquefazemos' className="block font-poppins font-light">
                  Ver mais
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="flex flex-col lg:flex-row min-h-[400px] lg:h-[900px] h-auto">
        {/* Left Side - About Us */}
        <div className="w-full lg:w-1/2 bg-[#f5ea8a] px-7 lg:px-[60px] flex flex-col justify-center order-2 lg:order-none">
          <div className="max-w-md sm:max-w-4xl -mt-0 lg:-mt-[171px] py-14 lg:py-0">
            <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="w-16 lg:w-20 h-0.5 bg-[#282828]"></div>
              <TextAnimate className="text-2xl sm:text-3xl lg:text-4xl text-black font-medium animated-text" animation="slideUp" by="word" as='h2'>
                QUEM SOMOS
              </TextAnimate>
            </div>
            <TextAnimate className="text-[#282828] text-sm leading-relaxed mb-6 sm:mb-8" animation="fadeIn" by="line" as="p">
              A Greenew é uma agência de propaganda 360° capaz de atender diversas demandas de marketing. Conta com
              equipe criativa, apaixonada e sobretudo focada em resolver com excelência as necessidades das empresas com
              que trabalhamos. Nossos profissionais realizam campanhas que concretizam o resultado desejado pelas
              empresas que solicitam nossos serviços.
            </TextAnimate>

            <Button variant='link' asChild>
              <Link href='/quem-somos' className="block font-poppins font-light">
                Ver mais
              </Link>
            </Button>
          </div>
        </div>

        {/* Right Side - Green Texture */}
        <div
          className="w-full lg:w-1/2 relative overflow-hidden min-h-[500px] lg:min-h-[300px]"
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
      <section className="flex flex-col lg:flex-row min-h-[400px] lg:h-[900px] h-auto">
        {/* Left Side - Parallax Image with Green Overlay */}
        <div
          className="w-full lg:w-1/2 relative overflow-hidden min-h-[300px] lg:min-h-[400px]"
          style={{
            backgroundImage: "url(/digital-circuit-tree.jpg)",
            backgroundPosition: "center left",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundAttachment: 'fixed' // window.innerWidth > 1024 ? "fixed" : "fixed"
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
        <div className="w-full lg:w-1/2 bg-[#f5ea8a] flex flex-col justify-center lg:py-0 px-7 lg:px-[60px]">
          <div className="max-w-md sm:max-w-4xl mt-0 lg:-mt-[171px]  py-14 lg:py-0">
            <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="w-16 lg:w-20 h-0.5 bg-[#282828]"></div>
              <TextAnimate className="text-black text-2xl sm:text-3xl lg:text-4xl font-medium leading-tight animated-text" animation="slideUp" by="word" as='h2'>
                Responsabilidade Socioambiental
              </TextAnimate>
            </div>
            <TextAnimate className="text-[#282828] text-sm leading-relaxed mb-6 sm:mb-8" animation="fadeIn" by="line" as="p">
              Nosso compromisso em atender à crescente necessidade de revisar padrões vigentes para que o sucesso seja
              alcançado ponderando-se os impactos sociais e ambientais consequentes da atuação da empresa.
            </TextAnimate>
            <Button variant='link' asChild>
              <Link href='/responsabilidade-socioambiental' className="block font-poppins font-light">
                Ver mais
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* New Portfolio Section */}
      <section
        className="relative min-h-[400px] sm:min-h-[500px] flex"
        style={{
          backgroundImage: "url(/portfolio-background.jpg)",
          backgroundPosition: "top",
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
            <div className="relative z-10 flex flex-col justify-center h-full min-h-[400px] sm:min-h-[500px]">
              <div className="max-w-md flex flex-col gap-14">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="w-16 sm:w-20 h-0.5 bg-white"></div>
                  <TextAnimate className="text-white text-2xl sm:text-3xl lg:text-4xl font-medium" animation="slideUp" by="word" as='h2'>
                    Portfolio
                  </TextAnimate>

                </div>
                <Button variant='link' className="w-fit" asChild>
                  <Link href="/portfolio">
                    Saiba mais
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Centered play button - positioned absolutely to center of entire section */}
        <div className="absolute top-1/2 w-24 h-24 border border-[#ffffff33] rounded-full flex items-center justify-center left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-colors shadow-lg z-20">
          <button
            onClick={() => setVideoModalOpen(true)}
            className="
              group relative w-22 h-22 flex items-center justify-center rounded-full cursor-pointer
              transition-all duration-500 ease-in-out
              before:content-[''] before:absolute before:top-[5px] before:bottom-[5px] before:left-[5px] before:right-[5px]
              before:bg-white before:rounded-full
              before:transition-all before:duration-500 before:[transition-timing-function:cubic-bezier(1,0,0,1)]
              hover:before:scale-0 hover:before:opacity-0
            "
          >
            <svg
              className="relative z-10 w-6 h-6 sm:w-8 sm:h-8 ml-1 text-black transition-colors duration-500 group-hover:text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>

        </div>
      </section>
      <Footer />
    </div>
  )
}

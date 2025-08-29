
import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"
import TypewriterText from "@/components/typewriter-text"
import Link from "next/link"
import { TextAnimate } from "@/components/magicui/text-animate";

export default function HomePage() {
  const services = [
    { text: "Digital & social", color: "#0169B8" },
    { text: "Content & video", color: "#00A0E6" },
    { text: "Events", color: "#FFA701" },
    { text: "Branding", color: "#FF030C" },
    { text: "Endomarketing", color: "#FF6EAA" },
  ]

  return (
    <div className="min-h-screen sm:mt-[80px] mt-0">
      {/* YouTube Video */}
      <section className="bg-[#282828] py-8 sm:py-20 pt-20 mt-[100px] sm:mt-0">
        <div className="w-full  sm:px-0">
          <div className="relative aspect-video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/WMSO07BjGEY?controls=0&modestbranding=1&autoplay=1&mute=1&loop=1&playlist=WMSO07BjGEY&rel=0"
              title="Video Greenew"
              frameborder="0"
              allow="autoplay; encrypted-media"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
              className="w-full h-full rounded-lg"
            />
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
              <div className="max-w-md flex flex-col gap-10">
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
      </section>
      <Footer />
    </div>
  )
}
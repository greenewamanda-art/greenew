import Footer from "@/components/footer"
import Image from "next/image"
import { TextAnimate } from "@/components/magicui/text-animate"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "O que fazemos? - Greenew",
  description: "Pensamos no futuro, por isso adotamos e buscamos propor soluções sustentáveis que respeitem as questões socioambientais",
  openGraph: {
    url: "https://greenew.com.br/oquefazemos"
  }
}


export default function OQueFazemosPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Particles */}
      <section className="bg-[#0a5f04] pt-[120px] pb-[40px] relative mt-[80px]">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10">
          <TextAnimate className="max-w-[610px] text-white text-2xl sm:text-3xl lg:text-3xl font-poppins font-medium text-left" animation="slideLeft" by="character" duration={1} as='h1'>
            Pensamos no futuro, por isso adotamos e buscamos propor soluções sustentáveis que respeite as questões socioambientais
          </TextAnimate>
          <h2 className="text-right text-[40px] sm:text-[70px] lg:text-[100px] stroke font-poppins absolute right-2 -bottom-[60px] sm:right-[30px] sm:-bottom-[100px]">O que fazemos?
          </h2>
        </div>
      </section>

      <div className="min-h-[150px] sm:min-h-[250px]" style={{
        backgroundImage: "url(/WhatsApp-Image-2021-07-01-at-14.26.39-1.jpeg)",
        backgroundPosition: "center right",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}>
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: "#0a5f04",
            opacity: 0.59,
          }}
        />
      </div>


      {/* Digital & Social Section */}
      <section className="min-h-auto sm:min-h-[600px] flex flex-col lg:flex-row ">
        {/* Left Side - Image */}
        <div className="w-full lg:w-1/2 relative overflow-hidden min-h-auto">
          <Image
            width={523}
            height={349}
            src="/oque-fazemos/pexels-canva-studio-3194518-2048x1365.jpg"
            alt="People working on digital projects"
            className="w-full h-full object-cover"
          />

        </div>

        {/* Right Side - Content */}
        <div className="w-full lg:w-1/2 bg-[#0a5f04] p-8 sm:p-12 lg:p-16 flex flex-col justify-center relative">
          <div className="mw-full z-30">
            <h3 className="text-[#029fe3] text-3xl sm:text-4xl lg:text-5xl font-poppins font-medium mb-6">Newdigital & social</h3>
            <p className="text-white text-base sm:text-lg leading-relaxed font-poppins">
              Nossa equipe on-line desenvolve campanhas digitais, web sites, hotsites, portais, e-commerce, aplicativos, mídias sociais, intranet e sistemas web.
            </p>
          </div>
          {/* Decorative leaves */}
          <div className="absolute bottom-2 right-4 sm:right-8 z-1 sm:z-1">
            <Image width={300} height={300} src='/folha3.png' alt="" className="w-[80px] sm:w-[200px]" />
          </div>
        </div>
      </section>

      {/* Content & Video Section */}
      <section className="sm:min-h-[600px] flex flex-col lg:flex-row bg-[#402315]">
        {/* Left Side - Content */}
        <div className="w-full lg:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
          <div className="w-full">
            <h3 className="text-[#029fe3] text-3xl sm:text-4xl lg:text-5xl font-medium mb-6">Newcontent & video</h3>
            <p className="text-white text-base sm:text-lg leading-relaxed">Nossa equipe conta com profissionais experientes na produção de conteúdo e vídeos. Produzimos vídeos institucionais com captação de imagens, vídeos com animação e vídeos produzidos em estúdio para serem veiculados em variados meios de comunicação.</p>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="w-full lg:w-1/2 relative overflow-hidden sm:min-h-[400px]">
          <Image
            width={523}
            height={349}
            src="/oque-fazemos/newcontent-video.jpg"
            alt="Newcontent & video"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Events Section */}
      <section className="min-h-[600px] flex flex-col lg:flex-row bg-[#0a5f04]">
        {/* Left Side - Image */}
        <div className="w-full lg:w-1/2 relative overflow-hidden sm:min-h-[400px] order-2 sm:order-0">
          <Image
            width={523}
            height={349}
            src="/oque-fazemos/business-conference-audience.png"
            alt="Business event and conference"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side - Content */}
        <div className="w-full lg:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
          <div className="space-y-4">
            <h3 className="text-[#fab904] text-3xl sm:text-4xl lg:text-5xl font-poppins font-medium mb-6">New Events</h3>
            <p className="text-white text-base sm:text-lg leading-relaxed font-poppins">
              Nossa equipe on-line desenvolve campanhas digitais, web sites, hotsites, portais, e-commerce, aplicativos, mídias sociais, intranet e sistemas web.
            </p>
            <p className="text-white text-base sm:text-lg leading-relaxed font-poppins">
              A Greenew trabalha com eventos em suas mais diversas etapas, desde o planejamento, montagem, entrega e ações pós-evento. A nossa ampla gama de serviços inclui exposições comerciais, stands, conferências e reuniões com máxima excelência e qualidade
            </p>
          </div>
        </div>
      </section>

      {/* Content & Newbranding */}
      <section className="sm:min-h-[600px] flex flex-col lg:flex-row bg-[#402315]">
        {/* Left Side - Content */}
        <div className="w-full lg:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
          <h3 className="text-white text-3xl sm:text-4xl lg:text-5xl font-poppins font-medium mb-6">New branding
          </h3>
          <p className="text-white text-base sm:text-lg leading-relaxed font-poppins">Desenvolvemos gestão de marca, imagens ou ideias a ela associadas, incluindo: slogans, símbolos, logotipos e outros elementos de identidade visual.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="w-full lg:w-1/2 relative overflow-hidden sm:min-h-[400px]">
          <Image
            width={523}
            height={349}
            src="/oque-fazemos/new-branding.jpg"
            alt="New branding"
            className="w-full h-full object-cover"
          />
        </div>
      </section>


      {/* Digital & Social Section */}
      <section className="min-h-auto sm:min-h-[600px] flex flex-col lg:flex-row ">
        {/* Left Side - Image */}
        <div className="w-full lg:w-1/2 relative overflow-hidden min-h-auto order-2 sm:order-0">
          <Image
            width={523}
            height={349}
            src="/oque-fazemos/new-endomarketg.jpg"
            alt="People working on digital projects"
            className="w-full h-full object-cover"
          />

        </div>

        {/* Right Side - Content */}
        <div className="w-full lg:w-1/2 bg-[#0a5f04] p-8 sm:p-12 lg:p-16 flex flex-col justify-center relative">
          <div className="mw-full z-30">
            <h3 className="text-[#ED6FA7] text-3xl sm:text-4xl lg:text-5xl font-poppins font-medium mb-6">
              New endomarketing
            </h3>
            <p className="text-white text-base sm:text-lg leading-relaxed font-poppins">
              Executamos seguindo planejamento estratégico para comunicar e criar relacionamentos com o público interno das empresas, compartilhando objetivos, harmonizando e fortalecendo o envolvimento dos colaboradores.
            </p>
          </div>
          {/* Decorative leaves */}
          <div className="absolute bottom-2 right-4 sm:right-8 z-1 sm:z-1">
            <Image width={300} height={300} src='/folha3.png' alt="" className="w-[80px] sm:w-[200px]" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

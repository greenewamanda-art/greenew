import Footer from "@/components/footer"
import Image from "next/image"
import { TextAnimate } from "@/components/magicui/text-animate"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Responsabilidade Socioambiental - Greenew",
  description: "Nosso compromisso em atender à crescente necessidade de revisar padrões vigentes para que o sucesso seja alcançado ponderando-se os impactos sociais e ambientais consequentes da atuação da empresa.",
  openGraph: {
    url: "https://greenew.com.br/responsabilidade-socioambiental"
  }
}


export default function SocioambientalPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#0a5f04] pt-[120px] pb-[40px] relative mt-[80px]">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10">
          <TextAnimate className="sm:max-w-[570px] text-white text-[20px] sm:text-3xl lg:text-3xl font-poppins font-medium text-left" animation="slideLeft" by="character" duration={1} as='h1'>
            Realizamos o plantio de árvores em áreas de proteção ambiental
          </TextAnimate>
          <h2 className="text-right text-[34px] sm:text-[70px] lg:text-[100px] stroke font-poppins absolute right-3 -bottom-[80px] sm:-right-[10px] sm:-bottom-[210px]">
            Responsabilidade <br></br>
            Socioambiental
          </h2>
        </div>
      </section>

      {/* Tree Section */}
      <section
        className="relative bg-[#0a5f04] py-12 sm:py-16 lg:py-20 min-h-[200px] sm:min-h-[300px] lg:min-h-[400px]"
        style={{
          backgroundImage: "url('/paralax-new.jpg')",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: 'fixed' //window.innerWidth > 1024 ? "fixed" : "scroll",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: "#0a5f04",
            opacity: 0.7,
          }}
        />
      </section>

      {/* Content Section */}
      <section className="bg-[#402315] py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1140px] mx-auto px-6 text-center">
          <div className="text-white space-y-4 sm:space-y-6 mb-8 sm:mb-12">
            <p className="text-sm font-poppins leading-relaxed sm:max-w-[691px] sm:mx-auto font-medium">
              Nosso compromisso em atender à crescente necessidade de revisar padrões vigentes para que o sucesso seja
              alcançado ponderando-se os impactos sociais e ambientais consequentes da atuação da empresa.
            </p>

            <div className="text-sm leading-relaxed font-poppins font-medium  sm:max-w-[700px] sm:mx-auto">
              <p>Apoiamos iniciativas como: <br></br></p>
              <div className="flex justify-center gap-1 sm:gap-4 flex-wrap">
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-check-icon lucide-circle-check"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>
                  <p>Médicos sem Fronteiras</p>
                </div>
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-check-icon lucide-circle-check"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>
                  <p>Lar Vinícius</p>
                </div>
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-check-icon lucide-circle-check"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>
                  <p>Instituto Arara Azul</p>
                </div>
              </div>
              <p>
                Realizamos o plantio de árvores em áreas de proteção ambiental: APA Baia de Camamu, Taipu de Fora, Bahia e
                APA Serra do Itaí, Tapirai, São Paulo.
              </p>
            </div>
          </div>

          {/* Partner Logos */}
          <div className="bg-white p-4 sm:p-6 lg:p-3 rounded-lg inline-block w-full max-w-2xl 
    border-t-0 border-r-[20px] border-b-[20px] border-l-0 border-solid border-black
     bg-[url('/clientes_fundo.jpg')] bg-no-repeat bg-cover
    bg-left lg:bg-[center_top]">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-12">
              <div className="sm:w-[223px] flex items-center justify-center">
                <Image className="w-[154px]" src='logolar-removebg-pre.png' alt="" width={225} height={196} />
              </div>
              <div className="sm:w-[223px] flex items-center justify-center">
                <Image className="w-[111px]" src='logo.png' alt="" width={225} height={196} />
              </div>
              <div className="flex items-center justify-center">
                <Image className="w-[203px]" src='logo-medicos-sem-fronteiras.png' alt="" width={225} height={196} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

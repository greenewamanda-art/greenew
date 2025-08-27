import Footer from "@/components/footer"
import ParticleBackground from "@/components/particle-background"
import Image from "next/image"
import { TextAnimate } from "@/components/magicui/text-animate"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Quem somos - Greenew",
  description: "A Greenew é uma agência full-service que trabalha de maneira 360°. Somos capazes de atender diversas demandas de marketing e dessa forma desenvolvemos campanhas integradas. Desde 2011, atendemos empresas da indústria farmacêutica criando campanhas inovadoras. Eventos online e offline utilizando alta tecnologia, branding, digital, vídeos, endomarketing e outros. Contamos com uma equipe ...",
  openGraph: {
    url: "https://greenew.com.br/quem-somos"
  }
}

export default function QuemSomos() {

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#0a5f04] pt-[120px] pb-[40px] relative mt-[80px]">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10">
          <TextAnimate className="max-w-[410px] text-white text-2xl sm:text-3xl lg:text-3xl font-poppins font-medium text-left" animation="slideLeft" by="character" duration={1} as='h1'>
            A Greenew é uma agência de propaganda 360
          </TextAnimate>
          <h2 className="text-right text-[40px] sm:text-[70px] lg:text-[100px] stroke font-poppins absolute right-2 -bottom-[60px] sm:right-[30px] sm:-bottom-[90px]">Quem somos
          </h2>
        </div>
      </section>

      {/* Tree Section */}
      <section className="bg-[#0a5f04]">
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

      <section className="relative bg-[#402315] pb-52 sm:pb-20">
        <ParticleBackground />
        <div className="px-6 py-12 lg:py-16 relative z-20 text-white flex">
          <div className="w-full sm:w-1/2 text-[14px] leading-relaxed font-poppins flex flex-col gap-2">
            <p>
              Na Greenew, inovação, criatividade e resultados são a base de tudo o que fazemos.
            </p>
            <p>
              Com mais de 10 anos de atuação no mercado publicitário, somos uma agência full-service que entrega soluções integradas de comunicação para marcas que desejam crescer de forma consistente e relevante. Atendemos desde empresas nacionais até gigantes multinacionais, com excelência, estratégia e originalidade.
            </p>
            <p>
              Nosso modelo multicanal permite que sua marca esteja presente com força e coerência em todos os pontos de contato. Criamos e executamos campanhas completas que vão do branding à produção de vídeos, passando por eventos, endomarketing, redes sociais, marketing digital e muito mais — sempre com uma visão estratégica e unificada, garantindo eficiência e impacto real.
            </p>
            <p>
            A Greenew é certificada em LGPD, sustentabilidade, diversidade e inclusão, reforçando nosso compromisso com a ética, a responsabilidade e o futuro.
            </p>
            <p>
            Conectamos propósito, emoção e performance em cada entrega. Esse é o jeito Greenew de comunicar: com ideias que geram impacto e resultados que fazem a diferença.
            </p>
          </div>
          <div className="hidden sm:block sm:w-1/2 sm:px-4">
            <Image
              width={545}
              height={545}
              alt=""
              src="digital-circuit-tree.jpg"
              className="w-full"
            />
          </div>
        </div>

        <div className="absolute bottom-0 right-2">
          <Image
            width={100}
            height={100}
            alt=""
            src='/folha3.png'
            className="w-[250px]"
          />
        </div>
      </section>

      {/* Main Content Section */}
      <section className="relative hidden" style={{ minHeight: "800px" }}>
        {/* Full-screen particles background */}
        <div className="fixed inset-0 z-0">
          <ParticleBackground />
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row min-h-[800px]">
          {/* Left side content */}
          <div className="flex-1 bg-[#402315] relative">
            <div className="max-w-[1140px] mx-auto px-6 py-12 lg:py-16">
              <div className="relative z-20 text-white max-w-4xl">
                <p className="text-base sm:text-lg leading-relaxed">
                  A Greenew é uma agência full-service que trabalha de maneira 360°. Somos capazes de atender diversas demandas de marketing e dessa forma desenvolvemos campanhas integradas. Desde 2011, atendemos empresas da indústria farmacêutica criando campanhas inovadoras. Eventos online e offline utilizando alta tecnologia, branding, digital, vídeos, endomarketing e outros. Contamos com uma equipe experiente, criativa e apaixonada. Sobretudo focada em resolver com excelência as necessidades dos nossos clientes. A Greenew é uma empresa de diversidade que pensa no futuro. Por isso, adotamos e buscamos trazer para nossos clientes soluções sustentáveis, que respeitem as questões socioambientais e as pessoas. Porque elas são a força e a vitalidade de qualquer empresa.
                </p>
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

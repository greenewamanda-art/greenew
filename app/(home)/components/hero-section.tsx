import Image from "next/image";
import { HERO_VIDEO_SRC } from "../content";
import { TextAnimate } from "@/components/magicui/text-animate";

export default function HeroSection() {
  return (
    // <section className="w-full">
    //   <div className="relative aspect-video">
    //     <iframe
    //       src={HERO_VIDEO_SRC}
    //       title="Vídeo institucional Greenew"
    //       allow="autoplay; encrypted-media"
    //       referrerPolicy="strict-origin-when-cross-origin"
    //       allowFullScreen
    //       className="h-full w-full rounded-lg border-0"
    //     />
    //   </div>
    // </section>
    //   <section className="relative flex h-[50vh] min-h-[280px] items-center overflow-hidden md:h-[60vh] md:min-h-[320px] lg:h-[70vh] lg:max-h-[700px]">
    //   {/* Imagem de fundo */}
    //   <Image
    //     src="/home/hero-bg.jpg"
    //     alt=""
    //     fill
    //     priority
    //     sizes="100vw"
    //     className="object-cover object-center"
    //   />
    //   <div
    //     className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 via-emerald-950/15 to-transparent
    //                md:bg-gradient-to-r md:from-emerald-950/55 md:via-emerald-950/20 md:to-transparent"
    //   />

    //   <div className="relative z-10 w-full px-6 md:px-10 lg:pl-[calc(187*var(--u))]">
    //     <h1 className="whitespace-pre-wrap space-y-2 [text-shadow:7px_7px_5px_rgba(7,79,8,0.20)] text-white font-medium text-[22px] leading-snug tracking-[20.9px] sm:text-[28px] lg:text-6xl">
    //       <TextAnimate className="block" animation="slideLeft" by="character" duration={1} as="span">
    //         Transformando
    //       </TextAnimate>
    //       <TextAnimate className="block" animation="slideLeft" by="character" duration={1} delay={0.15} as="span">
    //         ideias em
    //       </TextAnimate>
    //       <TextAnimate className="block" animation="slideLeft" by="character" duration={1} delay={0.3} as="span">
    //         resultados
    //       </TextAnimate>
    //     </h1>
    //   </div>
    // </section>

    <section
      className="relative w-full overflow-hidden"
      aria-label="Transformando ideias em resultados"
    >
      <div className="relative h-[280px] w-full sm:h-[360px] lg:h-[700px]">
        <Image
          src="/home/hero-bg.jpg"
          width={1920}
          height={700}
          alt="Folha verde com gotas de orvalho"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="relative flex h-full w-full items-center px-6 py-14 md:px-0 md:py-0">
          <h1 className="whitespace-pre-wrap space-y-2 [text-shadow:7px_7px_5px_rgba(7,79,8,0.20)] text-white font-medium text-[22px] leading-snug tracking-[10.9px]  md:tracking-[20.9px] sm:text-[28px] lg:text-[68px] lg:absolute lg:left-[calc(100*var(--u))]">
            <TextAnimate
              className="block"
              animation="slideLeft"
              by="word"
              duration={1}
              as="span"
            >
              Transformando
            </TextAnimate>
            <TextAnimate
              className="block"
              animation="slideLeft"
              by="word"
              duration={1}
              delay={0.15}
              as="span"
            >
              ideias em
            </TextAnimate>
            <TextAnimate
              className="block"
              animation="slideLeft"
              by="word"
              duration={1}
              delay={0.3}
              as="span"
            >
              resultados
            </TextAnimate>
          </h1>
        </div>
      </div>
    </section>
  );
}

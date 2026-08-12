import Image from "next/image";

import { TextAnimate } from "@/components/magicui/text-animate";

import { SOCIO_COPY } from "../content";
import { bodyCopy, sectionTitle } from "../styles";
import DecorImage from "./decor-image";

const fullBleedOnMobile =
  "-mx-6 w-[calc(100%_+_3rem)] max-w-none sm:-mx-10 sm:w-[calc(100%_+_5rem)] lg:mx-0 lg:w-[calc(875*var(--u))]";

export default function SocioEnvironmentalSection() {
  return (
    <section id="socioambiental" className="relative flex flex-col gap-8 bg-brand-olive px-6 pt-14 sm:px-10 lg:block lg:h-[calc(980*var(--u))] lg:px-0 lg:py-0">
      <DecorImage
        src="/home/leaf-socio.png"
        width={355}
        height={355}
        className="z-20 hidden lg:block lg:left-[calc(690*var(--u))] lg:top-[calc(-150*var(--u))] lg:size-[calc(355*var(--u))]"
      />

      <Image
        src="/home/socio-photo.jpg"
        alt="Ação socioambiental da Greenew"
        width={3647}
        height={4085}
        className={`order-last h-[240px] object-cover sm:h-[320px] lg:absolute lg:right-0 lg:top-0 lg:h-full ${fullBleedOnMobile}`}
      />

      <TextAnimate
        as="h2"
        animation="fadeIn"
        by="line"
        className={`text-white ${sectionTitle} lg:absolute lg:left-[calc(187*var(--u))] lg:top-[calc(240*var(--u))]`}
      >
        SOCIOAMBIENTAL
      </TextAnimate>

      <TextAnimate
        as="p"
        animation="fadeIn"
        by="line"
        className={`text-brand-green-deep ${bodyCopy} lg:absolute lg:left-[calc(187*var(--u))] lg:top-[calc(333*var(--u))] lg:w-[calc(768*var(--u))]`}
      >
        {SOCIO_COPY}
      </TextAnimate>
    </section>
  );
}

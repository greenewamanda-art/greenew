import Image from "next/image";

import { TextAnimate } from "@/components/magicui/text-animate";

import { SOCIO_COPY } from "../content";
import { bodyCopy, sectionTitle } from "../styles";
import DecorImage from "./decor-image";

const fullBleedOnMobile =
  "-mx-6 w-[calc(100%_+_3rem)] max-w-none sm:-mx-10 sm:w-[calc(100%_+_5rem)] lg:mx-0 lg:w-[calc(875*var(--u))]";

export default function SocioEnvironmentalSection() {
  return (
    <section
      id="socioambiental"
      className="relative flex flex-col gap-8 bg-brand-olive px-6 pt-14 pb-14 sm:px-10 lg:block lg:h-[calc(980*var(--u))] lg:px-0 lg:py-0"
    >
      <DecorImage
        src="/home/leaf-socio.png"
        width={355}
        height={355}
        className="z-20 hidden lg:block lg:left-[calc(890*var(--u))] 2xl:left-[calc(690*var(--u))] lg:top-[calc(-150*var(--u))] lg:size-[calc(355*var(--u))]"
      />

      <Image
        src="/home/socio-photo.png"
        alt="Ação socioambiental da Greenew"
        width={3647}
        height={4085}
        className="absolute top-0 right-[-124px] object-cover  lg:hidden"
      />

      <Image
        src="/home/socio-photo.png"
        alt="Ação socioambiental da Greenew"
        width={3647}
        height={4085}
        className="absolute inset-y-0 right-0 w-1/3 object-cover lg:bottom-auto lg:h-full lg:w-auto hidden lg:block"
      />

      <TextAnimate
        as="h2"
        animation="fadeIn"
        by="line"
        className={`max-w-[60%] text-white tracking-[5.0px] lg:tracking-[10.8px] ${sectionTitle} lg:max-w-none lg:absolute lg:left-[calc(187*var(--u))] lg:top-[calc(240*var(--u))]`}
      >
        SOCIOAMBIENTAL
      </TextAnimate>

      <TextAnimate
        as="p"
        animation="fadeIn"
        by="line"
        className={`max-w-[60%] text-brand-green-deep tracking-[2px] lg:tracking-[6.6px] ${bodyCopy} lg:max-w-none lg:absolute lg:left-[calc(187*var(--u))] lg:top-[calc(333*var(--u))] lg:w-[calc(768*var(--u))]`}
      >
        {SOCIO_COPY}
      </TextAnimate>
    </section>
  );
}

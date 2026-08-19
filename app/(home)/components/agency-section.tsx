import Image from "next/image";

import { TextAnimate } from "@/components/magicui/text-animate";

import { AGENCY_COPY } from "../content";
import { bodyCopy, sectionTitle } from "../styles";
import DecorImage from "./decor-image";

export default function AgencySection() {
  return (
    <section id="agencia" className="relative flex flex-col gap-8 overflow-hidden bg-brand-cream px-6 py-14 sm:px-10 lg:block lg:h-[calc(940*var(--u))] lg:px-0 lg:py-0">
      <div className="absolute hidden bg-white lg:block lg:left-0 lg:top-0 lg:h-[calc(350*var(--u))] lg:w-[calc(506*var(--u))]" />

      <DecorImage
        src="/home/leaf-agencia.png"
        width={1938}
        height={1314}
        className="right-0 top-6 w-[150px] sm:w-[220px] lg:right-[calc(-169*var(--u))] lg:top-[calc(76*var(--u))] lg:h-[calc(315*var(--u))] lg:w-[calc(465*var(--u))]"
      />

      <TextAnimate
        as="h2"
        animation="fadeIn"
        by="line"
        className={`relative z-10 text-brand-olive tracking-[10.8px] ${sectionTitle} lg:absolute lg:left-[calc(203*var(--u))] lg:top-[calc(147*var(--u))]`}
      >
        AGÊNCIA
      </TextAnimate>

      <TextAnimate
        as="p"
        animation="fadeIn"
        by="line"
        className={`relative z-10 tracking-[6.6px] text-brand-green-deep ${bodyCopy} lg:absolute lg:left-[calc(607*var(--u))] lg:top-[calc(145*var(--u))] lg:w-[calc(866*var(--u))]`}
      >
        {AGENCY_COPY}
      </TextAnimate>

      <Image
        src="/home/agencia-photo.jpg"
        alt="Equipe Greenew"
        width={1334}
        height={1313}
        className="relative h-[220px] w-full object-cover sm:h-[315px] lg:absolute lg:left-[calc(186*var(--u))] lg:top-[calc(350*var(--u))] lg:h-[calc(315*var(--u))] lg:w-[calc(320*var(--u))]"
      />
    </section>
  );
}

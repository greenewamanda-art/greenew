import Image from "next/image";

import { BlurFade } from "@/components/magicui/blur-fade";
import { TextAnimate } from "@/components/magicui/text-animate";

import { CLIENTS_COPY, clientLogoIds } from "../content";
import { bodyCopy, sectionTitle } from "../styles";

const LOGO_SIZES = "(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw";

export default function ClientsSection() {
  return (
    <section id="clientes" className="relative bg-brand-cream px-6 py-14 sm:px-10 lg:h-[calc(1158*var(--u))] lg:px-0 lg:py-0">
      <TextAnimate
        as="h2"
        animation="fadeIn"
        by="line"
        className={`text-brand-green-deep ${sectionTitle} lg:absolute lg:left-[calc(187*var(--u))] lg:top-[calc(115*var(--u))]`}
      >
        CLIENTES
      </TextAnimate>

      <TextAnimate
        as="p"
        animation="fadeIn"
        by="line"
        className={`mt-4 text-brand-green-deep ${bodyCopy} lg:absolute lg:left-[calc(187*var(--u))] lg:top-[calc(214*var(--u))] lg:mt-0`}
      >
        {CLIENTS_COPY}
      </TextAnimate>

      <div className="mt-10 grid grid-cols-2 items-center gap-x-8 gap-y-6 sm:grid-cols-3 lg:absolute lg:left-[calc(151*var(--u))] lg:top-[calc(306*var(--u))] lg:mt-0 lg:w-[calc(1617*var(--u))] lg:grid-cols-5 lg:gap-x-[calc(133*var(--u))] lg:gap-y-[calc(13*var(--u))]">
        {clientLogoIds.map((id, index) => (
          <BlurFade
            key={id}
            delay={0.25 + index * 0.05}
            inView
            className="relative aspect-[688/355] w-full"
          >
            <Image
              src={`/home/client-logo-${id}.png`}
              alt={`Logo do cliente ${id}`}
              fill
              sizes={LOGO_SIZES}
              className="object-contain"
            />
          </BlurFade>
        ))}
      </div>
    </section>
  );
}

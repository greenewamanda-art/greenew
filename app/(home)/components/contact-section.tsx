import Image from "next/image";

import { TextAnimate } from "@/components/magicui/text-animate";

import { CONTACT_COPY, contactRows, MAP_EMBED_SRC } from "../content";
import { designVars, sectionTitle, smallCopy } from "../styles";
import DecorImage from "./decor-image";
import Link from "next/link";

function ContactHeading() {
  return (
    <div className="relative bg-white px-6 py-10 sm:px-10 lg:h-[calc(265*var(--u))] lg:px-0 lg:py-0">
      <DecorImage
        src="/home/contato-decor-2.png"
        width={2272}
        height={1189}
        className="right-0 top-0 h-full w-[110px] object-cover sm:w-[200px] lg:h-[calc(265*var(--u))] lg:w-[calc(506*var(--u))]"
      />
      <TextAnimate
        as="h2"
        animation="fadeIn"
        by="line"
        className={`relative z-10 tracking-[10.8px] text-brand-green-deep ${sectionTitle} lg:absolute lg:left-[calc(99*var(--u))] lg:top-[calc(130*var(--u))]`}
      >
        ENTRE EM CONTATO
      </TextAnimate>
    </div>
  );
}

function ContactMap() {
  return (
    <div className="relative bg-brand-cream px-6 py-10 sm:px-10 lg:h-[calc(620*var(--u))] lg:px-0 lg:py-0">
      <iframe
        src={MAP_EMBED_SRC}
        title="Mapa Greenew"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="relative z-10 h-[220px] w-full rounded-sm border-0 sm:h-[340px] lg:absolute lg:left-1/2 lg:top-0 lg:h-[calc(690*var(--u))] lg:w-[calc(1380*var(--u))] lg:-translate-x-1/2"
      />
    </div>
  );
}

function ContactDetails() {
  return (
    <div className="relative bg-brand-cream px-6 py-12 sm:px-10 lg:h-[calc(734*var(--u))] lg:px-0 lg:py-0">
    <div className="absolute inset-0 hidden bg-white lg:block lg:h-[calc(734*var(--u))] lg:w-[calc(1550*var(--u))]" />
  
    <DecorImage
      src="/home/contato-decor-1.png"
      width={1569}
      height={2726}
      className="right-0 hidden object-cover lg:block lg:top-[calc(70*var(--u))] lg:h-[calc(644*var(--u))] lg:w-[calc(371*var(--u))]"
    />
  
    <TextAnimate
      as="p"
      animation="fadeIn"
      by="line"
      className={`relative z-10 text-brand-green-deep tracking-[6px] ${smallCopy} lg:absolute lg:left-[calc(152*var(--u))] lg:top-1/2 lg:w-[calc(450*var(--u))] lg:-translate-y-1/2`}
    >
      {CONTACT_COPY}
    </TextAnimate>
  
    <div className="relative z-10 mt-8 space-y-6 lg:absolute lg:left-[calc(780*var(--u))] lg:top-1/2 lg:mt-0 lg:w-[calc(675*var(--u))] lg:-translate-y-1/2 lg:space-y-[calc(50*var(--u))]">
      {contactRows.map((row) => (
        <div
          key={row.src}
          className="flex items-start gap-4 lg:gap-[calc(38*var(--u))]"
        >
          <Link
            href={row.href}
            className="flex w-[28px] shrink-0 justify-center lg:w-[calc(36*var(--u))]"
          >
            <Image
              src={row.src}
              alt=""
              aria-hidden
              width={row.intrinsic.width}
              height={row.intrinsic.height}
              style={designVars({
                "--w": row.design.width,
                "--t": row.design.top,
              })}
              className="mt-1 w-full lg:mt-[calc(var(--t)*var(--u))] lg:w-[calc(var(--w)*var(--u))]"
            />
          </Link>
          <Link href={row.href}>
            <TextAnimate
              as="p"
              animation="fadeIn"
              by="line"
              className={`text-brand-green-deep ${smallCopy} tracking-[6px] leaf-agencia.png`}
            >
              {row.text}
            </TextAnimate>
          </Link>
        </div>
      ))}
    </div>
  </div>
  );
}

export default function ContactSection() {
  return (
    <section className="relative" id="contato">
      <ContactHeading />
      <ContactMap />
      <ContactDetails />
    </section>
  );
}

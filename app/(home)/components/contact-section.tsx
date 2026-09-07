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
        className={`max-w-[90%] lg:max-w-full relative z-10 tracking-[10.8px] text-brand-green-deep ${sectionTitle} lg:absolute lg:left-[calc(99*var(--u))] lg:top-[calc(130*var(--u))]`}
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
    <div className="relative bg- px-6 py-12 sm:px-10 lg:h-[calc(734*var(--u))] lg:px-0 lg:py-0">
  <div className="absolute inset-0 hidden bg-white lg:block lg:h-[calc(734*var(--u))] lg:w-[calc(1550*var(--u))]" />

  {/* Imagem: absolute, colada no topo e na borda direita da seção (ignora o padding do container) */}
  <DecorImage
    src="/home/contato-decor-1.png"
    width={1569}
    height={2726}
    className="absolute right-0 top-0 block aspect-[371/644] w-[36%] object-cover lg:top-[calc(70*var(--u))] lg:h-[calc(644*var(--u))] lg:w-[calc(371*var(--u))]"
  />

  {/* Texto: max-w no mobile pra nunca alcançar a faixa da imagem */}
  <TextAnimate
    as="p"
    animation="fadeIn"
    by="line"
    className={`relative z-10 max-w-[58%] text-brand-green-deep tracking-[6px] ${smallCopy} lg:absolute lg:left-[calc(152*var(--u))] lg:top-1/2 lg:w-[calc(450*var(--u))] lg:max-w-none lg:-translate-y-1/2`}
  >
    {CONTACT_COPY}
  </TextAnimate>

  <div className="relative z-10 mt-8 space-y-6 lg:absolute lg:left-[calc(780*var(--u))] lg:top-1/2 lg:mt-0 lg:w-[calc(675*var(--u))] lg:-translate-y-1/2 lg:space-y-[calc(50*var(--u))]">
    {/* WHATSAPP */}
    <div>
      <div className="flex flex-col gap-2 lg:hidden">
        <div className="flex items-center gap-4">
          <Link href="" className="flex w-[20px] shrink-0 justify-center">
            <Image src="/home/icon-whatsapp.svg" alt="" aria-hidden width={20} height={20} className="w-full" />
          </Link>
          <TextAnimate as="p" animation="fadeIn" by="line" className={`text-brand-green-deep ${smallCopy} tracking-[6px]`}>
            WHATSAPP:
          </TextAnimate>
        </div>
        <Link href="">
          <TextAnimate as="p" animation="fadeIn" by="line" className={`text-brand-green-deep ${smallCopy} tracking-[6px]`}>
            +55 11 98564-4535
          </TextAnimate>
        </Link>
      </div>

      <div className="hidden items-start gap-4 lg:flex lg:gap-[calc(38*var(--u))]">
        <Link href="flex w-[28px] shrink-0 justify-center lg:w-[calc(36*var(--u))]">
          <Image
            src="/home/icon-whatsapp.svg"
            alt=""
            aria-hidden
            width={29}
            height={29}
            style={designVars({
              "--w": 29.3,
              "--t": 6,
            })}
            className="mt-1 w-full lg:mt-[calc(var(--t)*var(--u))] lg:w-[calc(var(--w)*var(--u))]"
          />
        </Link>
        <Link href={""}>
          <TextAnimate
            as="p"
            animation="fadeIn"
            by="line"
            className={`text-brand-green-deep ${smallCopy} tracking-[6px] leaf-agencia.png`}
          >
            WHATSAPP: +55 11 98564-4535
          </TextAnimate>
        </Link>
      </div>
    </div>

    {/* ENDEREÇO */}
    <div>
      <div className="flex flex-col gap-2 lg:hidden">
        <div className="flex items-center gap-4">
          <Link href="" className="flex w-[20px] shrink-0 justify-center">
            <Image src="/home/icon-address.svg" alt="" aria-hidden width={29} height={39} className="w-full" />
          </Link>
          <TextAnimate as="p" animation="fadeIn" by="line" className={`text-brand-green-deep ${smallCopy} tracking-[6px]`}>
            ENDEREÇO:
          </TextAnimate>
        </div>
        <Link href="">
          <TextAnimate as="p" animation="fadeIn" by="line" className={`text-brand-green-deep ${smallCopy} tracking-[6px]`}>
            RUA JERICÓ, 193 – CJ. 32 - VILA MADALENA SÃO PAULO/SP – BRASIL
          </TextAnimate>
        </Link>
      </div>

      <div className="hidden items-start gap-4 lg:flex lg:gap-[calc(38*var(--u))]">
        <Link className="flex w-[20px] shrink-0 justify-center lg:w-[calc(36*var(--u))]" href={""}>
          <Image
            src="/home/icon-address.svg"
            alt=""
            aria-hidden
            width={29}
            height={39}
            style={designVars({
              "--w": 28.15,
              "--t": 8,
            })}
            className="mt-1 w-full lg:mt-[calc(var(--t)*var(--u))] lg:w-[calc(var(--w)*var(--u))]"
          />
        </Link>
        <Link href={""}>
          <TextAnimate
            as="p"
            animation="fadeIn"
            by="line"
            className={`text-brand-green-deep ${smallCopy} tracking-[6px] leaf-agencia.png`}
          >
            ENDEREÇO: RUA JERICÓ, 193 – CJ. 32 - VILA MADALENA SÃO PAULO/SP – BRASIL
          </TextAnimate>
        </Link>
      </div>
    </div>

    {/* E-MAIL */}
    <div>
      <div className="flex flex-col gap-2 lg:hidden">
        <div className="flex items-center gap-4">
          <Link href="" className="flex w-[28px] shrink-0 justify-center">
            <Image src="/home/icon-email.svg" alt="" aria-hidden width={36} height={26} className="w-full" />
          </Link>
          <TextAnimate as="p" animation="fadeIn" by="line" className={`text-brand-green-deep ${smallCopy} tracking-[6px]`}>
            E-MAIL:
          </TextAnimate>
        </div>
        <Link href="">
          <TextAnimate as="p" animation="fadeIn" by="line" className={`text-brand-green-deep ${smallCopy} tracking-[6px]`}>
            ATENDIMENTO@GREENEWGROUP.COM
          </TextAnimate>
        </Link>
      </div>

      <div className="hidden items-start gap-4 lg:flex lg:gap-[calc(38*var(--u))]">
        <Link href="flex w-[28px] shrink-0 justify-center lg:w-[calc(36*var(--u))]">
          <Image
            src="/home/icon-email.svg"
            alt=""
            aria-hidden
            width={36}
            height={26}
            style={designVars({
              "--w": 36.6,
              "--t": 9,
            })}
            className="mt-1 w-full lg:mt-[calc(var(--t)*var(--u))] lg:w-[calc(var(--w)*var(--u))]"
          />
        </Link>
        <Link href={""}>
          <TextAnimate
            as="p"
            animation="fadeIn"
            by="line"
            className={`text-brand-green-deep ${smallCopy} tracking-[6px] leaf-agencia.png`}
          >
            E-MAIL:
            ATENDIMENTO@GREENEWGROUP.COM
          </TextAnimate>
        </Link>
      </div>
    </div>
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

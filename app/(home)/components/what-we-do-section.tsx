import Image from "next/image";

import { TextAnimate } from "@/components/magicui/text-animate";

import { certificates, stats } from "../content";
import { bodyCopy, designVars, sectionTitle } from "../styles";
import DecorImage from "./decor-image";
import StatCard from "./stat-card";

function YearsBadge() {
  return (
    <div className="relative flex w-[225px] shrink-0 flex-col items-start lg:absolute lg:left-[calc(115*var(--u))] lg:top-[calc(112*var(--u))] lg:w-[calc(225*var(--u))]">
      <Image
        src="/home/stats-em.svg"
        alt=""
        aria-hidden
        width={50}
        height={22}
        className="w-[50px] lg:w-[calc(49.72*var(--u))]"
      />
      <Image
        src="/home/stats-12.svg"
        alt="12"
        width={172}
        height={132}
        className="ml-[8px] mt-[28px] w-[172px] lg:ml-[calc(7.7*var(--u))] lg:mt-[calc(27.5*var(--u))] lg:w-[calc(172.29*var(--u))]"
      />
      <Image
        src="/home/stats-anos.svg"
        alt="anos"
        width={134}
        height={29}
        className="ml-[91px] mt-[45px] w-[134px] lg:ml-[calc(91*var(--u))] lg:mt-[calc(45.4*var(--u))] lg:w-[calc(133.66*var(--u))]"
      />
    </div>
  );
}

function VeevaBadge() {
  return (
    <div className="flex flex-col items-start lg:absolute lg:left-[calc(103*var(--u))] lg:top-[calc(1052*var(--u))]">
      <div className="flex flex-row lg:gap-6">
        <Image
          src="/home/stats-badge-2.svg"
          alt="Veeva"
          width={142}
          height={33}
          className=":w-[150px] lg:w-[calc(160.11*var(--u))]"
        />
        <Image
          src="/home/e-wizard.svg"
          alt="Somos especialistas em soluções Veeva."
          width={217}
          height={35}
          className="w-[150px] lg:w-[calc(238*var(--u))]"
        />
      </div>
      <p className="ml-6 tracking-[4.2px] font-avant font-medium text-[12px] lg:leading-[calc(58*var(--u))] w-full">
        SOMOS ESPECIALISTAS EM SOLUÇÕES VEEVA E EWIZARD.
      </p>
    </div>
  );
}

function Certificates() {
  return (
    <div className="flex flex-wrap items-center gap-x-8 gap-y-6 lg:block">
      <TextAnimate
        as="p"
        animation="fadeIn"
        by="line"
        className={`text-brand-green-deep tracking-[6.6px] ${bodyCopy} lg:absolute lg:left-[calc(1002*var(--u))] lg:top-[calc(949*var(--u))] lg:w-[calc(237*var(--u))]`}
      >
        CERTIFICADOS
      </TextAnimate>
      <div className="flex flex-wrap md:flex-nowrap items-center gap-6 lg:absolute lg:top-[calc(928*var(--u))] lg:left-[calc(1291*var(--u))] lg:h-[calc(101*var(--u))] lg:w-[calc(RIGHT_EDGE*var(--u)-1291*var(--u))] lg:justify-between lg:gap-0 ">
        {certificates.map((cert) => (
          <Image
            key={cert.src}
            src={cert.src}
            alt="Certificado"
            width={cert.intrinsic.width}
            height={cert.intrinsic.height}
            className="h-[64px] w-auto object-contain lg:h-full lg:w-auto shrink-0"
          />
        ))}
      </div>
    </div>
  );
}
export default function WhatWeDoSection() {
  return (
    <section
      id="oquefazemos"
      className="relative flex flex-col gap-10 bg-white px-6 py-14 sm:px-10 lg:block lg:h-[calc(1200*var(--u))] lg:px-0 lg:py-0"
    >
      <DecorImage
        src="/home/leaf-outline.svg"
        width={362}
        height={390}
        className="hidden lg:block lg:left-[calc(1405*var(--u))] lg:top-[calc(-176*var(--u))] lg:h-[calc(389.56*var(--u))] lg:w-[calc(361.89*var(--u))]"
      />

      <TextAnimate
        as="h2"
        animation="fadeIn"
        by="line"
        className={`text-brand-olive ${sectionTitle} lg:absolute lg:left-[calc(100*var(--u))] lg:top-[calc(137*var(--u))] tracking-[10.8px]`}
      >
        O QUE FAZEMOS
      </TextAnimate>

      <div className="absolute hidden border-2 border-brand-green-border lg:block lg:left-[calc(623*var(--u))] lg:top-[calc(279*var(--u))] lg:h-[calc(580*var(--u))] lg:w-[calc(1240*var(--u))]" />

      <div className="relative flex flex-col gap-10 bg-brand-green-deep px-6 py-10 sm:px-10 lg:absolute lg:left-[calc(71*var(--u))] lg:top-[calc(329*var(--u))] lg:block lg:h-[calc(480*var(--u))] lg:w-[calc(1750*var(--u))] lg:p-0">
        <YearsBadge />

        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4 lg:block">
          {stats.map((stat) => (
            <StatCard key={stat.value} stat={stat} />
          ))}
        </div>
      </div>

      <VeevaBadge />
      <Certificates />
    </section>
  );
}

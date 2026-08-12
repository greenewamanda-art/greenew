import Link from "next/link";

import { TextAnimate } from "@/components/magicui/text-animate";

import { portfolioItems } from "../content";
import DecorImage from "./decor-image";

const cardClass =
  "flex h-[110px] items-center justify-center border-[3px] border-white px-4 text-center transition-colors hover:bg-white/10 lg:h-[calc(150*var(--u))]";

const cardLabelClass =
  "font-avant font-medium text-white text-[22px] sm:text-[26px] lg:text-[calc(38*var(--u))] lg:leading-[calc(46*var(--u))]";

const cardLineClass = "inline lg:block lg:whitespace-normal";

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="relative bg-brand-green-deep px-6 py-14 sm:px-10 lg:h-[calc(950*var(--u))] lg:px-0 lg:py-0">
      <DecorImage
        src="/home/leaf-decor-3.png"
        width={2772}
        height={2689}
        className="right-0 top-[-40px] w-[180px] sm:w-[260px] lg:top-[calc(-232*var(--u))] lg:h-[calc(613*var(--u))] lg:w-[calc(632*var(--u))]"
      />

      <TextAnimate
        as="h2"
        animation="fadeIn"
        by="line"
        className="relative z-10 text-center font-avant font-medium text-white text-[32px] sm:text-[48px] lg:absolute lg:inset-x-0 lg:top-[calc(180*var(--u))] lg:text-[calc(72*var(--u))] lg:leading-[calc(116*var(--u))]"
      >
        PORTFÓLIO
      </TextAnimate>

      <div className="relative z-10 mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:absolute lg:left-[calc(215*var(--u))] lg:top-[calc(430*var(--u))] lg:mt-0 lg:w-[calc(1490*var(--u))] lg:grid-cols-3 lg:gap-x-[calc(130*var(--u))] lg:gap-y-[calc(90*var(--u))]">
        {portfolioItems.map((item) => (
          <Link key={item.id} href={item.href} className={cardClass}>
            <TextAnimate
              as="span"
              animation="fadeIn"
              by="line"
              segmentClassName={cardLineClass}
              className={cardLabelClass}
            >
              {item.label}
            </TextAnimate>
          </Link>
        ))}
      </div>
    </section>
  );
}

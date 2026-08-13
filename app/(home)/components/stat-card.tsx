import Image from "next/image";

import { TextAnimate } from "@/components/magicui/text-animate";

import type { Stat } from "../content";
import { designVars } from "../styles";

const preClass =
  "mt-[20px] h-[18px] tracking-[3.6px] font-avant font-medium text-[13px] text-brand-olive lg:mt-[calc(39*var(--u))] lg:ml-[calc(var(--io)*var(--u))] lg:h-[calc(25*var(--u))] lg:text-[calc(20*var(--u))] lg:leading-[calc(24*var(--u))]";

export default function StatCard({ stat }: { stat: Stat }) {
  return (
    <div
      style={designVars({
        "--l": stat.left,
        "--w": stat.width,
        "--lw": stat.labelWidth,
        "--io": stat.iconOffset,
      })}
      className="lg:absolute lg:top-[calc(102*var(--u))] lg:left-[calc(var(--l)*var(--u))] lg:w-[calc(var(--w)*var(--u))]"
    >
      <Image
        src="/home/stats-vector.svg"
        alt=""
        aria-hidden
        width={78}
        height={84}
        className="h-[56px] w-auto lg:ml-[calc(var(--io)*var(--u))] lg:h-[calc(83.56*var(--u))] lg:w-[calc(77.588*var(--u))]"
      />

      {stat.pre ? (
        <TextAnimate as="p" animation="fadeIn" by="line" className={preClass}>
          {stat.pre}
        </TextAnimate>
      ) : (
        <p aria-hidden className={preClass} />
      )}

      <TextAnimate
        as="p"
        animation="fadeIn"
        by="line"
        className={` ${stat.value === "200" ? 'mt-1' : ''} tracking-[3.4px] font-avant font-medium text-[44px] text-white lg:text-[calc(68*var(--u))] lg:leading-[calc(63*var(--u))]`}
      >
        {stat.value}
      </TextAnimate>

      <TextAnimate
        as="p"
        animation="fadeIn"
        by="line"
        className="mt-[8px] tracking-[3.6px] font-avant font-medium text-[13px] text-brand-olive lg:mt-[calc(11*var(--u))] lg:ml-[calc(var(--io)*var(--u))] lg:w-[calc(var(--lw)*var(--u))] lg:text-[calc(20*var(--u))] lg:leading-[calc(27*var(--u))]"
      >
        {stat.label}
      </TextAnimate>
    </div>
  );
}

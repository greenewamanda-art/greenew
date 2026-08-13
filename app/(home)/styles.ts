import type { CSSProperties } from "react";

export const sectionTitle =
  "font-avant font-medium text-[22px] sm:text-[28px] lg:text-[calc(36*var(--u))] lg:leading-[calc(51*var(--u))]";

export const bodyCopy =
  "font-avant font-medium text-[14px] sm:text-[17px] lg:text-[calc(22*var(--u))] lg:leading-[calc(58*var(--u))]";

export const smallCopy =
  "font-avant font-medium text-[14px] sm:text-[16px] lg:text-[calc(20*var(--u))] lg:leading-[calc(50*var(--u))]";

export const designVars = (values: Record<string, number>) =>
  values as unknown as CSSProperties;

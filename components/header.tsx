"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

/**
 * Altura do header mobile. Exportada porque o header é `fixed` e não ocupa
 * espaço no fluxo: o espaçador em `content-header.tsx` usa exatamente esta
 * classe para reservar o lugar dele. Mudou a altura aqui, mudou lá junto.
 */
export const MOBILE_HEADER_HEIGHT = "h-[60px] sm:h-[76px]";

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full bg-white z-50 ${MOBILE_HEADER_HEIGHT}`}
    >
      <div className="max-w-[1140px] h-full mx-auto px-4 sm:px-6 flex flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Link href="/">
            {/* SVG: servido direto, sem passar pelo otimizador do next/image. */}
            <img
              src="/home/logo-header.svg"
              width={277}
              height={58}
              alt="GREENEW group"
              className="h-[34px] w-auto sm:h-[44px]"
            />
          </Link>
        </div>
        <Button
          variant="ghost"
          className="w-fit shrink-0 justify-end text-brand-green-deep flex items-center gap-2 sm:gap-2 hover:bg-transparent cursor-pointer"
          onClick={onMenuClick}
        >
          <svg
            style={{
              width: 32,
              height: 32,
            }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
          >
            <path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z" />
          </svg>
          <span className="text-sm sm:text-base">Menu</span>
        </Button>
      </div>
    </header>
  );
}

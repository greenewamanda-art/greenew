"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

interface HeaderProps {
  onMenuClick: () => void
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 w-full bg-[#f5ea8a] z-50">
      <div className="max-w-[1140px] ms:py-0 mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href='/'>
            <Image src="/greenew-logo.png" width={267} height={86} alt="GREENEW group" className="w-full sm:w-[267px]" />
          </Link>
        </div>
        <Button variant="ghost" className="w-full pb-2 sm:pb-0 sm:w-fit justify-end text-[#0a5f04] flex items-center gap-2 sm:gap-2 hover:bg-transparent cursor-pointer" onClick={onMenuClick}>
          <svg style={{
            width: 32,
            height: 32
          }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z" /></svg>
          <span className="text-sm sm:text-base">Menu</span>
        </Button>
      </div>
    </header>
  )
}

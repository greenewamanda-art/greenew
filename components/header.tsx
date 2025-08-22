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
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href='/'>
            <Image src="/greenew-logo.png" width={267} height={86} alt="GREENEW group" className="" />
          </Link>
        </div>
        <Button variant="ghost" className="text-[#0a5f04] flex items-center gap-2 sm:gap-3 hover:bg-transparent cursor-pointer" onClick={onMenuClick}>
          <div className="flex flex-col gap-1.5">
            <div className="w-6 h-0.5 bg-[#0a5f04] rounded-full"></div>
            <div className="w-6 h-0.5 bg-[#0a5f04] rounded-full"></div>
            <div className="w-6 h-0.5 bg-[#0a5f04] rounded-full"></div>
          </div>
          <span className="text-sm sm:text-base">Menu</span>
        </Button>
      </div>
    </header>
  )
}

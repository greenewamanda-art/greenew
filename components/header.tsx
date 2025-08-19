"use client"

import { Button } from "@/components/ui/button"

interface HeaderProps {
  onMenuClick: () => void
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 w-full bg-[#f5ea8a] py-4 z-50">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/greenew-logo.png" alt="GREENEW group" className="h-8 sm:h-12" />
        </div>
        <Button variant="ghost" className="text-[#0a5f04] flex items-center gap-2 sm:gap-3" onClick={onMenuClick}>
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

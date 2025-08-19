"use client"

import { useState, useEffect } from "react"

export default function Footer() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showScrollButton, setShowScrollButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = Math.min(scrollTop / docHeight, 1)

      setScrollProgress(progress)
      setShowScrollButton(scrollTop > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-[#f5ea8a] py-8 sm:py-12 lg:py-16 relative min-h-[500px] sm:min-h-[686px] flex flex-col justify-center">
      <div className="max-w-[1140px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-8 sm:mb-12 lg:mb-16">
          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 lg:w-2/3 mb-8 lg:mb-0 w-full">
            <p className="text-[#282828] text-base sm:text-lg leading-relaxed flex-1">
              A Greenew é uma agência full-service que trabalha de maneira 360°. Somos capazes de atender diversas
              demandas de marketing e dessa forma desenvolvemos campanhas integradas.
            </p>
            <a
              href="#"
              className="w-10 h-10 sm:w-12 sm:h-12 bg-[#0a5f04] rounded-full flex items-center justify-center hover:bg-[#175f30] transition-colors flex-shrink-0"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row lg:flex-row justify-between items-center gap-4 sm:gap-6">
          <div className="flex items-center">
            <img src="/dpo-logo.png" alt="DPO Oficial" className="w-16 h-16 sm:w-20 sm:h-20 rounded-full" />
          </div>

          <div className="text-[#282828] text-xs sm:text-sm font-medium text-center">
            Greenew todos os direitos reservados
          </div>

          <div>
            <a
              href="/politica-de-privacidade"
              className="text-[#282828] text-xs sm:text-sm font-medium hover:text-[#0a5f04] transition-colors"
            >
              Política de privacidade
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className={`fixed bottom-4 right-4 sm:bottom-8 sm:right-8 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-500 shadow-lg bg-transparent z-50 ${
          showScrollButton
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-4 scale-95 pointer-events-none"
        }`}
        style={{
          background: `conic-gradient(#0a5f04 ${scrollProgress * 360}deg, transparent ${scrollProgress * 360}deg)`,
          padding: "2px",
        }}
      >
        <div className="w-full h-full rounded-full bg-[#f5ea8a] flex items-center justify-center">
          <svg
            className={`w-4 h-4 sm:w-6 sm:h-6 transition-colors duration-300 ${
              scrollProgress > 0.1 ? "text-[#0a5f04]" : "text-gray-400"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </div>
      </button>
    </footer>
  )
}

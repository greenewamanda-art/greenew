"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import CookieConsent from "react-cookie-consent"

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
          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-4 lg:w-2/3 mb-8 lg:mb-0 w-full">
            <p className="text-[#282828] text-base leading-relaxed flex-1">
              A Greenew é uma agência full-service que trabalha de maneira 360°. Somos capazes de atender diversas
              demandas de marketing e dessa forma desenvolvemos campanhas integradas.
            </p>
            <div className="flex gap-2">
              <Link href='https://www.instagram.com/greenew_group/' className="w-10 h-10 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center">
                <svg className="w-8 h-8" fill="#0a5f04" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z" /></svg>
              </Link>
              <Link href='https://www.linkedin.com/company/greenew-group-publicidade/people/?viewAsMember=true' className="w-10 h-10 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center">
                <svg className="w-8 h-8" fill="#0a5f04" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M196.3 512L103.4 512L103.4 212.9L196.3 212.9L196.3 512zM149.8 172.1C120.1 172.1 96 147.5 96 117.8C96 103.5 101.7 89.9 111.8 79.8C121.9 69.7 135.6 64 149.8 64C164 64 177.7 69.7 187.8 79.8C197.9 89.9 203.6 103.6 203.6 117.8C203.6 147.5 179.5 172.1 149.8 172.1zM543.9 512L451.2 512L451.2 366.4C451.2 331.7 450.5 287.2 402.9 287.2C354.6 287.2 347.2 324.9 347.2 363.9L347.2 512L254.4 512L254.4 212.9L343.5 212.9L343.5 253.7L344.8 253.7C357.2 230.2 387.5 205.4 432.7 205.4C526.7 205.4 544 267.3 544 347.7L544 512L543.9 512z" /></svg>
              </Link>
            </div>

          </div>
        </div>

        <div className="flex flex-col sm:flex-row lg:flex-row justify-between items-center gap-4 sm:gap-6">
          <div className="flex items-center">
            <Image width={180} height={180} src="/dpo-logo.png" alt="DPO Oficial" className="w-[180px] rounded-full" />
          </div>

          <div className="text-[#282828] text-xs sm:text-sm font-medium text-center">
            Greenew todos os direitos reservados
          </div>

          <div>
            <Link href='/politica-de-privacidade' className="text-[#282828] text-xs sm:text-sm font-medium hover:text-[#0a5f04] transition-colors">
              Política de privacidade
            </Link>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className={`fixed bottom-4 right-4 sm:bottom-8 sm:right-8 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-500 shadow-lg bg-transparent z-50 ${showScrollButton
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
            className={`w-4 h-4 sm:w-6 sm:h-6 transition-colors duration-300 ${scrollProgress > 0.1 ? "text-[#0a5f04]" : "text-gray-400"
              }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </div>
      </button>

      {/* <CookieConsent
        location="bottom"
        buttonText="Aceitar"
        declineButtonText="Recusar"
        enableDeclineButton
        cookieName="lgpd_cookie_consent"
        style={{ background: "#0a5f04" }}
        buttonStyle={{ color: "#0a5f04", background: "#f5ea8a", fontSize: "14px", borderRadius: 8 }}
        declineButtonStyle={{ color: "#fff", background: "transparent", border: "1px solid white", fontSize: "14px", borderRadius: 8 }}
        expires={150}
      >
        Este site utiliza Cookies para uma melhor experiência de uso. Ao continuar navegando, você concorda com nossas políticas de
        <Link href="/politica-de-privacidade" className="ml-2 underline">
          Política de Privacidade
        </Link>.
      </CookieConsent> */}
    </footer>
  )
}

"use client"

import { Button } from "@/components/ui/button"

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
  currentPage?: string
}

export default function Sidebar({ isOpen, onClose, currentPage = "" }: SidebarProps) {
  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-black/50 z-51" onClick={onClose} />}

      <div
        className={`fixed top-0 right-0 h-full w-full max-w-[500px] sm:w-[400px] md:w-[500px] bg-[#f5ea8a] z-52 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#282828] hover:text-[#0a5f04] text-2xl font-bold"
        >
          ×
        </button>

        <nav className="pt-16 px-8">
          <ul className="space-y-8">
            <li>
              <a
                href="/"
                className={`text-xl font-bold transition-colors ${
                  currentPage === "home" ? "text-[#0a5f04]" : "text-[#282828] hover:text-[#0a5f04]"
                }`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/quem-somos"
                className={`text-xl font-bold transition-colors ${
                  currentPage === "quem-somos" ? "text-[#0a5f04]" : "text-[#282828] hover:text-[#0a5f04]"
                }`}
              >
                Quem somos
              </a>
            </li>
            <li>
              <a
                href="/socioambiental"
                className={`text-xl font-bold transition-colors ${
                  currentPage === "socioambiental" ? "text-[#0a5f04]" : "text-[#282828] hover:text-[#0a5f04]"
                }`}
              >
                Socioambiental
              </a>
            </li>
            <li>
              <a
                href="/contato"
                className={`text-xl font-bold transition-colors ${
                  currentPage === "contato" ? "text-[#0a5f04]" : "text-[#282828] hover:text-[#0a5f04]"
                }`}
              >
                Fale Conosco
              </a>
            </li>
            <li>
              <a
                href="/o-que-fazemos"
                className={`text-xl font-bold transition-colors ${
                  currentPage === "o-que-fazemos" ? "text-[#0a5f04]" : "text-[#282828] hover:text-[#0a5f04]"
                }`}
              >
                O que fazemos
              </a>
            </li>
            <li>
              <a
                href="/clientes"
                className={`text-xl font-bold transition-colors ${
                  currentPage === "clientes" ? "text-[#0a5f04]" : "text-[#282828] hover:text-[#0a5f04]"
                }`}
              >
                Clientes
              </a>
            </li>
          </ul>
        </nav>

        <div className="absolute bottom-20 px-4 sm:px-8 w-full">
          <div className="space-y-3 text-[#282828]">
            <div className="border-b border-[#282828] pb-2">
              <p className="font-semibold text-sm sm:text-base">Telefone: +55 11 98564 4535</p>
            </div>
            <div className="border-b border-[#282828] pb-2">
              <p className="font-semibold text-sm sm:text-base">
                Endereço: Rua Jericó, 193 – cj. 32 – Vila Madalena São Paulo/SP – Brasil
              </p>
            </div>
            <div className="border-b border-[#282828] pb-2">
              <p className="font-semibold text-sm sm:text-base">E-mail: atendimento@greenewgroup.com</p>
            </div>
          </div>

          <Button className="bg-[#0a5f04] hover:bg-[#175f30] text-white px-6 py-2 rounded-sm mt-6 w-full">
            {currentPage === "politica-de-privacidade" ? (
              <span className="bg-white text-[#0a5f04] px-2 py-1 rounded text-sm font-bold">
                Política de privacidade
              </span>
            ) : (
              <a href="/politica-de-privacidade" className="block w-full h-full">
                Política de privacidade
              </a>
            )}
          </Button>
        </div>
      </div>
    </>
  )
}

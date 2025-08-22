"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

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
        id="sidebar"
        className={`fixed top-0 right-0 h-full w-full max-w-[500px] sm:w-[400px] md:w-[500px] bg-[#f5ea8a] z-52 transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-black hover:text-[#0a5f04] text-2xl font-bold cursor-pointer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width={24} height={24}><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
        </button>

        <nav className="pt-16 px-8">
          <ul className="space-y-3">
            <li>
              <a
                href="/"
                className={`text-2xl font-bold  font-poppins transition-colors ${currentPage === "home" ? "text-[#0a5f04]" : "text-black hover:text-[#0a5f04]"
                  }`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/quem-somos"
                className={`text-2xl font-bold font-poppins transition-colors ${currentPage === "quem-somos" ? "text-[#0a5f04]" : "text-black hover:text-[#0a5f04]"
                  }`}
              >
                Quem somos
              </a>
            </li>
            <li>
              <a
                href="/responsabilidade-socioambiental"
                className={`text-2xl font-bold font-poppins transition-colors ${currentPage === "Socioambiental" ? "text-[#0a5f04]" : "text-black hover:text-[#0a5f04]"
                  }`}
              >
                Socioambiental
              </a>
            </li>
            <li>
              <a
                href="/contato"
                className={`text-2xl font-bold font-poppins transition-colors ${currentPage === "contato" ? "text-[#0a5f04]" : "text-black hover:text-[#0a5f04]"
                  }`}
              >
                Fale Conosco
              </a>
            </li>
            <li>
              <a
                href="/oquefazemos"
                className={`text-2xl font-bold font-poppins transition-colors ${currentPage === "oquefazemos" ? "text-[#0a5f04]" : "text-black hover:text-[#0a5f04]"
                  }`}
              >
                O que fazemos
              </a>
            </li>
            <li>
              <a
                href="/clientes"
                className={`text-2xl font-bold font-poppins transition-colors ${currentPage === "clientes" ? "text-[#0a5f04]" : "text-black hover:text-[#0a5f04]"
                  }`}
              >
                Clientes
              </a>
            </li>
          </ul>
        </nav>

        <div className="absolute sm:bottom-36 bottom-28 pt-16 px-8 w-full">
          <div className="space-y-3 text-black">
            <div className="border-b border-black">
              <p className="text-sm sm:text-base">Telefone: +55 11 98564 4535</p>
            </div>
            <div className="border-b border-black">
              <p className=" text-sm sm:text-base">
                Endereço: Rua Jericó, 193 – cj. 32 – Vila Madalena São Paulo/SP – Brasil
              </p>
            </div>
            <p className="text-sm sm:text-base">E-mail: atendimento@greenewgroup.com</p>
          </div>

          <Button variant='link' asChild>
            <Link href='/politica-de-privacidade' className="block font-poppins font-light">
              Política de privacidade
            </Link>
          </Button>
        </div>
      </div >
    </>
  )
}

"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const path = usePathname();

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-51" onClick={onClose} />
      )}

      <div
        id="sidebar"
        className={`fixed top-0 right-0 h-full w-full max-w-[500px] sm:w-[400px] md:w-[500px] bg-brand-olive z-52 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-black hover:text-brand-green-deep text-2xl font-bold cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            width={24}
            height={24}
          >
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
          </svg>
        </button>

        <nav className="pt-16 px-8">
          <ul className="space-y-3">
            <li>
              <Link
                href="/"
                onClick={onClose}
                className={`text-2xl font-bold  font-avant transition-colors ${path === "/" ? "text-brand-green-deep" : "text-black hover:text-brand-green-deep"}`}
              >
                Agencia
              </Link>
            </li>
            <li>
              <Link
                href="/#oquefazemos"
                onClick={onClose}
                className={`text-2xl font-bold  font-avant transition-colors ${path === "/quem-somos" ? "text-brand-green-deep" : "text-black hover:text-brand-green-deep"}`}
              >
                O Que fazemos
              </Link>
            </li>
            <li>
              <Link
                href="/#socioambiental"
                onClick={onClose}
                className={`text-2xl font-bold  font-avant transition-colors ${path === "/responsabilidade-socioambiental" ? "text-brand-green-deep" : "text-black hover:text-brand-green-deep"}`}
              >
                Socioambiental
              </Link>
            </li>
            <li>
              <Link
                href="/#clientes"
                onClick={onClose}
                className={`text-2xl font-bold  font-avant transition-colors ${path === "/clientes" ? "text-brand-green-deep" : "text-black hover:text-brand-green-deep"}`}
              >
                Clientes
              </Link>
            </li>
            <li>
              <Link
                href="/#portfolio"
                onClick={onClose}
                className={`text-2xl font-bold  font-avant transition-colors ${path === "/portfolio" ? "text-brand-green-deep" : "text-black hover:text-brand-green-deep"}`}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                href="/#contato"
                onClick={onClose}
                className={`text-2xl font-bold  font-avant transition-colors ${path === "/contato" ? "text-brand-green-deep" : "text-black hover:text-brand-green-deep"}`}
              >
                Contato
              </Link>
            </li>
          </ul>
        </nav>

        <div className="absolute sm:bottom-9 bottom-12 pt-16 px-8 w-full -z-[1]">
          <div className="space-y-3 text-black">
            <div className="border-b border-black">
              <Link href="https://api.whatsapp.com/send?phone=5511985644535&text=Oi!%20Por%20favor,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os.">
                <p className="text-sm sm:text-base">
                  WhatsApp: +55 11 98564-4535
                </p>
              </Link>
            </div>
            <div className="border-b border-black">
              <p className=" text-sm sm:text-base">
                Endereço: Rua Jericó, 193 – cj. 32 – Vila Madalena São Paulo/SP
                – Brasil
              </p>
            </div>
            <p className="text-sm sm:text-base">
              E-mail: atendimento@greenewgroup.com
            </p>
          </div>

          <Button variant="link" asChild onClick={onClose}>
            <Link
              href="/politica-de-privacidade"
              className="block font-avant font-light"
            >
              Política de privacidade
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
}

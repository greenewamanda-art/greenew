"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
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
        className={`fixed bg-[#214222] top-0 right-0 h-full w-full max-w-[500px] sm:w-[400px] md:w-[500px] z-52 transform transition-transform duration-300 ease-in-out ${
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
            className="fill-white"
          >
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
          </svg>
        </button>

        <nav className="pt-16 px-8">
          <div className="mb-5 flex justify-between items-center">
            <Image
              src="/home/logo-sidebar.png"
              alt="Greenew"
              width={150}
              height={100}
            />
            <div className="flex items-center gap-3">
              <a href="https://api.whatsapp.com/send?phone=5511985644535&text=Oi!%20Por%20favor,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os.">
                <Image
                  src="/home/whats-sidebar.png"
                  alt="Whatsapp"
                  width={30}
                  height={30}
                />
              </a>
              <a href="https://www.instagram.com/greenewgroup/">
                <Image
                  src="/home/link-sidebar.png"
                  alt="Linkedin"
                  width={30}
                  height={30}
                />
              </a>
              <a href="https://www.youtube.com/@greenewgroup">
                <Image
                  src="/home/insta-sidebar.png"
                  alt="Instagram"
                  width={30}
                  height={30}
                />
              </a>
              <a href="https://www.linkedin.com/company/greenewgroup/">
                <Image
                  src="/home/you-sidebar.png"
                  alt="Youtube"
                  width={30}
                  height={30}
                />
              </a>
            </div>
          </div>
          <ul className="space-y-4">
            <li>
              <Link
                href="/"
                onClick={onClose}
                className={`text-2xl font-normal transition-colors tracking-[3.6px] text-white`}
              >
                Agencia
              </Link>
            </li>
            <li>
              <Link
                href="/#oquefazemos"
                onClick={onClose}
                className={`text-2xl font-normal transition-colors tracking-[3.6px] text-white`}
              >
                O Que fazemos
              </Link>
            </li>
            <li>
              <Link
                href="/#socioambiental"
                onClick={onClose}
                className={`text-2xl font-normal transition-colors tracking-[3.6px] text-white`}
              >
                Socioambiental
              </Link>
            </li>
            <li>
              <Link
                href="/#clientes"
                onClick={onClose}
                className={`text-2xl font-normal transition-colors tracking-[3.6px] text-white`}
              >
                Clientes
              </Link>
            </li>
            <li>
              <Link
                href="/#portfolio"
                onClick={onClose}
                className={`text-2xl font-normal transition-colors tracking-[3.6px] text-white`}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                href="/#contato"
                onClick={onClose}
                className={`text-2xl font-normal transition-colors tracking-[3.6px] text-white`}
              >
                Contato
              </Link>
            </li>
            <li>
              <div className="border-b mt-10 border-white"></div>
            </li>
          </ul>
        </nav>

        <div className="absolute sm:bottom-9 bottom-8 pt-14 px-8 w-full -z-[1]">
          <div className="space-y-3 text-white">
            <div className="flex flex-col gap-5">
              <Link
                className="flex flex-col gap-5"
                href="https://api.whatsapp.com/send?phone=5511985644535&text=Oi!%20Por%20favor,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os."
              >
                <div className="flex items-center gap-5 font-normal tracking-[7.5px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 30 30"
                    fill="none"
                  >
                    <path
                      d="M14.1605 0.00757859C6.62051 0.257579 0.400513 6.36758 0.0205128 13.8976C-0.119487 16.6176 0.480513 19.1776 1.65051 21.4076L0.0105128 28.7476C-0.0594872 29.0776 0.230513 29.3776 0.570513 29.3076L7.90051 27.6676C10.1105 28.8276 12.6605 29.4276 15.3505 29.2976C22.8705 28.9476 29.0005 22.7676 29.2905 15.2476C29.6205 6.71758 22.6805 -0.262421 14.1605 0.00757859ZM14.6505 26.2776C12.5205 26.2776 10.5205 25.6976 8.80051 24.6976C8.64051 24.6076 8.48051 24.5076 8.33051 24.4076L3.65051 25.6576L4.90051 20.9776C3.72051 19.1576 3.03051 16.9876 3.03051 14.6576C3.03051 8.24758 8.24051 3.03758 14.6505 3.03758C21.0605 3.03758 26.2705 8.24758 26.2705 14.6576C26.2705 21.0676 21.0605 26.2776 14.6505 26.2776Z"
                      fill="white"
                    />
                    <path
                      d="M21.5405 19.778C21.3405 20.078 21.1205 20.368 20.7905 20.708C20.0505 21.448 19.0105 21.828 17.9605 21.718C16.0805 21.528 13.4105 20.488 11.1205 18.198C8.8305 15.908 7.7905 13.238 7.6005 11.358C7.4905 10.308 7.8705 9.278 8.6105 8.528C8.9505 8.188 9.2305 7.978 9.5405 7.768C10.1005 7.388 10.8705 7.638 11.0805 8.278L11.8505 10.588C12.0605 11.218 11.9705 11.618 11.6905 11.888L11.0805 12.508C10.7805 12.808 10.7305 13.288 10.9605 13.648C11.3005 14.178 11.9405 15.028 13.1105 16.208C14.2905 17.388 15.1405 18.018 15.6705 18.358C16.0305 18.588 16.5105 18.538 16.8105 18.238L17.4305 17.628C17.7005 17.358 18.1005 17.258 18.7305 17.468L21.0405 18.238C21.6805 18.448 21.9305 19.218 21.5505 19.778H21.5405Z"
                      fill="white"
                    />
                  </svg>{" "}
                  WhatsApp:
                </div>
                <span className="font-normal tracking-[7.5px]">
                  +55 11 98564-4535
                </span>
              </Link>

              <Link
                className="flex flex-col gap-5"
                href="mailto:atendimento@greenewgroup.com"
              >
                <div className="flex items-center gap-5 font-normal tracking-[7.5px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 37 26"
                    fill="none"
                  >
                    <path
                      d="M36.36 2.85V22.71C36.12 24.26 34.89 25.55 33.22 25.56H3.14C1.46 25.49 0.2 24.29 0 22.63V2.94C0.2 1.25 1.5 0.04 3.21 0H33.22C34.89 0 36.11 1.3 36.35 2.85H36.36ZM20.38 14.4L32.72 2.13H3.65L15.99 14.4C17.25 15.57 19.13 15.57 20.39 14.4H20.38ZM11.33 12.78L2.13 3.64V21.94L11.33 12.79V12.78ZM34.22 21.92V3.64L25.02 12.79L34.22 21.93V21.92ZM23.52 14.3L21.88 15.91C19.81 17.91 16.55 17.91 14.48 15.91L12.84 14.3L3.65 23.44H32.71L23.52 14.31V14.3Z"
                      fill="white"
                    />
                  </svg>{" "}
                  E-mail:
                </div>
                <span className="font-normal tracking-[1.5px]">
                  atendimento@greenewgroup.com
                </span>
              </Link>
            </div>
          </div>

          <Button variant="link" asChild onClick={onClose} className="mt-5">
            <Link
              href="/politica-de-privacidade"
              className="block font-normal tracking-[2.6px] text-white"
            >
              Política de privacidade
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
}

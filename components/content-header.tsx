"use client";

import { useEffect, useState } from "react";
import type { CSSProperties } from "react";
import Link from "next/link";
import Header, { MOBILE_HEADER_HEIGHT } from "@/components/header";
import Sidebar from "@/components/sidebar";

const vars = (values: Record<string, number>) =>
  values as unknown as CSSProperties;

const navItems = [
  { label: "agência", href: "/#agencia", left: 386, width: 106 },
  { label: "o que fazemos", href: "/#oquefazemos", left: 521, width: 182 },
  {
    label: "socioambiental",
    href: "/#socioambiental",
    left: 737,
    width: 182,
  },
  { label: "clientes", href: "/#clientes", left: 942, width: 117 },
  { label: "portfólio", href: "/#portfolio", left: 1088, width: 106 },
  { label: "contato", href: "/#contato", left: 1216, width: 116 },
];

const socialLinks = [
  {
    label: "Whatsapp",
    href: "https://api.whatsapp.com/send?phone=5511985644535&text=Oi!%20Por%20favor,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os.",
    icon: "whats",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/greenew-group-publicidade/people/?viewAsMember=true",
    icon: "linkedin",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/greenew_group/",
    icon: "instagram",
  },
  { label: "YouTube", href: "https://www.youtube.com/@greenew-agenciadepublicida2288", icon: "youtube" },
];

function DesktopHeader({ scrolled }: { scrolled: boolean }) {
  return (
    <header
      className={`relative hidden w-full bg-white transition-shadow duration-300 lg:block lg:h-[calc(135*var(--u))] ${
        scrolled ? "shadow-[0_6px_24px_rgba(7,79,8,0.14)]" : "shadow-none"
      }`}
    >
      <Link
        href="/"
        className="absolute left-[calc(42*var(--u))] top-[calc(43*var(--u))] block"
      >
        <img
          src="/home/logo-header.svg"
          alt="Greenew"
          className="h-[calc(58.114*var(--u))] w-[calc(277*var(--u))]"
        />
      </Link>

      <nav>
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            style={vars({ "--l": item.left, "--w": item.width })}
            className="absolute top-[calc(57*var(--u))] left-[calc(var(--l)*var(--u))] w-[calc(var(--w)*var(--u))] text-center text-[calc(22*var(--u))] leading-[calc(34*var(--u))] text-brand-nav-gray transition-colors hover:text-brand-green-deep"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {socialLinks.map((social, i) => (
        <a
          key={social.icon}
          href={social.href}
          aria-label={social.label}
          target="_blank"
          rel="noreferrer"
          style={vars({ "--l": 1398 + i * 69.4 })}
          className="absolute top-[calc(41*var(--u))] left-[calc(var(--l)*var(--u))] block size-[calc(47.574*var(--u))] overflow-clip transition-opacity hover:opacity-70"
        >
          <img
            src={`/home/icon-${social.icon}-header.svg`}
            alt=""
            className="size-full"
          />
        </a>
      ))}

      <img
        src="/home/cert-3.png"
        alt="Certificado Women Owned"
        className="absolute left-[calc(1656*var(--u))] top-[calc(21*var(--u))] h-[calc(88.413*var(--u))] w-[calc(116.259*var(--u))] object-contain"
      />
      <img
        src="/home/cert-2.png"
        alt="Certificado EcoVadis"
        className="absolute left-[calc(1791.68*var(--u))] top-[calc(21.2*var(--u))] h-[calc(88.488*var(--u))] w-[calc(95.92*var(--u))] object-contain"
      />
    </header>
  );
}

export default function ContentHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="lg:hidden">
        <Header onMenuClick={() => setMenuOpen(true)} />
        <Sidebar isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
        {/*
          O header é `fixed`, então não empurra nada. Este espaçador reserva
          exatamente a altura dele — é o único offset de topo no mobile, e por
          isso o respiro visual de cada página fica no `pt` da própria seção.
        */}
        <div aria-hidden className={MOBILE_HEADER_HEIGHT} />
      </div>

      <div className="fixed inset-x-0 top-0 z-50 hidden lg:block">
        <div className="design-canvas w-full">
          <DesktopHeader scrolled={scrolled} />
        </div>
      </div>
    </>
  );
}

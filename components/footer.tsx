"use client";

import { useEffect, useState } from "react";
import type { CSSProperties } from "react";
import Link from "next/link";

/** Design-pixel values fed to the `--u` scale through CSS custom properties. */
const vars = (values: Record<string, number>) =>
  values as unknown as CSSProperties;

const socialLinks = [
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
  { label: "YouTube", href: "#", icon: "youtube" },
];

const smallCopy =
  "font-avant font-medium text-[14px] leading-[2] sm:text-[16px] lg:text-[calc(20*var(--u))] lg:leading-[calc(50*var(--u))]";

export default function Footer() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0;

      setScrollProgress(progress);
      setShowScrollButton(scrollTop > 100);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="design-canvas w-full">
        <footer className="relative flex flex-col gap-8 bg-brand-cream px-6 py-12 sm:px-10 lg:block lg:h-[calc(470*var(--u))] lg:px-0 lg:py-0">
          <Link href="/" className="block w-fit">
            <img
              src="/home/logo-footer.svg"
              alt="Greenew"
              className="w-[276px] lg:absolute lg:left-[calc(109*var(--u))] lg:top-[calc(105.6*var(--u))] lg:h-[calc(57.904*var(--u))] lg:w-[calc(276*var(--u))]"
            />
          </Link>

          <p
            className={`whitespace-pre-line text-brand-green-deep ${smallCopy} lg:absolute lg:left-[calc(109*var(--u))] lg:top-[calc(213*var(--u))] lg:w-[calc(1227*var(--u))]`}
          >
            {"AO UTILIZAR O NOSSO SITE, VOCÊ CONCORDA COM A "}
            <Link
              href="/politica-de-privacidade"
              className="underline-offset-4 transition-colors hover:underline"
            >
              POLÍTICA DE PRIVACIDADE
            </Link>
            {".\n© 2026 GREENEW GROUP"}
          </p>

          <div className="flex items-center gap-6 lg:contents">
            {socialLinks.map((social, i) => (
              <a
                key={social.icon}
                href={social.href}
                aria-label={social.label}
                target="_blank"
                rel="noreferrer"
                style={vars({ "--l": 1595 + i * 79.65 })}
                className="block size-[40px] overflow-clip transition-opacity hover:opacity-70 lg:absolute lg:top-[calc(220*var(--u))] lg:left-[calc(var(--l)*var(--u))] lg:size-[calc(54.648*var(--u))]"
              >
                <img
                  src={`/home/icon-${social.icon}.svg`}
                  alt=""
                  className="size-full"
                />
              </a>
            ))}
          </div>
        </footer>
      </div>

      <button
        onClick={scrollToTop}
        aria-label="Voltar ao topo"
        className={`fixed bottom-4 right-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-transparent shadow-lg transition-all duration-500 sm:bottom-8 sm:right-8 sm:h-12 sm:w-12 ${
          showScrollButton
            ? "translate-y-0 scale-100 opacity-100"
            : "pointer-events-none translate-y-4 scale-95 opacity-0"
        }`}
        style={{
          background: `conic-gradient(var(--brand-green-deep) ${scrollProgress * 360}deg, transparent ${scrollProgress * 360}deg)`,
          padding: "2px",
        }}
      >
        <div className="flex h-full w-full items-center justify-center rounded-full bg-brand-cream">
          <svg
            className={`h-4 w-4 transition-colors duration-300 sm:h-6 sm:w-6 ${
              scrollProgress > 0.1 ? "text-brand-green-deep" : "text-gray-400"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </div>
      </button>
    </>
  );
}

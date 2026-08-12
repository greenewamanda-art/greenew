"use client";

import Footer from "@/components/footer";
import Image from "next/image";
import { TextAnimate } from "@/components/magicui/text-animate";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Metadata } from "next";
import { useEffect, useRef } from "react";

// export const metadata: Metadata = {
//   title: "Portfolio - Greenew",
//   description:
//     "Conheça os cases de sucesso da nossa agência de publicidade. Estratégias criativas que geraram resultados reais para marcas de diferentes segmentos.",
//   openGraph: {
//     url: "https://greenew.com.br/portfolio",
//   },
// };

export default function OQueFazemosPage() {
  const images = Array.from({ length: 77 }, (_, i) => i + 1);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Particles */}
      <section className="bg-brand-green-deep pt-10 lg:pt-[120px] pb-[40px] relative lg:mt-[80px]">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10">
          <TextAnimate
            className="max-w-[610px] text-white text-2xl sm:text-3xl lg:text-3xl font-avant font-medium text-left"
            animation="slideLeft"
            by="character"
            duration={1}
            as="h1"
          >
            Nossos cases
          </TextAnimate>
          <h2 className="text-right text-[40px] sm:text-[70px] lg:text-[100px] stroke font-avant absolute right-2 -bottom-[60px] sm:right-[30px] sm:-bottom-[100px]">
            PORTFOLIO
          </h2>
        </div>
      </section>

      <div
        className="min-h-[150px] sm:min-h-[250px]"
        style={{
          backgroundImage: "url(/WhatsApp-Image-2021-07-01-at-14.26.39-1.jpeg)",
          backgroundPosition: "center right",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>

      {/* Digital & Social Section */}
      <section className="py-10 bg-brand-brown">
        {/* Left Side - Image */}
        <div className="max-w-[1140px] mx-auto px-6 py-4">
          <iframe
            allowFullScreen={true}
            allow="autoplay; fullscreen; clipboard-write"
            scrolling="no"
            className="fp-iframe"
            style={{
              border: "1px solid lightgray",
              width: "100%",
              height: "400px",
            }}
            src="https://heyzine.com/flip-book/80dd1e16d3.html"
          ></iframe>
        </div>
      </section>
      <Footer />
    </div>
  );
}

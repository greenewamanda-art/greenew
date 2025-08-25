"use client"

import Footer from "@/components/footer"
import { useState } from "react"
import Image from "next/image"
import { TextAnimate } from "@/components/magicui/text-animate"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export default function OQueFazemosPage() {

  return (
    <div className="min-h-screen">
      {/* Hero Section with Particles */}
      <section className="bg-[#0a5f04] pt-[120px] pb-[40px] relative mt-[80px]">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10">
          <TextAnimate className="max-w-[610px] text-white text-2xl sm:text-3xl lg:text-3xl font-poppins font-medium text-left" animation="slideLeft" by="character" duration={1} as='h1'>
            Nossos cases
          </TextAnimate>
          <h2 className="text-right text-[40px] sm:text-[70px] lg:text-[100px] stroke font-poppins absolute right-2 -bottom-[60px] sm:right-[30px] sm:-bottom-[100px]">PORTFOLIO
          </h2>
        </div>
      </section>

      <div className="min-h-[150px] sm:min-h-[250px]" style={{
        backgroundImage: "url(/WhatsApp-Image-2021-07-01-at-14.26.39-1.jpeg)",
        backgroundPosition: "center right",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}>
      </div>


      {/* Digital & Social Section */}
      <section className="py-10 bg-[#402315]">
        {/* Left Side - Image */}
        <div className="max-w-[1140px] mx-auto px-6 py-4">
          <Carousel orientation="vertical">
            <CarouselContent className="h-[220px] sm:h-[410px]">
              <CarouselItem className="flex justify-center">
                <Image
                  src="/portfolio/1.png"
                  width={600}
                  height={400}
                  alt=""
                  className=""
                />
              </CarouselItem>
              <CarouselItem className="flex justify-center">
                <Image
                  src="/portfolio/2.png"
                  width={600}
                  height={400}
                  alt=""
                  className=""
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

        </div>
      </section>




      <Footer />
    </div>
  )
}

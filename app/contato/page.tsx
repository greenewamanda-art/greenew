"use client"

import type React from "react"

import { useState } from "react"
import Header from "@/components/header"
import Sidebar from "@/components/sidebar"
import Footer from "@/components/footer"
import AnimatedText from "@/components/animated-text"
import Image from "next/image"

export default function ContatoPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  return (
    <div className="min-h-screen bg-white">
      <Header onMenuClick={() => setSidebarOpen(true)} />
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} currentPage="contato" />

      {/* Hero Section */}


      <section className="bg-[#0a5f04] pt-[120px] pb-[40px] relative mt-[80px]">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10">
          <h1 className="text-white text-2xl sm:text-3xl lg:text-3xl text-left font-poppins font-medium">Entre em contato com a Greenew</h1>
          {/* <AnimatedText
            text="Entre em contato com a Greenew"
            className="text-white text-2xl sm:text-3xl lg:text-3xl font-bold text-center"
          /> */}
          <h2 className="text-right text-[40px] sm:text-[70px] lg:text-[100px] stroke font-poppins absolute right-2 -bottom-[60px] sm:right-[50px] sm:-bottom-[80px]">Contato</h2>
        </div>
      </section>


      <div className="min-h-[150px] sm:min-h-[300px]" style={{
        backgroundImage: "url(/portfolio-background.jpg)",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}>

        <div
          className="absolute inset-0"
          style={{
            backgroundColor: "#0a5f04",
            opacity: 0.59,
          }}
        />
      </div>


      {/* Main Content Section */}
      <section
        className="relative min-h-[800px] bg-[#402315]"

      >
        {/* Brown overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: "#402315",
            opacity: 0.9,
          }}
        />

        <div className="relative z-10 flex flex-col items-start lg:flex-row min-h-[800px] pb-56 sm:pb-72 lg:pb-0">
          {/* Left Side - Contact Form */}
          <div className="w-full lg:w-1/2 flex items-center justify-end sm:justify-start lg:justify-end p-4">
            <div className="w-full sm:max-w-full lg:max-w-md mt-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="nome"
                    placeholder="Nome"
                    value={formData.nome}
                    onChange={handleInputChange}
                    className="w-full p-5 bg-transparent border-2 border-white text-white placeholder-white/70 rounded-sm focus:outline-none focus:border-white/90"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-5 bg-transparent border-2 border-white text-white placeholder-white/70 rounded-sm focus:outline-none focus:border-white/90"
                    required
                  />
                </div>
                <div>
                  <textarea
                    name="mensagem"
                    placeholder="Mensagem"
                    value={formData.mensagem}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full p-5 bg-transparent border-2 border-white text-white placeholder-white/70 rounded-sm focus:outline-none focus:border-white/90 resize-none"
                    required
                  />
                </div>
                <div className="flex justify-center mx-auto">
                  <button
                    type="submit"
                    className="w-[200px] bg-white text-[#333333] p-5 rounded-sm hover:bg-gray-100 transition-colors font-poppins"
                  >
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right Side - Map and Contact Info */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center p-4 sm:-mt-20">
            {/* Google Maps Embed */}
            <div className="mb-8 w-full lg:w-[510px] sm:mt-[90px] lg:mt-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.197!2d-46.6918!3d-23.5505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce579f4b0b0b0b%3A0x0!2sRua%20Jeric%C3%B3%2C%20193%20-%20Vila%20Madalena%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-sm"
              />
            </div>

            {/* Contact Information */}
            <div className="text-white space-y-2 font-poppins font-medium">
              <p className="text-lg flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="28"
                  height="28" fill="#fff" viewBox="0 0 640 640"><path d="M125.4 128C91.5 128 64 155.5 64 189.4C64 190.3 64 191.1 64.1 192L64 192L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 192L575.9 192C575.9 191.1 576 190.3 576 189.4C576 155.5 548.5 128 514.6 128L125.4 128zM528 256.3L528 448C528 456.8 520.8 464 512 464L128 464C119.2 464 112 456.8 112 448L112 256.3L266.8 373.7C298.2 397.6 341.7 397.6 373.2 373.7L528 256.3zM112 189.4C112 182 118 176 125.4 176L514.6 176C522 176 528 182 528 189.4C528 193.6 526 197.6 522.7 200.1L344.2 335.5C329.9 346.3 310.1 346.3 295.8 335.5L117.3 200.1C114 197.6 112 193.6 112 189.4z" /></svg>
                atendimento@greenewgroup.com
              </p>
              <p className="text-lg flex items-center gap-2">
                <svg width="28" height="28" fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M476.9 161.1C435 119.1 379.2 96 319.9 96C197.5 96 97.9 195.6 97.9 318C97.9 357.1 108.1 395.3 127.5 429L96 544L213.7 513.1C246.1 530.8 282.6 540.1 319.8 540.1L319.9 540.1C442.2 540.1 544 440.5 544 318.1C544 258.8 518.8 203.1 476.9 161.1zM319.9 502.7C286.7 502.7 254.2 493.8 225.9 477L219.2 473L149.4 491.3L168 423.2L163.6 416.2C145.1 386.8 135.4 352.9 135.4 318C135.4 216.3 218.2 133.5 320 133.5C369.3 133.5 415.6 152.7 450.4 187.6C485.2 222.5 506.6 268.8 506.5 318.1C506.5 419.9 421.6 502.7 319.9 502.7zM421.1 364.5C415.6 361.7 388.3 348.3 383.2 346.5C378.1 344.6 374.4 343.7 370.7 349.3C367 354.9 356.4 367.3 353.1 371.1C349.9 374.8 346.6 375.3 341.1 372.5C308.5 356.2 287.1 343.4 265.6 306.5C259.9 296.7 271.3 297.4 281.9 276.2C283.7 272.5 282.8 269.3 281.4 266.5C280 263.7 268.9 236.4 264.3 225.3C259.8 214.5 255.2 216 251.8 215.8C248.6 215.6 244.9 215.6 241.2 215.6C237.5 215.6 231.5 217 226.4 222.5C221.3 228.1 207 241.5 207 268.8C207 296.1 226.9 322.5 229.6 326.2C232.4 329.9 268.7 385.9 324.4 410C359.6 425.2 373.4 426.5 391 423.9C401.7 422.3 423.8 410.5 428.4 397.5C433 384.5 433 373.4 431.6 371.1C430.3 368.6 426.6 367.2 421.1 364.5z" /></svg>
                (55 11) 99564-4535 - Marina Porchat</p>
              <p className="text-lg flex items-center gap-2">
                <svg width="28" height="28" fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M341.8 72.6C329.5 61.2 310.5 61.2 298.3 72.6L74.3 280.6C64.7 289.6 61.5 303.5 66.3 315.7C71.1 327.9 82.8 336 96 336L112 336L112 512C112 547.3 140.7 576 176 576L464 576C499.3 576 528 547.3 528 512L528 336L544 336C557.2 336 569 327.9 573.8 315.7C578.6 303.5 575.4 289.5 565.8 280.6L341.8 72.6zM304 384L336 384C362.5 384 384 405.5 384 432L384 528L256 528L256 432C256 405.5 277.5 384 304 384z" /></svg>
                Rua Jericó, 193 - CJ 32 - Vila Madalena<br className="hidden sm:block"></br>
                São Paulo / SP - Brasil
              </p>
            </div>

            {/* Decorative leaves */}

          </div>

          <div className="absolute bottom-7 w-full flex -z-1">
            <div className="w-full lg:w-1/2 flex items-start justify-center">
              <Image width={200} height={200} className="w-[271px]"  src="/folha3.png" alt="Green leaf"/>
              
            </div>
            <div className="w-full lg:w-1/2 flex items-start justify-left">

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

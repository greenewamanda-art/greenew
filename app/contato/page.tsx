"use client"

import type React from "react"

import { useState } from "react"
import Header from "@/components/header"
import Sidebar from "@/components/sidebar"
import Footer from "@/components/footer"
import AnimatedText from "@/components/animated-text"
import ParticleBackground from "@/components/particle-background"

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
      <section className="bg-[#0a5f04] pt-20 pb-16 relative overflow-hidden">
        <ParticleBackground />
        <div className="max-w-[1140px] mx-auto px-6 relative z-10">
          <AnimatedText
            text="Entre em contato com a Greenew"
            className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold text-center"
          />
        </div>
      </section>

      {/* Main Content Section */}
      <section
        className="relative min-h-[800px]"
        style={{
          backgroundImage: "url(/digital-tree-blue.jpg)",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {/* Brown overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: "#402315",
            opacity: 0.9,
          }}
        />

        <div className="relative z-10 flex flex-col lg:flex-row min-h-[800px]">
          {/* Left Side - Contact Form */}
          <div className="w-full lg:w-1/2 flex items-center justify-center p-4 lg:p-8">
            <div className="w-full max-w-md">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="nome"
                    placeholder="Nome"
                    value={formData.nome}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-transparent border-2 border-white text-white placeholder-white/70 rounded-sm focus:outline-none focus:border-white/90"
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
                    className="w-full px-4 py-3 bg-transparent border-2 border-white text-white placeholder-white/70 rounded-sm focus:outline-none focus:border-white/90"
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
                    className="w-full px-4 py-3 bg-transparent border-2 border-white text-white placeholder-white/70 rounded-sm focus:outline-none focus:border-white/90 resize-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-white text-[#402315] py-3 px-6 rounded-sm font-bold hover:bg-gray-100 transition-colors"
                >
                  Enviar
                </button>
              </form>
            </div>
          </div>

          {/* Right Side - Map and Contact Info */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center p-4 lg:p-8">
            {/* Google Maps Embed */}
            <div className="mb-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.197!2d-46.6918!3d-23.5505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce579f4b0b0b0b%3A0x0!2sRua%20Jeric%C3%B3%2C%20193%20-%20Vila%20Madalena%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-sm"
              />
            </div>

            {/* Contact Information */}
            <div className="text-white space-y-2">
              <p className="text-lg font-semibold">atendimento@greenewgroup.com</p>
              <p className="text-lg">(55 11) 99564-4535 - Marina Porchat</p>
              <p className="text-lg">Rua Jericó, 193 - CJ 32 - Vila Madalena</p>
              <p className="text-lg">São Paulo / SP - Brasil</p>
            </div>

            {/* Decorative leaves */}
            <div className="mt-8 flex gap-4">
              <img src="/single-vibrant-leaf.png" alt="Green leaf" className="w-10 h-15 opacity-80" />
              <img src="/single-vibrant-leaf.png" alt="Green leaf" className="w-10 h-15 opacity-80" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

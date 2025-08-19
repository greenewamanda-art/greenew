"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function PoliticaPrivacidade() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showScrollButton, setShowScrollButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = Math.min(scrollTop / docHeight, 1)

      setScrollProgress(progress)
      setShowScrollButton(scrollTop > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Sidebar Overlay */}
      {sidebarOpen && <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setSidebarOpen(false)} />}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-[500px] sm:w-[400px] md:w-[500px] bg-[#f5ea8a] z-50 transform transition-transform duration-300 ease-in-out ${sidebarOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close button */}
        <button
          onClick={() => setSidebarOpen(false)}
          className="absolute top-4 right-4 text-[#282828] hover:text-[#0a5f04] text-2xl font-bold"
        >
          ×
        </button>

        {/* Navigation items */}
        <nav className="pt-16 px-8">
          <ul className="space-y-8">
            <li>
              <a href="/" className="text-[#282828] text-xl font-bold hover:text-[#0a5f04] transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-[#282828] text-xl font-bold hover:text-[#0a5f04] transition-colors">
                Quem somos
              </a>
            </li>
            <li>
              <a
                href="/socioambiental"
                className="text-[#282828] text-xl font-bold hover:text-[#0a5f04] transition-colors"
              >
                Socioambiental
              </a>
            </li>
            <li>
              <a href="#" className="text-[#282828] text-xl font-bold hover:text-[#0a5f04] transition-colors">
                Fale Conosco
              </a>
            </li>
            <li>
              <a
                href="/o-que-fazemos"
                className="text-[#282828] text-xl font-bold hover:text-[#0a5f04] transition-colors"
              >
                O que fazemos
              </a>
            </li>
            <li>
              <a href="#" className="text-[#282828] text-xl font-bold hover:text-[#0a5f04] transition-colors">
                Clientes
              </a>
            </li>
          </ul>
        </nav>

        {/* Contact information */}
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

          {/* Privacy policy button */}
          <Button className="bg-[#0a5f04] hover:bg-[#175f30] text-white px-6 py-2 rounded-sm mt-6 w-full">
            <span className="text-[#0a5f04] bg-white px-2 py-1 rounded mr-2">Política de privacidade</span>
          </Button>
        </div>
      </div>

      {/* Header */}
      <header className="bg-[#f5ea8a] py-4">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src="/greenew-logo.png" alt="GREENEW group" className="h-8 sm:h-12" />
            </div>
            <Button
              variant="ghost"
              className="text-[#0a5f04] flex items-center gap-2 sm:gap-3"
              onClick={() => setSidebarOpen(true)}
            >
              {/* Hamburger icon */}
              <div className="flex flex-col gap-1.5">
                <div className="w-6 h-0.5 bg-[#0a5f04] rounded-full"></div>
                <div className="w-6 h-0.5 bg-[#0a5f04] rounded-full"></div>
                <div className="w-6 h-0.5 bg-[#0a5f04] rounded-full"></div>
              </div>
              <span className="text-sm sm:text-base lg:text-lg font-medium">Menu</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-black py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center">
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              Política de privacidade
            </h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
            <h2 className="text-xl sm:text-2xl font-bold text-black mb-4 sm:mb-6">Quem somos</h2>
            <p className="text-gray-700 mb-6 sm:mb-8">O endereço do nosso site é: https://greenew.com.br</p>

            <h2 className="text-xl sm:text-2xl font-bold text-black mb-4 sm:mb-6">Comentários</h2>
            <p className="text-gray-700 mb-4">
              Quando os visitantes deixam comentários no site, coletamos os dados mostrados no formulário de
              comentários, além do endereço de IP e de dados do navegador do visitante, para auxiliar na detecção de
              spam.
            </p>
            <p className="text-gray-700 mb-6 sm:mb-8">
              Uma sequência anonimizada de caracteres criada a partir do seu e-mail (também chamada de hash) poderá ser
              enviada para o Gravatar para verificar se você usa o serviço. A política de privacidade do Gravatar está
              disponível aqui: https://automattic.com/privacy/. Depois da aprovação do seu comentário, a foto do seu
              perfil fica visível publicamente junto do seu comentário.
            </p>

            <h2 className="text-xl sm:text-2xl font-bold text-black mb-4 sm:mb-6">Mídia</h2>
            <p className="text-gray-700 mb-6 sm:mb-8">
              Se você envia imagens para o site, evite enviar as que contenham dados de localização incorporados (EXIF
              GPS). Visitantes podem baixar essas imagens do site e extrair delas dados de localização.
            </p>

            <h2 className="text-xl sm:text-2xl font-bold text-black mb-4 sm:mb-6">Cookies</h2>
            <p className="text-gray-700 mb-4">
              Ao deixar um comentário no site, você poderá optar por salvar seu nome, e-mail e site nos cookies. Isso
              visa seu conforto, assim você não precisará preencher seus dados novamente quando fizer outro comentário.
              Esses cookies duram um ano.
            </p>
            <p className="text-gray-700 mb-4">
              Se você tem uma conta e acessa este site, um cookie temporário será criado para determinar se seu
              navegador aceita cookies. Ele não contém nenhum dado pessoal e será descartado quando você fechar seu
              navegador.
            </p>
            <p className="text-gray-700 mb-4">
              Quando você acessa sua conta no site, também criamos vários cookies para salvar os dados da sua conta e
              suas escolhas de exibição de tela. Cookies de login duram dois dias e cookies de opções de tela duram um
              ano. Se você selecionar "Lembrar-me", seu acesso será mantido por duas semanas. Se você se desconectar da
              sua conta, os cookies de login serão removidos.
            </p>
            <p className="text-gray-700 mb-8">
              Se você editar ou publicar um artigo, um cookie adicional será salvo no seu navegador. Este cookie não
              inclui nenhum dado pessoal e simplesmente indica o ID do post referente ao artigo que você acabou de
              editar. Ele expira depois de 1 dia.
            </p>

            <h2 className="text-xl sm:text-2xl font-bold text-black mb-4 sm:mb-6">Mídia incorporada de outros sites</h2>
            <p className="text-gray-700 mb-4">
              Artigos neste site podem incluir conteúdo incorporado como, por exemplo, vídeos, imagens, artigos, etc.
              Conteúdos incorporados de outros sites se comportam exatamente da mesma forma como se o visitante
              estivesse visitando o outro site.
            </p>
            <p className="text-gray-700 mb-8">
              Estes sites podem coletar dados sobre você, usar cookies, incorporar rastreamento adicional de terceiros e
              monitorar sua interação com esse conteúdo incorporado, incluindo sua interação com o conteúdo incorporado
              se você tem uma conta e está conectado com o site.
            </p>

            <h2 className="text-xl sm:text-2xl font-bold text-black mb-4 sm:mb-6">
              Com quem partilhamos os seus dados
            </h2>
            <p className="text-gray-700 mb-8">
              Se você solicitar uma redefinição de senha, seu endereço de IP será incluído no e-mail de redefinição de
              senha.
            </p>

            <h2 className="text-xl sm:text-2xl font-bold text-black mb-4 sm:mb-6">
              Por quanto tempo mantemos os seus dados
            </h2>
            <p className="text-gray-700 mb-4">
              Se você deixar um comentário, o comentário e os seus metadados são conservados indefinidamente. Fazemos
              isso para que seja possível reconhecer e aprovar automaticamente qualquer comentário posterior ao invés de
              retê-lo para moderação.
            </p>
            <p className="text-gray-700 mb-8">
              Para usuários que se registram no nosso site (se houver), também guardamos as informações pessoais que
              fornecem no seu perfil de usuário. Todos os usuários podem ver, editar ou excluir suas informações
              pessoais a qualquer momento (só não é possível alterar o seu nome de usuário). Os administradores de sites
              também podem ver e editar essas informações.
            </p>

            <h2 className="text-xl sm:text-2xl font-bold text-black mb-4 sm:mb-6">
              Que direitos os utilizadores têm sobre seus dados
            </h2>
            <p className="text-gray-700 mb-8">
              Se você tiver uma conta neste site ou se tiver deixado comentários, pode solicitar um arquivo exportado
              dos dados pessoais que mantemos sobre você, inclusive quaisquer dados que nos tenha fornecido. Também pode
              solicitar que removamos qualquer dado pessoal que mantemos sobre você. Isto não inclui nenhuns dados que
              somos obrigados a manter para propósitos administrativos, legais ou de segurança.
            </p>

            <h2 className="text-xl sm:text-2xl font-bold text-black mb-4 sm:mb-6">Para onde enviamos seus dados</h2>
            <p className="text-gray-700 mb-8">
              Comentários de visitantes podem ser marcados por um serviço automático de detecção de spam.
            </p>

            <h2 className="text-xl sm:text-2xl font-bold text-black mb-4 sm:mb-6">Contato DPO</h2>
            <p className="text-gray-700">
              <a href="mailto:dpo@greenew.com.br" className="text-[#0a5f04] hover:underline">
                dpo@greenew.com.br
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#f5ea8a] py-8 sm:py-12 lg:py-16 relative min-h-[500px] sm:min-h-[686px] flex flex-col justify-center">
        <div className="max-w-[1140px] mx-auto px-6">
          {/* Top section */}
          <div className="flex flex-col lg:flex-row justify-between items-start mb-8 sm:mb-12 lg:mb-16">
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 lg:w-2/3 mb-8 lg:mb-0 w-full">
              <p className="text-[#282828] text-base sm:text-lg leading-relaxed flex-1">
                A Greenew é uma agência full-service que trabalha de maneira 360°. Somos capazes de atender diversas
                demandas de marketing e dessa forma desenvolvemos campanhas integradas.
              </p>
              <a
                href="#"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-[#0a5f04] rounded-full flex items-center justify-center hover:bg-[#175f30] transition-colors flex-shrink-0"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Bottom section */}
          <div className="flex flex-col sm:flex-row lg:flex-row justify-between items-center gap-4 sm:gap-6">
            {/* DPO Logo */}
            <div className="flex items-center">
              <img src="/dpo-logo.png" alt="DPO Oficial" className="w-16 h-16 sm:w-20 sm:h-20 rounded-full" />
            </div>

            {/* Copyright */}
            <div className="text-[#282828] text-xs sm:text-sm font-medium text-center">
              Greenew todos os direitos reservados
            </div>

            {/* Privacy Policy */}
            <div>
              <a
                href="/politica-de-privacidade"
                className="text-[#282828] text-xs sm:text-sm font-medium hover:text-[#0a5f04] transition-colors"
              >
                Política de privacidade
              </a>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className={`fixed bottom-4 right-4 sm:bottom-8 sm:right-8 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-500 shadow-lg bg-transparent z-50 ${
            showScrollButton
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-4 scale-95 pointer-events-none"
          }`}
          style={{
            background: `conic-gradient(#0a5f04 ${scrollProgress * 360}deg, transparent ${scrollProgress * 360}deg)`,
            padding: "2px",
          }}
        >
          <div className="w-full h-full rounded-full bg-[#f5ea8a] flex items-center justify-center">
            <svg
              className={`w-4 h-4 sm:w-6 sm:h-6 transition-colors duration-300 ${
                scrollProgress > 0.1 ? "text-[#0a5f04]" : "text-gray-400"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </div>
        </button>
      </footer>
    </div>
  )
}

"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Sidebar from "@/components/sidebar"
import Footer from "@/components/footer"

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
      <Header onMenuClick={() => setSidebarOpen(true)} />
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} currentPage="politica" />

      {/* Hero Section */}
      <section className="bg-black py-12 sm:py-16 lg:py-20 mt-[80px] hidden">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center">
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              Política de privacidade
            </h1>
          </div>
        </div>
      </section>

      <section className="pt-[220px] pb-28 sm:pb-[180px] mt-[80px] bg-[#090909] relative overflow-hidden flex items-center justify-center">
        <div className="max-w-[1140px] w-full mx-auto px-6">
          
          <h1
            style={{ textTransform: 'none', lineHeight: '1.2em' }}
            className="max-w-[1140px]  w-full absolute left-0 sm:left-auto top-[100px] text-[14vw] lg:text-[16vh] text-center text-transparent pointer-events-none stroke font-bold leading-none opacity-20 [--tw-text-stroke-color:#555] [--tw-text-stroke-width:1px] [text-stroke:var(--tw-text-stroke-width)_var(--tw-text-stroke-color)]"
          >
            Política de<br></br> privacidade
          </h1>

          <div className="relative z-10 text-center">
            <h2 className="text-lg lg:text-4xl font-bold text-white tracking-tight">
              Política de privacidade
            </h2>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
            <h2 className="text-xl sm:text-2xl font-medium text-black mb-4 sm:mb-6">Quem somos</h2>
            <p className="text-gray-700 mb-6 sm:mb-8">O endereço do nosso site é: https://greenew.com.br</p>

            <h2 className="text-xl sm:text-2xl font-medium text-black mb-4 sm:mb-6">Comentários</h2>
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

            <h2 className="text-xl sm:text-2xl font-medium text-black mb-4 sm:mb-6">Mídia</h2>
            <p className="text-gray-700 mb-6 sm:mb-8">
              Se você envia imagens para o site, evite enviar as que contenham dados de localização incorporados (EXIF
              GPS). Visitantes podem baixar essas imagens do site e extrair delas dados de localização.
            </p>

            <h2 className="text-xl sm:text-2xl font-medium text-black mb-4 sm:mb-6">Cookies</h2>
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

            <h2 className="text-xl sm:text-2xl font-medium text-black mb-4 sm:mb-6">Mídia incorporada de outros sites</h2>
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

            <h2 className="text-xl sm:text-2xl font-medium text-black mb-4 sm:mb-6">
              Com quem partilhamos os seus dados
            </h2>
            <p className="text-gray-700 mb-8">
              Se você solicitar uma redefinição de senha, seu endereço de IP será incluído no e-mail de redefinição de
              senha.
            </p>

            <h2 className="text-xl sm:text-2xl font-medium text-black mb-4 sm:mb-6">
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

            <h2 className="text-xl sm:text-2xl font-medium text-black mb-4 sm:mb-6">
              Que direitos os utilizadores têm sobre seus dados
            </h2>
            <p className="text-gray-700 mb-8">
              Se você tiver uma conta neste site ou se tiver deixado comentários, pode solicitar um arquivo exportado
              dos dados pessoais que mantemos sobre você, inclusive quaisquer dados que nos tenha fornecido. Também pode
              solicitar que removamos qualquer dado pessoal que mantemos sobre você. Isto não inclui nenhuns dados que
              somos obrigados a manter para propósitos administrativos, legais ou de segurança.
            </p>

            <h2 className="text-xl sm:text-2xl font-medium text-black mb-4 sm:mb-6">Para onde enviamos seus dados</h2>
            <p className="text-gray-700 mb-8">
              Comentários de visitantes podem ser marcados por um serviço automático de detecção de spam.
            </p>

            <h2 className="text-xl sm:text-2xl font-medium text-black mb-4 sm:mb-6">Contato DPO</h2>
            <p className="text-gray-700">
              <a href="mailto:dpo@greenew.com.br" className="text-[#0a5f04] hover:underline">
                dpo@greenew.com.br
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

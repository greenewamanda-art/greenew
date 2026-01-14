import Footer from "@/components/footer"
import { Metadata } from "next"


export const metadata: Metadata = {
  title: "Política de privacidade - Greenew",
  description: "Quem somos O endereço do nosso site é: https://greenew.com.br. Comentários Quando os visitantes deixam comentários no site, coletamos os dados mostrados no formulário de comentários, além do endereço de IP e de dados do navegador do visitante, para auxiliar na detecção de spam. Uma sequência anonimizada de caracteres criada a partir do seu e-mail (também...",
  openGraph: {
    url: "https://greenew.com.br/politica-de-privacidade"
  }
}

export default function PoliticaPrivacidade() {
  return (
    <div className="min-h-screen bg-white">
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
            <h1 className="text-2xl sm:text-3xl font-semibold text-black mb-8">
              AVISO DE PRIVACIDADE E COOKIES – SITE
            </h1>

            <p className="mb-6">
              <strong>Última atualização:</strong> 12/12/2025
            </p>

            <p className="mb-6">
              A <strong>Greenew Publicidade Ltda.</strong> ("Greenew" ou "nós"),
              inscrita no CNPJ sob o n° 20.683.649/0001-61, é detentora do site{" "}
              <a
                href="https://www.greenew.com.br"
                className="text-blue-600 hover:underline"
              >
                https://www.greenew.com.br
              </a>{" "}
              e se preocupa com a segurança da informação, privacidade e
              proteção dos dados pessoais.
            </p>

            <p className="mb-6">
              Para dar transparência aos titulares, desenvolveu este aviso de
              privacidade para informar quais dados pessoais são tratados e suas
              finalidades.
            </p>

            <p className="mb-8">
              Este documento poderá ser alterado a qualquer tempo e sem aviso
              prévio. Orientamos que você consulte a data de atualização e leia
              novamente o aviso sempre que visitar o site.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-black mb-6 mt-8">
              1. O que você precisa saber para entender este aviso?
            </h2>

            <p className="mb-4">
              Para facilitar a sua leitura, apresentamos as seguintes
              definições:
            </p>

            <ul className="mb-8 space-y-3 list-disc pl-6">
              <li>
                <strong>Dado pessoal:</strong> Informação que identifica ou pode
                identificar uma pessoa física, como por exemplo, nome, e-mail,
                celular, entre outros.
              </li>
              <li>
                <strong>Tratamento:</strong> Atividades realizadas com os dados
                pessoais, como por exemplo, coletar, acessar, analisar,
                transferir, armazenar, compartilhar, eliminar, etc.
              </li>
              <li>
                <strong>Titular:</strong> Pessoa física a quem se referem os
                dados pessoais. Os interessados em entrar em contato conosco e
                usuários que acessam este site são titulares dos seus dados
                pessoais.
              </li>
              <li>
                <strong>Controlador:</strong> Parte que decide sobre o
                tratamento de dados pessoais. Os clientes que contratam a{" "}
                <strong>
                  Greenew para o desenvolvimento de campanhas são controladores.
                </strong>
              </li>
              <li>
                <strong>Uso compartilhado de dados:</strong> Comunicação,
                difusão, transferência internacional, interconexão ou tratamento
                compartilhado de dados pessoais.
              </li>
              <li>
                <strong>Agência Nacional de Proteção de Dados – ANPD:</strong>{" "}
                Agência Reguladora responsável por monitorar o cumprimento da
                LGPD e zelar pela aplicação do ECA Digital.
              </li>
              <li>
                <strong>
                  Encarregado de Dados ou DPO (Data Protection Officer):
                </strong>{" "}
                Indicado para atuar como canal de comunicação entre o
                controlador, os titulares dos dados e a ANPD.
              </li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-black mb-6 mt-8">
              2. Por que a Greenew trata os dados pessoais?
            </h2>

            <p className="mb-4">
              Os dados pessoais são tratados para as seguintes finalidades:
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border border-gray-300 text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                      Dados pessoais
                    </th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                      Finalidades
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">
                      <strong>Lista de presença em eventos</strong>
                      <br />
                      <br />
                      Nome; e-mail; telefone; CRM; CPF.
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Promover o controle de presença em eventos;</li>
                        <li>
                          Prestar serviços para os clientes da{" "}
                          <strong>Greenew</strong>.
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">
                      <strong>Envio de brindes</strong>
                      <br />
                      <br />
                      Nome; endereço.
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Enviar brindes para beneficiários;</li>
                        <li>
                          Prestar serviços para os clientes da{" "}
                          <strong>Greenew</strong>.
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">
                      <strong>Formulário de contato</strong>
                      <br />
                      <br />
                      Nome; e-mail; mensagem.
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Responder os contatos;</li>
                        <li>Oferecer soluções e respostas para dúvidas;</li>
                        <li>
                          Manter o contato no banco de dados para prospectar
                          novos negócios.
                        </li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mb-8">
              Os dados pessoais tratados em razão das atividades "lista de
              presença em eventos" e "envio de brindes" serão tratados pela{" "}
              <strong>
                Greenew apenas para atender as finalidades determinadas pelo
                cliente (controlador) para executar determinado trabalho.
              </strong>
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-black mb-6 mt-8">
              3. Os dados pessoais são compartilhados?
            </h2>

            <p className="mb-4">
              Podemos fazer o uso compartilhado dos dados pessoais, sempre
              respeitando a LGPD e o mínimo de dados pessoais necessários para
              atingir as finalidades previstas com os terceiros abaixo listados:
            </p>

            <ul className="mb-6 space-y-2 list-disc pl-6">
              <li>
                Empresas do mesmo grupo econômico ou coligadas da{" "}
                <strong>Greenew</strong>;
              </li>
              <li>Cliente (controlador) que contratou os nossos serviços;</li>
              <li>Empresas que desenvolvem e mantém o site;</li>
              <li>Ferramentas de estatísticas de visitação do site;</li>
              <li>
                Autoridades judiciais, administrativas, regulatórias ou
                governamentais, desde que haja determinação expressa.
              </li>
            </ul>

            <p className="mb-8">
              Ao compartilharmos os seus dados pessoais com operadores de dados,
              exigiremos que seus dados sejam tratados de acordo com as nossas
              instruções, o que inclui, dentre outras instruções, o
              armazenamento seguro, sua retenção tão somente pelo período
              necessário e a impossibilidade de compartilhamento subsequente com
              outras organizações sem nossa prévia e expressa autorização.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-black mb-6 mt-8">
              4. E os sites de terceiros?
            </h2>

            <p className="mb-4">
              Neste site você pode encontrar links para outros sites ou serviços
              online, como por exemplo, Instagram e Linkedin.
            </p>

            <p className="mb-8">
              Esses sites estão sujeitos aos seus próprios avisos de privacidade
              e regras de uso. A <strong>Greenew</strong> não é responsável
              pelos danos ou prejuízos causados por terceiros.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-black mb-6 mt-8">
              5. Como os dados pessoais são protegidos?
            </h2>

            <p className="mb-4">
              A <strong>Greenew</strong> adota medidas de segurança técnicas e
              administrativas para proteger os dados pessoais de incidentes de
              segurança.
            </p>

            <p className="mb-8">
              Caso ocorra algum incidente de segurança envolvendo dados pessoais
              que possa acarretar risco ou dano relevante ao titular, a{" "}
              <strong>Greenew</strong> fará a devida comunicação aos titulares e
              à ANPD, nos termos da LGPD.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-black mb-6 mt-8">
              6. Quais são os direitos dos titulares e como exercê-los?
            </h2>

            <p className="mb-4">
              Para as atividades de tratamento em que a <strong>Greenew</strong>{" "}
              for controladora, os titulares podem exercer os seguintes direitos
              em relação aos seus dados pessoais:
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border border-gray-300 text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                      Direitos previstos na LGPD
                    </th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                      Como você pode exercer os direitos
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">
                      Confirmar, acessar e corrigir.
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      Você pode acessar os pessoais tratados e receber uma cópia
                      deles, na maioria dos casos. Você também pode corrigir os
                      dados pessoais incompletos, errados ou desatualizados.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">
                      Solicitar que os dados pessoais sejam tornados anônimos,
                      bloqueados ou eliminados.
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      Se os dados pessoais forem desnecessários, excessivos ou
                      tratados de forma ilegal.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">
                      Pedir a portabilidade.
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      Após a regulamentação da ANPD, você poderá pedir que os
                      seus dados pessoais sejam transferidos para outro
                      fornecedor de produto ou serviço.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">
                      Pedir a eliminação.
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      Apenas para os dados pessoais tratados com base no
                      consentimento, desde que não haja uma justificativa legal
                      para mantê-los.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">
                      Saber as consequências do consentimento.
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      Ser informado sobre a possibilidade de negar o
                      consentimento e suas consequências.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">
                      Revogar o consentimento.
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      Solicitar expressamente a revogação do consentimento, de
                      forma gratuita e facilitada, enviando um e-mail ao DPO.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">
                      Saber sobre o uso compartilhado.
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      Saber com quais entidades públicas e privadas os seus
                      dados pessoais foram compartilhados. No item 3 acima
                      informamos com quem compartilhamos seus dados. Se desejar
                      uma lista atualizada, solicite por e-mail ao DPO.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">
                      Revisar decisões tomadas por robôs.
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      Aquelas tomadas unicamente com base em tratamento
                      automatizado de dados pessoais que afetem seus interesses,
                      como decisões que definem perfil pessoal, profissional, de
                      consumo e de crédito ou os aspectos de sua personalidade.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mb-8">
              Para exercer estes direitos sem custos, tirar dúvidas sobre a LGPD
              ou este aviso de privacidade, entre em contato com o DPO pelo
              e-mail{" "}
              <a
                href="mailto:atendimento@dpooficial.com.br"
                className="text-blue-600 hover:underline"
              >
                atendimento@dpooficial.com.br
              </a>
              .
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-black mb-6 mt-8">
              7. Quem é o nosso encarregado pelo tratamento de dados pessoais?
            </h2>

            <p className="mb-8">
              O nosso encarregado de dados é o DPO Oficial, marca registrada da
              Vetaluti – Consultoria e Assessoria Ltda, pessoa jurídica de
              direito privado, inscrita no CNPJ sob o nº 37.781.826/0001-45 e/ou
              LGPDfit Consultoria e Serviços Ltda, inscrita no CNPJ sob o nº
              53.049.872/0001-00, as quais têm como representante legal o Sr.
              Tarcisio Teixeira e como responsável técnica a Sra. Ruth Maria
              Guerreiro da Fonseca Armelin.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-black mb-6 mt-8">
              8. Os dados pessoais são transferidos para país estrangeiro ou
              organismo internacional?
            </h2>

            <p className="mb-8">
              A <strong>Greenew</strong> realiza a transferência internacional
              de dados pessoais e adota medidas de prevenção e segurança
              apropriadas e compatíveis com a natureza dos dados pessoais
              tratados, a finalidade do tratamento e os riscos envolvidos na
              operação para garantir o cumprimento dos princípios, dos direitos
              do titular e do regime de proteção de dados pessoais previstos na
              LGPD.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-black mb-6 mt-8">
              9. O que são cookies?
            </h2>

            <p className="mb-8">
              Os cookies são arquivos instalados nos dispositivos eletrônicos
              dos usuários para coletar informações sobre o site para diversas
              finalidades, como por exemplo, para assegurar a própria
              funcionalidade do site, monitorar o desempenho ou para exibir
              anúncios.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-black mb-6 mt-8">
              10. Quais tipos de cookies a Greenew utiliza?
            </h2>

            <p className="mb-6">
              O site da <strong>Greenew</strong> utiliza cookies necessários,
              cuja desabilitação impede o funcionamento do site ou a utilização
              de serviços pelo usuário, assim como cookies não-necessários, com
              funcionalidades não essenciais ao serviço, de modo que podem ser
              desabilitados pelo usuário sem prejuízo do funcionamento do site.
            </p>

            <h3 className="text-lg sm:text-xl font-semibold text-black mb-4 mt-6">
              10.1 Cookies de funcionalidade
            </h3>

            <p className="mb-4">
              São cookies necessários usados para fornecer os serviços básicos
              solicitados pelo usuário.
            </p>

            <p className="mb-4">
              <strong>Quantidade:</strong> 2
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border border-gray-300 text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                      Período de retenção
                    </th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                      Compartilhamento com terceiros
                    </th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                      Se sim, com quem?
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">
                      6 meses
                    </td>
                    <td className="border border-gray-300 px-4 py-3">Sim</td>
                    <td className="border border-gray-300 px-4 py-3">
                      Youtube
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">
                      6 meses
                    </td>
                    <td className="border border-gray-300 px-4 py-3">Sim</td>
                    <td className="border border-gray-300 px-4 py-3">
                      Youtube
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-lg sm:text-xl font-semibold text-black mb-4 mt-6">
              10.2. Cookies analíticos ou de desempenho
            </h3>

            <p className="mb-4">
              São cookies não-necessários com a finalidade de coletar dados e
              informações sobre como os usuários utilizam o site, quais páginas
              visitam com mais frequência e a ocorrência de erros ou informações
              sobre o próprio desempenho do site ou da aplicação.
            </p>

            <p className="mb-4">
              <strong>Quantidade:</strong> 6
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border border-gray-300 text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                      Período de retenção
                    </th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                      Compartilhamento com terceiros
                    </th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                      Se sim, com quem?
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">Sessão</td>
                    <td className="border border-gray-300 px-4 py-3">Sim</td>
                    <td className="border border-gray-300 px-4 py-3">
                      Youtube
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">
                      6 meses
                    </td>
                    <td className="border border-gray-300 px-4 py-3">Sim</td>
                    <td className="border border-gray-300 px-4 py-3">
                      Youtube
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">Sessão</td>
                    <td className="border border-gray-300 px-4 py-3">Sim</td>
                    <td className="border border-gray-300 px-4 py-3">
                      Youtube
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">
                      1 ano, 1 mês e 4 dias
                    </td>
                    <td className="border border-gray-300 px-4 py-3">Sim</td>
                    <td className="border border-gray-300 px-4 py-3">
                      Google Analytics
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">
                      1 ano, 1 mês e 4 dias
                    </td>
                    <td className="border border-gray-300 px-4 py-3">Sim</td>
                    <td className="border border-gray-300 px-4 py-3">
                      Google Analytics
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">Sessão</td>
                    <td className="border border-gray-300 px-4 py-3">Não</td>
                    <td className="border border-gray-300 px-4 py-3">N/A</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-lg sm:text-xl font-semibold text-black mb-4 mt-6">
              10.3. Informações sobre cookies de terceiros
            </h3>

            <p className="mb-4">
              A <strong>Greenew</strong> não tem controle sobre o funcionamento
              dos cookies de terceiros, pois eles são criados por outro domínio.
            </p>

            <p className="mb-4">
              Para mais informações e configurações, o usuário pode acessar as
              políticas de privacidade de cada terceiro para saber quais cookies
              são usados e como os dados pessoais são tratados.
            </p>

            <ul className="mb-8 space-y-2 list-disc pl-6">
              <li>
                Google:{" "}
                <a
                  href="https://business.safety.google/adscookies/"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://business.safety.google/adscookies/
                </a>
              </li>
              <li>
                Youtube:{" "}
                <a
                  href="https://policies.google.com/privacy?hl=pt-BR/"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://policies.google.com/privacy?hl=pt-BR/
                </a>
              </li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-black mb-6 mt-8">
              11. Como configurar os cookies no site ou no navegador?
            </h2>

            <p className="mb-4">
              Os cookies retêm dados do usuário pelos períodos mencionados,
              sendo que podem ser transferidos para fora do Brasil.
            </p>

            <p className="mb-4">
              O usuário tem a opção e pode alterar permissões, bloquear ou
              recusar os cookies a qualquer momento configurando ou utilizando
              as ferramentas fornecidas pelo navegador, porém, é possível que o
              uso do site seja prejudicado. Para mais informações, consultar os
              links abaixo:
            </p>

            <ul className="mb-8 space-y-2 list-disc pl-6">
              <li>
                Internet Explorer:{" "}
                <a
                  href="https://support.microsoft.com/pt-br/help/17442/windows-internet-explorer-delete-manage-cookies"
                  className="text-blue-600 hover:underline break-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://support.microsoft.com/pt-br/help/17442/windows-internet-explorer-delete-manage-cookies
                </a>
              </li>
              <li>
                Firefox:{" "}
                <a
                  href="https://support.mozilla.org/pt-BR/kb/gerencie-configuracoes-de-armazenamento-local-de-s"
                  className="text-blue-600 hover:underline break-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://support.mozilla.org/pt-BR/kb/gerencie-configuracoes-de-armazenamento-local-de-s
                </a>
              </li>
              <li>
                Safari:{" "}
                <a
                  href="https://support.apple.com/pt-br/guide/safari/sfri11471/mac"
                  className="text-blue-600 hover:underline break-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://support.apple.com/pt-br/guide/safari/sfri11471/mac
                </a>
              </li>
              <li>
                Google Chrome:{" "}
                <a
                  href="https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DDesktop&oco=1&hl=pt-BR"
                  className="text-blue-600 hover:underline break-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DDesktop&oco=1&hl=pt-BR
                </a>
              </li>
              <li>
                Microsoft Edge:{" "}
                <a
                  href="https://support.microsoft.com/pt-br/help/4027947/microsoft-edge-delete-cookies"
                  className="text-blue-600 hover:underline break-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://support.microsoft.com/pt-br/help/4027947/microsoft-edge-delete-cookies
                </a>
              </li>
              <li>
                Opera:{" "}
                <a
                  href="https://help.opera.com/en/latest/web-preferences/#cookies"
                  className="text-blue-600 hover:underline break-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://help.opera.com/en/latest/web-preferences/#cookies
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

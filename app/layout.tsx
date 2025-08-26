import type React from "react"
import { Nunito } from "next/font/google"
import { Poppins } from "next/font/google"
import "./globals.css"
import Cursor from "@/components/cursor"
import { Toaster } from "@/components/ui/sonner"
import { Metadata } from "next"
import ContentHeader from "@/components/content-header"

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
})

const poppins = Poppins({
  weight: ['300', '500', '900'],
  variable: "--font-poppins",
  subsets: ['latin']

})

export const metadata: Metadata = {
  title: "Greenew - Agencia de propaganda 360°",
  description: "A Greenew é uma agência de propaganda 360º capaz de atender diversas demandas de marketing. Conta com equipe criativa",
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title: "Greenew",
    url: "https://greenew.com.br/",
    description: "A Greenew é uma agência de propaganda 360º capaz de atender diversas demandas de marketing. Conta com equipe criativa",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: '/greenew-logo.png',
        alt: "Greenew",
        width: 267,
        height: 86,

      }
    ]
  }
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${nunito.variable} ${poppins.variable}`}>
      <head>
        <style>{`
html {
  --font-nunito: ${nunito.style.fontFamily};
  --font-poppins: ${poppins.style.fontFamily};
}
        `}</style>
      </head>
      <body>
        <ContentHeader/>
        <Cursor />
        {children}
        <Toaster richColors position="top-center"/>
      </body>
    </html>
  )
}

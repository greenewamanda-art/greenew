import type React from "react"
import type { Metadata } from "next"
import { Nunito } from "next/font/google"
import { Poppins } from "next/font/google"
import "./globals.css"
import Cursor from "@/components/cursor"

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
  title: "GREENEW - Agência de Propaganda 360°",
  description: "Soluções versáteis e eficazes para sua área. Agência focada em resultados.",
  generator: "v0.app",
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
        <Cursor />
        {children}
      </body>
    </html>
  )
}

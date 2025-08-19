import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Nunito } from "next/font/google"
import "./globals.css"

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
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
    <html lang="pt-BR" className={nunito.variable}>
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
  --font-nunito: ${nunito.style.fontFamily};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}

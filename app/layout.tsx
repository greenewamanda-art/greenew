import type React from "react"
import "./globals.css"
import Cursor from "@/components/cursor"
import { Toaster } from "@/components/ui/sonner"
import { Metadata } from "next"
import ContentHeader from "@/components/content-header"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Greenew - Agencia de propaganda 360°",
  description: "A Greenew é uma agência de propaganda 360º capaz de atender diversas demandas de marketing. Conta com equipe criativa",
  icons: {
    icon: "/icon.jpg",
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
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Os dois pesos são usados acima da dobra em todas as páginas, então
            vale puxá-los junto com o HTML em vez de esperar o CSS resolver. */}
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href="/fontes/ITCAvantGardeGothic-Medium.woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href="/fontes/ITCAvantGardeGothic-Bold.woff2"
          crossOrigin="anonymous"
        />
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-195HBF0FR1"
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-195HBF0FR1', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
        <Script src="https://embeds.iubenda.com/widgets/f9149a16-77c3-48ff-bd44-ca9084a7dcdc.js" />
      </head>
      <body>
        <ContentHeader />
        <Cursor />
        {children}
        <Toaster richColors position="top-center" />
      </body>
    </html>
  )
}
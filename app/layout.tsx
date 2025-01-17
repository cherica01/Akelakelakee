import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from 'next/font/google'
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: "Modern Portfolio",
  description: "A modern portfolio website built with Next.js",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${jetBrainsMono.variable} font-sans bg-black`}>
        {children}
      </body>
    </html>
  )
}


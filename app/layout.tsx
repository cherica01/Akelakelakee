import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import LoadingManager from "@/components/LoadingManager"; // Import du LoadingManager
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Portfolio Cherica",
  description: "Cherica's Professional Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Ajoutez votre favicon ici */}
        <link rel="icon" href="/images/Screenshot_20241207-213145~2.png" type="image/png" /> {/* Remplacez par le chemin de votre fichier */}
      </head>
      <body className={`${inter.variable} ${jetBrainsMono.variable} font-sans bg-black`}>
        <LoadingManager>{children}</LoadingManager> {/* Encapsulation */}
      </body>
    </html>
  );
}
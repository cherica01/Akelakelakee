"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import AnimatedLogo from "@/components/animated_logo";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleWhatsAppClick = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      // Redirige automatiquement vers l'application mobile ou WhatsApp Web
      window.open("https://wa.me/261384079008?text=Hello!", "_blank");
    } else {
      // Affiche un choix pour les utilisateurs sur ordinateur
      const userChoice = confirm(
        "Do you want to open WhatsApp in the desktop app? Click 'Cancel' to use WhatsApp Web."
      );

      if (userChoice) {
        // Redirige vers l'application de bureau (via un lien custom URL scheme pour WhatsApp Desktop)
        window.location.href = "whatsapp://send?phone=261384079008&text=Hello!";
      } else {
        // Redirige vers WhatsApp Web (par défaut)
        window.open("https://wa.me/261384079008?text=Hello!", "_blank");
      }
    }
  };

  return (
<header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg">
  <div className="container mx-auto px-4">
    <div className="flex items-center justify-between h-20">
      {/* Logo */}
      <Link href="/" className="text-white font-mono text-xl">
        <AnimatedLogo />
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-8">
        <Link
          href="#home"
          className="text-white hover:text-[#FFFFFF] transition-colors font-bold"
        >
          Home
        </Link>
        <Link
          href="#services"
          className="text-white hover:text-[#FFFFFF] transition-colors font-bold"
        >
          Services
        </Link>
        <Link
          href="#resume"
          className="text-white hover:text-[#FFFFFF] transition-colors font-bold"
        >
          Resume
        </Link>
        <Link
          href="#work"
          className="text-white hover:text-[#FFFFFF] transition-colors font-bold"
        >
          Work
        </Link>
        <Link
          href="#contact"
          className="text-white hover:text-[#FFFFFF] transition-colors font-bold"
        >
          Contact
        </Link>
        <Button
              variant="outline"
              className="border-[#00FF94] text-[#00FF94] hover:bg-[#00FF94] hover:text-black"
              onClick={handleWhatsAppClick}
            >
              Let&apos;s Talk
            </Button>
      </nav>

      {/* Mobile Hamburger Menu */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white focus:outline-none"
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  </div>

  {/* Mobile Menu */}
{/* Mobile Menu */}
{isMenuOpen && (
  <div className="md:hidden bg-black/5">
    <nav className="flex flex-col items-center justify-center gap-6 py-6">
      <Link
        href="#home"
        className="text-white hover:text-[#FFFFFF] transition-colors font-bold"
        onClick={() => setIsMenuOpen(false)}
      >
        Home
      </Link>
      <Link
        href="#services"
        className="text-white hover:text-[#FFFFFF] transition-colors font-bold"
        onClick={() => setIsMenuOpen(false)}
      >
        Services
      </Link>
      <Link
        href="#resume"
        className="text-white hover:text-[#FFFFFF] transition-colors font-bold"
        onClick={() => setIsMenuOpen(false)}
      >
        Resume
      </Link>
      <Link
        href="#work"
        className="text-white hover:text-[#FFFFFF] transition-colors font-bold"
        onClick={() => setIsMenuOpen(false)}
      >
        Work
      </Link>
      <Link
        href="#contact"
        className="text-white hover:text-[#FFFFFF] transition-colors font-bold"
        onClick={() => setIsMenuOpen(false)}
      >
        Contact
      </Link>
      <Button
        variant="outline"
        className="border-[#00FF94] text-[#00FF94] hover:bg-[#00FF94] hover:text-black"
        onClick={handleWhatsAppClick}
      >
        Let&apos;s Talk
      </Button>
    </nav>
  </div>
)}


  
</header>

  );
}

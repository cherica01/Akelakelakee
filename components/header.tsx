import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from 'next/image';
import AnimatedLogo from '@/components/animated_logo'
export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
        <Link href="/" className="text-white font-mono text-xl">
    
        <AnimatedLogo />


        </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="#home" className="text-gray-400 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="#services" className="text-gray-400 hover:text-white transition-colors">
              Services
            </Link>
            <Link href="#resume" className="text-gray-400 hover:text-white transition-colors">
              Resume
            </Link>
            <Link href="#work" className="text-gray-400 hover:text-white transition-colors">
              Work
            </Link>
            <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">
              Contact
            </Link>
            <Button variant="outline" className="border-[#00FF94] text-[#00FF94] hover:bg-[#00FF94] hover:text-black">
              Let's Talk
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}


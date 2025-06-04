"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

interface AnimatedProfileImageProps {
  src: string
  alt: string
  width: number
  height: number
}

const AnimatedProfileImage: React.FC<AnimatedProfileImageProps> = ({ src, alt, width, height }) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="relative" style={{ width, height }}>
      {/* Image principale */}
      <div className="relative z-20 w-full h-full">
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          width={width}
          height={height}
          className="rounded-full object-cover w-full h-full"
          priority
        />
      </div>

      {/* Bordure animée avec gradient */}
      <motion.div
        className="absolute inset-0 rounded-full z-10"
        style={{
          background: "linear-gradient(45deg, #00FF55, #00FF33, #00FF94, #00FF55)",
          backgroundSize: "400% 400%",
          padding: "4px", // Épaisseur de la bordure
        }}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 3,
          ease: "linear",
          repeat: Number.POSITIVE_INFINITY,
        }}
      >
        {/* Masque pour créer l'effet de bordure */}
        <div className="w-full h-full bg-zinc-900 rounded-full"></div>
      </motion.div>

      {/* Bordure rotative avec points lumineux */}
      <motion.div
        className="absolute inset-0 rounded-full z-0"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 8,
          ease: "linear",
          repeat: Number.POSITIVE_INFINITY,
        }}
      >
        {/* Points lumineux sur le périmètre */}
        {[...Array(12)].map((_, index) => {
          const angle = (index * 360) / 12
          const radius = Math.min(width, height) / 2
          const x = Math.cos((angle * Math.PI) / 180) * radius + radius
          const y = Math.sin((angle * Math.PI) / 180) * radius + radius

          return (
            <motion.div
              key={index}
              className="absolute w-2 h-2 bg-[#00FF55] rounded-full"
              style={{
                left: `${x}px`,
                top: `${y}px`,
                transform: "translate(-50%, -50%)",
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: index * 0.1,
              }}
            />
          )
        })}
      </motion.div>

      {/* Effet de pulsation sur la bordure */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-[#00FF55] z-5"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}

export default AnimatedProfileImage

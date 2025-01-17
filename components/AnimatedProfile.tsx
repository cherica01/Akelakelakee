'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

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
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        className="rounded-full object-cover z-10 relative"
        priority
      />
      <motion.div
        className="absolute inset-0 rounded-full overflow-hidden"
        style={{
          background: 'linear-gradient(45deg, #00ff00, #00ff00, #000000, #000000)',
          backgroundSize: '400% 400%',
        }}
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 15,
          ease: 'linear',
          repeat: Infinity,
        }}
      />
      <motion.div
        className="absolute inset-0"
        style={{
          border: '2px solid transparent',
          borderRadius: '50%',
        }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 10,
          ease: 'linear',
          repeat: Infinity,
        }}
      >
        {[...Array(40)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-4 h-4 bg-green-500 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </motion.div>
    </div>
  )
}

export default AnimatedProfileImage


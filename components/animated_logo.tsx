'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'

const AnimatedLogo: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let angle = 0
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const radius = 35 // Adjusted radius for smaller animation

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw rotating lights
      for (let i = 0; i < 3; i++) {
        const lightAngle = angle + (i * 2 * Math.PI) / 3
        const x = centerX + radius * Math.cos(lightAngle)
        const y = centerY + radius * Math.sin(lightAngle)

        // Outer glow effect
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, 8) // Reduced glow size
        gradient.addColorStop(0, `hsla(${(angle * 180) / Math.PI % 360}, 100%, 50%, 0.6)`)
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)')

        ctx.beginPath()
        ctx.arc(x, y, 3, 0, 2 * Math.PI) // Reduced size to 3
        ctx.fillStyle = gradient
        ctx.fill()

        // Inner core
        ctx.beginPath()
        ctx.arc(x, y, 2, 0, 2 * Math.PI) // Reduced size to 2
        ctx.fillStyle = `hsl(${(angle * 180) / Math.PI % 360}, 100%, 50%)`
        ctx.fill()
      }

      angle += 0.05
      requestAnimationFrame(animate)
    }

    animate()
  }, [])

  return (
    <div className="relative w-[90px] h-[45px] bg-white rounded-full overflow-hidden border border-gray-300 shadow-sm">
      <div className="absolute inset-0 flex items-center justify-center">
        <Image 
          src="/images/Nexus-removebg-preview.png" 
          alt="Nexus Logo" 
          width={70}
          height={25}
          className="rounded"
          priority 
        />
      </div>
      <canvas 
        ref={canvasRef} 
        width={90} 
        height={45} 
        className="absolute inset-0"
      />
    </div>
  )
}

export default AnimatedLogo

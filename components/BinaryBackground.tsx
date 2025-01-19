'use client'

import React, { useEffect, useRef } from 'react'

const BinaryBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const binary = '10'
    const fontSize = 10
    const columns = canvas.width / fontSize

    const drops: number[] = []
    for (let i = 0; i < columns; i++) {
      drops[i] = 1
    }

    function draw() {
      const canvas = canvasRef.current
      if (!canvas || !ctx) return // Vérifie que canvas et ctx existent

      // Dessine un fond semi-transparent pour estomper légèrement les caractères précédents
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Définir la couleur bleue avec une opacité réduite
      ctx.fillStyle = 'rgba(0, 0, 255, 0.8)' // Bleu clair avec 30% d'opacité
      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const text = binary[Math.floor(Math.random() * binary.length)]
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }

        drops[i]++
      }
    }

    const intervalId = setInterval(draw, 33)

    // Nettoyage à la désinstallation du composant
    return () => clearInterval(intervalId)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
      aria-hidden="true" // Accessibilité : Indique que ce canvas est décoratif
    />
  )
}

export default BinaryBackground

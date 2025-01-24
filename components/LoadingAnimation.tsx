"use client"

import React, { useState, useEffect } from "react"

const HackerLoadingAnimation = () => {
  const [showJoke, setShowJoke] = useState(false)
  const [jokeText, setJokeText] = useState("")
  const fullJokeText = "Je blague, Bonjour de la part de Cherica"

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowJoke(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (showJoke) {
      let index = 0
      const intervalId = setInterval(() => {
        if (index < fullJokeText.length) {
          setJokeText((prev) => prev + fullJokeText[index])
          index++
        } else {
          clearInterval(intervalId)
        }
      }, 50) // Reduced interval for faster typing

      return () => clearInterval(intervalId)
    }
  }, [showJoke])

  return (
    <div className="hacker-animation">
      <div className="glitch-text">ERREUR 404</div>
      {showJoke && <div className="joke-text">{jokeText}</div>}
      <div className="matrix-bg"></div>
      <style jsx>{`
        .hacker-animation {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: #000;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 9999;
          overflow: hidden;
          font-family: 'Courier New', monospace;
        }
        .glitch-text {
          font-size: 4rem;
          font-weight: bold;
          color: #ff0000;
          text-shadow: 2px 2px #00ff00, -2px -2px #0000ff;
          animation: glitch 1s infinite;
        }
        .joke-text {
          font-size: 1.5rem;
          color: #00ff00;
          margin-top: 2rem;
          text-align: center;
          max-width: 80%;
        }
        .matrix-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(rgba(0, 255, 0, 0.1) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(0, 255, 0, 0.1) 1px, transparent 1px);
          background-size: 20px 20px;
          z-index: -1;
        }
        @keyframes glitch {
          0% {
            text-shadow: 2px 2px #00ff00, -2px -2px #0000ff;
          }
          25% {
            text-shadow: -2px 2px #00ff00, 2px -2px #0000ff;
          }
          50% {
            text-shadow: 2px -2px #00ff00, -2px 2px #0000ff;
          }
          75% {
            text-shadow: -2px -2px #00ff00, 2px 2px #0000ff;
          }
          100% {
            text-shadow: 2px 2px #00ff00, -2px -2px #0000ff;
          }
        }
      `}</style>
    </div>
  )
}

export default HackerLoadingAnimation


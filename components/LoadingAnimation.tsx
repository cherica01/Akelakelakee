"use client";

import React, { useState, useEffect } from "react";

const HackerLoadingAnimation = () => {
  const [showError, setShowError] = useState(true); // État pour afficher l'erreur
  const [showJoke, setShowJoke] = useState(false); // État pour afficher la blague
  const [jokeText, setJokeText] = useState("");
  const fullJokeText = "Je blague , Bonjour de la part de Cherica 👋";

  useEffect(() => {
    // Affiche l'erreur pendant 1 seconde
    const errorTimer = setTimeout(() => {
      setShowError(false); // Cache l'erreur
      setShowJoke(true); // Active la blague
    }, 1000);

    return () => clearTimeout(errorTimer); // Nettoie le timer si le composant est démonté
  }, []);

  useEffect(() => {
    if (showJoke) {
      let index = 0;
      setJokeText(""); // Réinitialise le texte à chaque activation de la blague
      const intervalId = setInterval(() => {
        if (index < fullJokeText.length) {
          setJokeText((prev) => prev + fullJokeText.charAt(index));
          index++;
        } else {
          clearInterval(intervalId); // Arrête l'animation quand tout est écrit
        }
      }, 30); // Intervalle pour l'effet de saisie (30 ms par caractère)

      return () => clearInterval(intervalId); // Nettoie l'intervalle
    }
  }, [showJoke]);

  return (
    <div className="hacker-animation">
      {showError && <div className="glitch-text">ERREUR 404</div>}
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
  );
};

export default HackerLoadingAnimation;

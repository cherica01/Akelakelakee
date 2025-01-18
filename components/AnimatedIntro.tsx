"use client";

import { TypeAnimation } from 'react-type-animation';

export default function AnimatedIntro() {
  return (
    <div 
      className="space-y-2 mx-auto"
      style={{
        width: '90%', // Prend 90% de la largeur du conteneur parent
        maxWidth: '80rem', // Limite maximale de largeur pour les grands écrans
        height: '20rem', // Fixe la hauteur de l'animation
        maxHeight: '20rem', // Limite maximale de hauteur pour les grands écrans
        overflow: 'hidden', // Évite que des parties de texte débordent
        textAlign: 'center', // Centre le texte horizontalement
      }}
    >
      <TypeAnimation
        sequence={[
          'Hello I\'m\nRiantsoa Chérica', // Affiche le texte
          4000, // Garde le texte affiché pendant 2 secondes
          '', // Efface le texte immédiatement
          500, // Pause avant de redémarrer
        ]}
        wrapper="div"
        speed={50} // Vitesse pour afficher les caractères
        repeat={Infinity} // Animation continue
        style={{
          whiteSpace: 'pre-line',
          display: 'inline-block',
          fontSize: 'clamp(2rem, 5vw, 4rem)', // Taille de police responsive
        }}
        cursor={true} // Affiche le curseur clignotant
        className="font-mono"
      />
    </div>
  );
}

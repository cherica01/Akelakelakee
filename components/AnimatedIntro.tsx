"use client";

import { TypeAnimation } from 'react-type-animation';

export default function AnimatedIntro() {
  return (
    <div className="space-y-2">
      <TypeAnimation
        sequence={[
          'Hello I\'m\n\nRiantsoa Chérica', // Affiche le texte
          2000, // Garde le texte affiché pendant 2 secondes
          () => {}, // Pause intermédiaire sans animation
          '', // Efface le texte immédiatement
          500, // Pause avant de redémarrer
        ]}
        wrapper="div"
        speed={50} // Vitesse pour afficher les caractères
        repeat={Infinity} // Animation continue
        style={{
          whiteSpace: 'pre-line',
          display: 'inline-block',
          fontSize: '4rem', // Double la taille de la police
        }}
        cursor={true} // Affiche le curseur clignotant
        className="font-mono"
      />
    </div>
  );
}

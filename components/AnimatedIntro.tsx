"use client";

import { TypeAnimation } from 'react-type-animation';

export default function AnimatedIntro() {
  return (
    <div className="space-y-2">
      <TypeAnimation
        sequence={[
          'Hello I\'m\n\nRiantsoa Chérica', // Affiche le texte
          4000, // Garde le texte affiché pendant 2 secondes
          '', // Efface le texte immédiatement
          500, // Pause avant de redémarrer (tu peux enlever cela si tu veux que l'animation recommence immédiatement)
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

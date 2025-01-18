"use client";

import { TypeAnimation } from 'react-type-animation';

export default function AnimatedIntro() {
  return (
    <div
      className="space-y-2 sm:space-y-4 mx-auto"
      style={{
        width: '90%',
        maxWidth: '80rem', // Largeur maximale pour les grands écrans
        height: '10rem', // Hauteur réduite pour les petits écrans
        maxHeight: '15rem', // Limite maximale de hauteur pour les grands écrans
        overflow: 'hidden', // Empêche le débordement de texte
        textAlign: 'center', // Centre le texte horizontalement
        marginTop: '6rem', 
        marginBottom:'-2rem'// Ajoute une marge supérieure ici (ajustez la valeur selon vos besoins)
      }}
    >
      <TypeAnimation
        sequence={[
          "Hello I'm\nRiantsoa Chérica", // Texte à afficher
          4000, // Temps d'affichage du texte
          '', // Efface le texte
          500, // Pause avant de redémarrer
        ]}
        wrapper="div"
        speed={50} // Vitesse d'apparition des caractères
        repeat={Infinity} // Animation en boucle
        style={{
          whiteSpace: 'pre-line', // Conserve les sauts de ligne
          display: 'inline-block',
          fontSize: 'clamp(1.5rem, 4vw, 3rem)', // Taille de police responsive
        }}
        cursor={true} // Affiche le curseur clignotant
        className="font-mono"
      />
    </div>
  );
}

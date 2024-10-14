/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const ClickCounter = ({ title, message }) => {
  // Récupérer la valeur du compteur depuis localStorage ou utiliser 0 par défaut
  const storedCount = JSON.parse(localStorage.getItem('count') || '0');

  // Initialisation du state avec la valeur du compteur récupérée ou 0
  const [count, setCount] = useState(storedCount);
  const [showMessage, setShowMessage] = useState(false);

  // Fonction de gestion du clic
  const handleClick = () => {
    const newCount = count + 1;
    setCount(newCount);
    localStorage.setItem('count', JSON.stringify(newCount));
  };

  // Fonction pour l'entrée de la souris
  const handleMouseEnter = () => {
    setShowMessage(true);
  };

  // Fonction pour la sortie de la souris
  const handleMouseLeave = () => {
    setShowMessage(false);
  };

  return (
    <div>
      <h1>{title}</h1>
      <button
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        count is {count}
      </button>
      {/* Si showMessage est vrai, alors afficher le paragraphe */}
      {showMessage && <p>{message}</p>}
    </div>
  );
};

export default ClickCounter;

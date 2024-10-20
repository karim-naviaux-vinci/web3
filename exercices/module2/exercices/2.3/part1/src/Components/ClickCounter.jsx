/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import useLocalStorage from 'hooks/useLocalStorage';

const ClickCounter = ({ title, message }) => {
  // Utiliser le hook useLocalStorage pour persister le compteur
  const [count, setCount] = useLocalStorage('count', 0);
  const [showMessage, setShowMessage] = useLocalStorage('showMessage', false);

  // Fonction de gestion du clic
  const handleClick = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  return (
    <div>
      <h1>{title}</h1>
      <p>{count}</p>
      <button onClick={handleClick}>Increment</button>
      {showMessage && <p>{message}</p>}
    </div>
  );
};

export default ClickCounter;
import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';

function ContadorClics() {
  const [contador, setContador] = useState(0);

  const incrementarContador = () => {
    setContador(contador + 1);
  };

  return (
    <div>
      <h2>Contador de Clics</h2>
      <p>Contador: {contador}</p>
      <button onClick={incrementarContador}>Incrementar</button>
    </div>
  );
}

export default ContadorClics;



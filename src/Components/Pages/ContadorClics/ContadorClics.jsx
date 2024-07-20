import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';

function ContadorClics() {
  const [contador, setContador] = useState(0); // Inicializa el contador en 0

  useEffect(() => {
      // Actualiza el título del documento cada vez que cambia el contador
      document.title = `Contador: ${contador}`;
  }, [contador]);

  const incrementarContador = () => {
      setContador(contador + 1);
  };

  return (
      <div className="contador-container">
          <h1 className="contador-title">Contador: {contador}</h1>
          <button className="increment-button" onClick={incrementarContador}>Incrementar</button>
      </div>
  );
}

export default ContadorClics;



import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() { 
  const [valor, setValor] = useState(0)
  const [nombre, setNombre] = useState("")
  const [encendido, setEncendido] = useState(true)
  console.log(valor);

 const sumar =  () =>  {
  const nuevoValor = valor + 1 
      setValor(nuevoValor );
      actualizarValor(nuevoValor);
  };

  const restar =  () =>  {
      const nuevoValor = valor - 1 
      setValor(nuevoValor);
      actualizarValor(nuevoValor);
  };

  const actualizarValor = (nuevoValor) => {
      if (nuevoValor === 5){
          setNombre("juanjo")
      }
      else if (nuevoValor === 10){
         setNombre("stiven")
      }
      else{
          setNombre("")
      }

  }

  return (
    <>
    <h1>inicio perros</h1>
    <div className="container">
    <Link to="/Contador">ContadorClics</Link>
    <Link to="/Digital">DigitalClock</Link>
    <Link to="/Timer">Timer</Link>
    <Link to="/UserActive">UserActive</Link>
    </div>
    <div >
        <button onClick={sumar}>Sumar 1</button>
        <button onClick={restar}>Restar 1</button>
    </div>
    
    
    
    </> 
     )
}

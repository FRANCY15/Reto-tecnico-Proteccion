import { useState } from 'react';
import './App.css';

function App() {

  const [semilla, setSemilla] = useState();
  const [repeticiones, setRepeticiones] = useState();
  const [resultado, setResultado] = useState([]);
  const hora = new Date();
  
  
  const handleChange = () => {
    const captSemilla = hora.getMinutes();
    setSemilla(captSemilla)
    const captRepeticiones = hora.getSeconds();
    setRepeticiones(captRepeticiones)
    calcularFibonacci()
  }
  
  const calcularFibonacci = () => {
    let nums = num =>  Number(num);
    let numsArray = Array.from(String(semilla), nums)
    let arrayResult = [];
    arrayResult.push(numsArray[0], numsArray[1])
    console.log(arrayResult)
    for(let i= 0; i <= repeticiones; i++){
      arrayResult.push(arrayResult[arrayResult.length-1] + arrayResult[arrayResult.length-2])
    }
    setResultado(arrayResult)
    console.log(arrayResult)
  }

  

  return (
    <>
    <div className='contenedorPrincipal'>
      <div className='containerInformacion'>
        <p className='informacion'>La hora es: {hora.toLocaleTimeString()}</p>
        <p className='informacion'>La semilla es: {semilla}</p>
        <p className='informacion'>La cantidad de repeticiones es: {repeticiones}</p>
      </div>
      <div className='containerInformacion'>
        <p className='resultado'>{resultado.join(',')}</p>
      </div>
      <button className='btnCalcular' onClick={() => handleChange()}>Calcular serie Fibonacci</button>
    </div>
    </>
  );
}

export default App;

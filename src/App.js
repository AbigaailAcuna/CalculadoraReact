import './App.css';
import freeCodeCampLogo from './img/freecodecamp-logo.png';
import Boton from './componentes/Boton.js';
import Pantalla from './componentes/Pantalla.js';
import BotonClear  from './componentes/BotonClear';
import { useState } from 'react';

function App() {

  const [input, setInput] = useState('');

  //actualiza el input
  const agregarInput = val =>{
    setInput(input+val);
  };

  const ReiniciarInput = () =>{
    setInput('');
  };

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img className='freecodecamp-logo' src={freeCodeCampLogo} alt='Logo de freecodecamp' />
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input ={input} />
        <div className='fila'>
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>+</Boton> 
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>-</Boton> 
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>*</Boton> 
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>=</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton> 
          <Boton manejarClick={agregarInput}>/</Boton> 
        </div>
        <div className='fila'>
          <BotonClear manejarClick= {ReiniciarInput}>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;

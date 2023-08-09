import React from 'react';
import '../css/Pantalla.css'

//podemos definir el componente como una función flecha

const Pantalla = ({ input }) => (
    <div className='input'>
        {input} 
    </div>

);

export default Pantalla;
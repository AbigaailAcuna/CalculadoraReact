import React from 'react';
import '../css/Boton.css';

//la clase boton contenedor será fija para todos pero si es num o si es operador se debe evaluar
function Boton(props) {

	const esOperador = valor =>{
		return isNaN(valor) && (valor != '.') && (valor!= '=');
	}
    return(
			<div className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}>
				{props.children}
			</div>
    );

}

export default Boton;
import React from 'react'
import { useState, onAdd } from 'react';

const Contador = ({ stock }) => {
    const [cantidad, setCantidad] = useState(1);
    const sumar = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1);
        }
    };
    const restar = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    };


    const reset = () => {
        setCantidad(1);
    };

    const agregar = () => onAdd(cantidad);

    return (
    <div 
        style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '80vh',

        }}
    >
        
        <button className="btn btn-dark" disabled={cantidad === stock} onClick={sumar}>
         
            +
        </button>  
        <p>{cantidad}</p>
        <button className="btn btn-dark" disabled={cantidad === stock} onClick={restar}>
            -
        </button>
        <button className="btn btn-dark" onClick={reset}> Volver a 1</button>
        <button className="btn btn-primary"onClick={agregar}>Comprar</button>
        
        </div>
  );
};

export default Contador
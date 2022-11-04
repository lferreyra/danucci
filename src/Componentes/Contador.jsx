import { useState, onAdd } from 'react';

const Contador = ({ stock }) => {
    const [cantidad, setCantidad] = useState(1);
    const sumar = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1);
        }
    };
    const restar = () => {
        if (cantidad < stock) {
            setCantidad(cantidad - 1);
        }
    };


    const reset = () => {
        setCantidad(0);
    };

    return (
    <div 
        style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '80vh',

        }}
    >
        
        <br />
        <p>{cantidad}</p>
        <button className="btn btn-dark" disabled={cantidad === stock} onClick={sumar}>
            +
        </button>  
        <button className="btn btn-dark" disabled={cantidad === stock} onClick={restar}>
            -
        </button>
        <button className="btn btn-dark" onClick={reset}> Volver a 0</button>
        <button className="btn btn-dark" onClick={onAdd}> Comprar</button>
        
        </div>
  );
};

export default Contador
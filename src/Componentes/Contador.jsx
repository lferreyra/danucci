import React from 'react'
import { useState } from 'react';

const Contador = ({ stock, onAdd, initial = 1 }) => {
    const [cantidad, setCantidad] = useState(initial);
    //const navigate = useNavigate();

    const sumar = () => {
        //if (cantidad < stock) {
        cantidad < stock && setCantidad(cantidad +1);      
    };

    const restar = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    };
    
    //const reset = () => {
    //    setCantidad(1);
    //};

    const agregar = () => {
        onAdd(cantidad);   
    };

    return (
        <div className='counter'>
           <section> 
              <p>{cantidad}</p>
                 <div>
                    <button className="btn btn-dark" onClick={restar}>
                        -
                    </button>
                    <button className="btn btn-dark" disabled={cantidad === stock} onClick={sumar}>                    
                        +
                    </button> 
                </div>
            </section>
            <div>
            <button className="btn btn-primary" onClick={agregar}>
                Comprar
            </button>
          {/* <button className="btn btn-dark" onClick={reset}>
                 Volver a 1
            </button> */}

            </div>
        </div>
    );
};
export default Contador
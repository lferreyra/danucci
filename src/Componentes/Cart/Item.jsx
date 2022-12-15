import React from 'react';
import { Link } from 'react-router-dom';



const Item = ({ producto }) => {
    return (
        <div className="detail-container">
            <img class="img-thumbnail" src={producto.imagen}   alt={producto.nombre}/>
            <article className="info">
                <div className="card-body">
                <h5 className="card-title text-center"><b>{producto.nombre}</b></h5>
                <p className="card-text text-center">{producto.descripcion}</p>
                <p className="card-text text-center">${producto.precio}</p>
                <Link className="btn" to={`/detail/${producto.id}`}>Ver Detalle</Link> 
               </div>
             </article>    
        </div>
   
    )
};

export default Item;
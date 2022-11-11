import React from 'react';
import { Link } from 'react-router-dom';



const Item = ({ producto }) => {
    return (
        <div className="card py-">
            <img src={producto.imagen} className="card-img-top"  width="200px" alt={producto.title}/>
            <div className="card-body">
            <h5 className="card-title text-center"><b>{producto.nombre}</b></h5>
               <p className="card-text text-center">{producto.descripcion}</p>
               <p className="card-text text-center">${producto.precio}</p>
               <Link to={`/detail/${producto.id}`}>Ver Detalle</Link>
           </div>
        </div>
   
    )
};

export default Item;
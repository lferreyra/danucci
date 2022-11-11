import React from 'react';
import Contador from "../Contador";
import { Products } from '../mock/Products';



const itemDetail = ( {item} ) => {
  const onAdd = (qty) => console.log(qty);
  return (
    <div className='row' key={Products.id}>
    <div className="col-md-4 offset-md-4 text center">
      <img src={Products.imagen} alt={Products.nombre} className="img-fluid" />
      <div className="infodetail"> 
        <h2>{Products.nombre}</h2>
           <span>{Products.nombre}</span> 
            <p>{Products.descripcion}</p>
            <h3>${Products.precio}</h3>
            <Contador stock={Products.stock} initial={1} onAdd={onAdd} />
         </div>
      </div>
   </div>
    );
  };

export default itemDetail;
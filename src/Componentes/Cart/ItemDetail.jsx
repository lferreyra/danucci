import React from 'react';
import Contador from "../Contador";




const itemDetail = ( {item} ) => {
  const onAdd = (qty) => console.log(qty);
  return (
    <div className='detail'>
        <img src={item.imagen} alt={item.nombre} className="img-fluid" />
          <article> 
            <h2>{item.nombre}</h2>
              <span>{item.nombre}</span> 
              <p>{item.descripcion}</p>
              <h3>${item.precio}</h3>
              <h6>Stock: {item.stock}</h6>
              <Contador stock={item.stock} onAdd={onAdd} />
         </article>
    </div>
  );
};

export default itemDetail;
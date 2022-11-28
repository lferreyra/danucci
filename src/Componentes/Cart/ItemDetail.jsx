import React, { useContext, useState } from 'react';
import { CartContext } from '../../Context/CartContext';
import Contador from "../Contador";
import { Link } from 'react-router-dom';


const itemDetail = ({ item }) => {
  //const [cant, setCant] = useState(0);
  const [show, setShow] = useState(true);

  const { addToCart, cantidadDeProducto } = useContext(CartContext);


  const onAdd = (qty) => {
        setShow(false);
        addToCart(item, qty);
  };
  
  const cantidad = cantidadDeProducto(item.id);

  
  return (
      <div className="detail">
          <img src={item.imagen} alt={item.nombre} />
            <article>
              {show ? ( 
                    <h2>{item.nombre}</h2>
              ) : (
                    <h2>{item.nombre}</h2> 
              )}
                <p>{item.descripcion}</p>
                <h3>${item.precio}</h3>
                <h6>Stock: {item.stock}</h6>
                {show ? (
                    <Contador 
                    stock={item.stock} 
                    onAdd={onAdd} 
                    initial={cantidad} />
                ) : (
                    <Link to="/cart">Ir al carrito</Link>
                )}  
          </article>
      </div>
  );

};


export default itemDetail;
import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';


const Cart = () => {
    const {cart, deleteAll, deleteOne, totalPrecio } = useContext(CartContext); 
    if (cart.lenght === 0)
    return (
        <h3> Aún no hay productos en el carrito</h3>
    );
    return (
    <div>
        {cart.map((prod) => (
            <div key={prod.id}>
                <img src={prod.imagen} alt={prod.nombre} width="80px" />
            <h5>{prod.nombre}</h5>
            <h5>{prod.cantidad}</h5>
            <button onClick={() => deleteOne(prod.id)}>Eliminar</button>

             </div>
            
        ))}
            <h4>Total $ {totalPrecio()}</h4>
            <button onClick={deleteAll}>Vaciar carrito</button>
            <link to="/checkout">Checkout</link>
        </div>
    )
};

export default Cart;
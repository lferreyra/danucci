import React from 'react';
import { useContext } from 'react';
import { TfiShoppingCartFull } from 'react-icons/tfi';

import { CartContext } from '../Context/CartContext';


const CartWidget = () => {
  const { totalUnidades } = useContext(CartContext);
  return (
    <div style={{ display: 'flex'}}>
        < TfiShoppingCartFull   size={27} />
        <span>{totalUnidades()}</span>  
    </div>
  );
};

export default CartWidget
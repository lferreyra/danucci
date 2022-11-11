import React from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProduct } from '../mock/Products';

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})
    const { idProd } = useParams();

    useEffect(() =>{
        getProduct(idProd)
            .then((res)=>{
                setItem(res);
            })
            .catch((error) => {
                console.log(error);
            });
}, [idProd]);

return (
    <div className='detail-container'>
        <ItemDetail item={item} />
    </div>
   );
};

export default ItemDetailContainer;
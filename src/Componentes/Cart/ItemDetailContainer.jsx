import React, { useEffect, useState }  from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
//import { getProduct } from '../mock/Products';
import { collection, doc, getDoc } from 'firebase/firestore';
import BarLoader  from "react-spinners/BarLoader";
import { collectionProd, db } from '../../services/firebaseConfig';

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);
    const { idProd } = useParams();

    useEffect(() => {
  
        const collectionProd = collection(db, 'productos');
        const ref = doc(collectionProd, idProd);
       
        getDoc(ref) 
            .then((res)=>{
                setItem({
                    id: res.id,
                    ...res.data(),
            });

        })
        .catch((error)=>{
            console.log(error)
            
        })
        .finally((res)=>{
            setLoading(false)
        })

    }, [idProd]);

    if (loading) {
        return (
        <div className="detail-container">
             <BarLoader item-align="center"/>
        </div>
       
   );
};

    return (
        <div className='detail-container'>
            <ItemDetail item={item} />
            
        </div>
   );
};

export default ItemDetailContainer;
import React from 'react';
import { useState, useEffect } from 'react';
import ItemList from './itemList';
import { getProducts } from '../mock/Products';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    const { categoryName } = useParams();

            useEffect(() => {                
                getProducts(categoryName)
                        .then((res) => {
                            setItems(res);
                        })
                        .catch((error) => {
                            console.log=(error);
                        });
                }, [categoryName]);
                            
                return (
                <div className="container mx-auto mt-4">
                    <ItemList items={items} />
               </div>
            );
        };
        
export default ItemListContainer;




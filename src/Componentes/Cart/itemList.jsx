import React from 'react';
import { memo } from 'react';
import Item from './Item';

const ItemList = memo(
  ({ items }) => {
    return (
    <div className='container mx-auto mt-3'>
        <div className='row'>
           <div className="col-md-3">
             <div className='card style="width: 1rem'>
              {items.map((products) => {
                return <Item producto={products} key={products.id} />;
               })}
              </div>
            </div>
        </div>
    </div>  
        );
    },
    (a, b) => a.items === b.items
);

export default ItemList;
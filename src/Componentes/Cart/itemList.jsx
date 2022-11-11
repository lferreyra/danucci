import React from 'react';
import Item from './Item';

const ItemList = ({ items }) => {
    return (
        <div className="row py-3 col-md-3 ">
            {items.map((Products) => {
                return <Item producto={Products} key={Products.id} />;
            })}
        </div>
    );
};

export default ItemList;
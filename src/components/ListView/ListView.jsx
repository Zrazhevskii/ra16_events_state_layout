import React from 'react';
import ShopItem from './ShopItem';

const ListView = ({ items }) => {
    const products = items;
    let index = 0;

    return (
        <div className='list'>
            {products.map((product) => {
                <ShopItem item={product} key={index++} />;
            })}
        </div>
    );
};

export default ListView;

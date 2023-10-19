import React from 'react';
import ShopItem from './ShopItem';

const ListView = ({ items }) => {
    const products = items;
    let index = 0;
    // console.log(products)

    return (
        <div className="list-items">
            <div className='list'>
            {products.map((product) => (
                <ShopItem item={product} key={index++}/>
            ))}
            </div>
        </div>
    );
};

export default ListView;

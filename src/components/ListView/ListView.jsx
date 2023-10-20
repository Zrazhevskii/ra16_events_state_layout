import React from 'react';
import ShopItem from './ShopItem';
import './ListView.css'

const ListView = ({ items }) => {
    const products = items;
    let index = 0;
    // console.log(products)

    return (
        <div className="list-products-wrapper">
            <div className='list-box'>
            {products.map((product) => (
                <ShopItem item={product} key={index++}/>
            ))}
            </div>
        </div>
    );
};

export default ListView;

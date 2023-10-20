import React from 'react';

const ShopItem = ({ item }) => {
    return (
        <div className="box">
            <img src={item.img} alt="Какой-то кроссовок" className="image"/>
            <h2 className="title">{item.name}</h2>
            <div className="color">{item.color}</div>
            <div className="price">${item.price}</div>
            <button className="btn">Add to card</button>
        </div>
    )
};

export default ShopItem;

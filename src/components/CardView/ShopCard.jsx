import React from 'react'

export const ShopItem = ({ item }) => {
    return (
        <div className='items'>
            <h2 className="title">{item.name}</h2>
            <div className="color">{item.color}</div>
            <img src={item.img} alt="Какая-то картинка" className="item-img" />
        </div>
    )
};

export default ShopItem;

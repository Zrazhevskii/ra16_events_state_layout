export const ShopItem = ({ item }) => {
    return (
        <div className='items'>
            <h2 className='title'>{item.name}</h2>
            <div className='color'>{item.color}</div>
            <img src={item.img} alt='Какая-то картинка' className='item-img' />
            <div className='littie-box'>
                <div className='price dollar'>${item.price}</div>
                <button className='btn card'>Add to card</button>
            </div>
        </div>
    );
};

export default ShopItem;

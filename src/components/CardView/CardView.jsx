import ShopCard from './ShopCard';
import './CardView.css';

const CardView = ({ cards }) => {
    const products = cards;
    let index = 0;
    // console.log(products)

    return (
        <div className='list-items'>
            <div className='list'>
                {products.map((product) => (
                    <ShopCard item={product} key={index++} />
                ))}
            </div>
        </div>
    );
};

export default CardView;

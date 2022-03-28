import React from 'react';
import './Product.css'
const Product = ({product, countAdd}) => {
    const {image, price, category} = product
    console.log(product);
    return (
        <div className='col-lg-4 p-3'>
            <div className='card'>
                <img src={image} alt="" />
                <h3>{category}</h3>
                <button onClick={countAdd} className='btn btn-primary'>Add To Cart</button>
            </div>
        </div>
    );
};

export default Product;
import React from 'react';
import './Product.css'
const Product = ({product, countAdd, countDelete}) => {
    const {image, price, category, title} = product
    console.log(product);
    return (
        <div className='col-lg-4 col-sm-12 p-3'>
            <div className='card border-0 shadow'>
                <img src={image} alt="" />
                <p>{title}</p>
                <p>Price: ${price}</p>
                <div className='d-flex mx-auto card-btn mt-5'>
                <button onClick={countAdd} className='btn btn-primary'>Add To Cart</button>
                <button onClick={countDelete} className='ms-5 btn btn-danger'>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default Product;
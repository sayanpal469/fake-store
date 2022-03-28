import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const AllProducts = ({addCount, deleteCount}) => {
    const [products, setProducts] = useState([])

    useEffect( () => {
        fetch(`https://fakestoreapi.com/products`)
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <div className='row container mx-auto mt-5'>
            {
                products.map(product => <Product key={product.id} product={product} countAdd={addCount} countDelete={deleteCount}></Product>)
            }
        </div>
    );
};

export default AllProducts;
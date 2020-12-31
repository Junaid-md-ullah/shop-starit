import React from 'react';
import Product from './Product';

const Products = () => {
    const data = [
        {name: 'Product A', price: 300},
        {name: 'Product B', price: 200},
        {name: 'Product C', price: 700},
        {name: 'Product D', price: 500},
        {name: 'Product E', price: 650},
        {name: 'Product F', price: 800}

    ];
   
    return (
        <div>
           <Product products={data}></Product>
        </div>
    );
};

export default Products;
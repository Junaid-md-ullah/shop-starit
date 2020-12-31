import React, { useState } from 'react';

const Product = ({products}) => {
    const [status,setStatus] = useState(true);
    const viewAll = () =>{
        setStatus(false);
    }
    const collapse = () =>{
        setStatus(true);
    }
    return (
        <div>
           {
               status ? <div>
                   {
                       products.slice(0,3).map(product=>(
                           <li>Purchase the {product.name} only at {product.price}Tk </li>
                       ))
                   }
                   <button onClick={viewAll}>View All</button>
               </div>
               :
               <div>
                   {
                        products.map(product=>(
                            <li>Purchase the {product.name} only at {product.price}Tk</li>
                        ))
                    }
                    <button onClick={collapse}>Collapse</button>
               </div>
           } 
        </div>
    );
};

export default Product;
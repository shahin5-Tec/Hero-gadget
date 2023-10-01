import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from '../Cards/ProductCard';

const Shop = () => {
    const productData = useLoaderData();
    // console.log(productData);
    
    return (
      <div className='mx-28  px-4  py-5   md:max-w-full lg:px-8 lg:max-w-screen-xl'>
          <div className='grid md:grid-cols-2 gap-8 lg:grid-cols-3'>
            {
                productData.map(product=><ProductCard
                key={product.id}
                product={product}
                />)
            }
        </div>
      </div>
    );
};

export default Shop;
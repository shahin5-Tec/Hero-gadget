import React from 'react';

const ProductCard = ({product}) => {
    const{id,name,category,price,index,picture}= product;
    return (
        <div className='bg-gray-100 p-6 rounded-md shadow-lg'>
          <img className='rounded object-cover w-full h-56 md:h-64 lg:h-80' src={picture} alt="" />
           <p className='text-xl font-bold my-3 sm:text-2xl'>{name}</p>
           <p className='text-gray-700'>Category:{category}</p>
           <p className='text-gray-700 font-bold'>Price:{price}$</p>
        </div>
    );
};

export default ProductCard;
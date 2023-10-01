import React from "react";

const ProductCard = ({ product,handleAddToCart }) => {
  const { id, name, category, price,  picture } = product;
  return (
    <div className="bg-gray-100 p-6 rounded-md shadow-lg">
      <img
        className="rounded object-cover w-full h-56 md:h-64 lg:h-80"
        src={picture}
        alt=""
      />
      <p className="text-xl font-bold mb-2 sm:text-2xl">{name}</p>
      <p className="text-gray-700">Category:{category}</p>
      <p className="text-gray-700 font-bold">Price:{price}$</p>
      {/* btn-part */}
      <button onClick={()=>handleAddToCart(id)} className="btn-primry w-full ">
            Add To Cart
        </button>
    
    </div>
  );
};

export default ProductCard;

import React, { useState } from 'react';

const ProductsPage = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    // Implement your cart logic here, e.g., dispatching an action to a Redux store or updating local storage
    console.log('Added to cart:', product.name, quantity);
  };

  return (
    <div className="container mx-auto py-16">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img src={product.image} alt={product.name} className="w-full h-auto" />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-600">{product.description}</p>
          <div className="flex items-center mt-4">
            <span className="text-2xl font-bold">GH₵{product.price}</span>
            <div className="flex items-center ml-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-2 rounded"
              >
                -
              </button>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
                className="border border-gray-300 px-2 py-1 rounded"
              />
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-2 rounded"
              >
                +
              </button>
            </div>
          </div>
          <button
            onClick={handleAddToCart}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          >
            Add to Cart ({quantity})
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
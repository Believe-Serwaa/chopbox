import React from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { productId } = useParams(); // Extract the product ID from the URL

  // Dummy data for varieties
  const productVarieties = {
    "hausa-koko": ["Classic", "Spicy", "Unsweetened"],
    koose: ["Mild", "Spicy", "Extra Spicy"],
    pinkaso: ["Original", "With Cinnamon", "Gluten-Free"],
  };

  const varieties = productVarieties[productId] || [];

  return (
    <div className="py-12 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-6">
        Varieties of {productId.replace("-", " ").toUpperCase()}
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {varieties.map((variety, index) => (
          <div
            key={index}
            className="bg-white p-4 shadow rounded-lg w-64 text-center"
          >
            <h3 className="text-lg font-semibold">{variety}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductDetails;

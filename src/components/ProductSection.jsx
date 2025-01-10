import React from "react";
import { useNavigate } from "react-router-dom"; // Import navigation hook
import { motion } from "framer-motion";
import { FaShoppingCart } from "react-icons/fa"; // Import the cart icon
import img1 from "../assets/images/hausa-koko.jpg";
import img2 from "../assets/images/koose.jpg";
import img3 from "../assets/images/pancake.jpg";
import img4 from "../assets/images/toogb3i.jpg";

function ProductSection() {
  const products = [
    { name: "Hausa Koko Powder", price: "GHC 60", img: img1, id: "hausa-koko" },
    { name: "Koose Powder", price: "GHC 25", img: img2, id: "koose" },
    { name: "Pancake Powder", price: "GHC 30", img: img3, id: "pancake" },
    { name: "Toogb3i", price: "GHC 40", img: img4, id: "toogb3i" },
  ];

  const navigate = useNavigate();

  const handleProductClick = (productId) => {
    navigate(`/products/${productId}`); // Redirect to the product details page
  };

  return (
    <div className="py-12 bg-white">
      {/* Animate the section title */}
      <motion.h2
        className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-10"
        
        style={{ fontFamily: "Poppins, sans-serif" }} // Applying the font via inline style
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Our Authentic Products
      </motion.h2>

      {/* Animate the grid of products */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {products.map((product, index) => (
          <motion.div
            key={index}
            className="bg-white p-4 shadow-lg rounded-lg hover:shadow-xl transition cursor-pointer w-full max-w-xs mx-auto"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{
              scale: 1.05, // Increase scale on hover
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)", // Add shadow on hover
              transition: { duration: 0.3 }, // Quick transition for hover
            }}
            transition={{
              duration: 0.8,
              delay: index * 0.2, // Staggered animation for each product
              ease: "easeOut",
            }}
            onClick={() => handleProductClick(product.id)} // Handle click event
          >
            <div className="h-56 w-full overflow-hidden rounded-lg">
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-lg sm:text-xl font-semibold">
                {product.name}
              </h3>
              <p className="text-cyan-600 font-bold">{product.price}</p>
              <button className="mt-4 w-28 sm:w-32 h-10 bg-gradient-to-r from-cyan-400 to-cyan-600 text-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105 flex items-center justify-center">
                <FaShoppingCart className="mr-1 text-lg" />
                Add to Cart
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default ProductSection;

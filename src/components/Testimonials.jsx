import React from "react";
import { motion } from "framer-motion"; // Import motion

function Testimonials() {
  const testimonials = [
    { name: "Ama",     
       text: "The Hausa Koko powder makes my mornings so much better! It's so easy to prepare and tastes amazing!",
    },
    {
      name: "Kwame",
      text: "Nothing beats the freshness of the Pancake Powder! It’s my go-to for a speedy, satisfying breakfast that fuels my day with great taste and energy. A must-have in every home!"
    },
    { name: "Akosua", 
      text: "Toogb3i powder is a game-changer! Now I can enjoy a traditional Ghanaian breakfast without the hassle. Highly recommend it!"
    },
    { name: "Yaw", 
      text: "The Crunchy Peanut & Cashew Butter is absolutely delicious! It’s the perfect spread for my toast, and I love the balance of flavors. It's an essential addition to my breakfast routine!" 
    },
    { name: "Adwoa", 
      text: "Koose powder with Hausa Koko is the perfect combination! It adds a delicious crunch and flavor that makes my breakfast even better. A match made in Chopbox Express!" 
    },
    
  ];

  return (
    <div className="py-12 bg-white">
      {/* Animate the section title to slide in from the left */}
      <motion.h2
        className="text-3xl font-bold text-center mb-6"
        initial={{ x: -100, opacity: 0 }}  // Start from left and invisible
        animate={{ x: 0, opacity: 1 }}    // Slide to position and become visible
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        What Our Customers Say
      </motion.h2>

      {/* Animate the container of testimonials */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-cyan-50 p-6 shadow-lg rounded-lg text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.05, // Scale up on hover for a nice effect
              transition: { duration: 0.3 },
            }}
            transition={{
              delay: index * 0.3, // Stagger the animations for each testimonial
              duration: 0.6,
              ease: "easeOut",
            }}
          >
            <p className="italic text-gray-800">"{testimonial.text}"</p>
            <h3 className="mt-4 text-cyan-800 font-bold">{testimonial.name}</h3>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Testimonials;

import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-b from-yellow-50 to-yellow-200 py-16">
      {/* Navbar */}
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 text-gray-800">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16 relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-yellow-600 mb-6">
            About{" "}
            <span className="underline decoration-wavy decoration-yellow-400">
              Chopbox Express
            </span>
          </h1>
          <p className="text-lg md:text-xl font-medium text-gray-700 leading-relaxed">
            Where tradition meets convenience! Experience authentic Ghanaian
            delicacies crafted with care, designed to fit your busy lifestyle.
          </p>
          <div className="absolute -top-8 left-1/3 w-20 h-20 bg-yellow-300 rounded-full blur-xl opacity-30"></div>
          <div className="absolute -top-8 right-1/3 w-16 h-16 bg-yellow-500 rounded-full blur-2xl opacity-20"></div>
        </motion.div>

        {/* Journey Section */}
        <div className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-yellow-600 mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Since August 2019, Chopbox Express has been a lifeline for
              students far from home, delivering essential provisions. In March
              2020, we pivoted to bring families the authentic taste of Ghanaian
              cuisine with our ready-to-use delicacies, focusing on working
              mothers and busy households.
            </p>
            <motion.div
              className="flex flex-wrap gap-4 justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <span className="px-4 py-2 bg-yellow-500 text-white text-sm font-semibold rounded-full shadow-md">
                Convenience
              </span>
              <span className="px-4 py-2 bg-yellow-600 text-white text-sm font-semibold rounded-full shadow-md">
                Authenticity
              </span>
              <span className="px-4 py-2 bg-yellow-400 text-white text-sm font-semibold rounded-full shadow-md">
                Quality
              </span>
            </motion.div>
          </motion.div>
          <motion.div
            className="relative bg-yellow-50 rounded-lg shadow-lg p-6 overflow-hidden"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-yellow-600 mb-4">
              Our Popular Products
            </h3>
            <ul className="space-y-3">
              {[
                "Hausa Koko Paste",
                "Koose Powder",
                "Pinkaso Powder",
                "Toogbɛi Powder",
              ].map((item, index) => (
                <li
                  key={index}
                  className="text-lg font-medium text-gray-700 flex items-center"
                >
                  <span className="w-4 h-4 bg-yellow-600 rounded-full mr-3"></span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="absolute -top-6 right-6 w-20 h-20 bg-yellow-300 rounded-full blur-xl opacity-30"></div>
          </motion.div>
        </div>

        {/* Mission Section */}
        <motion.div
          className="mb-16 text-center bg-white rounded-lg shadow-lg p-8 relative overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-yellow-600 mb-4">
            Our Mission
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            To enhance the life of working mothers by saving time and delivering
            wholesome meals that make life better.
          </p>
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-40 h-40 bg-yellow-200 rounded-full blur-xl opacity-20"></div>
        </motion.div>

        {/* Vision Section */}
        <motion.div
          className="mb-16 text-center bg-yellow-100 rounded-lg shadow-lg p-8 relative overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-yellow-600 mb-4">
            Our Vision
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            To spread the authentic taste of Ghana across the globe, bringing
            people together through food.
          </p>
          <div className="absolute -top-6 left-6 w-24 h-24 bg-yellow-400 rounded-full blur-2xl opacity-20"></div>
        </motion.div>

        {/* Call-to-Action Section */}
        <motion.div
          className="text-center relative overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-yellow-600 mb-6">
            Join Us on This Journey!
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Discover the joy of traditional Ghanaian meals with Chopbox Express.
            Let’s make every meal a celebration of heritage and flavor.
          </p>
          <button className="px-8 py-4 bg-yellow-600 text-white text-lg font-medium rounded-lg shadow-lg hover:bg-yellow-700 transition-all duration-300">
            Explore More
          </button>
          <div className="absolute -bottom-10 right-10 w-32 h-32 bg-yellow-200 rounded-full blur-2xl opacity-20"></div>
        </motion.div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutUs;

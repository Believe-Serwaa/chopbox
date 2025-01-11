import React from "react";
import { motion } from "framer-motion";
import { ChefHat, Utensils, Clock, Award, Eye, Rocket } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ceoImage from "../assets/images/ceo1.jpg";

function AboutUs() {
  return (
    <div className="bg-cyan-50 min-h-screen text-cyan-900">
      {/* Navbar Component */}
      <Navbar />

      <main className="container mx-auto px-4 py-12 pt-20">
        {/* Hero Section */}
        <motion.section
          className="text-center mb-24 pt-16 md:pt-11" // Updated pt-24 for larger screens
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Taste the <span className="text-cyan-600">Tradition</span>,<br />
            Embrace the <span className="text-cyan-600">Convenience</span>
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            Experience authentic Ghanaian delicacies crafted with care, designed
            to fit your busy lifestyle.
          </p>
        </motion.section>

        {/* Journey Section */}
        <section className="mb-24">
          <h3 className="text-4xl font-bold mb-12 text-center">
            Our Flavorful Journey
          </h3>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <p className="text-lg md:text-xl">
                Since August 2019, Chopbox Express has been a lifeline for
                students far from home, delivering essential provisions. In
                March 2020, we pivoted to bring families the authentic taste of
                Ghanaian cuisine with our ready-to-use delicacies.
              </p>
              <p className="text-lg md:text-xl">
                Our focus? Helping working mothers and busy households savor the
                taste of home without the hassle.
              </p>
            </motion.div>
            <motion.div
              className="bg-white rounded-xl shadow-lg p-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.05 }} // Hover effect to scale up
            >
              <h4 className="text-2xl font-semibold mb-6 text-cyan-600">
                Our Popular Products
              </h4>
              <ul className="space-y-4">
                {[
                  "Hausa Koko Paste",
                  "Koose Powder",
                  "Pinkaso Powder",
                  "Toogbɛi Powder",
                ].map((product, index) => (
                  <li key={index} className="flex items-center text-lg">
                    <Utensils className="text-cyan-600 mr-3 h-6 w-6" />
                    <span>{product}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Mission and Vision Section */}
        <section className="mb-24">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              className="bg-white rounded-xl shadow-lg p-8 relative overflow-hidden"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center mb-6">
                <Rocket className="w-10 h-10 text-cyan-600 mr-4" />
                <h3 className="text-3xl font-bold text-cyan-600">
                  Our Mission
                </h3>
              </div>
              <p className="text-xl mb-4 relative z-10">
                To enhance the life of the working mother to save time in order
                to live better
              </p>
              <Rocket className="absolute bottom-4 right-4 text-cyan-100 w-32 h-32 opacity-20" />
            </motion.div>
            <motion.div
              className="bg-white rounded-xl shadow-lg p-8 relative overflow-hidden"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center mb-6">
                <Eye className="w-10 h-10 text-cyan-600 mr-4" />
                <h3 className="text-3xl font-bold text-cyan-600">Our Vision</h3>
              </div>
              <p className="text-xl mb-4 relative z-10">
                To meet the West African taste across the globe
              </p>
              <Eye className="absolute bottom-4 right-4 text-cyan-100 w-32 h-32 opacity-20" />
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-24">
          <h3 className="text-4xl font-bold mb-12 text-center">
            Meet Our Culinary Maestros
          </h3>
          <div className="grid md:grid-cols-3 gap-12">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              whileHover={{
                translateY: -5, // Slight lift on hover
                scale: 1.03, // Optional subtle zoom effect
              }}
            >
              <div className="w-48 h-48 rounded-full mx-auto mb-6 shadow-lg border-2 border-cyan-600 overflow-hidden">
                <img
                  src={ceoImage}
                  alt="Rahmatu Sai Jimah - CEO"
                  className="w-full h-full object-cover block"
                  width={240}
                  height={240}
                />
              </div>

              <h4 className="text-2xl font-semibold mb-2">Rahmatu Sai Jimah</h4>
              <p className="text-xl text-cyan-600">CEO & Flavor Visionary</p>
            </motion.div>
            {/* Add more team members here */}
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section>
          <h3 className="text-4xl font-bold mb-12 text-center">
            Why Chopbox Express?
          </h3>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <Clock className="w-16 h-16 text-cyan-600" />,
                title: "Time-Saving Convenience",
                description:
                  "Enjoy hassle-free meal preparation with our ready-to-use products.",
              },
              {
                icon: <ChefHat className="w-16 h-16 text-cyan-600" />,
                title: "Authentic Flavors",
                description:
                  "Experience the true taste of Ghanaian cuisine in every bite.",
              },
              {
                icon: <Award className="w-16 h-16 text-cyan-600" />,
                title: "Premium Quality",
                description:
                  "Savor dishes made from high-quality ingredients sourced from trusted suppliers.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex justify-center mb-6">{item.icon}</div>
                <h4 className="text-2xl font-semibold mb-4">{item.title}</h4>
                <p className="text-lg">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}

export default AboutUs;

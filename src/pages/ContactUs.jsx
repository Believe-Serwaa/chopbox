import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ContactUs() {
  return (
    <motion.div className="relative min-h-screen flex flex-col pt-20 sm:pt-24 bg-gradient-to-r from-cyan-100 to-cyan-50">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex-grow flex flex-col items-center py-8 px-4 sm:px-8 relative">
        {/* Header Section */}
        <motion.h1
            className="text-4xl sm:text-5xl pt-6 font-bold text-cyan-700 mb-4 sm:mb-6"

          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Get In Touch With Us
        </motion.h1>
        <p className="text-sm sm:text-lg text-gray-700 mb-8 text-center max-w-2xl">
          Have questions or need assistance? We’re here to help! Reach out to us
          through the form below or using the contact details provided.
        </p>

        <div className="flex flex-col lg:flex-row lg:justify-center w-full max-w-5xl gap-6">
          {/* Contact Form */}
          <motion.div
            className="w-full lg:w-1/2 bg-white shadow-xl rounded-lg p-6 transform hover:scale-105 transition duration-300 ease-in-out"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-xl sm:text-2xl font-semibold text-cyan-700 mb-4">
              Send Us a Message
            </h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-600 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-cyan-200 transition-all duration-300 ease-in-out"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-cyan-200 transition-all duration-300 ease-in-out"
                  placeholder="Your Email Address"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 font-medium mb-2">
                  Message
                </label>
                <textarea
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-cyan-200 transition-all duration-300 ease-in-out"
                  placeholder="Your Message"
                  rows="5"
                  required
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="w-full bg-cyan-700 text-white py-2 rounded-lg hover:bg-cyan-500 transition transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
              >
                Submit
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="w-full lg:w-1/2 bg-white shadow-xl rounded-lg p-6 transform hover:scale-105 transition duration-300 ease-in-out"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-xl sm:text-2xl font-semibold text-cyan-700 mb-4">
              Contact Information
            </h2>
            <p className="text-gray-600 mb-4">
              Feel free to reach out to us through the following channels:
            </p>
            <ul className="text-gray-700 space-y-2">
              <li>
                📍 <strong>Address:</strong> GK-0284-3410, Gbetsile, after Michel Camp, Ghana
              </li>
              <li>
                📞 <strong>Phone:</strong> +233 557001001
              </li>
              <li>
                📧 <strong>Email:</strong>{" "}
                <a
                  href="mailto:support@chopboxexpress.com"
                  className="text-cyan-700 hover:underline transition duration-300 ease-in-out"
                >
                  chopbox.express@gmail.com
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <h3 className="text-lg sm:text-xl font-medium text-cyan-700 mb-2">
                Find Us Here:
              </h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3969.866141602188!2d-0.016536125923694862!3d5.732411831852425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s%20GK-0284-3410%2C%20Gbetsile%2C%20after%20Michel%20Camp%2C%20Ghana.!5e0!3m2!1sen!2sng!4v1736338744028!5m2!1sen!2sng"
                className="w-full h-60 border rounded-lg shadow-md"
                allowFullScreen
                loading="lazy"
                title="Google Maps Location"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </motion.div>
  );
}

export default ContactUs;

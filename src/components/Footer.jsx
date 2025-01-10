import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-cyan-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Company Info */}
          <div>
            <h2 className="text-xl font-bold mb-3">Chopbox Express</h2>
            <p className="text-gray-400 text-sm">
            Bringing the authentic taste of Ghanaian breakfast to your doorstep. Savor the goodness of our easy-to-prepare products for a delightful morning meal.
            </p>
            <div className="flex space-x-3 mt-4">
              <a
                href="https://www.facebook.com/chopboxexpress/"
                className="p-2 bg-cyan-800 rounded-full hover:bg-cyan-700 transition duration-300"
                aria-label="Facebook"
              >
                <FaFacebookF className="text-white text-sm" />
              </a>
              <a
                href="https://twitter.com/chopboxe"
                className="p-2 bg-cyan-800 rounded-full hover:bg-cyan-700 transition duration-300"
                aria-label="Twitter"
              >
                <FaTwitter className="text-white text-sm" />
              </a>
              <a
                href="https://www.instagram.com/chopbox.express/"
                className="p-2 bg-cyan-800 rounded-full hover:bg-cyan-700 transition duration-300"
                aria-label="Instagram"
              >
                <FaInstagram className="text-white text-sm" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-1">
              <li>
                <a href="/" className="hover:text-cyan-200 text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="/store" className="hover:text-cyan-200 text-sm">
                  Products
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-cyan-200 text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-cyan-200 text-sm">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Customer Service</h3>
            <ul className="space-y-1">
              <li>
                <a href="/faq" className="hover:text-cyan-200 text-sm">
                  FAQs
                </a>
              </li>
              <li>
                <a href="/shipping" className="hover:text-cyan-200 text-sm">
                  Shipping & Delivery
                </a>
              </li>
              <li>
                <a href="/returns" className="hover:text-cyan-200 text-sm">
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-cyan-200 text-sm">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Stay Updated</h3>
            <p className="text-gray-400 mb-3 text-sm">
              Subscribe to our newsletter for the latest updates and promotions.
            </p>
            <form>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-l-lg text-gray-900 focus:outline-none text-sm"
                />
                <button
                  type="submit"
                  className="bg-cyan-600 text-white px-4 py-2 rounded-r-lg hover:bg-cyan-700 transition duration-300 text-sm"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        <hr className="border-cyan-700 my-6" />
        <div className="text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Chopbox Express. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState, useEffect } from "react";
import { FaShoppingCart, FaHome, FaBoxOpen, FaUserAlt, FaPhoneAlt, FaSignInAlt, FaRegUserCircle } from "react-icons/fa"; // Importing icons

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false); // Track scrolling

  // Function to handle scroll events
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true); // Set scrolled to true if scroll position is greater than 50px
    } else {
      setScrolled(false); // Reset when scrolled back to top
    }
  };

  // Attach scroll event listener on component mount and cleanup on unmount
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`relative z-10 ${scrolled ? 'bg-cyan-900' : 'bg-cyan-800'} text-white`}>
      <div
        className={`backdrop-blur-md bg-white/10 shadow-lg fixed w-full top-0 transition-all duration-300 ${scrolled ? 'border-b border-cyan-300' : ''}`}
        style={{
          zIndex: 50,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="text-2xl font-bold">
                Chopbox Express
              </a>
            </div>

            {/* Menu Items */}
            <div className="hidden md:flex space-x-6 items-center">
              <a
                href="/"
                className={`flex items-center space-x-2 hover:text-cyan-700 transition-colors duration-300 ${scrolled ? 'text-cyan-500' : 'text-white'}`}
              >
                <FaHome />
                <span>Home</span>
              </a>
              <a
                href="/products"
                className={`flex items-center space-x-2 hover:text-cyan-700 transition-colors duration-300 ${scrolled ? 'text-cyan-500' : 'text-white'}`}
              >
                <FaBoxOpen />
                <span>Products</span>
              </a>
              <a
                href="/about"
                className={`flex items-center space-x-2 hover:text-cyan-700 transition-colors duration-300 ${scrolled ? 'text-cyan-500' : 'text-white'}`}
              >
                <FaRegUserCircle />
                <span>About Us</span>
              </a>
              <a
                href="/contact"
                className={`flex items-center space-x-2 hover:text-cyan-700 transition-colors duration-300 ${scrolled ? 'text-cyan-500' : 'text-white'}`}
              >
                <FaPhoneAlt />
                <span>Contact</span>
              </a>
              <a
                href="/signup"
                className={`flex items-center space-x-2 hover:text-cyan-700 transition-colors duration-300 ${scrolled ? 'text-cyan-500' : 'text-white'}`}
              >
                <FaUserAlt />
                <span>Signup</span>
              </a>
              {/* <a
                href="/login"
                className={`flex items-center space-x-2 hover:text-cyan-300 transition-colors duration-300 ${scrolled ? 'text-cyan-200' : 'text-white'}`}
              >
                <FaSignInAlt />
                <span>Login</span>
              </a> */}
              <a
                href="/cart"
                className={`flex items-center space-x-2 hover:text-cyan-700 relative ${scrolled ? 'text-cyan-500' : 'text-white'}`}
              >
                <FaShoppingCart />
                <span>Cart</span>
                <span className="absolute top-0 right-0 bg-text-white text-xs w-5 h-5 flex justify-center items-center rounded-full">
                  {/* Cart item count here */}
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden px-4 py-2">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white/10 backdrop-blur-md">
            <a
              href="/"
              className="block px-4 py-2 hover:bg-cyan-700 hover:text-cyan-500"
            >
              Home
            </a>
            <a
              href="/products"
              className="block px-4 py-2 hover:bg-cyan-700 hover:text-cyan-500"
            >
              Products
            </a>
            <a
              href="/about"
              className="block px-4 py-2 hover:bg-cyan-700 hover:text-cyan-500"
            >
              About Us
            </a>
            <a
              href="/contact"
              className="block px-4 py-2 hover:bg-cyan-700 hover:text-cyan-500"
            >
              Contact
            </a>
            <a
              href="/signup"
              className="block px-4 py-2 hover:bg-cyan-700 hover:text-cyan-500"
            >
              Signup
            </a>
            {/* <a
              href="/login"
              className="block px-4 py-2 hover:bg-cyan-600 hover:text-cyan-300"
            >
              Login
            </a> */}
            <a
              href="/cart"
              className="block px-4 py-2 hover:bg-cyan-700 hover:text-cyan-500"
            >
              Cart
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

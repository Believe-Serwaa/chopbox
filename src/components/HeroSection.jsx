import { motion } from "framer-motion";
import img1 from "../assets/images/hausa-koko.jpg";

function HeroSection() {
  return (
    <div className="relative bg-yellow-100 h-screen flex flex-col justify-center items-center text-center">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${img1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100%", // Ensure full height is covered

        }}
      />

      {/* RGBA Overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Black with 50% opacity
        }}
      ></div>

      {/* Typewriter Effect Heading */}
      <motion.h1
        className="text-3xl sm:text-4xl lg:text-6xl font-bold text-green-100 relative z-10 typewriter"
        style={{ fontFamily: "Libre Baskerville, serif", paddingBottom: '20px' }} // Applying the font via inline style
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Ghanaian Morning Delights
      </motion.h1>

      {/* Subheading */}
      <motion.p
        className="mt-4 text-sm sm:text-base lg:text-lg text-gray-200 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Bringing tradition to your table, with a modern twist.
      </motion.p>

      {/* Button */}
      <motion.button
        className="mt-6 px-4 sm:px-6 py-2 sm:py-3 bg-cyan-700 text-white text-sm sm:text-base rounded-lg hover:bg-cyan-500 hover:scale-105 transition relative z-10"
        whileHover={{ scale: 1.1 }}
      >
        Shop Now
      </motion.button>

      {/* CSS for Typewriter Animation */}
      <style>
        {`
          .typewriter {
            overflow: hidden;
            white-space: nowrap;
            border-right: 4px solid #82b440; /* Typewriter cursor */
            width: 0;
            animation: typing 6s steps(30, end) forwards;
          }

          @keyframes typing {
            from { width: 0; border-right: 4px solid #82b440; }
            to { width: 100%; border-right: none; } /* Cursor disappears */
          }
        `}
      </style>
    </div>
  );
}

export default HeroSection;

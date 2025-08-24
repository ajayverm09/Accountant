import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const BlogHeader = () => {
  return (
    <section
      className="relative bg-cover bg-center h-48 sm:h-64 md:h-80 lg:h-96 flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/6077430/pexels-photo-6077430.jpeg')",
      }}
    >
      {/* Dark Overlay with animation */}
      <motion.div
        className="absolute inset-0 bg-black/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      ></motion.div>

      {/* Content */}
      <motion.div
        className="relative text-center text-white px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-2">
          Blogs Section
        </h1>
        <p className="text-xs sm:text-sm md:text-base text-gray-300">
          <Link to="/" className="hover:text-blue-500 hover:underline">
            Home
          </Link>
          <span className="mx-2">/</span> Blogs Section
        </p>
      </motion.div>
    </section>
  );
};

export default BlogHeader;

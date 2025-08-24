import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaImage, FaLink } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { blogs } from "./BlogData";

// Animation Variants
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const BlogCard = ({ blog, onImageClick }) => {
  return (
    <motion.div
      className="relative bg-white rounded-xl overflow-hidden shadow-md group flex flex-col justify-between"
      variants={cardVariants}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
    >
      {/* Blog Image */}
      <div className="relative">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Hover Icons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileHover={{ opacity: 1, scale: 1 }}
          className="absolute inset-0 flex items-center justify-center z-10"
        >
          <div className="p-3 flex gap-3">
            {/* View Image */}
            <button
              title="View Image"
              onClick={() => onImageClick(blog.imageFull)}
              className="bg-white text-blue-600 p-3 rounded-full shadow-md hover:bg-blue-600 hover:text-white transition"
            >
              <FaImage />
            </button>

            {/* Blog Link */}
            <Link
              to={`/blogs/${blog.id}`}
              title="Read Blog"
              className="bg-white text-blue-600 p-3 rounded-full shadow-md hover:bg-blue-600 hover:text-white transition"
            >
              <FaLink />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Blog Info */}
      <div className="p-4 flex flex-col h-full">
        <div>
          <div className="flex justify-between items-center mb-2 flex-wrap gap-2">
            <span className="text-sm text-gray-500">{blog.date}</span>
            <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full">
              {blog.category}
            </span>
          </div>
          <h3 className="font-bold text-lg mb-1 text-gray-900 group-hover:text-blue-600 transition-colors">
            {blog.title}
          </h3>
          <p className="text-gray-700 text-sm line-clamp-3">{blog.description}</p>
        </div>

        {/* Read More */}
        <div className="mt-4">
          <Link
            to={`/blogs/${blog.id}`}
            className="inline-block text-sm font-medium text-blue-600 hover:underline"
          >
            Read More →
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

// Blog Section Component
const BlogSection = () => {
  const [modalImage, setModalImage] = useState(null);

  return (
    <>
      {/* Blog Cards Grid */}
      <motion.div
        className="p-4 sm:p-6 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            blog={blog}
            onImageClick={setModalImage}
          />
        ))}
      </motion.div>

      {/* Image Modal */}
      <AnimatePresence>
        {modalImage && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
            onClick={() => setModalImage(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-[95vw] sm:w-auto max-w-3xl max-h-[85vh] p-2"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={modalImage}
                alt="Full View"
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-lg"
              />
              <button
                onClick={() => setModalImage(null)}
                className="absolute top-2 right-2 text-white bg-red-600 hover:bg-red-700 p-2 rounded-full"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default BlogSection;

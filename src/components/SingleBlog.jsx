import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { blogs } from './BlogData';

const SingleBlog = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === id);

  if (!blog) return <div className="p-6 text-red-500">Blog not found!</div>;

  return (
    <div className="max-w-5xl mt-20 mx-auto p-4 sm:p-6 lg:p-8">
      {/* Blog Title */}
      <motion.h1
        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 text-gray-900 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {blog.title}
      </motion.h1>

      {/* Image */}
      <motion.img
        src={blog.imageFull || blog.image}
        alt={blog.title}
        className="w-full h-56 sm:h-72 md:h-96 object-cover rounded-xl mb-6 shadow-lg"
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      />

      {/* Meta Info */}
      <motion.div
        className="text-xs sm:text-sm text-gray-500 mb-4 flex flex-wrap items-center gap-2 justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <span>{blog.date}</span>
        <span className="bg-green-600 text-white px-2 py-1 rounded-full text-xs sm:text-sm">
          {blog.category}
        </span>
      </motion.div>

      {/* Description */}
      <motion.p
        className="text-base sm:text-lg text-gray-700 leading-relaxed mb-10 text-justify"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7 }}
      >
        {blog.description}
      </motion.p>

      {/* Back Button */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        <Link
          to="/blogs"
          className="inline-flex items-center text-white bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-lg transition transform hover:scale-105"
        >
          <FaArrowLeft className="mr-2" /> Back to Blogs
        </Link>
      </motion.div>
    </div>
  );
};

export default SingleBlog;

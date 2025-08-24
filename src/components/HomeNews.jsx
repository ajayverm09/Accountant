import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { MdOutlineArticle } from "react-icons/md";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const newsData = [
  {
    date: "May 18 2022",
    category: "Legal Advice, News",
    title: "The Difference between Legal The body of rules and standards",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a…",
    comments: 0,
    image:
      "https://webstrot.com/attonio/wp-content/uploads/2021/07/team-update-520x410.jpg",
  },
  {
    date: "Apr 20 2022",
    category: "Legal Advice",
    title: "Efficiently Make Your Time Matter Wherever You Go",
    desc: "The point of using That is a Lorem Ipsum is that it has a more-or-less normal. Distracted by the…",
    comments: 0,
    image:
      "https://webstrot.com/attonio/wp-content/uploads/2021/07/testimonial-2-520x410.jpg",
  },
  {
    date: "Feb 19 2022",
    category: "Legal Advice",
    title: "Filing a Claim against a Cruise Ship Contractual Limitations",
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some…",
    comments: 3,
    image: "https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg",
  },
];

const RecentNews = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-2"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Recent News
        </motion.h2>

        <motion.p
          className="text-gray-600 max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Follow our latest news and thoughts which focuses exclusively on
          design, art, vintage, and also our latest work updates.
        </motion.p>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {newsData.map((news, i) => (
            <motion.div
              key={i}
              className="rounded-lg overflow-hidden shadow-md transition-all duration-500 bg-white group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Image */}
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-52 sm:h-60 md:h-48 lg:h-56 object-cover"
              />

              {/* Content */}
              <div className="relative group">
                {/* Gradient Overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-r from-black to-blue-900 
                             translate-x-[-100%] group-hover:translate-x-0 
                             transition-transform duration-500 ease-in-out"
                ></div>

                {/* Inner Content */}
                <div className="relative z-10 bg-blue-50 p-4 sm:p-5 group-hover:bg-transparent transition-colors duration-500">
                  {/* Date + Category */}
                  <div className="flex flex-wrap items-center gap-3 text-sm mb-2">
                    <span className="flex items-center gap-1 text-gray-600 group-hover:text-gray-200 transition-colors">
                      <FaCalendarAlt className="text-blue-600 group-hover:text-white" />{" "}
                      {news.date}
                    </span>
                    <span className="flex items-center gap-1 text-gray-600 group-hover:text-gray-200 transition-colors">
                      <MdOutlineArticle className="text-blue-600 group-hover:text-white" />{" "}
                      {news.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-lg sm:text-xl mb-2 text-gray-900 group-hover:text-white transition-colors cursor-pointer">
                    {news.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm sm:text-base mb-4 group-hover:text-gray-200 transition-colors">
                    {news.desc}
                  </p>

                  {/* Footer */}
                  <div className="flex justify-between items-center text-sm font-medium">
                    <span className="text-gray-700 group-hover:text-gray-300 transition-colors">
                      Comments ({news.comments})
                    </span>
                    <Link to="/blogs/1">
                    <button className="text-blue-600 cursor-pointer group-hover:text-white transition-colors">
                      Read more →
                    </button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentNews;

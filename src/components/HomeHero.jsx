import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-screen">
        
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full h-64 md:h-full"
        >
          <img
            src="https://webstrot.com/attonio/wp-content/uploads/2021/09/banner-left-home2.jpg"
            alt="Team"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="flex flex-col justify-center p-8 sm:p-12 md:p-20 bg-[#E6F2FA] h-full text-center md:text-left"
        >
          <motion.h4
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-blue-500 text-base sm:text-lg font-medium mb-3"
          >
            Need Any Help?
          </motion.h4>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-5 leading-tight"
          >
            We Fight For Right
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="text-gray-600 mb-8 leading-relaxed text-sm sm:text-base md:text-lg"
          >
            Intime is a design studio founded in London and expanded our services, 
            and become a multinational firm, offering solutions Worldwide. 
            Our team have designed game changing products.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <Link to="/contact">
              <button className="px-6 sm:px-8 py-3 sm:py-4 bg-blue-900 text-white rounded-lg hover:bg-blue-700 transition w-full sm:w-fit">
                Contact Us
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

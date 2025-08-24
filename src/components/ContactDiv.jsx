import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ContactDiv = () => {
  return (
    <motion.div
      className="bg-gradient-to-r mb-10 from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white py-12 px-6 md:py-16 md:px-12 text-center md:text-left md:flex justify-between items-center gap-6 rounded-xl mt-10"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Text Section */}
      <motion.div
        className="max-w-3xl"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h3 className="text-2xl md:text-3xl font-bold mb-3">
          Happy To Discuss About Your Requirement
        </h3>
        <p className="text-gray-200 text-sm md:text-base leading-relaxed">
          We understand the needs for professionalism, privacy and
          confidentiality in both our relationship with our customers as well
          as your clients.
        </p>
      </motion.div>

      {/* Button Section */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Link to="/contact">
          <button className="mt-6 md:mt-0 border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-900 transition font-medium">
            Contact Us
          </button>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default ContactDiv;

import React from "react";
import { FaFileInvoiceDollar, FaUserTie, FaChartBar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const services = [
  {
    icon: <FaFileInvoiceDollar size={32} />,
    title: "Insurance Defence",
    desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin.",
  },
  {
    icon: <FaUserTie size={32} />,
    title: "Expert Attorneys",
    desc: "Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words.",
  },
  {
    icon: <FaChartBar size={32} />,
    title: "Financial Law",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking.",
  },
];

const Cards = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative bg-blue-100 p-8 rounded-xl shadow-md overflow-hidden group transition-all duration-500 hover:scale-[1.03]"
          >
            {/* Sliding Dark Overlay */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-black/90 to-blue-900/90 -translate-x-full 
                         group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-10"
            ></div>

            {/* Hover Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
              style={{
                backgroundImage:
                  "url('https://webstrot.com/attonio/wp-content/uploads/2021/02/bg-fcb.png')",
              }}
            ></div>

            {/* Content */}
            <div className="relative z-20">
              <div className="text-blue-600 text-4xl mb-4 group-hover:text-white transition-colors duration-500">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors duration-500">
                {service.title}
              </h3>
              <p className="text-gray-700 mb-4 group-hover:text-gray-200 transition-colors duration-500 text-sm sm:text-base">
                {service.desc}
              </p>
              <Link to="/#">
                <span className="text-sm font-semibold border-b border-black group-hover:border-white group-hover:text-white cursor-pointer transition-colors duration-500">
                  Read More
                </span>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Cards;

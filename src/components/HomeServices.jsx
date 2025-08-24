import React from "react";
import {
  FaCarCrash,
  FaLeaf,
  FaGavel,
  FaUsers,
  FaFileContract,
  FaShieldAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  {
    icon: <FaCarCrash />,
    title: "Traffic Accident",
    desc: "Specialist legal services to support vulnerable road users including motorcyclists, cyclists.",
  },
  {
    icon: <FaFileContract />,
    title: "Property Law",
    desc: "Our attorneys are experienced and highly skilled in all aspects of discovery and trial work.",
  },
  {
    icon: <FaLeaf />,
    title: "Environment",
    desc: "Organically grow the holistic world view of disruptive innovation via workplace diversity.",
  },
  {
    icon: <FaGavel />,
    title: "Civil Litigation",
    desc: "We work together as one firm to serve our clients wherever they need us. We have offices in 25.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Insurance",
    desc: "Our clients share our passion for results and it shows in their success. Companies that.",
  },
  {
    icon: <FaUsers />,
    title: "Family Law",
    desc: "Protect your wealth and ensure you receive a fair settlement. Our expert divorce lawyers will be by your side.",
  },
];

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const Services = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        {/* Main Title */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Services We Provide
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-gray-600 mb-12 max-w-2xl mx-auto"
        >
          We understand the needs for professionalism, privacy and confidentiality
          in both our relationship with our customers as well as your clients.
        </motion.p>

        {/* Cards + Image side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
          {/* Cards Grid */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="flex items-start gap-4 p-5 min-h-[160px] rounded-xl 
                           transition-all duration-300 group bg-white shadow-sm hover:shadow-md"
              >
                {/* Icon wrapper with hover lift + shadow */}
                <div
                  className="relative text-4xl text-gray-500 transition-all duration-300
                             group-hover:text-blue-600 group-hover:-translate-y-2"
                >
                  {service.icon}
                  {/* Shadow ellipse */}
                  <span className="absolute left-1/2 -bottom-2 w-8 h-2 bg-gray-400/40 
                                   rounded-full blur-sm opacity-0 group-hover:opacity-100 
                                   transition-all duration-300 -translate-x-1/2"></span>
                </div>

                {/* Text */}
                <div>
                  <h3
                    className="text-lg font-semibold mb-1 transition-colors duration-300 
                               group-hover:text-blue-600"
                  >
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-snug">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Image with animation */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end"
          >
            <img
              src="https://webstrot.com/attonio/wp-content/uploads/2021/07/banner-right-home2.png"
              alt="Lady Justice"
              className="w-[90%] sm:w-[70%] lg:w-[98%] max-h-[800px] object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;

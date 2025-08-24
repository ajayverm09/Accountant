import React from "react";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  const features = [
    {
      title: "Great Discount",
      desc: "Contrary to popular belief, Lorem Ipsum is not simply.",
    },
    {
      title: "Get Legal Advice",
      desc: "Latin professor at Hampden-Sydney College in Virginia.",
    },
    {
      title: "Community Service",
      desc: "There are many variations of passages of Lorem.",
    },
    {
      title: "Expert Lawyers",
      desc: "It is a long established fact that a reader will be distracted.",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white py-20 overflow-hidden">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-16 px-6"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold">
          Why <span className="text-teal-400">Choose Us</span>
        </h2>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          Scaffid & Associates was founded in 1985 on the simple yet vital
          principle that everyone, regardless of circumstance.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
        {features.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{
              scale: 1.05,
              rotate: 1,
              boxShadow: "0px 10px 25px rgba(20, 184, 166, 0.3)",
            }}
            className="bg-[#1e293b] p-6 rounded-2xl shadow-lg border-t-4 border-teal-400 hover:border-teal-300 transition-all duration-300"
          >
            <h3 className="font-semibold text-xl mb-2 text-teal-300 group-hover:text-teal-400 transition-colors">
              {item.title}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;

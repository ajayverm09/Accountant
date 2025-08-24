import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Daizy Joy",
    role: "Accountant",
    text: "Mike Wilson was great to work with. He set expectations from the beginning and answered my many questions throughout the process. He always took his time to talk to me, and never made me feel like I was being rushed to make a decision. I would absolutely do business with Mike again in the future.",
    image:
      "https://webstrot.com/attonio/wp-content/uploads/2021/07/testimonial-2-520x410.jpg",
  },
  {
    name: "John Smith",
    role: "Business Owner",
    text: "The service was excellent and very professional. The team helped me at every step and made the process stress-free. I highly recommend them to anyone looking for quality service.",
    image:
      "https://webstrot.com/attonio/wp-content/uploads/2021/07/team-update-520x410.jpg",
  },
  {
    name: "Sophia Brown",
    role: "Designer",
    text: "I am beyond impressed with the dedication and effort. Everything was smooth and easy to follow, which gave me confidence in my decisions. Truly a great experience!",
    image:
      "https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg",
  },
];

const TestimonialSlider = () => {
  const [index, setIndex] = useState(0);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6 md:px-12">
        {/* Image Section */}
        <AnimatePresence mode="wait">
          <motion.div
            key={index + "-image"}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <img
              src={testimonials[index].image}
              alt={testimonials[index].name}
              className="w-full max-w-md h-[300px] sm:h-[350px] md:h-[400px] object-cover rounded-lg shadow-lg"
            />
          </motion.div>
        </AnimatePresence>

        {/* Text Section */}
        <div className="text-center md:text-left">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
          >
            What Our Clients Say
          </motion.h2>
          <p className="text-gray-600 mb-4 text-sm md:text-base">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>

          <AnimatePresence mode="wait">
            <motion.div
              key={index + "-text"}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-gray-800 mb-4 italic text-sm sm:text-base md:text-lg">
                {testimonials[index].text}
              </p>
              <h4 className="font-bold text-lg">{testimonials[index].name}</h4>
              <p className="text-blue-600 text-sm">{testimonials[index].role}</p>
            </motion.div>
          </AnimatePresence>

          {/* Pagination Dots */}
          <div className="flex justify-center md:justify-start space-x-3 mt-6">
            {testimonials.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => setIndex(i)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`w-4 h-4 rounded-full transition-all ${
                  index === i ? "bg-blue-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;

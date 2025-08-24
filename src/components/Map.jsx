import React from "react";
import { motion } from "framer-motion";

const Map = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto mt-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="overflow-hidden rounded-lg shadow-lg"
        >
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.204190403533!2d-122.42067968468132!3d37.77851987975747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5ba8f0f1%3A0xb7a650eb3f7f7f!2sAgency%20Building!5e0!3m2!1sen!2sus!4v1692444444444!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="h-[250px] sm:h-[350px] md:h-[450px] filter grayscale hover:grayscale-0 transition duration-500"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default Map;

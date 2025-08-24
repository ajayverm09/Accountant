import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AboutTeam from "./AboutTeam";
import ContactDiv from "./ContactDiv";

const FaqConsultation = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Why should I trust your firm for my case?",
      answer:
        "Choosing a law firm to represent you and your case is one of the most important decisions you can make.",
    },
    {
      question: "What types of cases does your law firm handle?",
      answer: "We handle business law, family law, and criminal law cases.",
    },
    {
      question: "What are your opening hours?",
      answer: "We are open Monday to Friday, 9 AM – 6 PM.",
    },
    {
      question: "Do you charge for consultations?",
      answer: "No, we offer free initial consultations.",
    },
  ];

  return (
    <div className="w-full mt-16">
      <AboutTeam />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-6">
        {/* Left: FAQ */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative bg-cover bg-center text-white rounded-xl overflow-hidden shadow-lg"
          style={{ backgroundImage: "url('/faq-bg.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/95 via-[#1e293b]/90 to-[#0f172a]/95"></div>
          <div className="relative p-6 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-teal-400">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-600 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    className={`w-full flex justify-between items-center px-4 py-3 font-semibold text-left transition-all duration-300 ${
                      openIndex === index
                        ? "bg-teal-500 text-white"
                        : "bg-[#1e293b]/60 hover:bg-[#1e293b]/80 text-gray-200"
                    }`}
                  >
                    {faq.question}
                    <motion.span
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-xl"
                    >
                      +
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="p-4 text-sm bg-[#0f172a]/70 text-gray-200 leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right: Free Consultation */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a] p-6 md:p-10 rounded-xl shadow-lg"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-teal-400">
            Free Consultation
          </h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="p-3 rounded-lg bg-[#0f172a]/80 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
              <input
                type="email"
                placeholder="Email"
                className="p-3 rounded-lg bg-[#0f172a]/80 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
              <input
                type="text"
                placeholder="Phone"
                className="p-3 rounded-lg bg-[#0f172a]/80 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
              <input
                type="text"
                placeholder="Business Law"
                className="p-3 rounded-lg bg-[#0f172a]/80 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
            </div>
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 rounded-lg bg-[#0f172a]/80 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-teal-400 text-[#0f172a] px-6 py-3 rounded-lg font-semibold hover:bg-teal-500 transition"
            >
              Send Your Case
            </motion.button>
          </form>
        </motion.div>
      </div>

      {/* Bottom CTA Section */}
      <ContactDiv />
    </div>
  );
};

export default FaqConsultation;

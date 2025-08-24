import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-12 pb-6 relative overflow-hidden">
      {/* Top Section */}
      <motion.div
        className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.2, duration: 0.6 },
          },
        }}
      >
        {/* Logo + About */}
        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
          <div className="flex items-center mb-4">
            <img
              src="https://webstrot.com/attonio/wp-content/uploads/2022/05/logo-light.png"
              alt="ATTONIO Logo"
              className="h-12 mr-2"
            />
            <span className="text-2xl font-bold tracking-wide">Attonio</span>
          </div>
          <p className="mb-6 text-gray-300 text-sm md:text-base leading-relaxed">
            We aim to lead in each practice and area of law we work in. Coming
            from in-depth understanding.
          </p>
          <div className="flex space-x-3">
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="border border-blue-500 text-blue-500 p-2 rounded hover:bg-blue-500 hover:text-white transition"
              >
                <Icon />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
          <h3 className="text-lg md:text-xl font-semibold mb-4">Contact Info</h3>
          <div className="space-y-2 text-sm md:text-base">
            <div className="flex items-center">
              <FiPhone className="text-blue-500 mr-2" />
              <span>01546 875 655</span>
            </div>
            <div className="flex items-center">
              <FiPhone className="text-blue-500 mr-2" />
              <span>01546 875 656</span>
            </div>
            <div className="flex items-center">
              <FiMail className="text-blue-500 mr-2" />
              <span>info@example.com</span>
            </div>
            <div className="flex items-center">
              <FiMapPin className="text-blue-500 mr-2" />
              <span>132 New York Street NY</span>
            </div>
          </div>
        </motion.div>

        {/* Latest News */}
        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
          <h3 className="text-lg md:text-xl font-semibold mb-4">Latest News</h3>

          <Link
            to="/blogs/1"
            className="flex mb-4 cursor-pointer hover:bg-gray-800/40 p-2 rounded transition"
          >
            <img
              src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=48&h=48"
              alt="news"
              className="w-12 h-12 rounded mr-3 object-cover"
            />
            <div>
              <p className="text-gray-300 text-sm">
                The Difference between Legal The body of rules and standards
              </p>
              <span className="text-xs text-gray-400">May 18, 2022</span>
            </div>
          </Link>

          <Link
            to="/blogs/2"
            className="flex cursor-pointer hover:bg-gray-800/40 p-2 rounded transition"
          >
            <img
              src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=facearea&w=48&h=48"
              alt="news"
              className="w-12 h-12 rounded mr-3 object-cover"
            />
            <div>
              <p className="text-gray-300 text-sm">
                Workloads Are Increasing A Heavy Workload Effectively
              </p>
              <span className="text-xs text-gray-400">Mar 18, 2022</span>
            </div>
          </Link>
        </motion.div>

        {/* Quick Links */}
        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
          <h3 className="text-lg md:text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm md:text-base">
            <li>
              <Link to="/about" className="hover:text-blue-500">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-500">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/blogs" className="hover:text-blue-500">
                Blogs
              </Link>
            </li>
          </ul>
        </motion.div>
      </motion.div>

      {/* Bottom Bar */}
      <motion.div
        className="border-t border-gray-800 mt-10 pt-4 flex flex-col md:flex-row items-center justify-between px-4 max-w-7xl mx-auto gap-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-gray-400 text-xs md:text-sm text-center md:text-left">
          <span className="text-blue-500">© Copyright 2025</span> – All Rights
          Reserved | With love by – Webstrot.
        </div>

        {/* Scroll to top button */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-blue-700 text-white p-2 rounded-full fixed bottom-6 right-6 shadow-lg hover:bg-blue-900 transition"
          aria-label="Scroll to top"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          <svg
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 19V5M12 5L5 12M12 5l7 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.button>
      </motion.div>
    </footer>
  );
}

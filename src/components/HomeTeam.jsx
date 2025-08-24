import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const teamMembers = [
  {
    name: "Wanda Youngs",
    role: "Criminal Lawyer",
    img: "https://webstrot.com/attonio/wp-content/uploads/2021/10/05.jpg",
  },
  {
    name: "Timothy Strong",
    role: "Financial Lawyer",
    img: "https://webstrot.com/attonio/wp-content/uploads/2021/10/03.jpg",
  },
  {
    name: "Linda Frost",
    role: "Family Lawyer",
    img: "https://webstrot.com/attonio/wp-content/uploads/2021/10/04.jpg",
  },
  {
    name: "James Wilson",
    role: "Business Lawyer",
    img: "https://webstrot.com/attonio/wp-content/uploads/2021/07/team-new-1.jpg",
  },
];

const TeamSection = () => {
  return (
    <section className="py-16 bg-gray-200 text-center">
      {/* Heading */}
      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mt-2 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Meet Our Professional Team Members
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        className="text-sm md:text-base uppercase text-gray-600 mt-2 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Lawino has extensive experience across all industries. We bring each
        client a combination of deep industry knowledge
      </motion.p>

      {/* Grid */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6 md:px-12 lg:px-20">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {/* Card */}
            <div className="relative group overflow-hidden rounded-xl shadow-lg transition-transform duration-500 hover:-translate-y-2">
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-80 md:h-96 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Hover Overlay with Socials */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="flex space-x-5 text-white text-xl">
                  <a href="#" className="hover:text-blue-400">
                    <FaFacebookF />
                  </a>
                  <a href="#" className="hover:text-sky-400">
                    <FaTwitter />
                  </a>
                  <a href="#" className="hover:text-blue-600">
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </div>

            {/* Name + Role */}
            <h3 className="mt-4 text-lg md:text-xl font-semibold text-gray-900">
              {member.name}
            </h3>
            <p className="text-sm md:text-base text-gray-600">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;

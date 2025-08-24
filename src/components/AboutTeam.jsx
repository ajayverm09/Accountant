import { motion } from "framer-motion";
import { Scale } from "lucide-react"; // Law scale icon

const MeetOurTeam = () => {
  return (
    <section className="text-center py-16 md:py-20 mb-10 bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a] px-6">
      {/* Icon with lines */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex items-center justify-center gap-4 mb-6"
      >
        {/* Left Line */}
        <div className="h-[2px] bg-teal-400 w-12 md:w-16" />

        {/* Animated Icon */}
        <motion.div
          animate={{ rotateY: 360 }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <Scale className="w-10 h-10 md:w-12 md:h-12 text-teal-400 drop-shadow-lg" />
        </motion.div>

        {/* Right Line */}
        <div className="h-[2px] bg-teal-400 w-12 md:w-16" />
      </motion.div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-2xl md:text-4xl font-bold mb-4 text-teal-400"
      >
        Meet Our Team
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="max-w-2xl mx-auto text-gray-300 text-sm md:text-base leading-relaxed"
      >
        Lawino has extensive experience across all industries. We bring each
        client a combination of deep industry knowledge and fresh perspectives
        to help them succeed.
      </motion.p>
    </section>
  );
};

export default MeetOurTeam;

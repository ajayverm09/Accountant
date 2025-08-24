import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaBalanceScale, FaHandshake, FaUsers } from "react-icons/fa";

const stats = [
  { icon: <FaUser size={30} />, value: 30, label: "Experience" },
  { icon: <FaBalanceScale size={30} />, value: 750, label: "Projects Done" },
  { icon: <FaHandshake size={30} />, value: 53, label: "Co-operate" },
  { icon: <FaUsers size={30} />, value: 15, label: "Customers Winner" },
];

// Counter component
const Counter = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // total animation time (ms)
    const stepTime = Math.max(20, Math.floor(duration / target));

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === target) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [target]);

  return <span>{count}</span>;
};

const StatsSection = () => {
  return (
    <section className="bg-[#1e88e5] py-16 text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center p-6 rounded-lg bg-white/10 backdrop-blur-md shadow-md"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            {/* Icon */}
            <div className="p-4 border border-white rounded-full mb-4 text-white text-3xl bg-white/10">
              {stat.icon}
            </div>

            {/* Counter */}
            <h2 className="text-4xl font-bold">
              <Counter target={stat.value} />+
            </h2>

            {/* Label */}
            <p className="mt-2 text-lg font-medium">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;

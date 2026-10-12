"use client";

import { motion } from "framer-motion";
import { data } from "../../constants";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Services = () => {
  return (
    <section className="relative pb-24 overflow-hidden">
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="main-heading">
            What I <span>Do</span>
          </h2>
        </motion.div>

        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {data.services.map((service) => (
              <motion.div
                key={service.title}
                className="p-8 glass-card flex flex-col gap-4"
                variants={itemVariants}
                whileHover={{ y: -4 }}
              >
                <div
                  className="w-12 h-12 flex items-center justify-center rounded-2xl text-2xl"
                  style={{ background: 'rgba(200, 162, 90, 0.08)', color: 'var(--mainColor)' }}
                >
                  <service.icon />
                </div>
                <h3 className="text-lg font-bold" style={{ fontFamily: 'var(--fontDisplay)', color: 'var(--textColor)' }}>
                  {service.title}
                </h3>
                <p className="text-sm leading-[1.7]" style={{ color: 'var(--textMuted)' }}>
                  {service.text}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {data.stats.map((stat) => (
              <div key={stat.label} className="p-6 glass-card text-center">
                <span className="block text-4xl font-extrabold mb-2 gradient-text" style={{ fontFamily: 'var(--fontDisplay)' }}>
                  {stat.value}
                </span>
                <span className="text-xs uppercase font-bold tracking-wider" style={{ color: 'var(--textMuted)' }}>
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;

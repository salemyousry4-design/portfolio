"use client";

import { motion } from "framer-motion";
import { MdWork } from "react-icons/md";
import { data } from "../../constants";
import { FloatingShapes } from "../../components/legacy/3d";

const Experience = () => {
  return (
    <section className="relative pb-24 overflow-hidden">
      <FloatingShapes preset="code" />

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="main-heading">
            Work <span>Experience</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto px-6 space-y-6">
          {data.experiences.map((exp) => (
            <motion.div
              key={exp.title}
              className="p-8 md:p-10 glass-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-5 mb-6">
                <div
                  className="w-14 h-14 min-w-[56px] flex items-center justify-center rounded-2xl text-2xl text-white"
                  style={{ background: 'var(--gradient)', boxShadow: '0 0 20px rgba(200, 162, 90, 0.3)' }}
                >
                  <MdWork />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
                    <h3 className="text-xl md:text-2xl font-bold" style={{ fontFamily: 'var(--fontDisplay)', color: 'var(--textColor)' }}>
                      {exp.title}
                    </h3>
                    <span className="text-sm font-bold" style={{ color: 'var(--mainColor)' }}>
                      {exp.date}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <span className="text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest" style={{ background: 'var(--mainColorLight)', color: 'var(--bgColor)', opacity: 0.8 }}>
                      {exp.type}
                    </span>
                    <span className="text-[10px] font-bold px-3 py-1 rounded-full border uppercase tracking-widest" style={{ borderColor: 'var(--borderColor)', color: 'var(--textMuted)' }}>
                      {exp.location}
                    </span>
                  </div>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.points.map((point) => (
                  <li key={point} className="text-[15px] leading-[1.7] flex items-start gap-3" style={{ color: 'var(--textMuted)' }}>
                    <span className="mt-2.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: 'var(--mainColor)' }} />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

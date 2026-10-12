"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FloatingShapes } from "../../components/legacy/3d";
import { data } from "../../constants";

const { qualification } = data;

const Qualification = () => {
  const router = useRouter();
  return (
    <section id="qualification" className="relative pb-24 overflow-hidden" style={{ background: 'var(--bgSecondary)' }}>
      <FloatingShapes preset="sparse" />

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="main-heading">
            Tech <span>× Business</span>
          </h2>
        </motion.div>
        
        <div className="max-w-3xl mx-auto px-6">
          <motion.article
            className="p-8 md:p-12 glass-card text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {qualification.paragraphs.map((text, i) => (
              <p
                key={i}
                className={`text-[17px] leading-[1.8] font-medium ${i === qualification.paragraphs.length - 1 ? "mb-10" : "mb-5"}`}
                style={{ color: 'var(--textMuted)' }}
              >
                {text}
              </p>
            ))}

            <button 
              className="custom-button !text-white !border-none !mx-auto shadow-lg shadow-amber-600/20" 
              style={{ background: 'var(--gradient)' }}
              onClick={() => router.push("/About")}
            >
              Learn More About Me
            </button>
          </motion.article>
        </div>
      </div>
    </section>
  );
};

export default Qualification;

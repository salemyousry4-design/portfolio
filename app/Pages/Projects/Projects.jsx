"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { data } from "../../constants";
import { ParticleField } from "../../components/legacy/3d";

const { projects, personalInfo } = data;

const caseStudySteps = [
  { key: "problem", label: "Problem" },
  { key: "approach", label: "Approach" },
  { key: "result", label: "Result" },
];

const Projects = () => {
  return (
    <section className="relative pb-24 pt-40 overflow-hidden min-h-screen">
      <ParticleField />

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="main-heading">
            Case <span>Studies</span>
          </h2>
        </motion.div>

        <div className="max-w-7xl mx-auto px-6">
          {projects.length === 0 ? (
            <motion.div
              className="max-w-2xl mx-auto p-10 glass-card text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-[17px] leading-[1.8] mb-8 font-medium" style={{ color: 'var(--textMuted)' }}>
                Machine learning case studies for the restaurant and F&B sector are in progress:
                demand forecasting, menu basket analysis, and Arabic + English review sentiment.
              </p>
              <Link
                href="/Contact"
                className="custom-button w-fit !text-white !border-none !mx-auto"
                style={{ background: 'var(--gradient)' }}
              >
                Get In Touch
              </Link>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {projects.map((project) => (
                  <motion.div
                    key={project.name}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    className={`glass-card project-card overflow-hidden group flex flex-col ${
                      project.featured ? "border-[var(--mainColor)] border-opacity-30" : ""
                    }`}
                  >
                    {project.img && (
                      <div className="relative aspect-[16/10] overflow-hidden">
                        {project.featured && (
                          <div className="absolute top-3 right-3 z-10 px-3.5 py-1.5 rounded-full text-[10px] font-bold tracking-wider uppercase text-white shadow-lg" style={{ background: 'var(--gradient)' }}>
                            Featured
                          </div>
                        )}
                        <Image
                          src={project.img}
                          alt={project.name}
                          fill
                          className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                    )}

                    <div className="p-6 flex flex-col gap-4 flex-1">
                      <h3 className="text-lg font-bold" style={{ fontFamily: 'var(--fontDisplay)', color: 'var(--textColor)' }}>
                        {project.name}
                      </h3>

                      {caseStudySteps.map(({ key, label }) =>
                        project[key] ? (
                          <div key={key}>
                            <p className="text-[11px] font-bold uppercase tracking-widest mb-1" style={{ color: 'var(--mainColor)' }}>
                              {label}
                            </p>
                            <p className="text-sm leading-[1.7]" style={{ color: 'var(--textMuted)' }}>
                              {project[key]}
                            </p>
                          </div>
                        ) : null
                      )}

                      <div className="flex flex-wrap gap-2 mt-auto pt-2">
                        {project.tech?.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 rounded-md text-[10px] font-bold tracking-wider uppercase border"
                            style={{
                              background: 'rgba(200, 162, 90, 0.08)',
                              borderColor: 'var(--borderColor)',
                              color: 'var(--textMuted)',
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {(project.github || project.website) && (
                        <div className="flex gap-5 pt-2 border-t" style={{ borderColor: 'var(--borderColor)' }}>
                          {project.github && (
                            <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-bold pt-3" style={{ color: 'var(--mainColor)' }}>
                              <FaGithub size={15} /> Code
                            </a>
                          )}
                          {project.website && (
                            <a href={project.website} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-bold pt-3" style={{ color: 'var(--mainColor)' }}>
                              <FaExternalLinkAlt size={13} /> Live Demo
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}

          {projects.length > 0 && personalInfo.github && (
            <div className="text-center mt-12">
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="custom-button gap-2 !border-[var(--borderColor)] !text-[var(--textColor)] hover:!border-[var(--mainColor)] hover:!text-[var(--mainColor)]">
                <FaGithub size={16} /> More on GitHub
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;

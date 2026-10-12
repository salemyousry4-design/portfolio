"use client";

import { motion } from "framer-motion";
import { FaGraduationCap, FaDownload, FaExternalLinkAlt, FaGithub, FaCertificate, FaWhatsapp } from "react-icons/fa";
import { MdLocationOn, MdEmail, MdLanguage, MdWork, MdSchool } from "react-icons/md";
import { data } from "../../constants";
import dynamic from "next/dynamic";

const ParticleField = dynamic(() => import("../../components/legacy/3d/ParticleField"), { ssr: false });

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const { personalInfo, education, certifications } = data;

const infoCards = [
  { icon: MdLocationOn, label: "Location", value: personalInfo.location },
  { icon: FaWhatsapp, label: "WhatsApp", value: personalInfo.phoneDisplay, href: `https://wa.me/${personalInfo.whatsapp}`, external: true },
  { icon: MdEmail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { icon: MdWork, label: "Experience", value: `${personalInfo.experienceYears} Years · F&B Business Dev` },
  { icon: MdSchool, label: "Education", value: `MBA · ${education[0].year}` },
  personalInfo.github
    ? { icon: FaGithub, label: "GitHub", value: "View Profile", href: personalInfo.github, external: true }
    : { icon: FaCertificate, label: "Certification", value: "Machine Learning A-Z", href: certifications[0].file, external: true },
];

const About = () => {
  return (
    <section className="relative py-24 overflow-hidden min-h-screen">
      <ParticleField intensity="light" showRings showStars={false} />

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="main-heading">
            About <span>Me</span>
          </h2>
        </motion.div>

        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="p-10 glass-card text-center mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <h3 className="text-[32px] font-extrabold mb-1" style={{ fontFamily: 'var(--fontDisplay)', color: 'var(--textColor)' }}>{personalInfo.name}</h3>
              <p className="text-[18px] font-semibold" style={{ color: 'var(--mainColor)' }}>{personalInfo.title}</p>
            </div>
            <p className="text-[16px] leading-[1.8] mb-8 max-w-3xl mx-auto" style={{ color: 'var(--textMuted)' }}>
              {personalInfo.bio}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href={personalInfo.cv}
                className="custom-button !text-white !border-none !shadow-[0_8px_30px_rgba(200,162,90,0.3)] gap-2 text-[15px]"
                style={{ background: 'var(--gradient)' }}
                target="_blank"
                rel="noreferrer"
              >
                <FaExternalLinkAlt size={14} /> View CV
              </a>
              <a 
                href={personalInfo.cv} 
                className="custom-button !text-[var(--textColor)] hover:!bg-[var(--glassBg)] hover:!border-[var(--mainColor)] hover:!text-[var(--mainColor)] gap-2 text-[15px]" 
                rel="noreferrer" 
                download
              >
                <FaDownload size={14} /> Download CV
              </a>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {infoCards.map((info, idx) => (
              <motion.div key={idx} className="p-6 rounded-2xl glass-card flex items-center gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(200,162,90,0.08)] group" variants={itemVariants}>
                <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-[rgba(200,162,90,0.08)] text-[22px] transition-transform group-hover:scale-110" style={{ color: 'var(--mainColor)' }}>
                  <info.icon />
                </div>
                <div>
                  <p className="text-[13px] font-bold text-[var(--textMuted)] uppercase tracking-wider mb-0.5">{info.label}</p>
                  {info.href ? (
                    <a href={info.href} target={info.external ? "_blank" : undefined} rel={info.external ? "noreferrer" : undefined} className="text-[15px] font-semibold hover:!text-[var(--mainColor)] transition-colors" style={{ color: 'var(--textColor)' }}>
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-[15px] font-semibold" style={{ color: 'var(--textColor)' }}>{info.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3" style={{ fontFamily: 'var(--fontDisplay)', color: 'var(--textColor)' }}>
                <FaGraduationCap size={24} style={{ color: 'var(--mainColor)' }} /> Education
              </h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    className="p-6 glass-card flex items-start gap-4 transition-all duration-300 hover:translate-x-1"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-3 h-3 min-w-[12px] rounded-full mt-1.5" style={{ background: 'var(--gradient)' }} />
                    <div>
                      <h4 className="text-[17px] font-bold mb-1" style={{ color: 'var(--textColor)' }}>{edu.title}</h4>
                      <p className="text-[14px] font-medium mb-1" style={{ color: 'var(--mainColor)' }}>{edu.institution}</p>
                      {edu.focus && (
                        <p className="text-[14px] mb-3" style={{ color: 'var(--textMuted)' }}>{edu.focus}</p>
                      )}
                      <div className="flex gap-3">
                        {edu.year && (
                          <span className="text-[13px] px-3 py-0.5 rounded bg-[rgba(200,162,90,0.08)] font-medium" style={{ color: 'var(--textMuted)' }}>
                            {edu.year}
                          </span>
                        )}
                        {edu.grade && (
                          <span className="text-[13px] px-3 py-0.5 rounded bg-[rgba(200,162,90,0.08)] font-medium" style={{ color: 'var(--textMuted)' }}>
                            {edu.grade}
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <h3 className="text-2xl font-bold mt-12 mb-8 flex items-center gap-3" style={{ fontFamily: 'var(--fontDisplay)', color: 'var(--textColor)' }}>
                <FaCertificate size={22} style={{ color: 'var(--mainColor)' }} /> Certification
              </h3>
              <div className="space-y-4">
                {certifications.map((cert) => (
                  <div key={cert.credentialId} className="p-6 glass-card flex items-start gap-4">
                    <div className="w-3 h-3 min-w-[12px] rounded-full mt-1.5" style={{ background: 'var(--gradient)' }} />
                    <div>
                      <h4 className="text-[17px] font-bold mb-1" style={{ color: 'var(--textColor)' }}>{cert.title}</h4>
                      <p className="text-[14px] font-medium mb-3" style={{ color: 'var(--mainColor)' }}>{cert.issuer}</p>
                      <div className="flex flex-wrap items-center gap-3">
                        {[cert.date, cert.hours].map((tag) => (
                          <span key={tag} className="text-[13px] px-3 py-0.5 rounded bg-[rgba(200,162,90,0.08)] font-medium" style={{ color: 'var(--textMuted)' }}>
                            {tag}
                          </span>
                        ))}
                        <a href={cert.file} target="_blank" rel="noreferrer" className="text-[13px] font-bold flex items-center gap-1.5" style={{ color: 'var(--mainColor)' }}>
                          View <FaExternalLinkAlt size={11} />
                        </a>
                        <a href={cert.file} download className="text-[13px] font-bold flex items-center gap-1.5" style={{ color: 'var(--mainColor)' }}>
                          Download <FaDownload size={11} />
                        </a>
                        <a href={cert.url} target="_blank" rel="noreferrer" className="text-[13px] font-bold flex items-center gap-1.5" style={{ color: 'var(--textMuted)' }}>
                          Verify on Udemy <FaExternalLinkAlt size={11} />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="lg:col-span-5 space-y-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div>
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3" style={{ fontFamily: 'var(--fontDisplay)', color: 'var(--textColor)' }}>
                  <MdLanguage size={24} style={{ color: 'var(--mainColor)' }} /> Languages
                </h3>
                <div className="space-y-3">
                  {personalInfo.languages.map((lang, index) => (
                    <div key={index} className="p-4 px-6 glass-card flex justify-between items-center">
                      <span className="text-[16px] font-bold" style={{ color: 'var(--textColor)' }}>{lang.name}</span>
                      <span className="text-[14px] font-medium px-4 py-1 rounded-full bg-[rgba(200, 162, 90, 0.08)]" style={{ color: 'var(--mainColor)' }}>{lang.level}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 glass-card bg-amber-600/5">
                <p className="text-[15px] leading-[1.7] italic" style={{ color: 'var(--textMuted)' }}>
                  "A simple model that changes a business decision is worth more
                  than a complex one that stays in a notebook."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

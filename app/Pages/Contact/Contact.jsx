"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaPaperPlane, FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import emailjs from "@emailjs/browser";
import { data } from "../../constants";
import { NetworkScene } from "../../components/legacy/3d";

const { personalInfo, stats } = data;

// Set these in .env.local (see .env.local.example). Until then the form opens the visitor's mail app.
const EMAILJS = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
};
const emailjsReady = Boolean(EMAILJS.serviceId && EMAILJS.templateId && EMAILJS.publicKey);

const contactCards = [
  {
    icon: MdPhone,
    title: "Call Me",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
  },
  {
    icon: MdEmail,
    title: "Email Me",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: FaWhatsapp,
    title: "WhatsApp",
    value: "Chat with me",
    href: `https://wa.me/${personalInfo.whatsapp}`,
  },
  {
    icon: MdLocationOn,
    title: "Location",
    value: personalInfo.location,
    href: null,
  },
];

const Contact = () => {
  const formRef = useRef();
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(null);
  const [sending, setSending] = useState(false);

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      tempErrors.email = "Invalid email format";
    }
    if (!formData.message.trim()) tempErrors.message = "Message is required";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when user types
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      setStatus("error");
      return;
    }

    setSending(true);
    setStatus(null);

    const openMailApp = () => {
      window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
        formData.subject
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
      )}`;
      setSending(false);
      setStatus("success");
      setTimeout(() => setStatus(null), 5000);
    };

    if (!emailjsReady) {
      // FormSubmit: no account needed. The first message sends an activation email to Salem's inbox.
      fetch(`https://formsubmit.co/ajax/${personalInfo.email}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: formData.subject || `New message from ${formData.name}`,
          message: formData.message,
          _template: "table",
          _captcha: "false",
        }),
      })
        .then((res) => (res.ok ? res.json() : Promise.reject(res)))
        .then((json) => {
          if (String(json.success) !== "true") throw json;
          setStatus("success");
          setFormData({ name: "", email: "", subject: "", message: "" });
          setSending(false);
          setTimeout(() => setStatus(null), 5000);
        })
        .catch(openMailApp);
      return;
    }

    emailjs
      .sendForm(EMAILJS.serviceId, EMAILJS.templateId, formRef.current, EMAILJS.publicKey)
      .then(
        () => {
          setStatus("success");
          setFormData({ name: "", email: "", subject: "", message: "" });
          setSending(false);
          setTimeout(() => setStatus(null), 5000);
        },
        // If EmailJS fails, still let the visitor reach Salem through their mail app.
        openMailApp
      );
  };

  return (
    <section className="relative py-24 overflow-hidden min-h-screen">
      <NetworkScene />

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="main-heading">
            Get In <span>Touch</span>
          </h2>
        </motion.div>

        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {contactCards.map((card, index) => (
              <motion.div
                key={index}
                className="p-8 glass-card text-center flex flex-col items-center"
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-500 mb-4 text-2xl">
                  <card.icon />
                </div>
                <h3 className="text-sm font-bold mb-2 uppercase tracking-wider" style={{ color: 'var(--textColor)' }}>{card.title}</h3>
                {card.href ? (
                  <a href={card.href} className="text-sm hover:text-amber-600 transition-colors break-all font-medium" style={{ color: 'var(--textMuted)' }}>
                    {card.value}
                  </a>
                ) : (
                  <p className="text-sm font-medium" style={{ color: 'var(--textMuted)' }}>{card.value}</p>
                )}
              </motion.div>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: 'var(--textColor)' }}>
                Let's Work <span className="gradient-text">Together</span>
              </h3>
              <p className="text-lg leading-relaxed mb-10 max-w-lg font-medium" style={{ color: 'var(--textMuted)' }}>
                Looking for a business-minded ML engineer, or help growing a
                restaurant or F&B business? Feel free to reach out. I'm always
                open to new opportunities and collaborations.
              </p>
              <div className="grid grid-cols-3 gap-6">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex flex-col">
                    <span className="text-3xl font-bold mb-1" style={{ color: 'var(--mainColor)' }}>{stat.value}</span>
                    <span className="text-xs uppercase font-bold tracking-wider" style={{ color: 'var(--textMuted)' }}>{stat.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="p-8 md:p-10 glass-card"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="relative">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      className={`w-full px-6 py-4 rounded-2xl bg-[var(--bgSecondary)] dark:bg-[var(--bgSecondary)] border ${errors.name ? 'border-red-500' : 'border-[var(--borderColor)]'} focus:border-[var(--mainColor)] outline-none transition-all font-bold text-sm`}
                      style={{ color: 'var(--textColor)' }}
                      value={formData.name}
                      onChange={handleInput}
                    />
                    {errors.name && <span className="text-[10px] text-red-500 font-bold mt-1 ml-2 absolute -bottom-4 left-0">{errors.name}</span>}
                  </div>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      className={`w-full px-6 py-4 rounded-2xl bg-[var(--bgSecondary)] dark:bg-[var(--bgSecondary)] border ${errors.email ? 'border-red-500' : 'border-[var(--borderColor)]'} focus:border-[var(--mainColor)] outline-none transition-all font-bold text-sm`}
                      style={{ color: 'var(--textColor)' }}
                      value={formData.email}
                      onChange={handleInput}
                    />
                    {errors.email && <span className="text-[10px] text-red-500 font-bold mt-1 ml-2 absolute -bottom-4 left-0">{errors.email}</span>}
                  </div>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className="w-full px-6 py-4 rounded-2xl bg-[var(--bgSecondary)] border border-[var(--borderColor)] focus:border-[var(--mainColor)] outline-none transition-all font-bold text-sm"
                    style={{ color: 'var(--textColor)' }}
                    value={formData.subject}
                    onChange={handleInput}
                  />
                </div>
                <div className="relative">
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Your Message"
                    className={`w-full px-6 py-4 rounded-2xl bg-[var(--bgSecondary)] dark:bg-[var(--bgSecondary)] border ${errors.message ? 'border-red-500' : 'border-[var(--borderColor)]'} focus:border-[var(--mainColor)] outline-none transition-all font-bold text-sm resize-none`}
                    style={{ color: 'var(--textColor)' }}
                    value={formData.message}
                    onChange={handleInput}
                  />
                  {errors.message && <span className="text-[10px] text-red-500 font-bold mt-1 ml-2 absolute -bottom-4 left-0">{errors.message}</span>}
                </div>

                <button
                  type="submit"
                  className="custom-button !text-white !border-none !w-full !py-4 shadow-lg shadow-amber-600/20 gap-2"
                  style={{ background: 'var(--gradient)' }}
                  disabled={sending}
                >
                  {sending ? (
                    "Sending..."
                  ) : (
                    <>
                      <FaPaperPlane size={14} /> Send Message
                    </>
                  )}
                </button>

                <AnimatePresence>
                  {status === "success" && (
                    <motion.div
                      className="flex items-center gap-2 p-4 rounded-2xl bg-green-500/10 text-green-600 dark:text-green-500 text-sm font-bold"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                    >
                      <FaCheckCircle /> Message sent successfully!
                    </motion.div>
                  )}

                  {status === "error" && !Object.keys(errors).length && (
                    <motion.div
                      className="flex items-center gap-2 p-4 rounded-2xl bg-red-500/10 text-red-600 dark:text-red-500 text-sm font-bold"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                    >
                      <FaExclamationTriangle /> Something went wrong. Please try again.
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

"use client";

import { FaGithub, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { data } from "../../../constants";

const { personalInfo } = data;

const socialLinks = [
  personalInfo.github && {
    href: personalInfo.github,
    icon: FaGithub,
    label: "GitHub",
  },
  {
    href: `https://wa.me/${personalInfo.whatsapp}`,
    icon: FaWhatsapp,
    label: "WhatsApp",
  },
  {
    href: `mailto:${personalInfo.email}`,
    icon: MdEmail,
    label: "Email",
  },
].filter(Boolean);

const Footer = () => (
  <footer className="relative py-12 border-t overflow-hidden" style={{ borderColor: 'var(--borderColor)' }}>
    <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
      <div className="flex gap-6 mb-8">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith('mailto:') ? '_self' : '_blank'}
            rel="noreferrer"
            aria-label={link.label}
            className="w-12 h-12 flex items-center justify-center rounded-2xl transition-all duration-300 border"
            style={{ background: 'var(--bgSecondary)', borderColor: 'var(--borderColor)', color: 'var(--textMuted)' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--mainColor)';
              e.currentTarget.style.color = '#fff';
              e.currentTarget.style.borderColor = 'transparent';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--bgSecondary)';
              e.currentTarget.style.color = 'var(--textMuted)';
              e.currentTarget.style.borderColor = 'var(--borderColor)';
            }}
          >
            <link.icon size={20} />
          </a>
        ))}
      </div>
      
      <div className="w-full max-w-xs h-px bg-gradient-to-r from-transparent to-transparent mb-8" style={{ background: 'linear-gradient(90deg, transparent, var(--borderColor), transparent)' }} />
      
      <p className="text-sm font-bold mb-2" style={{ color: 'var(--textMuted)' }}>
        Made by <span style={{ color: 'var(--mainColor)' }}>{personalInfo.displayName}</span>
      </p>
      <p className="text-xs uppercase tracking-widest font-bold" style={{ color: 'var(--textMuted)', opacity: 0.6 }}>
        &copy; {new Date().getFullYear()} All Rights Reserved
      </p>
    </div>
  </footer>
);

export default Footer;

"use client";

import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Suspense} from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { FaDownload } from "react-icons/fa";
import { data } from "../../constants";
const Scene = dynamic(() => import("./Scene"), { ssr: false });

const { personalInfo, hero, showProjects } = data;

const Landing = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center">
      <div className="absolute inset-0 z-0">
        <Canvas
          camera={{ position: [0, 0, 8], fov: 60 }}
          gl={{ antialias: false, alpha: true }}
          dpr={[1, 1.5]}
        >
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-4 items-center lg:items-start text-center lg:text-start"
          >
            <motion.p
              className="text-lg font-medium tracking-[2px] uppercase mb-0"
              style={{ color: 'var(--mainColor)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {hero.greeting}
            </motion.p>

            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.15] mb-0 gradient-text"
              style={{ fontFamily: 'var(--fontDisplay)' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              {personalInfo.displayName}
            </motion.h1>

            <motion.div
              className="text-2xl md:text-3xl font-semibold min-h-[36px] gradient-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <TypeAnimation
                sequence={hero.roles.flatMap((role) => [role, 2000])}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </motion.div>

            <motion.p
              className="text-base leading-[1.7] max-w-[500px] my-2 font-medium"
              style={{ color: 'var(--textMuted)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              {hero.intro}
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-4 mt-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
            >
              <Link 
                href="/Contact" 
                className="custom-button !text-white !border-none !shadow-[0_8px_30px_rgba(200,162,90,0.3)]"
                style={{ background: 'var(--gradient)' }}
              >
                Get In Touch
              </Link>
              {showProjects ? (
                <Link href="/Projects" className="custom-button !border-[var(--borderColor)] !text-[var(--textColor)] hover:!bg-[var(--glassBg)] hover:!border-[var(--mainColor)] hover:!text-[var(--mainColor)]">
                  View Projects
                </Link>
              ) : (
                <a href={personalInfo.cv} download className="custom-button gap-2 !border-[var(--borderColor)] !text-[var(--textColor)] hover:!bg-[var(--glassBg)] hover:!border-[var(--mainColor)] hover:!text-[var(--mainColor)]">
                  <FaDownload size={14} /> Download CV
                </a>
              )}
            </motion.div>
          </motion.div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative w-[280px] h-[280px] md:w-[380px] md:h-[380px]">
              <div className="profile_ring" />
              <div className="profile_ring profile_ring_2" />
              <div className="profile_glow" />
              <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                <svg
                  viewBox="0 0 480 480"
                  className="w-full h-full drop-shadow-[0_0_30px_rgba(200,162,90,0.2)]"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <clipPath id="blob">
                      <path
                        fill="#474bff"
                        d="M453,295.5Q451,351,398.5,372Q346,393,303,400.5Q260,408,210.5,428.5Q161,449,112.5,422.5Q64,396,42,345Q20,294,20.5,240Q21,186,43.5,136Q66,86,112.5,56Q159,26,211,36.5Q263,47,301,72Q339,97,374,124Q409,151,432,195.5Q455,240,453,295.5Z"
                      />
                    </clipPath>
                  </defs>
                  <image
                    style={{ filter: "opacity(0.95)" }}
                    // Enlarged and shifted so the face sits a bit further left inside the blob.
                    x="-14%"
                    y="0"
                    width="114%"
                    height="114%"
                    clipPath="url(#blob)"
                    href={personalInfo.photo}
                    preserveAspectRatio="xMidYMid slice"
                  />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>

      </div>

      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer opacity-60 hover:opacity-100 transition-all duration-300 group z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        onClick={() => document.getElementById('qualification')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <div className="w-[26px] h-[40px] rounded-full border-2 border-[var(--mainColor)] flex justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-[var(--mainColor)] animate-[scrollWheel_1.5s_ease-in-out_infinite]" />
        </div>
        <span className="text-[10px] font-bold text-[var(--mainColor)] uppercase tracking-[2px]">Scroll Down</span>
      </motion.div>
    </section>
  );
};

export default Landing;

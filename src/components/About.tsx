/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "@/assets/logo.png";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.3,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, type: "spring" } },
};

const imageVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, type: "spring" } },
};

const About = () => {
  return (
    <div className="flex justify-center items-center px-4 py-10 text-white rounded-lg mt-20 sm:mt-36 mb-10">
      <motion.div
        className="flex flex-col md:flex-row justify-between items-center gap-12 w-full max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Text Section */}
        <motion.div className="w-full md:w-1/2" variants={textVariants}>
          <motion.h1
            className="font-bold text-2xl sm:text-3xl"
            variants={textVariants}
          >
            ⚡ About Me
          </motion.h1>
          <motion.p
            className="text-sm sm:text-base mt-4 sm:mt-6 text-[#8F9094]"
            variants={textVariants}
          >
            Hey! I&apos;m Usman Ali, a final-year BCA student at IGNOU, who
            discovered a passion for coding during my early college days. Since
            then, I&apos;ve been growing as a Full Stack Developer with a strong
            focus on practical, real-world development.
            <br />
            <br />
            💼 I work mainly with the MERN stack, Next.js, and Tailwind CSS,
            crafting responsive and user-friendly web applications. My current
            goal is to dive deeper into full stack development and build unique,
            impactful projects.
            <br />
            <br />
            📚 Outside of coding, I am passionate about martial arts and
            motorcycle riding, which help me stay disciplined, focused, and
            energized in both life and work.
          </motion.p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="relative w-[200px] sm:w-[250px] md:w-[300px]"
          variants={imageVariants}
        >
          <Image
            src={logo}
            alt="Logo"
            width={300}
            height={300}
            className="w-full h-auto"
          />
          <img
            alt=""
            src="https://svgsilh.com/svg/26432.svg"
            className="absolute top-[-18px] left-[70%] w-24 sm:w-28 md:w-36 text-white opacity-20 -z-10 pointer-events-none"
            style={{ filter: "invert(0.6)" }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;

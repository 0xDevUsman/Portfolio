"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  return (
    <div className="flex justify-center items-center p-4 text-white w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col mt-20 w-full max-w-7xl px-4 sm:px-8 lg:px-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-3 mb-8"
        >
          <FaGraduationCap className="text-[#3CCF91] text-3xl" />
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            Education
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="p-6 sm:p-8 rounded-xl border border-[#333] shadow-lg"
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-[#3CCF91]">
            Bachelor of Computer Application
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mt-1">
            Indira Gandhi National Open University &nbsp;|&nbsp; 2023–2026
          </p>
          <p className="text-gray-300 mt-4 text-sm sm:text-base leading-relaxed">
            Focused on computer science fundamentals, software development, and
            web technologies. Gained hands-on experience in programming
            languages, database management, and application development.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Education;

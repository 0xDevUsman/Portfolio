"use client";
import React from "react";
import { motion } from "motion/react";

const Navbar = () => {
  return (
    <>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center"
      >
        <div className="flex justify-between w-3/4 items-center p-4 text-white rounded-lg">
          <div className="flex items-center space-x-0.5 leading-none">
            <span className="text-3xl font-semibold text-[#8F9094] align-middle">
              {"{"}
            </span>
            <span className="text-3xl font-bold text-white align-middle">
              {"U"}
            </span>
            <span className="text-3xl font-semibold text-[#8F9094] align-middle">
              {"}"}
            </span>
          </div>

          <div className="flex space-x-2 text-lg font-semibold">
            <span className="cursor-pointer text-base hover:bg-[#141414] rounded-lg px-4 py-2">
              Home
            </span>
            <span className="cursor-pointer text-base hover:bg-[#141414] rounded-lg px-4 py-2">
              Projects
            </span>
          </div>
        </div>
        <div className="h-0.5 w-3/4 bg-[#1E2029] mt-1 rounded-full" />
      </motion.div>
    </>
  );
};

export default Navbar;

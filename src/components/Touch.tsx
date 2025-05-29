"use client";

import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { FaFileAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Touch = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      pushUrl: "https://www.linkedin.com/in/usman-ali-4939ab289/",
    },
    {
      name: "Twitter",
      icon: FaTwitter,
      pushUrl: "https://x.com/g44951_ghost",
    },
    {
      name: "Resume",
      icon: FaFileAlt,
      pushUrl:
        "https://drive.google.com/file/d/1lzj437Vwvi_fPbsIm3vUFgVGe-5Pdm_c/view?usp=drive_link",
    },
  ];

  return (
    <>
      <div className="max-w-5xl flex mt-16 items-center mx-auto justify-center p-4 mb-40">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl font-bold">Keep In Touch</h1>
          <p className="text-center text-[#8F9094] my-8">
            I&apos;m currently specializing in{" "}
            <span className="text-[#3CCF91] font-semibold">
              Full Stack Development.
            </span>{" "}
            <br /> Feel free to get in touch and talk more about your projects.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex gap-6 items-center ml-auto mt-6 flex-wrap"
          >
            {socialLinks.map(({ name, pushUrl, icon }) => (
              <Link href={pushUrl} target="_blank" key={name}>
                <motion.button
                  whileHover={{
                    transition: { duration: 0.1, ease: "easeOut" },
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0, duration: 0.1 }}
                  className="bg-[#141414] hover:bg-[#292929] px-4 py-2 cursor-pointer font-bold rounded-md text-center flex gap-2 items-center transition-all"
                >
                  {icon &&
                    React.createElement(icon, {
                      className: "w-[16px] h-[16px] text-[#3CCF91]",
                    })}
                  {name}
                </motion.button>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Touch;

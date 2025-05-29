/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { PiCertificateFill } from "react-icons/pi";
const Para1 = () => {
  const socialLinks = [
    {
      name: "Github",
      icon: FaGithub,
      pushUrl: "https://github.com/0xDevUsman",
    },
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
      name: "Certificate",
      icon: PiCertificateFill,
      pushUrl:
        "https://drive.google.com/file/d/1DVumwH71S4uuxS6aoI5hbeR5xo_Icb0s/view?usp=drive_link",
    },
  ];

  return (
    <>
      <div className="flex justify-center items-center p-4 text-white ">
        <motion.div className="flex mt-20 w-3/4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl font-semibold text-[#3CCF91]"
            >
              <img
                alt=""
                src="https://svgsilh.com/svg/26432.svg"
                className="absolute top-[-20] left-[-30] w-36 text-white opacity-20  -z-10 pointer-events-none mr-2"
                style={{ filter: "invert(0.6)" }}
              ></img>
              Hey there, I&apos;m-
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-8xl font-bold text-white"
            >
              Usman Ali.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-3xl font-semibold mt-6 text-[#8F9094]"
            >
              <span className="text-white">Software Developer.</span> A
              self-taught developer with an <br /> interest in Coding.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-xl  mt-10 text-[#8F9094]"
            >
              🚀 Specialized in Next js, React js, Node js, Express, Mongodb,
              Tailwind Css, Typescript
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex gap-6 items-center ml-auto mt-16 flex-wrap"
            >
              {socialLinks.map(({ name, icon, pushUrl }) => (
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
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Para1;

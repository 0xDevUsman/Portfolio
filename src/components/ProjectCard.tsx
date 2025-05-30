"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface projects {
  image: string | StaticImageData;
  title: string;
  github: string;
  live: string;
  stack: string[];
  description: string;
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const ProjectCard = ({
  image,
  title,
  github,
  live,
  stack,
  description,
}: projects) => {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ scale: 1.02 }}
      className="max-w-md bg-[#080808] flex flex-col items-center rounded-lg shadow-sm"
    >
      <div>
        {image ? (
          <Image
            className="rounded-t-lg"
            src={image}
            alt="Project Image"
            style={{ objectFit: "cover" }}
          />
        ) : null}
        <motion.div className="p-5">
          <motion.div className="flex items-center justify-between mb-4">
            <motion.h5 className="mb-2 text-2xl font-bold text-white">
              {title}
            </motion.h5>
            <motion.div className="flex gap-4">
              {github ? (
                <Link href={github} target="_blank">
                  <motion.svg
                    whileHover={{ scale: 1.2 }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="white"
                    className="cursor-pointer"
                  >
                    <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.6.113.793-.258.793-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.729.083-.729   1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.335-5.466-5.933   0-1.312.468-2.383 1.236-3.222-.124-.303-.536-1.527.117-3.176 0 0 1.008-.322 3.3 1.23a11.48 11.48 0 0 1 3.003-.404c1.02.005   2.047.138 3.003.404 2.29-1.552 3.296-1.23 3.296-1.23.655 1.649.243 2.873.12 3.176.77.84 1.233 1.91   1.233 3.222 0 4.61-2.804 5.625-5.475 5.921.43.372.823 1.103.823 2.222 0 1.606-.015 2.896-.015   3.286 0 .321.192.694.8.576C20.565 21.796 24 17.299 24 12c0-6.627-5.373-12-12-12z" />
                  </motion.svg>
                </Link>
              ) : null}
              <Link href={live} target="_blank">
                <motion.svg
                  whileHover={{ scale: 1.2 }}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  width={20}
                  height={20}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </motion.svg>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div className="flex flex-wrap gap-2 mb-6">
            {stack.map((tech, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.05 }}
                className="inline-flex cursor-default items-center px-3 py-1 rounded-md text-sm font-medium bg-[#2B2C2E] text-white"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
          <motion.p className="mb-3 font-normal text-sm text-white">
            {description}
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

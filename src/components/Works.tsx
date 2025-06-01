"use client";
import React from "react";
import Link from "next/link";
import ProjectCard from "./ProjectCard";
import project1 from "@/assets/project1.png";
import project2 from "@/assets/project2.png";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Works = () => {
  const projects = [
    {
      image: project1,
      title: "CareerFlow",
      github: "https://github.com/0xDevUsman/Job-Board-Portal.git",
      live: "https://job-board-portal-nu.vercel.app/",
      stack: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "NextAuth.js",
        "MongoDB",
        "Vercel",
      ],
      description:
        "CareerFlow is a full-stack web app that connects job seekers and recruiters with role-based login, job posting, application tracking, and real-time profile updates. It streamlines the hiring and job search process efficiently.",
    },
    {
      image: project2,
      title: "Tech Haven",
      github: "https://github.com/0xDevUsman/ecommerce-app.git",
      live: "https://tech-haven-app.vercel.app/",
      stack: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "JWT",
        "MongoDB",
        "Vercel",
      ],
      description:
        "Tech Haven is a full-stack e-commerce app for browsing and purchasing tech products, featuring secure login, a shopping cart, and order tracking. It delivers a smooth and responsive user experience.",
    },
  ];

  return (
    <motion.div
      className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <motion.div className="max-w-6xl w-full flex flex-col items-center mx-auto">
        {/* Header */}
        <motion.div className="mb-10 sm:mb-12 text-center">
          <motion.h1 className="text-3xl sm:text-4xl font-bold">
            All Creative Works.
          </motion.h1>
          <motion.p className="text-sm sm:text-lg text-[#8F9094] mb-6">
            Here&apos;s some of my projects that I have worked on.
          </motion.p>
          <Link
            href="/projects"
            className="inline-flex cursor-pointer text-sm sm:text-base text-[#3CCF91] hover:bg-[#141414] rounded-lg px-4 py-2 font-semibold transition-all"
          >
            Explore more →
          </Link>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-16 lg:gap-20 w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionVariants}
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Works;

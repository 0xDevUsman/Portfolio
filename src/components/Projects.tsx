"use client";

import React from "react";
import project1 from "@/assets/project1.png";
import project2 from "@/assets/project2.png";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Projects = () => {
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
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="min-h-screen flex justify-center py-12 px-4 sm:px-6 lg:px-8 text-white my-10"
    >
      <div className="max-w-6xl w-full mx-auto">
        {/* Header Section */}
        <motion.header variants={cardVariants} className="mb-12 text-start">
          <h1 className="text-6xl font-bold mb-4">Projects</h1>
          <p className="text-gray-200 max-w-3xl">
            I love building projects and practicing my skills. Here&apos;s an
            archive of things that I&apos;ve worked on.
          </p>
        </motion.header>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-16"
        >
          {projects.map((project, index) => (
            <motion.article
              key={index}
              variants={cardVariants}
              className="w-full"
            >
              <ProjectCard
                image={project.image}
                title={project.title}
                github={project.github}
                live={project.live}
                stack={project.stack}
                description={project.description}
              />
            </motion.article>
          ))}
        </motion.div>

        {/* Coming Soon */}
        <motion.h2
          className="text-center mt-16 text-4xl font-bold text-[#3CCF91]"
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          More Coming Soon...
        </motion.h2>
      </div>
    </motion.section>
  );
};

export default Projects;

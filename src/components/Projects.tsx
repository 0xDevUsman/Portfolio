"use client";

import React from "react";
import project1 from "@/assets/project1.png";
import project2 from "@/assets/project2.png";
import project3 from "@/assets/Project3.png";
import AiProject1 from "@/assets/AiProject1.png";
import AiProject2 from "@/assets/AiProject2.png";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import { IoMdAlert } from "react-icons/io";

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
    {
      image: project3,
      title: "CVNinja",
      github: "https://github.com/0xDevUsman/AI-Resume-Optimizer.git",
      live: "https://cvninja.vercel.app/",
      stack: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "ShadCN UI",
        "NextAuth.js",
        "OpenAI API",
        "pdf-lib",
        "MongoDB",
        "Mongoose",
        "Zod",
        "Vercel",
      ],
      description:
        "CVNinja is a full-stack AI-powered web app that helps users enhance their resumes with intelligent suggestions. Users can upload their resumes to receive keyword, formatting, and content improvements powered by OpenAI. Built with Next.js and MongoDB, CVNinja offers a smooth, secure, and responsive user experience.",
    },
  ];

  const AIProjects = [
    {
      image: AiProject1,
      title: "Urbanthreadz",
      github: "https://github.com/0xDevUsman/Urbanthreadz-Ecommerce.git",
      live: "https://urbanthreadz.vercel.app/",
      stack: [
        "v0.dev (Vercel AI UI generator)",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Vercel",
      ],
      description:
        "AI-powered fashion e-commerce store built with Vercel's v0.dev. Seamless UI, smart design — shop fashion effortlessly.",
    },
    {
      image: AiProject2,
      title: "Form Wizard UI",
      github: "https://github.com/0xDevUsman/Multi-Step-Form-Wizard.git",
      live: "https://formwizardui.vercel.app/step/1",
      stack: [
        "v0.dev (Vercel AI UI generator)",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Vercel",
      ],
      description:
        "A sleek, responsive multi-step form wizard that breaks down long forms into simple, manageable steps with validation, animated transitions, and a final review page.",
    },
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="min-h-screen flex justify-center py-16 px-6 sm:px-12 lg:px-20 text-white my-10"
    >
      <div className="max-w-7xl w-full mx-auto">
        {/* Header Section */}
        <motion.header variants={cardVariants} className="mb-14 text-start">
          <h1 className="text-6xl font-extrabold mb-5 tracking-wide">
            Projects
          </h1>
          <p className="text-gray-300 max-w-3xl text-lg leading-relaxed">
            I love building projects and practicing my skills. Here&apos;s an
            archive of things that I&apos;ve worked on.
          </p>
        </motion.header>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          {projects.map((project, index) => (
            <motion.article
              key={index}
              variants={cardVariants}
              className="w-full rounded-lg  shadow-lg hover:shadow-2xl transition-shadow duration-300"
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

        {/* Separator */}
        <hr className="my-16 border-[#1E2029]" />

        <motion.header variants={cardVariants} className="mb-10 text-start">
          <h2 className="text-4xl font-bold mb-3 tracking-wide">
            AI-Built Frontend Projects 🤖⚡
          </h2>
          <p className="text-gray-300 text-md leading-relaxed">
            Crafted using cutting-edge AI tools for sleek design, fast
            development, and pixel-perfect UIs.
          </p>

          <div
            role="alert"
            className="mt-6 p-4 border-l-4 border-red-500 bg-red-900/10 rounded-r-lg"
          >
            <div className="flex items-start gap-3">
              <IoMdAlert className="w-5 h-5 mt-0.5 text-red-400 flex-shrink-0" />
              <div className="text-sm text-red-200 leading-relaxed">
                <span className="font-semibold text-red-100">Note:</span> AI
                acts as a productivity assistant — all logic, structure, and
                functionality are written or refined manually. I code every
                project with performance, maintainability, and real-world use in
                mind.
              </div>
            </div>
          </div>
        </motion.header>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          {AIProjects.map((project, index) => (
            <motion.article
              key={index}
              variants={cardVariants}
              className="w-full rounded-lg bg-[#1e293b] shadow-lg hover:shadow-2xl transition-shadow duration-300"
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

        <motion.h2
          className="text-center mt-20 text-4xl font-extrabold text-[#3CCF91]"
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 3,
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

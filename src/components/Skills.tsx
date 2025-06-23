"use client";
import React from "react";
import { motion } from "framer-motion";

// Skill badge with hover/tap animation
const SkillBadge = ({ skill }: { skill: string }) => (
  <motion.span
    whileHover={{ scale: 1.08 }}
    whileTap={{ scale: 0.95 }}
    className="inline-flex items-center m-1 px-4 py-2 rounded-xl text-sm sm:text-base font-medium bg-[#1f1f1f] text-gray-200 border border-[#333] shadow transition-transform"
  >
    {skill}
  </motion.span>
);

const Skills = () => {
  const frontendskills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "Responsive Design",
  ];

  const backendskills = ["Node.js", "Express.js", "MongoDB", "NextAuth", "JWT"];

  const devtools = [
    "Git",
    "GitHub",
    "Postman",
    "VS Code",
    "Vercel",
    "MongoDB Compass",
  ];

  const aiTools = [
    "ChatGPT",
    "GitHub Copilot",
    "DeepSeek AI",
    "v0.dev (Vercel AI UI generator)",
  ];

  // Animation delay helper
  const delay = (index: number) => 0.3 + index * 0.1;

  return (
    <div className="py-16 px-4 sm:px-8 lg:px-20 text-white w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto w-full"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl sm:text-4xl font-extrabold mb-10 text-white"
        >
          👨‍💻 Skills & Tools
        </motion.h2>

        {/* Section Template */}
        {[
          { title: "Frontend", items: frontendskills },
          { title: "Backend", items: backendskills },
          { title: "Dev Tools", items: devtools },
          {
            title: "⚡AI-Powered Productivity",
            items: aiTools,
            description:
              "I utilize cutting-edge AI tools to speed up development, enhance UI/UX, and optimize project workflows.",
          },
        ].map(({ title, items, description }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: delay(i) }}
            className="mb-10"
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-[#3CCF91]">
              {title}
            </h3>
            {description && (
              <p className="text-gray-400 mb-3 text-sm sm:text-base max-w-2xl">
                {description}
              </p>
            )}
            <div className="flex flex-wrap gap-2 sm:gap-3 cursor-default">
              {items.map((skill) => (
                <SkillBadge key={skill} skill={skill} />
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;

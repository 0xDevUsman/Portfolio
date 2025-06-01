"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle menu open state
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  // Common link style for desktop and mobile
  const linkClass =
    "cursor-pointer text-base hover:bg-[#141414] rounded-lg px-4 py-2";

  return (
    <>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center"
      >
        <div className="flex justify-between w-3/4 items-center p-4 text-white rounded-lg">
          {/* Logo */}
          <div
            onClick={() => {
              router.push("/");
              setMenuOpen(false); // Close menu on logo click
            }}
            className="flex items-center cursor-pointer space-x-0.5 leading-none"
          >
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

          {/* Desktop links */}
          <div className="hidden md:flex space-x-2 text-lg font-semibold">
            <span
              onClick={() => router.push("/")}
              className={linkClass}
            >
              Home
            </span>
            <span
              onClick={() => router.push("/projects")}
              className={linkClass}
            >
              Projects
            </span>
          </div>

          {/* Hamburger button for mobile */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="block h-0.5 w-6 bg-white rounded"
              transition={{ duration: 0.3 }}
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block h-0.5 w-6 bg-white rounded"
              transition={{ duration: 0.3 }}
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="block h-0.5 w-6 bg-white rounded"
              transition={{ duration: 0.3 }}
            />
          </button>
        </div>

        {/* Divider line */}
        <div className="h-0.5 w-3/4 bg-[#1E2029] mt-1 rounded-full" />

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden w-3/4 flex flex-col bg-[#141414] rounded-lg mt-2"
            >
              <span
                onClick={() => {
                  router.push("/");
                  setMenuOpen(false);
                }}
                className={`${linkClass} border-b border-[#292929]`}
              >
                Home
              </span>
              <span
                onClick={() => {
                  router.push("/projects");
                  setMenuOpen(false);
                }}
                className={linkClass}
              >
                Projects
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default Navbar;

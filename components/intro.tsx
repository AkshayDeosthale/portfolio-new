"use client";

import { useActiveSectionContext } from "@/context/active-section-context";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { FaEnvelope } from "react-icons/fa";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[60rem] text-center sm:mb-0 scroll-mt-[100rem] mx-auto py-16"
    >
      {/* Profile Image with Animation */}
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 80,
              duration: 0.5,
            }}
            className="rounded-full p-1 bg-gradient-to-r from-blue-500 to-purple-600"
          >
            <div className="rounded-full p-1 bg-white dark:bg-gray-900">
              <Image
                src="/akshay.jpg"
                alt="Akshay portrait"
                width="192"
                height="192"
                quality="95"
                priority={true}
                className="h-40 w-40 rounded-full object-cover shadow-lg"
              />
            </div>
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-5xl"
            initial={{ opacity: 0, scale: 0, rotate: -45 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.3,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      {/* Introduction Text */}
      <motion.div
        className="mt-8 space-y-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
       <h1 className="text-4xl md:text-5xl font-bold animated-gradient-text">
  Hello, I'm Akshay
</h1>
        
        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          A <span className="font-bold">full-stack developer</span> with{" "}
          <span className="font-bold">over 6 years</span> of experience building{" "}
          <span className="italic">sites & apps</span>.
        </p>
        
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Specializing in <span className="px-2 py-1 rounded-md bg-blue-100 dark:bg-blue-900/30 font-semibold">MERN Stack</span> and{" "}
          <span className="px-2 py-1 rounded-md bg-orange-100 dark:bg-orange-900/30 font-semibold">Rust</span> development
        </p>
      </motion.div>

      {/* Action Buttons */}
      <motion.div 
        className="mt-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="flex flex-wrap justify-center gap-4">
          {/* Contact Button */}
          <Link
            href="#contact"
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
            className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 rounded-full text-white font-medium shadow-lg hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              <FaEnvelope className="text-lg" />
              Contact Me
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>

          {/* Download CV Button */}
          <a 
            href="/CV.pdf" 
            download
            className="group relative inline-flex items-center gap-2 bg-white dark:bg-gray-800 px-6 py-3 rounded-full text-gray-800 dark:text-white font-medium border border-gray-300 dark:border-gray-700 shadow-md hover:shadow-lg transform transition-all duration-300 hover:-translate-y-1"
          >
            <span className="relative z-10 flex items-center gap-2">
              <HiDownload className="text-lg" />
              Download CV
            </span>
            <span className="absolute inset-0 bg-gray-100 dark:bg-gray-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
          </a>

          {/* Social Icons */}
          <div className="flex gap-3 ml-1">
            <a
              href="https://www.linkedin.com/in/akshay-deosthale/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white dark:bg-gray-800 p-3 rounded-full border border-gray-300 dark:border-gray-700 shadow-md hover:shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 dark:hover:border-blue-400"
            >
              <BsLinkedin className="text-xl text-blue-600 dark:text-blue-400" />
            </a>
            
            <a
              href="https://github.com/AkshayDeosthale"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white dark:bg-gray-800 p-3 rounded-full border border-gray-300 dark:border-gray-700 shadow-md hover:shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:border-gray-700 dark:hover:border-gray-400"
            >
              <FaGithubSquare className="text-xl text-gray-800 dark:text-white" />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Background Element - Decorative */}
      <div className="absolute top-[20%] -z-10 left-[50%] transform -translate-x-1/2 w-full max-w-6xl">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/10 dark:to-purple-950/10 blur-3xl rounded-full opacity-70"></div>
      </div>
    </section>
  );
}
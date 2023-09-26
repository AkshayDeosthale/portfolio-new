"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Welcome to my portfolio! Here, you'll find a showcase of my work and
        projects that I have completed throughout my career. With a passion for
        Full-stack Development, I am committed to delivering high-quality
        results that exceed expectations. From Frontend and Backend
        Technologies, to Fullstack Application, I am confident in my ability to
        tackle any challenge and deliver exceptional results. Thank you for
        taking the time to view my portfolio, and I look forward to the
        opportunity to work with you.
      </p>
    </motion.section>
  );
}

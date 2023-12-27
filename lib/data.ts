import timetrack from "@/public/thumbnails/client.webp";
import medium from "@/public/thumbnails/medium.webp";
import school from "@/public/thumbnails/school.webp";
import task_manage from "@/public/thumbnails/task-manage.png";
import DIS from "@/public/thumbnails/DIS.png";

import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Computer Technology",
    location: "Maharashtra, India",
    description:
      "After graduating, I underwent a year-long intensive training in cybersecurity.",
    icon: React.createElement(LuGraduationCap),
    date: "2018",
  },
  {
    title: "Full-Stack Developer as Sophos",
    location: "Ahmedabad, India",
    description:
      "I served as a Full-Stack Developer in a Technical Support role at Sophos, where I delved into cybersecurity practices, learning how to integrate them with Node to craft secure applications for our clients.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2022",
  },
  {
    title: "Software Engineer at ThinkWik",
    location: "Ahmedabad, India",
    description:
      "At ThinkWik, I served as a Full-Stack Developer, where I specialized in NextJS to develop NFT marketplaces and also honed my skills in implementing sockets with Node.js.",
    icon: React.createElement(FaReact),
    date: "2022 - 2023",
  },
  {
    title: "Full-Stack Developer at Miraki Technologies",
    location: "Hyderabad, India",
    description:
      "At Miraki Technologies, I am currently serving as a Full-Stack Developer, focusing on projects involving Next.js, React.js, Nest.js, Express.js, and microservices.",
    icon: React.createElement(FaReact),
    date: "2023 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Bright Children Montessori Academy",
    description:
      "I served as a full-stack developer for a prominent Canadian school's website, contributing my expertise on a freelance basis.",
    tags: ["TypeScript", "Next.js", "PostgresSQL", "Tailwind", "Strapi"],
    imageUrl: school,
  },
  {
    title: "Medium Blog clone",
    description:
      "A streamlined Medium clone, merging effortless content creation with a curated reading journey for contemporary digital storytellers.",
    tags: ["TypeScript", "Next.js", "Tailwind", "Redux", "Sanity.IO"],
    imageUrl: medium,
  },
  {
    title: "TimeTrak Scheduling Software",
    description:
      "A sleek web application for optimized commercial tracking, boosting productivity and efficiency in all business operations.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: timetrack,
  },
  {
    title: "Delhi International School",
    description:
      "Crafted DIS website using Next.js, Nest.js, and CSS, blending modern frontend design with a robust backend for an immersive user experience.",
    tags: ["Next.js", "NestJS"],
    imageUrl: DIS,
  },
  {
    title: "Issue Management System",
    description:
      "Web application to track projects an its issues, issue can be created searched deleted or marked as completed",
    tags: ["React", "Next.js", "Tailwind", "Framer", "Server Actions", "SSR"],
    imageUrl: task_manage,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Nest.JS",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
] as const;

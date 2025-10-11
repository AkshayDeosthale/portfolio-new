import DIS from "@/public/thumbnails/DIS.png";
import gigma from "@/public/thumbnails/gigma.png";
import medium from "@/public/thumbnails/medium.webp";
import school from "@/public/thumbnails/school.webp";
import summa from "@/public/thumbnails/summa.png";
import voom from "@/public/thumbnails/yoom.png";
import microauth from "@/public/thumbnails/microauth.png";
import safecred from "@/public/thumbnails/safecred.png";
import visio from "@/public/thumbnails/visio.png";

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
      "Rocked it as a Full-Stack Developer at Sophos, where I got to be a cybersecurity superhero! 🛡️ Mastered the art of building fortress-like Node applications while keeping our clients' data safer than Fort Knox.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2022",
  },
  {
    title: "Software Engineer at ThinkWik",
    location: "Ahmedabad, India",
    description:
      "Leveled up at ThinkWik as a Full-Stack Developer, where I crafted cutting-edge NFT marketplaces with NextJS and orchestrated real-time magic using Node.js sockets. Built digital marketplaces that made crypto collectors' dreams come true! 🚀✨",
    icon: React.createElement(FaReact),
    date: "2022 - 2023",
  },
  {
    title: "Full-Stack Lead at Miraki Technologies",
    location: "Hyderabad, India",
    description:
      "Leading the charge at Miraki Technologies, where I orchestrate full-stack symphonies with Next.js, React.js, Nest.js, and Express.js! 🚀 Architecting robust microservices while keeping things scalable and snappy. Building tomorrow's tech solutions with today's best practices! ✨",
    icon: React.createElement(FaReact),
    date: "2023 - 2024",
  },
  {
    title: "Full-Stack Blockchain Lead / Project Architect at GrowthAXL",
    location: "Hyderabad, India",
    description:
      "All the fun things as before plus Blockchain, Azure devOps and RUST. Team lead and a project architect",
    icon: React.createElement(FaReact),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Visio AI",
    description:
      "AI image and video generation platform",
    tags: [
      "Fal.AI",
      "Next.js", 
      "MongoDB",
      "TS",
      "TailwindCSS",
      "Server Actions",
    ],
    imageUrl: visio,
    url: "https://visio-bice.vercel.app/",
  },
  {
    title: "SafeCred",
    description:
      "AI powered credentials/certificate generation platform with a focus on security and user experience using blockchain.",
    tags: [
      "AI",
      "Next.js",
      "Node.js",
      "MongoDB",
      "TS",
      "TailwindCSS",
      "Algorand",
    ],
    imageUrl: safecred,
    url: "https://safecred.tech",
  },
  {
    title: "Microwallets",
    description:
      "Solo creator of the platform for custodial wallets on Algorand and much more functionality.",
    tags: [
      "AI",
      "Next.js",
      "Nest.js",
      "MongoDB",
      "TS",
      "TailwindCSS",
      "Algorand",
    ],
    imageUrl: microauth,
    url: "https://microwallets.tech",
  },
  {
    title: "Microwallets React & JS SDK",
    description: "Video calling platform using Stream.io",
    tags: ["AI", "Next.js", "TS", "TailwindCSS"],
    imageUrl: microauth,
    url: "  ",
  },
  {
    title: "IOT SDK",
    description: "Video calling platform using Stream.io",
    tags: ["AI", "Python", "Flask", "RaspberyPie", "Algorand"],
    imageUrl: voom,
    url: "  ",
  },
  {
    title: "Yoom by Akshay",
    description: "Video calling platform using Stream.io",
    tags: ["Next.js", "TS", "TailwindCSS"],
    imageUrl: voom,
    url: "https://yoom-by-akshay.vercel.app/",
  },
  {
    title: "Gigma Not Figma",
    description:
      "Created a collaborative design tool akin to Figma using Next.js, empowering real-time collaboration and design iteration.",
    tags: ["Next.js", "FabricJS", "Liveblocks.io", "TS", "shadCN"],
    imageUrl: gigma,
    url: "https://gigma-not-figma.akshaydeosthale.com",
  },
 

  {
    title: "Delhi International School",
    description:
      "Crafted DIS website using Next.js, Nest.js, and CSS, blending modern frontend design with a robust backend for an immersive user experience.",
    tags: ["Next.js", "NestJS"],
    imageUrl: DIS,
    url: "https://disdelhi.com",
  },

 
] as const;

export const skillsData = [
  "Fullstack",
  "Project Architecture",
  "RUST",
  "Tauri",
  "Blochcain",
  "Azure DevOps",
  "TypeScript",
  "React.Js",
  "Next.js",
  "Node.js",
  "Nest.JS",
  "MongoDB",
  "Express",
  "PostgreSQL",
  "TailwindCSS",
  "Algorand",
] as const;

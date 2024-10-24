"use client";
import React, { useState } from "react";
import project1 from "../public/images/project-No.1.jpeg";
import project2 from "../public/images/project-No.2.jpeg";
import project3 from "../public/images/project-No.3.jpeg";
import project4 from "../public/images/project-No4.jpeg";
import Image from "next/image";
import { motion } from "framer-motion";
const projects = [
  {
    name: "E-Commerce Store",
    description:
      " Developed a dynamic e-commerce platform with a custom shopping cart, user authentication, and secure payment integration.",
    image: project1,
  },
  {
    name: "Retail SEO & Ad Synergy",
    description:
      "Executed a comprehensive digital marketing strategy for a retail business, including search engine optimization and targeted advertising campaigns.",
    image: project2,
  },
  {
    name: "Modern Logo & Brand Design",
    description:
      "Created a full branding package for a startup, including logo design, business cards, and social media graphics that aligned with the company’s values and target audience.",
    image: project3,
  },
  {
    name: "Multilingual Portfolio",
    description:
      "Built a portfolio website with multilingual support and SEO optimizations. Focused on delivering a fast, accessible, and visually appealing site that highlights professional achievements.",
    image: project4,
  },
];
function Projects() {
  const [hovered, setHovered] = useState<null | number>(null);
  console.log("Hoverd Box : ", hovered);

  return (
    <section className="mt-20 pt-8 min-h-screen md:px-0 px-2">
      <h2 className="text-center">My Projects</h2>
      <p className="text-center md:px-20 md:text-2xl text-xl mt-5">
        Explore projects that showcase my expertise in Full Stack Web
        Development, Digital Marketing, and Graphic Design, highlighting
        creative and functional solutions to your business needs.
      </p>
      <div className="w-full flex flex-col justify-center items-center mt-14">
        <div className="w-full md:w-11/12 grid md:grid-cols-2 grid-cols-1 gap-10 md:px-10">
          {projects.map((project, index) => (
            <motion.div
              onHoverStart={() => setHovered(index)}
              onHoverEnd={() => setHovered(null)}
              onClick={() =>
                setHovered((prev) => (prev === index ? null : index))
              }
              key={index + project.name}
              className="md:min-h-[500px] min-h-[400px] overflow-hidden rounded-[40px] relative bg-white z-0"
            >
              <div
                className={`absolute transition-all ${
                  hovered === index
                    ? "-bottom-1 rounded-t-0 bg-black"
                    : "-bottom-0 rounded-t-[50px] bg-white/70 backdrop-blur-[7px]"
                }  duration-300 left-0 w-full h-auto flex flex-col justify-end  z-10 p-5 text-black items-start`}
              >
                {hovered === index ? null : (
                  <>
                    <h3
                      style={{
                        textShadow: "0 1px 3px rgba(255,255,255,0.8)",
                      }}
                      className={` transition-all duration-300 ${
                        hovered === index ? "md:pb-4 pb-0" : "pb-0"
                      }`}
                    >
                      {project.name}
                    </h3>
                    <p className="transition-all duration-300 leading-6 md:pt-2">
                      {project.description}
                    </p>
                  </>
                )}
                <button
                  className={`bg-black text-white py-4 px-8 hovB border border-white rounded-[50px] ${
                    hovered === index ? "mt-0 " : "md:mt-4 mt-3"
                  }`}
                >
                  See More{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 inline-block ml-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </button>
              </div>
              <Image
                src={project.image}
                alt="Image 1"
                className={`absolute object-cover transition-transform duration-300 ${
                  hovered === index ? "scale-[1.4]" : "scale-[1.6]"
                }`}
                placeholder="blur"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

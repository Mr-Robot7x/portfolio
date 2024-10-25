import About from "@/components/about";
import AboutMe from "@/components/AboutMe";

import HeroSection from "@/components/HeroSection";

import Projects from "@/components/Projects";
import React from "react";

function page() {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <Projects />
      <About />
    </>
  );
}

export default page;

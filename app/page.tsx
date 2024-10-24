import About from "@/components/about";
import AboutMe from "@/components/AboutMe";
import Container from "@/components/Container";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import React from "react";

function page() {
  return (
    <>
      {" "}
      <Navbar />
      <Container>
        <HeroSection />
        <AboutMe />
        <Projects />
        <About />
      </Container>
    </>
  );
}

export default page;

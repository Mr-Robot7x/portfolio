import Image from "next/image";
import React from "react";
import myImage from "../public/images/mashal.png";
function HeroSection() {
  return (
    <section
      id="Hero-Section"
      className="mt-36 md:px-0 px-2 flex flex-col items-center justify-center"
    >
      <p className="text-center">
        👋 Hello, My name is Mashal Huraira and I am a freelance
      </p>
      <h1 className="text-center mt-1 font-semibold">
        Web Developer
        <br />
        <span className="t-outline  heading">& Digital Marketer</span>
      </h1>
      <div className="md:w-96 md:h-96 w-80 h-80 overflow-hidden md:-mt-20 -top-7 -z-10 relative">
        <Image
          src={myImage}
          alt="Mashal Huraira"
          loading="eager"
          className="object-fill absolute shadow-2xl -top-16 object-top"
        />
      </div>
    </section>
  );
}

export default HeroSection;

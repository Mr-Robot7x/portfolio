"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/images/mashal-logo.png";
import { useState } from "react";
import { motion } from "framer-motion";
function Navbar() {
  const [mobile, setMobile] = useState(false);
  return (
    <>
      <header
        className={`bg-white/95 w-full py-3 flex justify-center fixed top-0 left-0 z-10`}
      >
        <nav className="w-full px-3 md:w-11/12 flex items-center justify-between">
          <div className="md:w-14 w-11 h-12 relative">
            <Image
              alt="Mashal horara logo"
              src={logo}
              loading="eager"
              className="object-contain absolute"
            />
          </div>
          <div className="md:flex hidden items-center gap-x-1">
            <Link
              className=" hov px-5 py-2 rounded-3xl text-lg"
              href={"/skills"}
            >
              Skills
            </Link>
            <Link
              className=" hov px-5 py-2 rounded-3xl text-lg"
              href={"/projects"}
            >
              Projects
            </Link>
            <Link
              className=" hov px-5 py-2 rounded-3xl text-lg"
              href={"/about"}
            >
              About
            </Link>
            <Link
              className="bg-black hovB text-white ml-10 px-5 py-2 rounded-3xl text-lg"
              href={"/contact"}
            >
              Hire Me!
            </Link>
          </div>
          <div className="md:hidden flex gap-x-3 items-center">
            <Link
              className="md:hidden block bg-black hovB text-white px-5 py-2 rounded-3xl text-lg"
              href={"/contact"}
            >
              Hire Me!
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              onClick={() => setMobile((prev) => !prev)}
              stroke="currentColor"
              className="md:hidden block size-11 border border-black rounded-full p-1 hovB"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 9h16.5m-16.5 6.75h16.5"
              />
            </svg>
          </div>
        </nav>
      </header>
      {mobile && (
        <motion.div
          initial={{
            y: "-10%",
            opacity: 0,
          }}
          animate={{
            y: "0%",
            opacity: 1,
          }}
          transition={{
            ease: "linear",
            duration: 0.2,
          }}
          className="p-8 font-semibold w-full min-h-96 bg-white/80 backdrop-blur-sm fixed z-40 top-0 left-0"
        >
          <svg
            onClick={() => setMobile(false)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="mb-6 size-11 border border-black rounded-full p-1 hovB"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            />
          </svg>
          <Link aria-label="Skills" href={"/skills"}>
            <h3 className="mb-2 bg-white/70 drop-shadow-xl p-4 hover:bg-white transition-colors rounded-lg">
              Skills
            </h3>
          </Link>
          <Link aria-label="Projects" href={"/projects"}>
            {" "}
            <h3 className="mb-2 bg-white/70 drop-shadow-xl p-4 hover:bg-white transition-colors rounded-lg">
              Projects
            </h3>
          </Link>
          <Link aria-label="About Me" href={"/about"}>
            <h3 className="mb-2 bg-white/70 drop-shadow-xl p-4 hover:bg-white transition-colors rounded-lg">
              About Me
            </h3>
          </Link>
        </motion.div>
      )}
    </>
  );
}

export default Navbar;

import Link from "next/link";
function AboutMe() {
  return (
    <div className="md:px-0 px-2 md:mt-10 mt-5 w-full flex flex-col justify-center items-center">
      <div className="w-full md:w-11/12 relative">
        <h2 className="pt-20">
          <span className="b-line">All in One Solution</span> for
          <br /> Web, Marketing & Design Needs
        </h2>
        <p className="md:w-[70%] md:text-2xl text-xl md:mt-10 mt-5">
          I&apos;m a flexible professional with skills in Full Stack Web
          Development, Digital Marketing, and Graphic Design. I love creating
          awesome websites, coming up with cool marketing strategies, and
          designing eye-catching visuals to help brands succeed online. I always
          strive to deliver personalized, top-notch results.
        </p>

        <Link aria-label="More About Me" href={"/about"}>
          <button className="hov mt-8 border border-black px-5 py-4 rounded-[50px] text-lg">
            More About Me
          </button>
        </Link>
      </div>
    </div>
  );
}

export default AboutMe;

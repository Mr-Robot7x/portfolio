import Link from "next/link";
function About() {
  return (
    <section className="min-h-screen md:mt-32 mt-24 w-full flex justify-center md:pt-10 md:px-0 px-2">
      <div className="md:w-11/12 w-full grid md:grid-cols-2 grid-cols-1 md:gap-x-5 gap-y-10">
        <div className="mt-10">
          <h2 className="md:text-5xl text-4xl">
            Professional Services for Digital Success
          </h2>
          <p className="md:text-2xl text-xl md:mt-10 mt-6">
            I offer services to help grow your brand, including Full Stack Web
            Development, Digital Marketing, and Graphic Design. I create
            engaging websites, effective marketing strategies, and eye-catching
            visuals to boost your brand&apos;s presence online.
          </p>
          <Link aria-label="More About Me" href={"/about"}>
            <button className="hov md:mt-8 mt-5 border border-black px-5 py-4 rounded-[50px] text-lg">
              More About Me
            </button>
          </Link>
        </div>
        <div className="flex flex-col items-end gap-y-6 md:pr-10">
          <div className="md:w-[450px] relative min-h-44 hover:bg-white transition-colors p-5 border-t-2 border-black">
            <h3>Web Development & Maintenance</h3>
            <p className="mt-3">Explore</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-11 bg-white drop-shadow-md absolute right-7 md:bottom-8 bottom-4 rounded-full p-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </div>
          <div className="md:w-[450px] relative min-h-44 hover:bg-white transition-colors p-5 border-t-2 border-black">
            <h3>Digital Marketing & SEO strategies</h3>
            <p className="mt-3">Explore</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-11 bg-white drop-shadow-md absolute right-7 md:bottom-8 bottom-4 rounded-full p-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </div>
          <div className="md:w-[450px] relative min-h-44 hover:bg-white transition-colors p-5 border-t-2 border-black">
            <h3>Graphics Designing & media graphics</h3>
            <p className="mt-3">Explore</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-11 bg-white drop-shadow-md absolute right-7 md:bottom-8 bottom-4 rounded-full p-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

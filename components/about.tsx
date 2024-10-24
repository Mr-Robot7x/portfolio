import Image from "next/image";
import Link from "next/link";
import pro from "../public/images/mashal.png";
function About() {
  return (
    <section className="mt-24 min-h-screen w-full overflow-hidden relative">
      <Image
        src={"/images/3d2.png"}
        layout="fill"
        alt="bg image"
        className="w-full absolute object-cover -z-10"
      />
      <div className="z-30 md:pt-20 pt-10 w-full flex flex-col justify-center items-center">
        <h2 className="text-center text-black">About Me</h2>
        <h3 className="text-center text-black mt-3">
          Behind the Code and Designs
        </h3>
        <div className="mt-5 md:w-11/12 w-full min-h-52 backdrop-blur-sm drop-shadow-2xl bg-white/10 rounded-xl flex flex-col md:flex-row items-center justify-center md:p-8 px-2 py-5 md:gap-x-16 gap-y-10">
          <div className="w-80 h-80 bg-white/50 rounded-2xl relative overflow-hidden drop-shadow-2xl">
            <Image
              alt="Mashal"
              src={pro}
              fill
              className="absolute object-contain scale-[1.34]"
            />
          </div>
          <div className="min-h-80 basis-4/6">
            <p className="md:text-2xl text-xl">
              With 2 years of experience in Full Stack Web Development, Digital
              Marketing, and Graphic Design, I&apos;ve delivered projects
              ranging from dynamic websites to effective marketing campaigns and
              brand designs.
            </p>
            <p className="md:text-2xl text-xl">
              My focus is on creating high-quality solutions that drive growth
              and engagement. Let&apos;s bring your ideas to life!
            </p>
            <Link aria-label="More About Me" href={"/about"}>
              <button className="hov mt-8 border border-black px-5 py-4 rounded-[50px] text-lg">
                About Me{" "}
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
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

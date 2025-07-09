import React from "react";
import { Audiowide } from "next/font/google";
import Image from "next/image";

const audioFont = Audiowide({
  subsets: ["latin"],
  weight: ["400"],
});

const HeaderSection = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-screen -z-10">
        <video
          className="w-full h-full object-cover filter blur-sm brightness-50"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/video1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <section
        className={`relative z-10 h-screen flex flex-col items-center justify-center ${audioFont.className}`}
      >
        <div className="w-full h-full lg:w-3/4 px-4 py-8 mx-auto md:px-16 lg:px-0 md:py-16 text-start flex justify-between items-center">
          <div className="md:mr-16 lg:mr-10">
            <div className="mb-4 text-4xl lg:text-8xl tracking-tight text-white">
              <div className="text-white font-bold text-start">
                <span className="block text-2xl md:text-3xl lg:text-5xl leading-tight">
                  <span className="text-[#ff69ff]">Smart </span>
                  Matchmaking
                </span>
                <span className="block text-2xl md:text-3xl lg:text-5xl leading-tight">
                  Between
                  <span className="text-[#ff69ff]"> You </span>
                  and
                </span>
                <span className="block text-2xl md:text-3xl lg:text-5xl leading-tight">
                  The
                  <span className="text-[#ff69ff]"> Experts.</span>
                </span>
              </div>
            </div>

            <div className="font-bold text-sm md:text-md lg:text-xl text-[#FF69FF] mt-8 ">
              AI-BASED EXPERT RECOMMENDATION
            </div>

            <a
              href="https://google.com"
              target="_blank"
              className="text-md md:text-xl mt-6 inline-flex items-center w-1/2 md:w-3/4 lg:w-full justify-center md:px-5 md:py-3 text-center text-[#440044] bg-white rounded-lg hover:bg-[#ff69ffb9] hover:text-white"
            >
              Get Started
            </a>
          </div>

          <Image
            src="/images/laptop-exai.png"
            alt="Robot Image"
            width={400}
            height={400}
            className="hidden md:block md:w-[250px] md:h-[300px] lg:w-[550px] lg:h-[550px] object-contain"
          ></Image>
        </div>
      </section>
    </div>
  );
};

export default HeaderSection;

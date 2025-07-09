import { Audiowide } from "next/font/google";
import Image from "next/image";
import React from "react";

const audioFont = Audiowide({
  subsets: ["latin"],
  weight: ["400"],
});

const CtaSection = () => {
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
          <source src="/videos/video2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <section
        className={`relative z-10 h-screen flex flex-col justify-center ${audioFont.className}`}
      >
        <div className="flex max-w-screen-xl mx-auto justify-between items-center w-full h-full">
          <div className="ml-5 mr-10 md:ml-20">
            <h2 className="mb-4 text-xl md:text-3xl lg:text-5xl font-bold tracking-tight text-white">
              Lets Transform!
            </h2>

            <a
              href="https://google.com"
              target="_blank"
              className="text-md md:text-xl inline-flex items-center w-full justify-center md:px-5 md:py-3 text-center text-[#440044] bg-white rounded-lg hover:bg-[#ff69ffb9] hover:text-white"
            >
              Let&apos;s Start
            </a>
          </div>

          <div className="flex md:justify-end md:items-end sm:h-[70%] sm:w-[70%] md:h-full md:w-full">
            <Image
              src="/images/robot1.png"
              alt="Robot Image"
              width={600}
              height={600}
            />
          </div>
        </div>
      </section>

      {/* <div className="absolute top-0 left-0 w-full h-screen z-20 flex items-end justify-start p-2 md:p-5">
        <div className="flex justify-center w-full md:w-auto rounded-lg p-2 shadow-lg ">
          <Image
            src="/images/telkom.png"
            alt="logoTelkom"
            width={100}
            height={25}
            className="mr-2 md:mr-3 bg-white rounded-lg p-1 shadow-lg"
          />

          <Image
            src="/images/bumn.png"
            alt="logoBumn"
            width={70}
            height={10}
            className="bg-white rounded-lg p-1 shadow-lg"
          />
        </div>
      </div> */}
    </div>
  );
};

export default CtaSection;

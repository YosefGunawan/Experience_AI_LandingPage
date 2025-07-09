"use client";

import { Audiowide } from "next/font/google";
// import Image from "next/image";
import React, { useEffect, useState } from "react";

const audioFont = Audiowide({
  subsets: ["latin"],
  weight: ["400"],
});

const NavBar = ({ data }) => {
  const [activeLink, setActiveLink] = useState("section1");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative flex justify-center items-center">
      <nav
        className={`hidden md:block absolute top-0 z-20 px-8 py-4 transition-all duration-300
    ${
      activeLink === "section1"
        ? "bg-transparent text-white border-b border-gray-300 shadow-md mt-4 w-[80%]"
        : "bg-gray-200 text-black border-b border-gray-300 shadow-md w-full"
    }`}
      >
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="text-sm lg:text-xl font-bold">
            {/* <Image
              src={activeLink === "section1" ? "/images/logo_white.png" : "/images/logo_black.png"}
              alt="Logo"
              width={120}
              height={120}
              className="inline-block mr-2"
            /> */}
            <div>
              <span className="text-[#FF69FF]">E</span>
              XPE
              <span className="text-[#FF69FF]">RI</span>
              ENCE AI
            </div>
          </div>
          <ul
            className={`flex gap-3 lg:gap-6 text-md lg:text-xl font-semibold ${audioFont.className}`}
          >
            {data.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => {
                    const section = document.querySelector(item.link);
                    if (section) section.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`hover:text-[#ff69ff] hover:cursor-pointer transition duration-300 ${
                    activeLink === item.link.replace("#", "")
                      ? "text-[#ff69ff]"
                      : activeLink === "section1"
                      ? "text-white"
                      : "text-black"
                  }`}
                >
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

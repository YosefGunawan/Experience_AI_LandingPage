"use client";

import Image from "next/image";
import React, { useState } from "react";

const VideoSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <section className="h-screen flex flex-col justify-center bg-black">
        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
            <div className="relative w-[90%] max-w-6xl aspect-video">
              {/* Tombol X */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-2 right-2 text-red-500 text-4xl font-bold z-50 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:text-red-800 hover:cursor-pointer transition-colors duration-300 shadow-md"
              >
                &times;
              </button>

              {/* Embed YouTube */}
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/zVKxJV9UnFo"
                title="YouTube video"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          </div>
        )}

        <div className="hidden md:block">
          <div className="flex justify-around items-center px-8 py-16 max-w-screen-xl mx-auto">
            <div className="relative hover:scale-105 transition-transform duration-300 cursor-pointer">
              <Image
                src={"/images/ss.png"}
                alt={"Thumbnail"}
                width={700}
                height={700}
                className="object-cover rounded-t-lg shadow-lg hover:cursor-pointer"
              />

              <div
                onClick={() => setIsModalOpen(true)}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-32 h-32 border-4 border-white rounded-full flex items-center justify-center bg-transparent bg-opacity-40">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-20 w-20 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6.5 5.5v9l7-4.5-7-4.5z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className={`ml-20`}>
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                Experience-AI Highlight Video
              </h2>
              <p className="mb-6 font-light text-gray-500 sm:text-xl dark:text-gray-400">
                Ketahui lebih jauh tentang Experience-AI melalui video ini.
              </p>
            </div>
          </div>
        </div>

        <div className="block md:hidden">
          <div className="flex flex-col max-w-screen-xl px-4 py-8 mx-auto lg:py-16 w-full justify-between items-center">
            <div className="mb-8 text-center">
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-white">
                Experience-AI Highlight Video
              </h2>
              <p className="mb-6 font-light sm:text-xl text-gray-400">
                Ketahui lebih jauh tentang Experience-AI melalui video ini.
              </p>
            </div>

            <div className="relative hover:scale-105 transition-transform duration-300 cursor-pointer">
              <Image
                src={"/images/ss.png"}
                alt={"Thumbnail"}
                width={400}
                height={400}
                className="object-cover rounded-t-lg shadow-lg hover:cursor-pointer"
              />

              <div
                onClick={() => setIsModalOpen(true)}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-16 h-16 border-4 border-white rounded-full flex items-center justify-center bg-transparent bg-opacity-40">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6.5 5.5v9l7-4.5-7-4.5z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VideoSection;

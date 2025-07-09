import React from "react";
import CardImage from "../card/card_image";
import { Quantico } from "next/font/google";
import SwiperCard from "../utility/SwiperCard";

const quanticoFont = Quantico({
  subsets: ["latin"],
  weight: ["400"],
});

const cardData = [
  {
    image: "/images/img1.jpg",
    title: "Data Driven Recommendation",
    desc: "Seluruh informasi di “ALGORTIMA” kan untuk mendapatkan Expert Recommendation yang sesuai dengan data terkini",
  },
  {
    image: "/images/img1.jpg",
    title: "1 Minutes Decision",
    desc: "Waktu yang dibutuhkan untuk mendapatkan alternatif expert menjadi turun dratis, lebih dari 500%",
  },
  {
    image: "/images/img1.jpg",
    title: "AnyTime, Any Where, Any Stakeholder",
    desc: "Bisa dilakukan oleh seluruh stakeholder terkait, from Centralized to Decentralized Process",
  },
  {
    image: "/images/img1.jpg",
    title: "Next : Expert Market Place",
    desc: `New Paradigm : Expert Market Place "Step up and select the right assignment for you!"`,
  },
];

const ImpactSection = () => {
  return (
    <div>
      <section
        className={`h-screen flex flex-col justify-center text-center robot2-bg ${quanticoFont.className}`}
      >
        <h2 className="mb-4 text-2xl lg:text-3xl font-extrabold tracking-tight text-white">
          IMPACT of EXPERIENCE-AI
        </h2>

        <div className="hidden lg:block">
          <div className="flex lg:flex-row justify-center items-center gap-4 m-2">
            {cardData.map((card, index) => (
              <div key={index}>
                <CardImage
                  image={card.image}
                  title={card.title}
                  desc={card.desc}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="block lg:hidden">
          <SwiperCard data={cardData} />
        </div>
      </section>
    </div>
  );
};

export default ImpactSection;

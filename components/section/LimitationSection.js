import React from "react";
import CardNumber from "../card/card_number";
import { Quantico } from "next/font/google";

const quanticoFont = Quantico({
  subsets: ["latin"],
  weight: ["400"],
});

const cardNumberData = [
  {
    number: 1,
    title: "Offline Expert Database",
    desc: "Database Expert tersedia dalam bentuk sheet dan belum menjadi repository yang di AI kan",
  },
  {
    number: 2,
    title: "Manual Mix & Match",
    desc: "Proses penentuan expert untuk program LIR, dilakukan dengan manual dan algoritmanya disimpan dalam “otak” XMAN saja",
  },
  {
    number: 3,
    title: "Manual Compare Data Expert",
    desc: "Sertifikasi, History Pelatihan, Minat Expert, LIM dan Jadwal masih dikelola dengan cara cara tradisional",
  },
  {
    number: 4,
    title: "Centralized Information ",
    desc: "Informasi ketersediaan expert dan yang sesuai hanya dimiliki oleh XMAN",
  },
];

const LimitationSection = () => {
  return (
    <div>
      <section
        className={`h-screen flex flex-col justify-center text-center robot1-bg ${quanticoFont.className}`}
      >
        <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16">
          <h2 className="mb-4 text-2xl lg:text-3xl font-extrabold tracking-tight text-white">
            LIMITATION of TRADITIONAL WAYS
          </h2>

          <div className="m-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2">
            {cardNumberData.map((item, index) => (
              <CardNumber
                key={index}
                number={item.number}
                title={item.title}
                desc={item.desc}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LimitationSection;

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import CardImage from "../card/card_image";

const SwiperCard = ({ data }) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation={true}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      className="w-[60%] md:w-[50%]"
      modules={[Navigation, Pagination]}
      style={{
        "--swiper-navigation-color": "#fff",
        "--swiper-navigation-size": "20px",
        "--swiper-pagination-color": "#fff",
      }}
    >
      {data.map((item, index) => (
        <SwiperSlide key={index}>
          <CardImage image={item.image} title={item.title} desc={item.desc} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperCard;

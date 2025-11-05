import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import Slide1 from "../assets/images/slide1.jpg";
import Slide2 from "../assets/images/slide2.jpg";
import Slide3 from "../assets/images/slide3.jpg";

export default function Slider() {
  const slides = [
    { id: 1, title: "Couple Showpice", img: Slide1 },
    { id: 2, title: "Soft Plush Toys", img: Slide2 },
    { id: 3, title: "Outdoor Fun", img: Slide3 },
  ];

  return (
    <div className="bg-gradient-to-r from-pink-100 via-yellow-100 to-orange-100 rounded-xl shadow-lg overflow-hidden">
      <Swiper
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        modules={[Autoplay]}
      >
        {slides.map((s) => (
          <SwiperSlide key={s.id}>
            <div
              className="h-64 md:h-96 bg-cover bg-center flex items-center justify-center"
              style={{ backgroundImage: `url(${s.img})` }}
            >
              <div className="bg-black/40 p-4 rounded-lg">
                <h2 className="text-3xl md:text-5xl font-bold text-white drop-shadow-md">
                  {s.title}
                </h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

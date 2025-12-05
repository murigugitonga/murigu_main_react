//import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import {defenceCard2, defenseCard, coverOne } from "../../assets/images"

export default function FadeCarousel() {
  return (
    <div className="relative hidden overflow-x-auto md:block max-w-72 rounded-2xl">
      <Swiper
        modules={[EffectFade, Pagination, Autoplay]}
        effect="fade"
        autoplay={{ delay: 4000 }}
        loop={true}
        pagination={{
          clickable: true,
          renderBullet: (index, className) =>
            `<span class='custom-bullet ${className}'></span>`,
        }}
        className="w-full"
      >
        {[defenceCard2, defenseCard, coverOne].map((src, idx) => (
          <SwiperSlide key={idx} className="flex! items-center! justify-center!">
            <img
              src={src}
              className="block object-cover w-full h-full"
              alt=""
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

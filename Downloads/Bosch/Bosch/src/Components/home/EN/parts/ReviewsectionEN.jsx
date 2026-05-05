import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import avatar from '../../../../assets/avatr.png'

import "swiper/css";
import "swiper/css/pagination";

export default function ReviewsectionEn() {
  const items = [
    {
      name: "Sarah Ahmed",
      role: "Customer",
      text: "I had an issue with my air conditioner and they responded immediately. Service was excellent.",
    },
    {
      name: "Mohamed Ali",
      role: "Customer",
      text: "Very fast service and محترم team.",
    },
    {
      name: "Omar Hassan",
      role: "Customer",
      text: "Best maintenance company I've dealt with. Very punctual.",
    },
    {
      name: "Nour",
      role: "Customer",
      text: "Highly recommended.",
    },
  ];

  return (
    <div className="py-16 px-4 bg-gray-100" dir="ltr">
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-10">
        Customer Reviews
      </h2>

      <div className="max-w-6xl mx-auto">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 2000 }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {items.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between min-h-[220px]">
                <div className="flex items-center gap-3">
                  <img src={avatar} className="w-12 h-12" />
                  <div>
                    <h3 className="font-bold text-sm">{item.name}</h3>
                    <p className="text-gray-500 text-xs">{item.role}</p>
                  </div>
                </div>

                <p className="text-gray-700 text-sm mt-4">
                  {item.text}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
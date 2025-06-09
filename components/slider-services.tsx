"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import { serviceData } from "@/data";

const SliderServices = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Autoplay]}
      className="h-[235px]  w-[270px] md:w-[750px]"
    >
      {serviceData.map((item, index) => (
        <SwiperSlide key={index} className="w-full h-full">
          <div
            className="
                        flex flex-col
                        space-y-2
                        p-3
                        rounded-lg
                        cursor-pointer
                        bg-[rgba(65,47,123,0.15)]
                        hover:bg-[rgba(89,65,169,0.15)]
                        transition-all
                        duration-300
                        border-2
                        hover:border-secondary
                        h-[180px]
                        md:h-[200px]
                        group
                        "
          >
            {" "}
            <div className=" flex gap-2 font-semibold text-secondary">
              {item.icon}
              <h3 className=" text-lg">{item.title}</h3>
            </div>
            <div>
              <p className="text-sm text-justify">{item.description}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SliderServices;

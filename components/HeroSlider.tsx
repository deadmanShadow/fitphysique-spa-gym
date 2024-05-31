"use client";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import CustomButton from "./CustomButton";

const HeroSlider = () => {
  return (
    <Swiper>
      <SwiperSlide className="h-full flex justify-end pt-48">
        <div>
          <h1 className="h1 text-center lg:text-left mb-2">
            <span>
              Where hard <span>work meets success</span>
            </span>
          </h1>
          <p className="text-white italic text-center lg:text-left mb-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
            nostrum doloremque odit a ut ducimus necessitatibus, facilis nemo
            saepe delectus?
          </p>
          <CustomButton
            text="Get Started"
            containerStyles="w-[196px] h-[62px] "
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSlider;

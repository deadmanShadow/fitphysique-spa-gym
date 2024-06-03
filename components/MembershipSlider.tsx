"use client";
import { FaCheck } from "react-icons/fa";
import { MdClose } from "react-icons/md";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

// membership data
const memberShipsData = [
  {
    title: "Standard",
    price: "38",
    benefits: [
      {
        icon: FaCheck,
        text: "Include membership",
      },
      {
        icon: FaCheck,
        text: "Access to all gym facilities",
      },
      {
        icon: MdClose,
        text: "Diet plan included",
      },
      {
        icon: MdClose,
        text: "Monday-Friday gym access",
      },
      {
        icon: FaCheck,
        text: "Full access to everything",
      },
      {
        icon: FaCheck,
        text: "No additional amenitites",
      },
    ],
  },
];

const MembershipSlider = () => {
  return (
    <Swiper>
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
    </Swiper>
  );
};

export default MembershipSlider;

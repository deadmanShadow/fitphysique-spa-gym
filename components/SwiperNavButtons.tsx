"use client";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { useSwiper } from "swiper/react";

const SwiperNavButtons = ({
  containerStyles = "",
  btnStyles = "",
  iconStyles = "",
}) => {
  const swiper = useSwiper();

  return (
    <div className={`${containerStyles} swiper-nav-buttons`}>
      <button
        className={`${btnStyles} swiper-nav-button prev-button mt-8`}
        onClick={() => swiper.slidePrev()}
      >
        <PiCaretLeftBold className={`${iconStyles}`} />
      </button>
      <button
        className={`${btnStyles} swiper-nav-button next-button mt-8`}
        onClick={() => swiper.slideNext()}
      >
        <PiCaretRightBold className={`${iconStyles}`} />
      </button>
    </div>
  );
};

export default SwiperNavButtons;

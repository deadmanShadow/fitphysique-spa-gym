"use client";

import { fadeIn } from "@/lib/variants";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Testimonial data
const testimonialData = [
  {
    img: "/assets/img/testimonial/alex.jpg",
    message:
      "FitPhysique transformed my fitness journey. The trainers are exceptional, and the community is incredibly supportive.",
    name: "Alex Anthony",
  },
  {
    img: "/assets/img/testimonial/michael.jpg",
    message:
      "Joining FitPhysique was the best decision. The personalized training plans have truly changed my life.",
    name: "Michael Trisuva",
  },
  {
    img: "/assets/img/testimonial/pogba.jpg",
    message:
      "Fantastic gym! The equipment is modern, and the classes are intense and fun.",
    name: "Pogba Willingham",
  },
  {
    img: "/assets/img/testimonial/alex.jpg",
    message:
      "FitPhysique transformed my fitness journey. The trainers are exceptional, and the community is incredibly supportive.",
    name: "Alex Anthony",
  },
  {
    img: "/assets/img/testimonial/michael.jpg",
    message:
      "Joining FitPhysique was the best decision. The personalized training plans have truly changed my life.",
    name: "Michael Trisuva",
  },
  {
    img: "/assets/img/testimonial/pogba.jpg",
    message:
      "Fantastic gym! The equipment is modern, and the classes are intense and fun.",
    name: "Pogba Willingham",
  },
];

const Testimonial = () => {
  return (
    <section className="py-12 xl:py-28" id="testimonial">
      <div className="container mx-auto">
        <motion.h2
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="h2 text-center"
        >
          Our Testimonials
        </motion.h2>
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
        >
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="h-[320px]"
          >
            {testimonialData.map((person, index) => (
              <SwiperSlide className="h-full" key={index}>
                <div className="flex flex-col items-center text-center">
                  <div className="flex flex-col justify-center items-center gap-6 text-center h-full">
                    <Image
                      src={person.img}
                      width={90}
                      height={90}
                      alt=""
                      className="rounded-full border-2 border-accent"
                    />
                    <div className="flex flex-col justify-center items-center">
                      <FaQuoteLeft className="text-2xl text-gray-300" />
                      <p className="max-w-[380px] mb-4">{person.message}</p>
                      <span className="text-2xl text-accent">
                        {person.name}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;

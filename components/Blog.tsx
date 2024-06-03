"use client";
import { fadeIn } from "@/lib/variants";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import CustomButton from "./CustomButton";
import SwiperNavButtons from "./SwiperNavButtons";

const blogData = [
  {
    img: "/assets/img/blog/post1.jpg",
    date: "March 10, 2024",
    title: "Maintain a perfect structure after workout.",
    href: "/blog/post1",
  },
  {
    img: "/assets/img/blog/post2.jpg",
    date: "March 14, 2024",
    title: "Effective Cool-Down Routines for Optimal Recovery",
    href: "/blog/post2",
  },
  {
    img: "/assets/img/blog/post3.jpg",
    date: "March 21, 2024",
    title: "Stretching Techniques to Prevent Post-Workout Soreness.",
    href: "/blog/post3",
  },
  {
    img: "/assets/img/blog/post4.jpg",
    date: "March 29, 2024",
    title: "Hydration Tips for Faster Muscle Recovery.",
    href: "/blog/post4",
  },
  {
    img: "/assets/img/blog/post1.jpg",
    date: "April 4, 2024",
    title: "The Role of Sleep in Post-Workout Muscle Repair.",
    href: "/blog/post5",
  },
  {
    img: "/assets/img/blog/post2.jpg",
    date: "April 28, 2024",
    title: "Mindful Breathing Exercises to Enhance Recovery.",
    href: "/blog/post6",
  },
  {
    img: "/assets/img/blog/post3.jpg",
    date: "May 15, 2024",
    title: "Essential Post-Workout Supplements for Muscle Growth.",
    href: "/blog/post7",
  },
  {
    img: "/assets/img/blog/post4.jpg",
    date: "May 29, 2024",
    title: "Incorporating Foam Rolling into Your Recovery Routine.",
    href: "/blog/post8",
  },
];

const Blog = () => {
  return (
    <section className="bg-primary-300 text-white py-24" id="blog">
      <div className="container mx-auto">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="h2 text-center mb-8"
        >
          Blogs
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
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 3,
              },
              1400: {
                slidesPerView: 4,
              },
            }}
            className="h-[420px] md:max-w-[660px] lg:max-w-none mb-8"
          >
            {blogData.map((post, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col justify-start h-full max-w-[320px]">
                  <Image
                    src={post.img}
                    width={320}
                    height={266}
                    alt={post.title}
                    className="mb-6"
                  />

                  <div className="flex flex-col items-start">
                    <p className="max-w-[380px] uppercase text-[12px] tracking-[3px] mb-1">
                      {post.date}
                    </p>
                    <Link
                      className="hover:text-accent transition-all duration-300"
                      href={post.href}
                    >
                      <h5 className="h5">{post.title}</h5>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <SwiperNavButtons
              containerStyles="absolute left-0 right-0 bottom-[16rem] w-full max-w-[370px] sm:max-w-[620px] md:max-w-[960px] xl:max-w-[1320px] mx-auto z-50 flex justify-between gap-1"
              btnStyles="bg-accent text-white w-[56px] h-[56px] flex justify-center items-center hover:bg-accent transition-all duration-300"
              iconStyles="text-2xl"
            />
          </Swiper>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
        >
          <CustomButton
            containerStyles="block w-[196px] h-[62px] mx-auto"
            text="View All"
          />
        </motion.div>
      </div>
    </section>
  );
};
export default Blog;

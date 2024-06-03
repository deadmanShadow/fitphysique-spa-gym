"use client";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

const blogData = [
  {
    img: "/assets/img/blog/post1.jpg",
    date: "March 10, 2024",
    title: "Maintain a perfect structure after workout.",
    href: "/blog/post1",
  },
  {
    img: "/assets/img/blog/post2.jpg",
    date: "March 10, 2024",
    title: "Effective Cool-Down Routines for Optimal Recovery",
    href: "/blog/post2",
  },
  {
    img: "/assets/img/blog/post3.jpg",
    date: "March 10, 2024",
    title: "Stretching Techniques to Prevent Post-Workout Soreness.",
    href: "/blog/post3",
  },
  {
    img: "/assets/img/blog/post4.jpg",
    date: "March 10, 2024",
    title: "Hydration Tips for Faster Muscle Recovery.",
    href: "/blog/post4",
  },
  {
    img: "/assets/img/blog/post1.jpg",
    date: "March 10, 2024",
    title: "The Role of Sleep in Post-Workout Muscle Repair.",
    href: "/blog/post5",
  },
  {
    img: "/assets/img/blog/post2.jpg",
    date: "March 10, 2024",
    title: "Mindful Breathing Exercises to Enhance Recovery.",
    href: "/blog/post6",
  },
  {
    img: "/assets/img/blog/post3.jpg",
    date: "March 10, 2024",
    title: "Essential Post-Workout Supplements for Muscle Growth.",
    href: "/blog/post7",
  },
  {
    img: "/assets/img/blog/post4.jpg",
    date: "March 10, 2024",
    title: "Incorporating Foam Rolling into Your Recovery Routine.",
    href: "/blog/post8",
  },
];

const Blog = () => {
  return (
    <section className="bg-primary-300 text-white py-24">
      <div className="container mx-auto">
        <h2 className="h2 text-center mb-8">Blogs</h2>
        <div>
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
          </Swiper>
        </div>
      </div>
    </section>
  );
};
export default Blog;

"use client";
import { fadeIn } from "@/lib/variants";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import CustomButton from "./CustomButton";

const trainerData = [
  {
    image: "/assets/img/trainers/david.jpg",
    name: "David Willihams",
    role: "Body Builder Coach",
    description:
      "David is a skilled gym trainer, renowned for his expertise, motivation, and dedication to helping clients achieve their fitness goals.",
    social: [
      {
        icon: FaFacebook,
        href: "https://facebook.com",
      },
      {
        icon: FaTwitter,
        href: "https://twitter.com",
      },
      {
        icon: FaYoutube,
        href: "https://youtube.com",
      },
    ],
  },
  {
    image: "/assets/img/trainers/alex.jpg",
    name: "Alex Wixi",
    role: "Body Builder Coach",
    description:
      "Alex is a passionate gym trainer, focused on personalized training plans and pushing clients to surpass their fitness limits.",
    social: [
      {
        icon: FaFacebook,
        href: "https://facebook.com",
      },
      {
        icon: FaTwitter,
        href: "https://twitter.com",
      },
      {
        icon: FaYoutube,
        href: "https://youtube.com",
      },
    ],
  },
  {
    image: "/assets/img/trainers/matt.jpg",
    name: "Matt Frozinga",
    role: "Body Builder Coach",
    description:
      "Matt is a skilled gym trainer, renowned for his expertise, motivation, and dedication to helping clients achieve their fitness goals.",
    social: [
      {
        icon: FaFacebook,
        href: "https://facebook.com",
      },
      {
        icon: FaTwitter,
        href: "https://twitter.com",
      },
      {
        icon: FaYoutube,
        href: "https://youtube.com",
      },
    ],
  },
  {
    image: "/assets/img/trainers/max.jpg",
    name: "Max Yolo",
    role: "Body Builder Coach",
    description:
      "Max is a passionate gym trainer, focused on personalized training plans and pushing clients to surpass their fitness limits.",
    social: [
      {
        icon: FaFacebook,
        href: "https://facebook.com",
      },
      {
        icon: FaTwitter,
        href: "https://twitter.com",
      },
      {
        icon: FaYoutube,
        href: "https://youtube.com",
      },
    ],
  },
];

const Team = () => {
  return (
    <section className="py-12 xl:h-[110vh]" id="team">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <motion.h2
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="h2 text-center mb-6"
        >
          Our Trainers
        </motion.h2>
        {/* trainer div */}
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8 xl:gap-10 mb-12"
        >
          {trainerData.map((trainer, index) => {
            return (
              <div
                className="flex flex-col items-center text-center"
                key={index}
              >
                <div className="relative w-[320px] h-[360px] mb-4">
                  <Image
                    src={trainer.image}
                    layout="fill"
                    objectFit="cover"
                    alt={trainer.name}
                  />
                </div>
                <h4 className="h4 mb-2">{trainer.name}</h4>
                <p className="uppercase text-xs tracking-[3px] mb-2">
                  {trainer.role}
                </p>
                <p className="mb-6 max-w-[320px] mx-auto">
                  {trainer.description}
                </p>
                <div className="flex gap-6 justify-center">
                  {trainer.social.map((social, index) => {
                    return (
                      <Link
                        className="hover:text-accent transition-all"
                        key={index}
                        href={social.href}
                      >
                        {<social.icon className="text-lg" />}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </motion.div>
        {/* btn */}
        <motion.div
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
        >
          <CustomButton
            containerStyles="w-[196px] h-[62px]"
            text="See All Trainers"
          />
        </motion.div>
      </div>
    </section>
  );
};
export default Team;

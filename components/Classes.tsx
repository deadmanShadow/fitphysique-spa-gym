"use client";

import { fadeIn } from "@/lib/variants";
import { motion } from "framer-motion";
import Image from "next/image";
import CustomButton from "./CustomButton";

const classes = [
  {
    name: "body building",
    img: "/assets/img/classes/bodybuilding.jpg",
    description:
      "Bodybuilding exercises sculpt muscles, increase strength, and enhance physical endurance, promoting overall fitness and a toned physique.",
  },
  {
    name: "cardio",
    img: "/assets/img/classes/cardio.jpg",
    description:
      "Cardio workouts elevate heart rate, burn calories, and improve endurance, fostering cardiovascular health and enhancing overall fitness levels.",
  },
  {
    name: "crossfit",
    img: "/assets/img/classes/crossfit.jpg",
    description:
      "CrossFit blends functional movements, varied intensity, and community support, fostering strength, agility, and resilience in a dynamic fitness environment.",
  },
  {
    name: "fitness",
    img: "/assets/img/classes/fitness.jpg",
    description:
      "Fitness routines encompass diverse exercises, nutrition plans, and lifestyle choices, promoting holistic well-being, strength, flexibility, and vitality.",
  },
];

const Classes = () => {
  return (
    <section id="class">
      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="grid grid-cols-1 lg:grid-cols-2"
      >
        {classes.map((item, index) => {
          return (
            <div
              key={index}
              className="relative w-full h-[300px] lg:h-[485px] flex flex-col justify-center items-center"
            >
              {/* overlay */}
              <div className="bg-black/50 absolute w-full h-full top-0 z-10"></div>
              <Image src={item.img} layout="fill" objectFit="cover" alt="" />
              <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center p-4 text-white bg-black bg-opacity-50">
                <div className="z-30 max-w-[380px] text-center flex flex-col items-center justify-center gap-4">
                  <motion.h3
                    variants={fadeIn("up", 0.4)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.2 }}
                    className="h3 text-accent"
                  >
                    {item.name}
                  </motion.h3>
                  <motion.p
                    variants={fadeIn("up", 0.6)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.2 }}
                    className="text-white"
                  >
                    {item.description}
                  </motion.p>
                  <motion.div
                    variants={fadeIn("up", 0.8)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.2 }}
                  >
                    <CustomButton
                      containerStyles="w-[164px] h-[46px]"
                      text="Read More"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Classes;

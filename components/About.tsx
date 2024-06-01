"use client";

import { fadeIn } from "@/lib/variants";
import { motion } from "framer-motion";
import { FaUsers } from "react-icons/fa";
import { FaDumbbell } from "react-icons/fa6";
import { IoIosPricetags } from "react-icons/io";
import Achievements from "./Achievements";

const featured = [
  {
    icon: <FaUsers />,
    title: "award-winning trainers",
    subtitle:
      "Unleash your potential with every lift. Fitness is not a destination, it's a journey. Conquer the challenge, feel the change. Consistency breeds success. Strength is built one rep at a time. Elevate your life, one workout at a time.",
  },
  {
    icon: <IoIosPricetags />,
    title: "excellent prices",
    subtitle:
      "Unleash your potential with every lift. Fitness is not a destination, it's a journey. Conquer the challenge, feel the change. Consistency breeds success. Strength is built one rep at a time. Elevate your life, one workout at a time.",
  },
  {
    icon: <FaDumbbell />,
    title: "mpdern equipment",
    subtitle:
      "Unleash your potential with every lift. Fitness is not a destination, it's a journey. Conquer the challenge, feel the change. Consistency breeds success. Strength is built one rep at a time. Elevate your life, one workout at a time.",
  },
];

const About = () => {
  return (
    <section className="pt-8 pb-14 lg:pt-16 lg:pb-28" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-2 mb-8">
          <motion.h2
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="h2 text-center"
          >
            About Us
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="max-w-[600px] mx-auto text-center"
          >
            Our gym is dedicated to helping you achieve your fitness goals. With
            state-of-the-art equipment, expert trainers, and a supportive
            community, we provide everything you need to transform your health
            and lifestyle.
          </motion.p>
        </div>
        {/* featured */}
        <motion.div
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-16"
        >
          {featured.map((feature, index) => {
            return (
              <div
                className="flex flex-col justify-center items-center gap-4 border p-16"
                key={index}
              >
                <div className="text-4xl bg-primary-300 text-white w-[80px] h-[80px] rounded-full flex justify-center items-center">
                  {feature.icon}
                </div>
                <div className="flex flex-col justify-center items-center gap-2 text-center">
                  <h4 className="h4 text-accent">{feature.title}</h4>
                  <p>{feature.subtitle}</p>
                </div>
              </div>
            );
          })}
        </motion.div>
        {/* achievements */}
        <motion.div
          variants={fadeIn("up", 1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
        >
          <Achievements />
        </motion.div>
      </div>
    </section>
  );
};

export default About;

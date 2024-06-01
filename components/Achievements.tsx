"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import CountUp from "react-countup";
import { FaBriefcase, FaClock, FaTrophy } from "react-icons/fa";
import { ImUsers } from "react-icons/im";
const stats = [
  {
    number: 24,
    icon: FaBriefcase,
    text: "training courses",
  },
  {
    number: 879,
    icon: FaClock,
    text: "working hours",
  },
  {
    number: 150,
    icon: ImUsers,
    text: "happy customers",
  },
  {
    number: 9,
    icon: FaTrophy,
    text: "international awards",
  },
];

const startContainerVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      duration: 0.5,
      ease: "linear",
    },
  },
};

const statsItem = {
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.6, 0.3, 0.8],
    },
  },
};

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <section>
      <div className="container mx-auto">
        <motion.div
          variants={startContainerVariant}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                variants={statsItem}
                key={index}
                className="flex flex-col justify-center items-center"
              >
                <div className="border border-accent/90 w-[140px] h-[140px] mx-auto rounded-full p-1 mb-8">
                  {/* circle inner count */}
                  <div
                    ref={ref}
                    className="border border-accent/30 w-full h-full flex items-center justify-center text-5xl rounded-full"
                  >
                    {/* render the countup animation */}
                    {isInView && (
                      <CountUp start={0} end={item.number} duration={6} />
                    )}
                  </div>
                </div>
                {/* text */}
                <div className="flex flex-col justify-center items-center text-center">
                  <IconComponent className="text-3xl mb-2" />
                  <h4 className="h4">{item.text}</h4>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;

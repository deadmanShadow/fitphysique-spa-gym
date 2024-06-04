"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FaEnvelope,
  FaFacebook,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import CustomButton from "./CustomButton";

const footerContainerVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.6,
      duration: 0.5,
      ease: "linear",
    },
  },
};
const footerItem = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.6, 0.3, 0.8],
    },
  },
};

const Footer = () => {
  return (
    <footer className="bg-primary-300 pt-24">
      <div className="container mx-auto pb-24">
        <motion.div
          variants={footerContainerVariants}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="text-white grid grid-cols-1 xl:grid-cols-4 gap-x-8 gap-y-12"
        >
          {/* info */}
          <motion.div variants={footerItem} className="flex flex-col gap-4">
            <Link href="#">
              <Image
                src="/assets/img/logo.jpg"
                width={117}
                height={55}
                alt="Logo"
              />
            </Link>
            <p className="max-w-sm">
              Achieve your fitness goals with our state-of-the-art equipment and
              expert trainers at our gym.
            </p>
            <ul className="flex flex-col gap-5">
              <li className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-xl text-accent" />
                <span>West Banani, Dhaka, Bangladesh.</span>
              </li>
              <li className="flex items-center gap-4">
                <FaPhoneAlt className="text-xl text-accent" />
                <span>+88018000000007,+88018000000008</span>
              </li>
              <li>
                <Link className="flex items-center gap-4" href="#">
                  <FaEnvelope className="text-xl text-accent" />
                  <span>fitphysique11@yahoo.com</span>
                </Link>
              </li>
            </ul>
          </motion.div>
          {/* blog */}
          <motion.div variants={footerItem}>
            <h4 className="h4 text-accent mb-4">Recent Blog Posts</h4>
            {/* post */}
            <div className="border-b border-dotted border-gray-400 flex flex-col gap-3 pb-3 mb-4">
              <Link className="hover:text-accent transition-all" href="#">
                <h5 className="h5 leading-snug">
                  How to stay motivated for all exercises
                </h5>
                <p className="text-gray-400 text-[12px] tracking-[3px] uppercase">
                  September 22,2024
                </p>
              </Link>
            </div>
            {/* post */}
            <div className="border-b border-dotted border-gray-400 flex flex-col gap-3 pb-3 mb-4">
              <Link className="hover:text-accent transition-all" href="#">
                <h5 className="h5 leading-snug">
                  Find Your Fitness Mojo: Strategies for Long-Term Exercise
                  Motivation
                </h5>
                <p className="text-gray-400 text-[12px] tracking-[3px] uppercase">
                  September 22,2024
                </p>
              </Link>
            </div>
            {/* post */}
            <div className="border-b border-dotted border-gray-400 flex flex-col gap-3 pb-3 mb-4">
              <Link className="hover:text-accent transition-all" href="#">
                <h5 className="h5 leading-snug">
                  How to Keep Your Workout Routine Exciting
                </h5>
                <p className="text-gray-400 text-[12px] tracking-[3px] uppercase">
                  September 22,2024
                </p>
              </Link>
            </div>
          </motion.div>
          {/* gallery */}
          <motion.div variants={footerItem}>
            <h4 className="h4 text-accent">Gallery</h4>
            {/* imgs gallery */}
            <div className="flex flex-wrap gap-2">
              <Link href="#">
                <Image
                  src="/assets/img/trainers/david.jpg"
                  width={100}
                  height={100}
                  alt="David"
                />
              </Link>
              <Link href="#">
                <Image
                  src="/assets/img/trainers/alex.jpg"
                  width={100}
                  height={100}
                  alt="Alex"
                />
              </Link>
              <Link href="#">
                <Image
                  src="/assets/img/trainers/matt.jpg"
                  width={100}
                  height={100}
                  alt="Matt"
                />
              </Link>
              <Link href="#">
                <Image
                  src="/assets/img/trainers/max.jpg"
                  width={100}
                  height={100}
                  alt="Max"
                />
              </Link>
              <Link href="#">
                <Image
                  src="/assets/img/trainers/david.jpg"
                  width={100}
                  height={100}
                  alt="David"
                />
              </Link>
              <Link href="#">
                <Image
                  src="/assets/img/trainers/alex.jpg"
                  width={100}
                  height={100}
                  alt="Alex"
                />
              </Link>
              <Link href="#">
                <Image
                  src="/assets/img/trainers/matt.jpg"
                  width={100}
                  height={100}
                  alt="Matt"
                />
              </Link>
            </div>
          </motion.div>
          {/* news  */}
          <motion.div variants={footerItem} className="flex flex-col">
            <h4 className="h4 text-accent mb-4">NewsLetter</h4>
            <p>
              Our gym introduces new HIIT classes, boosting energy and burning
              calories faster. Join now and experience the intensity of
              high-intensity interval training
            </p>
            <form className="flex items-center">
              <input
                type="text"
                placeholder="Your Email Address"
                className="h-[50px] mt-4 outline-none px-4 text-primary-300"
              />
              <CustomButton containerStyles="h-[50px] px-8 mt-4" text="Send" />
            </form>
          </motion.div>
        </motion.div>
      </div>
      {/* copyright */}
      <motion.div
        variants={footerItem}
        className="text-white border-t border-white/20 py-12 text-center"
      >
        <div className="conatainer mx-auto h-full">
          <div>
            <span>&copy; Copright 2024 FitPhySique</span>
            <ul className="flex flex-col-3 items-center justify-center gap-4 text-xl text-center mt-4">
              <li>
                <Link
                  href="#"
                  className="text-white hover:text-accent transition-all"
                >
                  <FaFacebook />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white hover:text-accent transition-all"
                >
                  <FaTwitter />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white hover:text-accent transition-all"
                >
                  <FaYoutube />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};
export default Footer;

"use client";
import { Link as ScrollLink } from "react-scroll";

const links = [
  {
    name: "home",
    target: "home",
    offset: -100,
  },
  {
    name: "about",
    target: "about",
    offset: -80,
  },
  {
    name: "class",
    target: "class",
    offset: -80,
  },
  {
    name: "team",
    target: "team",
    offset: 0,
  },
  {
    name: "prices",
    target: "prices",
    offset: -40,
  },
  {
    name: "testimonial",
    target: "testimonial",
    offset: 0,
  },
  {
    name: "blog",
    target: "blog",
    offset: 0,
  },
  {
    name: "contact",
    target: "contact",
    offset: 0,
  },
];

const Navbar = ({ containerStyles }: { containerStyles: string }) => {
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <ScrollLink
            className="cursor-pointer hover:text-accent transition-all"
            offset={link.offset}
            to={link.target}
            smooth
            spy
            activeClass="active"
            key={index}
          >
            {link.name}
          </ScrollLink>
        );
      })}
    </nav>
  );
};

export default Navbar;

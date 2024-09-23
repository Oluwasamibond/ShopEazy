import React from "react";
import footerLogo from "../assets/logo.png";
import Banner from "../assets/footer-pattern.jpg";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedinIn,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "../animation";


const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];
const Footer = () => {
  return (
    <div style={BannerImg} className="text-white mb-20">
      <div className="container">
        <motion.div 
        initial='hidden'
        whileInView='visible'
        variants={zoomInVariants}
        className="grid md:grid-cols-3 pb-44 pt-5">
          {/* company details */}
          <div className="py-8 px-4">
            <h1 className="sm;text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={footerLogo} alt="" className="max-w-[50px]" />
              ShopEazy
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              maxime rem dolorem iure dolorum facilis tempore libero non omnis
              quaerat!
            </p>
          </div>
          {/* links details */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link, index) => (
                    <li
                      className="cursor-pointer hover:text-primary
                        hover:translate-x-1 duration-300 text-gray-200"
                      key={index}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link, index) => (
                    <li
                      className="cursor-pointer hover:text-primary
                        hover:translate-x-1 duration-300 text-gray-200"
                      key={index}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Social Links */}

            <div>
              <div className="flex items-center gap-3 mt-7">
                <a href="#">
                    <FaFacebook className="text-3xl"/>
                </a>
                <a href="#">
                    <FaInstagram className="text-3xl"/>
                </a>
                <a href="#">
                    <FaLinkedinIn className="text-3xl"/>
                </a>
              </div>
              <div className="mt-6">
                  <div className="flex items-center gap-3">
                    <FaLocationArrow />
                    <p>Nodia, Uttar Pradesh</p>
                  </div>
              </div>
              <div className="mt-6">
                  <div className="flex items-center gap-3">
                    <FaMobileAlt />
                    <p>+91 123456789</p>
                  </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Footer;
